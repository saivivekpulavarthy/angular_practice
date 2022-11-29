import { Component, OnInit } from '@angular/core';
import { cardData } from '../../card.model';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
experienceDetails:cardData[]=[];
  constructor(private resumeService:ResumeService) { }

  ngOnInit(): void {
    this.resumeService.getExperienceDetails().subscribe(data=>{
      this.experienceDetails=data;
    })
  }

}
