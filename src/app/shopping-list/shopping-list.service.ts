import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10),
  ];

  getIngredients(){
      return this.ingredients.slice();
  }

  addIngredient (ingrd: Ingredient) {
      this.ingredients.push(ingrd);
      this.ingredientsChanged.emit(this.getIngredients());
  }

  addIngredients (ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.getIngredients());
  }
}