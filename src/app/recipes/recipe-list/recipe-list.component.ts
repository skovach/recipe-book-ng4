import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Funny grass', 'This grows almost everywhere', 'http://www.publicdomainpictures.net/pictures/70000/nahled/wooden-floor-and-green-grass.jpg'),
    new Recipe('Fresh grass', 'This grows young', 'http://www.daughtershomeandgarden.com/wp-content/uploads/2016/07/Green-grass-lawn-with-blue-sky-jpg.jpg'),
  ];

  constructor() { }

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  ngOnInit() {
  }

  onRecipeSelected(recipeItem: Recipe) {
    this.recipeWasSelected.emit(recipeItem);
  }
}
