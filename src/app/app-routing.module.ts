import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AreasComponent } from './areas/areas.component';
import { CategoryComponent } from './category/category.component';
import { AreaComponent } from './area/area.component';

const routes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'categories', component: CategoriesComponent },
	{ path: 'areas', component: AreasComponent },
	{ path: 'category/:category', component:CategoryComponent },
	//For when there is no category in the url, so i can handle this in the code.
	{ path: 'category', component:CategoryComponent },
	{ path: 'area/:area', component:AreaComponent },
	{ path: 'area', component:AreaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
