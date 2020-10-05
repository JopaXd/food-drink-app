import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  constructor(private _title:TitleService) { }

  ngOnInit(): void {
  	this._title.setTitle("Food & Drink - Area");
  }

}
