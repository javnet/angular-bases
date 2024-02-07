import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // constructor(private titulo:Title){

  //   titulo.setTitle('Angular');
  // }
  public title: string= 'Hola mundo'
  counter: number= 10;

  increaseBy(value:number):void{
    this.counter+=value;
  }

  // decreaseBy(value: number):void{
  //   this.counter-=value;
  // }

  reset():void{
    this.counter=10;
  }
}
