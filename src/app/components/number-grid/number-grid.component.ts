import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-number-grid',
  templateUrl: './number-grid.component.html',
  styleUrls: ['./number-grid.component.css']
})
export class NumberGridComponent implements OnInit {

  @Input() dialConfig;
  
  @Output() dial = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
