import { Component, OnInit, Input } from '@angular/core';
import {RecipeModel} from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: RecipeModel;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onAddtoShoppingList(){
     this.recipeService.addIngredienttoShoppingList(this.recipe.ingredients);
  }

}
