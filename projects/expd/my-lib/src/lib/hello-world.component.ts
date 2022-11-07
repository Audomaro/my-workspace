import { Component, Input, OnInit } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'my-lib-my-lib',
  template: `
    <p>
      {{horaActual()}}: Hola {{nombre}}
    </p>
  `,
  styles: [
  ]
})
export class HelloWorldComponent implements OnInit {

  @Input() nombre: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  public horaActual(): string {
    return format(new Date(), 'yyyy-MM-dddd');
  }
}
