import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  isAllowed = false
  num1 = 0
  num2 = 0
  result = ''
  
  constructor() { }

  ngOnInit() {
  }

  calculate() {
    this.result = 'RESULT = ' + (this.num1 + this.num2)
  }

}
