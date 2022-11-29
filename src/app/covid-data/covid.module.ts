import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidDataComponent } from './covid-data.component';
import { SharedModule } from '../common/shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CovidDataService } from './covid-data.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RegionDataComponent } from './region-data/region-data.component';

const route = [
  {
    path: '',
    component: CovidDataComponent,
  },
  {
    path: 'region-data',
    component: RegionDataComponent,
  },
];

@NgModule({
  declarations: [CovidDataComponent, RegionDataComponent],
  providers: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
})
export class CovidModule {}
