import { Component, Input, OnInit } from '@angular/core';
import { EditService } from 'src/app/edit.service';
import { Question } from 'src/app/question-answer.module';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss', 
              '../sharedstyles.scss']
})
export class EditComponent implements OnInit {

  editMode = false; 
  @Input() id!: number; 
  question!: Question;
  
  constructor(private editService: EditService) { }

  
  
  ngOnInit(): void {
  this.question = this.editService.getQuestion(this.id);
  }

  onSave() {

    
  }
}
