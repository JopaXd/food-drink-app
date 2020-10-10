import { Component, OnInit } from '@angular/core';
import { AreaService } from '../area.service';
import { TitleService } from '../title.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  ChosenArea:string;
  Meals;

  constructor(private _areaSvc:AreaService, private _titleSvc:TitleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  	this._titleSvc.setTitle("Food & Drink - Area");
  	this.route.params.subscribe(params =>{
  		if (!params.area){
  			window.location.href = "/";
  			return;
  		}
  		else{
  			let chosenArea = params.area;
  			this._areaSvc.getMealsByArea(chosenArea).subscribe(data => {
  				let meals = data["meals"];
  				if (!meals){
  					window.location.href = "/areas";
  					return;
  				}
  				else{
  					this.Meals = meals;
  				}
  			});
  			this._titleSvc.setTitle(`Food & Drink - ${chosenArea}`);
  			this.ChosenArea = chosenArea;
  		}
  	})
  }
}