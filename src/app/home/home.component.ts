import { Component, OnInit } from '@angular/core';
import { faPizzaSlice, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  year:string;
  faPizzaSlice = faPizzaSlice;
  faHamburger = faHamburger;

  constructor(private _title:TitleService) { }

  ngOnInit(): void {
  	this._title.setTitle("Food & Drink - Home");
  	this.year = new Date().getFullYear().toString();
  }

}
