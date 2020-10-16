import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  query:string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(){
  	if (this.query !== ''){
  		window.location.href = `/search/${this.query}`;
  	}
  }
}