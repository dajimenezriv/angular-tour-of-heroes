import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes', // the component's CSS element selector
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  // When Angular creates a HeroesComponent, the Dependency Injection system
  // sets the heroService parameter to the singleton instance of HeroService.
  // Reserve the constructor for minimal initialization such as wiring constructor
  // parameters to properties.
  constructor(private heroService: HeroService) { }

  // Angular calls ngOnInit() shortly after creating a component
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes) => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe((hero: Hero) => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero.id)
      .subscribe(_ => {
        this.heroes = this.heroes.filter(h => h !== hero);
      });
  }

}
