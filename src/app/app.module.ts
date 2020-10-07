import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { AreaComponent } from './area/area.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CategoriesComponent,
    AreaComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [ Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
