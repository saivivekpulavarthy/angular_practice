import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { SharedModule } from '../common/shared/shared.module';
import { RouterModule } from '@angular/router';
import { HeadlineComponent } from './resume/headline/headline.component';
import { ContactComponent } from './resume/contact/contact.component';
import { DetailsComponent } from './resume/details/details.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { EducationComponent } from './resume/education/education.component';
import { CardDetailsComponent } from './resume/card-details/card-details.component';
import { ResumeService } from './resume/resume.service';
import { HttpClientModule } from '@angular/common/http';



const route = [{
  path: '',
  component: ResumeComponent,
  children: [{
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'details',
    component: DetailsComponent
  }, {
    path: 'experience',
    component: ExperienceComponent
  }, {
    path: 'education',
    component: EducationComponent
  }]
},
]

@NgModule({
  declarations: [
    ResumeComponent,
    HeadlineComponent,
    ContactComponent,
    DetailsComponent,
    ExperienceComponent,
    EducationComponent,
    CardDetailsComponent,


  ],
  providers:[ResumeService],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(route), HttpClientModule,
  ]
})
export class AboutmeModule { }
