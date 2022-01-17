import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {RecipeModel} from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModel;
  //Ancien code
  //@Output() recipeSelected = new EventEmitter<void>()

  constructor(private mrecipeSelected: RecipeService) { }

  ngOnInit(): void {
  }
 //Ancien code
 /*
  onSelected(){
    this.recipeSelected.emit();
  }
  */
   onSelected(){
     this.mrecipeSelected.mrecipeSelected.emit(this.recipe);

   }

}
