import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TitleService } from '../title.service';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  meal:any;
  ingredients:any;

  constructor(private route:ActivatedRoute, private router:Router, private _titleSvc:TitleService, private _mealSvc:MealService) { }

  ngOnInit(): void {
  	this._titleSvc.setTitle("Food & Drink - Meal");
  	this.route.params.subscribe(params =>{
  		if(!params.meal_id){
  			this.router.navigate(["/"]);
  			return;
  		}
  		else{
  			let meal_id:string = params.meal_id;
  			let ingredientsLs = [];
  			let mealName:string;
  			this._mealSvc.getMealById(meal_id).subscribe(data =>{
  				let meals = data["meals"];
  				let meal = meals[0]
  				if (!meals) {
  					this.router.navigate(["/"]);
  					return;
  				}
  				else{
  					this.meal = meal;
  					mealName = meal.strMeal;
  				}
  				for (let ingredient = 0; ingredient < 20; ingredient++) {
  				  let mealIngredient = meal[`strIngredient${ingredient}`]
  				  if (mealIngredient){
  				  	if (mealIngredient !== ""){
  				  		let ingredientMeasure = meal[`strMeasure${ingredient}`]
  				  		ingredientsLs.push({"ingredientName": mealIngredient, "ingredientMeasure": ingredientMeasure});
  				  	}
  				  }
  				}
  			})
  			this._titleSvc.setTitle(`Food & Drink - ${mealName}`);
  			this.ingredients = ingredientsLs;
  		}
  	})
  }
}