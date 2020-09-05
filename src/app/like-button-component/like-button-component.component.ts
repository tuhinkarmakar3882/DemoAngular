import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-like-button-component',
  templateUrl: './like-button-component.component.html',
  styleUrls: ['./like-button-component.component.css']
})
export class LikeButtonComponentComponent implements OnInit {

  counter = 0;

  onClickMe(): void {
    this.counter++;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
