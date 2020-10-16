import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TitleService } from '../title.service';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _titleSvc:TitleService, private router:Router, private route:ActivatedRoute, private _mealSvc:MealService) { }

  meals;
  query;
  isLoaded:boolean = false;

  ngOnInit(): void {
  	this._titleSvc.setTitle("Food & Drink - Search");
  	let query:string;
  	this.route.params.subscribe(params =>{
  		if (!params.query){
  			this.router.navigate(["/"]);
  			return;
  		}
  		else{
  			query = params.query;
  			let meals;
  			const promise = new Promise((resolve, reject) => {
  				this._mealSvc.searchMeal(query).subscribe(data =>{
  					meals = data["meals"];
  					this.meals = meals;
  					//I have to resolve, else the promise won't end.
  					resolve("Success!");
  					//Reject is not required here, because even if the meals is null, it has use in the code.
  				})
  			});
  			promise.then(() => {
  				this.query = query;
  				this._titleSvc.setTitle(`Food & Drink - ${this.query}`);
  				this.isLoaded = true;
  			})
  		}
  	})
  }
}