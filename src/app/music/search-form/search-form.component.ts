import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-search-form',
	templateUrl: './search-form.component.html',
	styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

	queryForm: FormGroup;

	constructor() {
		this.queryForm = new FormGroup({
			query: new FormControl("Batman")
		});
		console.log(this.queryForm);


		this.queryForm
			.get("query")
			.valueChanges.subscribe(value => this.search(value));
	}
	search(query) {
		console.log(query);
	}

	ngOnInit() {
	}

}
