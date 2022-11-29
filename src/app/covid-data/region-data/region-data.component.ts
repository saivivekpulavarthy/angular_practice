import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { RegionData } from '../covid-data.model';
import { CovidDataService } from '../covid-data.service';

@Component({
  selector: 'app-region-data',
  templateUrl: './region-data.component.html',
  styleUrls: ['./region-data.component.scss'],
})
export class RegionDataComponent implements OnInit {
  constructor(private covidService: CovidDataService) {}
  regionData!: RegionData[];
  regionData$: Observable<RegionData[]>= this.covidService.regionData;

  ngOnInit(): void {
    this.covidService.regionData
      .pipe(tap((x) => console.log('data1', x)))
      .subscribe((data) => {
        console.log('data2,', data);
      });

  }
}
