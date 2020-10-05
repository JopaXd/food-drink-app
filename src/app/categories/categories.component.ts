import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';
import { CategoriesService } from '../categories.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:Object;

  constructor(private _titleSvc:TitleService, private _ctgSvc:CategoriesService) { }

  ngOnInit(): void {
  	this._titleSvc.setTitle("Food & Drink - Categories");
  	// this._categories.getAllCategories().subscribe(data => {
  	// 	this.categories = data;
  	// })
  }

}