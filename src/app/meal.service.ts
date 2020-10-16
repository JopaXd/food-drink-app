import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http:HttpClient) { }

  getMealById(id){
  	return this.http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }

  //This has to be async somehow.
  searchMeal(query){
  	return this.http.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  }
}
