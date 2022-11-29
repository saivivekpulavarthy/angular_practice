import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  userName =new BehaviorSubject('');
  setUserName(user:string){
    this.userName.next(user);
  }
  getUserName(){
    return this.userName.asObservable();
  }
}
