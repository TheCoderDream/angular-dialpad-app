import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-number-display',
  templateUrl: './number-display.component.html',
  styleUrls: ['./number-display.component.css']
})
export class NumberDisplayComponent implements OnInit {

  @Input() dialValue: string;

  @Output() backspace = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }


}
