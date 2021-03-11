import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl } from '@angular/forms';

import { Forecast } from '../forecast';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.scss']
})
export class ForecastListComponent implements OnInit {

  forecasts: Forecast[] = [];

  id: number = 0;

  forecast: any;

  idForecast: any;
  forecastData: any;

  forecastForm = new FormGroup ({
    date: new FormControl(''),
    description: new FormControl(''),
    condition: new FormControl(''),
  })

  forecastUpdateForm = new FormGroup ({
    date: new FormControl(''),
    description: new FormControl(''),
    condition: new FormControl(''),
  })

  constructor(
    private _forecastService: ForecastService,
    private _snackbar: MatSnackBar,
    ) { }

  ngOnInit(): any {
    this._forecastService.findAll().subscribe(data => {
      this.forecasts = data;
    })
  }

  getAllForecasts() {
    this._forecastService.findAll().subscribe(data => {
      this.forecasts = data;
    })
  }

  deleteForecast(id: number) {
    this._forecastService.deleteForecastById(id).subscribe(data => {
      console.log("Excluído");
      this._snackbar.openFromComponent(SnackbarComponent, {
        duration: 5000,
        verticalPosition: "top",
      })
    })
  }

  updateForecast(id: any) {
    this.forecastData = this.forecastUpdateForm.value;
    this._forecastService.updateForecastById(id, this.forecastData).subscribe(data => {
      console.log("Atualizado");
    })
  }

  onSubmit() {
    this.forecast = this.forecastForm.value;
    console.warn(this.forecast);
    this._forecastService.createForecast(this.forecast).subscribe(data => {
      console.log("Criado")
    })

  }

}

@Component({
  selector: 'snackbar',
  templateUrl: 'snackbar.component.html',
})
export class SnackbarComponent {}
