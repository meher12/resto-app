import { Component, OnInit} from '@angular/core';
import {RecipeModel} from "../recipe.model";
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   // @Output() recipeWasSelected = new EventEmitter<RecipeModel>();

    recipes: RecipeModel[];

    constructor(private recipeService: RecipeService) { 

    }

    ngOnInit(){
      this.recipes = this.recipeService.getRecipes();
    }
 // Old code
 /*
    onRecipeSelected(recipe: RecipeModel){
      this.recipeWasSelected.emit(recipe);
    }
*/
}
