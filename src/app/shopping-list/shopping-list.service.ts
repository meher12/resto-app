import { EventEmitter } from "@angular/core";
import { IngredientModel } from "../shared/ingredient.model";

export class ShoppingListService{

    ingredientsChanged = new EventEmitter<IngredientModel[]>(); 
    private ingredients: IngredientModel[] = [
        new IngredientModel('Apples', 5),
        new IngredientModel('Tomatoes', 10),
      ];


      getIngredients(){
        return this.ingredients.slice();
    } 

    ingredientAdded(ingredient: IngredientModel){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(newingredients: IngredientModel[]){
      // for(let ingredient of ingredients ){
      //    this.ingredientAdded(ingredient);
      // }
      this.ingredients.push(...newingredients);
      this.ingredientsChanged.emit(this.ingredients.slice());
    }
    
}