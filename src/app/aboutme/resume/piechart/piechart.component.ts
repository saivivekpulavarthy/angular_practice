import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {
// inputData={
//   "activeCases": 107189,
//   "activeCasesNew": 2634,
//   "recovered": 42836906,
//   "recoveredNew": 14413,
//   "deaths": 525139,
//   "deathsNew": 23,
//   "previousDayTests": 502150,
//   "totalCases": 43469234,
//   // "sourceUrl": "https://www.mohfw.gov.in/",
//   // "lastUpdatedAtApify": "2022-07-01T17:00:00.000Z",
//   // "readMe": "https://github.com/zpelechova/covid-in/blob/master/README.md",
//   // "regionData": []
// }
// pieChartData=Object.values(this.inputData);
// pieChartLabels= Object.keys(this.inputData);
// pieChartType: ChartType = 'pie';
// pieChartLegend = true;
// pieChartPlugins = [];
// pieChartOptions: ChartOptions = {
//   responsive: true,
// }

  constructor() { }

  ngOnInit(): void {
  }

}
