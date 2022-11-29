import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav/drawer';
// import { MatDrawer } from '@angular/material/sidenav';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(private homeService: HomeService, private http: HttpClient) { }
  drawer!: MatDrawer | undefined;
  showFiller = false;
  opened: boolean = false;
  ngOnInit(): void {
    this.homeService.subject.subscribe(d => {
      console.log('subject received data');
      this.opened = !this.opened;
    })
  }
  closeSidebar() {
    this.opened = !this.opened;
  }



  onGetByIdApi() {
    const headerDict = {

      'Access-Control-Allow-Headers': 'http://localhost:4200',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get("http://localhost:8080/customers/id/107", requestOptions);
  }

  onGetById() {
    this.onGetByIdApi().subscribe((data) => {
      console.log("data", data);
    }, (error) => {
      console.log("error", error);
    }, () => {
      console.log("complete");
    })
  }

  onGetList() {
    this.http.get("http://localhost:8080/customers/list").subscribe((data) => {
      console.log("data", data)
    }, (error) => {
      console.log(error);
    })
  }
}
