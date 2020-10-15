import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AreasComponent } from './areas/areas.component';
import { CategoryComponent } from './category/category.component';
import { AreaComponent } from './area/area.component';
import { MealComponent } from './meal/meal.component';

const routes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'categories', component: CategoriesComponent },
	{ path: 'areas', component: AreasComponent },
	{ path: 'category/:category', component:CategoryComponent },
	//For when there is no category in the url, so i can handle this in the code.
	{ path: 'category', component:CategoryComponent },
	{ path: 'area/:area', component:AreaComponent },
	//For when there is no area in the url, so i can handle this in the code.
	{ path: 'area', component:AreaComponent },
	{ path: 'meal/:meal_id', component: MealComponent},
	//For when there is no meal id in the url, so i can handle this in the code.
	{ path: 'meal', component: MealComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
