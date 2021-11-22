import { Component, Input, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.sass']
})

export class EscenaComponent implements OnInit {

  @Input() texts: any = [];

  currentSentence: number = 0;
  img: number = 1;


  prev():void{

    this.currentSentence = this.currentSentence - 1;
    if(this.currentSentence < 0){
      this.currentSentence = this.texts.length-1;
    }

    if(this.currentSentence == 0){
      this.img = 1;
    }
    if(this.currentSentence == 1){
      this.img = 2;
    }
    if(this.currentSentence == 2){
       this.img = 3;
    }
    if(this.currentSentence == 3){
      this.img = 4;
    }


  }

  next():void{

    this.currentSentence = this.currentSentence + 1;
    if(this.currentSentence > this.texts.length-1){
      this.currentSentence = 0;
    }
    if(this.currentSentence == 0){
      this.img = 1;
    }
    if(this.currentSentence == 1){
      this.img = 2;
    }
    if(this.currentSentence == 2){
       this.img = 3;
    }
    if(this.currentSentence == 3){
      this.img = 4;
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
