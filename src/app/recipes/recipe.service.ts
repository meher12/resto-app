
import { EventEmitter, Injectable } from "@angular/core";
import { IngredientModel } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { RecipeModel } from "./recipe.model"

@Injectable()
export class RecipeService{

   mrecipeSelected = new EventEmitter<RecipeModel>();

   private recipes: RecipeModel[] = [
        new RecipeModel('Tasty schnitzel',
         'A super-tasty - just awesome!',
          'https://i.redd.it/sudl1qg3y2221.jpg',
          [
            new IngredientModel('Meat', 1),
            new IngredientModel('Frensh Fries', 20),
          ]),
        new RecipeModel('Big Fat Burger ',
         ' What else you need to say? ',
          'https://upload.wikimedia.org/wikipedia/commons/e/e2/Aussie_Burger_6of7_%288736284110%29.jpg',
          [
            new IngredientModel('Buns', 2),
            new IngredientModel('Meat', 1),
          ])
        ];

        constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }  
    
    addIngredienttoShoppingList(ingredients: IngredientModel[]){
      this.slService.addIngredients(ingredients);
    }
}