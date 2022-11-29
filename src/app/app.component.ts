import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, interval, map, Observable, of, Subject, subscribeOn, Subscription } from 'rxjs';
import * as Bowser from 'bowser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'my-app';

  
  numbers = [];
  constructor() {
  }
  // ngOnInit(){
  //   // this.Observable$();
  //   // this.Subject$();
  //   // this.subjectCaller();
    
  // }
  // Observable$(){
  //   const newObervable$=interval(1000);
  //   newObervable$.subscribe((data)=>{
  //     console.log('first-'+data);
  //   },(error)=>{
  //     console.log(error);
  //   },()=>{
  //     console.log("complete");
  //   });
  //   newObervable$.subscribe((data)=>{
  //     console.log('second-'+data);
  //   },(error)=>{
  //     console.log("eror"+error);
  //   },()=>{
  //     console.log("complete2");
  //   })
  // }
  // Subject$(){
  //   const newSubject$=new Observable((obs)=>{
  //     obs.next(10);
  //     obs.next(90);
  //   });
  //   const newSubject2$=of('abc','cde','efg','hij');
  //   let subject=new Subject();

  //   subject.subscribe((data)=>{
  //     console.log(data);
  //   },(error)=>{
  //     console.log(error);
  //   },()=>{
  //     console.log("completed subject-1")
  //   })
  //   subject.subscribe((data)=>{
  //     console.log(data);
  //   },(error)=>{
  //     console.log(error);
  //   },()=>{
  //     console.log("completed subject-2")
  //   })

  //   newSubject$.subscribe(subject);
  // //  newSubject$.subscribe(subject);
  // //  newSubject2$.subscribe(subject);
  // }
  // subjectCaller(){
  //   const Observable$=new Observable((obs)=>{
  //     obs.next(1);
  //     obs.next(2);
  //     obs.next(3);
  //   });
    
  //   const subject$=new Subject();
   
  //   subject$.subscribe({next:(data)=>{
  //     console.log(data);
  //   }})
  //   subject$.next(90);
  //   Observable$.subscribe(subject$);
  //  subject$.next(true);
  // }
  checkboxOutput(value:any){
    console.log('value',value)
  }
  // obs=new Observable<number>(obs=>{
  //   obs.next(Math.random());
  // });
  obs=of([1,2,3,4,5]);
private  sub=new Subject<number[]>();
 sub1=this.sub.asObservable();
  ngOnInit(): void {
    
  }
ngAfterViewInit(){

}

}
