import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
login!:FormGroup;
  constructor(private formBuilder:FormBuilder,private commonService:CommonService) { }

  ngOnInit(): void {
    this.login=this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }
  onSubmit(){
   this.commonService.setUserName(this.login.get("userName")?.value);
  }
}
