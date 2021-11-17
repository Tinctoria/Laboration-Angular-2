import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/edit.service';

@Component({
  selector: 'app-angular-arcitecture',
  templateUrl: './angular-arcitecture.component.html',
  styleUrls: ['./angular-arcitecture.component.scss', '../../shared/sharedstyles.scss']
})
export class AngularArcitectureComponent implements OnInit {
  
  constructor(private editService: EditService) { }
  
  questions = this.editService.getQuestions();
  question=this.questions[3].question;
  answer=this.questions[3].answer;

  
  ngOnInit(): void {
  }

}
