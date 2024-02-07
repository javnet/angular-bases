import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: 'hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string= 'iroman';
  public edad: number= 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{

    return `${this.name} - ${this.edad}`;
  }

  changeHero(hero: string): string{

    this.name= hero;
    return hero;
  }


  changeAge(age:number):void{

    this.edad= age;
  }
}
