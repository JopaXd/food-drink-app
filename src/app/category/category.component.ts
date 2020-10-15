import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../categories.service'
import { TitleService } from '../title.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  ChosenCategory:string;
  Meals;

  constructor(private route: ActivatedRoute, private _titleSvc:TitleService, private _categoriesSvc:CategoriesService, private router:Router) { }

  ngOnInit(): void {
  	this._titleSvc.setTitle("Food & Drink - Category");
  	this.route.params.subscribe(params =>{
  		if (!params.category){
  			this.router.navigate(["/"]);
  			return;
  		}
  		else{
  			let chosenCategory = params.category;
  			this._categoriesSvc.getMealsByCategory(chosenCategory).subscribe(data => {
  				let meals = data["meals"];
  				if (!meals){
  					this.router.navigate(["/categories"]);
  					return;
  				}
  				else{
  					this.Meals = meals;
  				}
  			});
  			this._titleSvc.setTitle(`Food & Drink - ${chosenCategory}`);
  			this.ChosenCategory = chosenCategory;
  		}
  	})
  }
}