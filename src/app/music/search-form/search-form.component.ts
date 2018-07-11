import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

	search(query) {
		console.log(query);
	}

  constructor() { }

  ngOnInit() {
  }

}
