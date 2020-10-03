import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CategoriesComponent } from './categories/categories.component'
import { AreaComponent } from './area/area.component'
import { IngredientsComponent } from './ingredients/ingredients.component'

const routes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'categories', component: CategoriesComponent },
	{ path: 'area', component: AreaComponent },
	{ path: 'ingredients', component: IngredientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
