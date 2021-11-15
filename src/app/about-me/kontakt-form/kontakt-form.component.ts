import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-kontakt-form',
  templateUrl: './kontakt-form.component.html',
  styleUrls: ['./kontakt-form.component.scss']
})
export class KontaktFormComponent implements OnInit {
  @ViewChild('f', {static:false}) messageForm!: NgForm;

  constructor( private router: Router,
              private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
  }

  onSend() {
    console.log(this.messageForm.value);
    this.router.navigate(['../'], {relativeTo: this.route});
    alert('Tack för ditt meddelande!');
  }

  onAvbryt() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

}
