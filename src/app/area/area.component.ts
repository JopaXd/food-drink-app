import { Component, OnInit } from '@angular/core';
import { AreaService } from '../area.service';
import { TitleService } from '../title.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  ChosenArea:string;
  Meals;

  constructor(private _areaSvc:AreaService, private _titleSvc:TitleService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  	this._titleSvc.setTitle("Food & Drink - Area");
  	this.route.params.subscribe(params =>{
  		if (!params.area){
  			this.router.navigate(["/"]);
  			return;
  		}
  		else{
  			let chosenArea = params.area;
  			this._areaSvc.getMealsByArea(chosenArea).subscribe(data => {
  				let meals = data["meals"];
  				if (!meals){
  					 this.router.navigate(["/areas"]);
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