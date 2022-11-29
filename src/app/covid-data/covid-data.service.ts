import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, startWith, Subject } from 'rxjs';
import { CovidData, RegionData } from './covid-data.model';

export interface CovidState {
  data: CovidData[];
  showloading: boolean;
  errors: string;
}

@Injectable({
  providedIn: 'root',
})
export class CovidDataService {
  constructor(private http: HttpClient) {}
  covidDataUrl =
    'https://api.apify.com/v2/datasets/58a4VXwBBF0HtxuQa/items?format=json&clean=1';

  private _regionData$: BehaviorSubject<RegionData[]> = new BehaviorSubject(
    [] as RegionData[]
  );
  public regionData = this._regionData$.asObservable();
  initialState: CovidState = {
    data: [],
    showloading: false,
    errors: '',
  };
  private _covidStateSubject = new BehaviorSubject(this.initialState);

  get covidState$() {
    return this._covidStateSubject;
  }
  get covidStateData() {
    return this._covidStateSubject.value;
  }
  addCovidState(data: CovidState) {
    this._covidStateSubject.next(data);
  }

  setregionData$(data: RegionData[]) {
    this._regionData$.next(data);
  }
  getCovidData(): Observable<CovidData[]> {
    return this.http.get<CovidData[]>(this.covidDataUrl);
  }
  count: number = 1;
  getConsole() {
    this.count++;
    console.log('getCOsole', this.count);
  }
}
