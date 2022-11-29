import { Component, OnInit } from '@angular/core';
import { cardData } from '../../card.model';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationData: cardData[] =[];
  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {

    this.resumeService.getEducationDetails().subscribe(data => {
      this.educationData = data;
    })
  }

}
