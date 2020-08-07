import { Component, OnInit } from '@angular/core';
//import { recipeService } from 'src/s

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.scss']
})
export class ListRecipeComponent implements OnInit {
  allowed: boolean = true;
  currentCar: string;
  cars: string[] = [
    "cars",
    "fff",
    "JB",
    "Rolex",
    "Moulaga"
  ];
  constructor() { }

  ngOnInit(): void {
    this.currentCar = "Nissan"
    
    setTimeout(() => {
      this.allowed = false;

    }, 3000)
  }

  activate(id: number) {
    alert("Boloss"+ id)
  }

  getRecipes() {
    this.recipeService.getAllRecipes();
  }

}
