import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/edit.service';

@Component({
  selector: 'app-what-is-typescript',
  templateUrl: './what-is-typescript.component.html',
  styleUrls: ['./what-is-typescript.component.scss', '../../shared/sharedstyles.scss']
})
export class WhatIsTypescriptComponent implements OnInit {

  constructor(private editService: EditService) { }
  
  question = this.editService.getQuestion(5);

  ngOnInit(): void {
  }

}
