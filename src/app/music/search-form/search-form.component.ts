import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AsyncValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { filter, debounceTime, mapTo, withLatestFrom } from 'rxjs/operators';
import { Observable, PartialObserver } from 'rxjs';

@Component({
	selector: 'app-search-form',
	templateUrl: './search-form.component.html',
	styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

	queryForm: FormGroup;

	constructor() {

		const censor = (badword): ValidatorFn => (control: AbstractControl): ValidationErrors => {
			const hasError = control.value.includes(badword)
			return hasError ? { censor: { badword } } : null;
		};

		const asyncCensor = (badword): AsyncValidatorFn => (control: AbstractControl) => {
			
			const value = control.value;

			return Observable.create((observer: PartialObserver<ValidationErrors | null>)=>{
				
				setTimeout(()=>{
					const hasError = value.includes(badword);
					const result = hasError ? { censor: {badword} } : null
				
					observer.next(result)
					observer.complete()
				},1000)
			})
		}
		

		

		




		this.queryForm = new FormGroup({
			query: new FormControl("", [
				Validators.required,
				Validators.minLength(3),
				// censor("batman")
			],
			[asyncCensor("batman")])
		});

		console.log(this.queryForm);

		const value$ = this.queryForm.get("query").valueChanges.pipe(
			filter(query => query.length >= 3)
		)
		const valid$ = this.queryForm.statusChanges.pipe(
			debounceTime(400),
			filter(status => status == "VALID"),
				mapTo(true)
		);

		valid$
			.pipe(withLatestFrom(value$, (valid, value) => value))
			.subscribe(query => this.search(query));
	}


	@Output()
	queryChange = new EventEmitter()

	search(query) {
		this.queryChange.emit(query);
	}

	ngOnInit() {
	}

}
