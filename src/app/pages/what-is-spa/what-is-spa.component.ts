import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/edit.service';

@Component({
  selector: 'app-what-is-spa',
  templateUrl: './what-is-spa.component.html',
  styleUrls: ['./what-is-spa.component.scss', '../../shared/sharedstyles.scss']
})
export class WhatIsSpaComponent implements OnInit {

  constructor(private editService: EditService) { }
  
  question = this.editService.getQuestion(3);

  ngOnInit(): void {
  }

}
