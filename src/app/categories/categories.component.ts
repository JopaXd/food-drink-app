import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';
import { CategoriesService } from '../categories.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories;

  constructor(private _titleSvc:TitleService, private _categoriesSvc:CategoriesService) { }

  ngOnInit(): void {
  	this._titleSvc.setTitle("Food & Drink - Categories");
  	this._categoriesSvc.getAllCategories().subscribe(data => {
  		this.categories = data["categories"];
  		console.log(this.categories[0]["strCategoryThumb"])
  	})
  }

}