import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EditService } from 'src/app/edit.service';
import { Question } from 'src/app/question-answer.module';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss', 
              '../sharedstyles.scss']
})
export class EditComponent implements OnInit {
  @ViewChild('f') editForm!: NgForm;
  editMode = false; 
  @Input() id!: number; 
  question!: Question;
  
  constructor(private editService: EditService) { }

  
  
  ngOnInit(): void {
  this.question = this.editService.getQuestion(this.id);
  }


  onSave(form: NgForm) {
    const value= form.value;
    const question=value.question; 
    const answer= value.answer; 
    this.editService.editQuestion(this.id, question, answer)
    this.editMode = false;
  }
}
