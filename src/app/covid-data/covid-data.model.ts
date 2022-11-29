export interface CovidData {
  activeCases: Number;
  recovered: Number;
  recoveredNew: Number;
  deaths: Number;
  deathsNew: Number;
  totalCases: Number;
  sourceUrl: String;
  previousDayTests: Number;
  lastUpdatedAtApify: Date;
  readMe: String;
  regionData: RegionData[];
}
export interface RegionData {
  region: String;
  totalInfected: Number;
  newInfected: Number;
  recovered: Number;
  newRecovered: Number;
  deceased: Number;
  newDeceased: Number;
  activeCases: String;
}
