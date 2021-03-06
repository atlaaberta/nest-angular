import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export class Ingredient {
  constructor (
    public name: string,
    public amount: number) {
  }
}

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {
  @Input() ingredient: Ingredient;
  @Output() ingredientRemoved: EventEmitter<Ingredient> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onRemoveIngredient() {
    this.ingredientRemoved.emit(this.ingredient);
  }
}
