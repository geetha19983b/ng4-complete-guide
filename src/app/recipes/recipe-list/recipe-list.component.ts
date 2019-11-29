import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe('A Test Recipe','This is simply a test',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfO5exns0FUj0a_78FubjYZpxGaPbJKVXkxVn3qLE1aIulNpvH'),
    new Recipe('A Test Recipe','This is simply a test',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfO5exns0FUj0a_78FubjYZpxGaPbJKVXkxVn3qLE1aIulNpvH')
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe)
  {
     this.recipeWasSelected.emit(recipe);
  }
}
