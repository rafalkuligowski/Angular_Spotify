import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
	selector: 'app-search-form',
	templateUrl: './search-form.component.html',
	styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

	queryForm: FormGroup;

	constructor() {

		const censor: ValidatorFn = (control: AbstractControl): ValidationErrors => {
			const hasError = control.value.includes('batman')
			return hasError? {"censor": true} : null
		};

		this.queryForm = new FormGroup({
			query: new FormControl("", [
				Validators.required,
				Validators.minLength(3),
				censor
			])
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
