import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastListComponent } from './forecast-list/forecast-list.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';


const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [ForecastListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  exports: [ForecastListComponent]
})
export class ForecastModule { }
