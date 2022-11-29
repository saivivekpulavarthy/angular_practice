import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Event } from '@angular/router';
// import { HomeService } from '../home.service';
import { filter } from 'rxjs';
import { CommonService } from 'src/app/common.service';
import { HomeService } from '../home.service';
//import { HomeService } from '../home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private homeService: HomeService, private route: Router, private activatedRoute: ActivatedRoute, private commonService: CommonService) { }
  title: string = 'My App'
  user: string = '';
  currentUrl: string = '';
  ngOnInit(): void {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        this.titleChange(this.currentUrl);
      }
    })
    this.commonService.getUserName().subscribe(data => {
      this.user = data;
    })
  }
  openSideNav() {
    this.homeService.subject.next('');
  }
  titleChange(url: string) {
    if (url === '/home/products') {
      this.title = "Products Data";
    } else if (url === '/home/todo') {
      this.title = "Todo App";
    } else if (url === '/home/covid19') {
      this.title = "Covid 19 Data";
    } else {
      this.title = 'My-App';
    }
  }

}
