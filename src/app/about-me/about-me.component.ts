import { Component, OnInit } from '@angular/core';
import { EditService } from '../edit.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', '../shared/sharedstyles.scss']
})
export class AboutMeComponent implements OnInit { 
  
  constructor(private editService: EditService) { }

  question = this.editService.getQuestion(1);
  
   
  ngOnInit(){ 
     
    }


}
