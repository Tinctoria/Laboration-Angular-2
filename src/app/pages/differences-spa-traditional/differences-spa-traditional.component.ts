import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/edit.service';

@Component({
  selector: 'app-differences-spa-traditional',
  templateUrl: './differences-spa-traditional.component.html',
  styleUrls: ['./differences-spa-traditional.component.scss', '../../shared/sharedstyles.scss']
})
export class DifferencesSpaTraditionalComponent implements OnInit {

  constructor(private editService: EditService) { }
  
  question = this.editService.getQuestion(6);

  ngOnInit(): void {
  }

}
