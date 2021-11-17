import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/edit.service';

@Component({
  selector: 'app-what-is-spa',
  templateUrl: './what-is-spa.component.html',
  styleUrls: ['./what-is-spa.component.scss', '../../shared/sharedstyles.scss']
})
export class WhatIsSpaComponent implements OnInit {

  constructor(private editService: EditService) { }
  
  questions = this.editService.getQuestions();
  question=this.questions[2].question;
  answer=this.questions[2].answer;

  ngOnInit(): void {
  }

}
