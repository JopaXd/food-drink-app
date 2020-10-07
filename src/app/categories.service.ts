import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getAllCategories(){
  	return this.http.get("https://www.themealdb.com/api/json/v1/1/categories.php");
  }

}