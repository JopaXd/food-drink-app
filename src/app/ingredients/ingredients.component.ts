import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  constructor(private _title:TitleService) { }

  ngOnInit(): void {
  	this._title.setTitle("Food & Drink - Ingredients");
  }

}
