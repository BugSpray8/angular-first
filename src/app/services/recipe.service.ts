import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesSubject = new Subject<any[] > ();
  recipes: any[] = [];
  constructor(
    private httpClient: HttpClient
  ) { }
  
  emitRecipeSubject() {
    this.recipesSubject.next(this.recipes.slice());
  }

  getAllRecipes() {
    this.httpClient.get(environment.apiUrl + "recipes").subscribe(
      (recipes) => {
        console.log(recipes)
      },
      (error) => {
        console.log(error)
      }
    )
  }
}