import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {RecipeModel} from "../recipe.model";


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
    recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'This is a simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new RecipeModel('A Test Recipe 2 ', ' **** This is a simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')];
    constructor() { }

    ngOnInit(): void {
    }

    onRecipeSelected(recipe: RecipeModel){
      this.recipeWasSelected.emit(recipe);
    }

}
