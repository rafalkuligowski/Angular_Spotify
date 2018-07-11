import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { filter, debounceTime } from 'rxjs/operators';

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
			.valueChanges
			.pipe(
				debounceTime(400),
				filter(query => query.length >=3)
			)
			.subscribe(value => this.search(value));
	}
	@Output()
	queryChange = new EventEmitter()

	search(query) {
		console.log(query);
		this.queryChange.emit(query); 
	}

	ngOnInit() {
	}

}
