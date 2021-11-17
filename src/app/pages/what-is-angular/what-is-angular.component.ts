import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/edit.service';

@Component({
  selector: 'app-what-is-angular',
  templateUrl: './what-is-angular.component.html',
  styleUrls: ['./what-is-angular.component.scss', '../../shared/sharedstyles.scss']
})
export class WhatIsAngularComponent implements OnInit {

  constructor(private editService: EditService) { }
  
  question = this.editService.getQuestion(2);

  ngOnInit(): void {
  }

}
