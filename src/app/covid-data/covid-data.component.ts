import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Route, Router } from '@angular/router';
import { catchError, map, Observable, startWith } from 'rxjs';
import { CovidData, RegionData } from './covid-data.model';
import { CovidDataService, CovidState } from './covid-data.service';

@Component({
  selector: 'app-covid-data',
  templateUrl: './covid-data.component.html',
  styleUrls: ['./covid-data.component.scss'],
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CovidDataComponent implements OnInit, AfterViewInit {
  covidState$: Observable<CovidState> = this.covidService.getCovidData().pipe(
    map((x) => {
      this.covidService.addCovidState({
        data: x,
        showloading: false,
        errors: '',
      });
      return this.covidService.covidStateData;
    }),
    startWith({
      data: [] as CovidData[],
      showloading: true,
      errors: '',
    } as CovidState)
  );
  constructor(private covidService: CovidDataService, private route: Router) {}

  ngOnInit(): void {
    this.covidService.getConsole();
  }

  ngAfterViewInit(): void {}

  openRegionData(data: RegionData[]): void {
    this.covidService.setregionData$(data);
  }
}
