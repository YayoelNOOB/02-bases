// Así se hace de forma manual

// import { Component } from "@angular/core";


// @Component({
//   selector: 'app-counter',
//   template: '<h1>Hola Counter</h1>',
// })


// export class CounterComponent{

// }

// Se puede usar el snippet "a-component"

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h3>
    Counter: {{ counter }}
  </h3>

  <button (click)="increaseBy(1)"> + </button>
  <button (click)="resetCounter()"> Reset </button>
  <button (click)="increaseBy(-1)"> - </button>


  `
})

export class CounterComponent {

  public counter: number = 10;

  public increaseBy( value: number): void{
    this.counter += 1

  }

  public resetCounter(){
    this.counter = 10;
  }

  constructor() { }

}
