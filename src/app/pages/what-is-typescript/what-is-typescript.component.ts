import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/edit.service';

@Component({
  selector: 'app-what-is-typescript',
  templateUrl: './what-is-typescript.component.html',
  styleUrls: ['./what-is-typescript.component.scss', '../../shared/sharedstyles.scss']
})
export class WhatIsTypescriptComponent implements OnInit {

  constructor(private editService: EditService) { }
  
  questions = this.editService.getQuestions();
  question=this.questions[4].question;
  answer=this.questions[4].answer;

  ngOnInit(): void {
  }

}
