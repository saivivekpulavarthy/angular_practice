import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, of, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
 // servicedata: any[] = [];
  constructor() { }
  // myNewIds = of<any[]>([201,202,203,204,205]);
  // // myNewIds=this.myNewId1.asObservable();

  // trasferSubject = new AsyncSubject();
  // sendData(data: any) {
  //   // this.trasferSubject.subscribe(data=>{
  //   //   this.servicedata.push(data);
  //   // })
  //   this.trasferSubject.next(data);
  // }
  // getData() {
  //   return this.trasferSubject.asObservable();
  // }
  subject=new ReplaySubject<number>();
  setSubject(count:number){
    this.subject.next(count);
  }
  getsubject(){
   return this.subject.asObservable();
  }
  openedSub:boolean=false;
  openSubject=new BehaviorSubject(false);

  setOpenSubject(bol:boolean){
    this.openSubject.next(bol);
  }
  getOpenSubject(){
    return this.openSubject.asObservable();
  }
}
