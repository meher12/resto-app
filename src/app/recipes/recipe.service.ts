
import { EventEmitter } from "@angular/core";
import { RecipeModel } from "./recipe.model"

export class RecipeService{

   mrecipeSelected = new EventEmitter<RecipeModel>();

   private recipes: RecipeModel[] = [
        new RecipeModel('A Test Recipe', 'This is a simply a test',
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new RecipeModel('A Test Recipe 2 ', ' **** This is a simply a test',
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
        ];

    getRecipes(){
        return this.recipes.slice();
    }     
}