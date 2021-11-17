import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/edit.service';

@Component({
  selector: 'app-angular-arcitecture',
  templateUrl: './angular-arcitecture.component.html',
  styleUrls: ['./angular-arcitecture.component.scss', '../../shared/sharedstyles.scss']
})
export class AngularArcitectureComponent implements OnInit {
  
  constructor(private editService: EditService) { }
  
  question = this.editService.getQuestion(4);
  
  ngOnInit(): void {
  }

}
