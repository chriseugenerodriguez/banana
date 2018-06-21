import { Component, OnInit } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public range = { start: null, end: null };
  total: number;
  public start: any;
  public end: any;
  public login: FormGroup;

  msecPerMinute = 1000 * 60;  
  msecPerHour = this.msecPerMinute * 60;  
  msecPerDay = this.msecPerHour * 24; 

  constructor(private intl: IntlService, private fb: FormBuilder) {

    this.form();
  }

  ngOnInit() {

    this.login.valueChanges.subscribe(
      data => {
        this.range.start = data['start'];
        this.range.end = data['end'];

        if(this.range.start) {
          this.start = this.range.start
        }
        if(this.range.end) {
          this.end = this.range.end
        }
        
        var interval = this.end - this.start;  
        var days = Math.floor(interval / this.msecPerDay );  

        let amount = (.05) * Math.floor(days/7);
        this.total = Math.ceil(amount * 100) / 100;
      }
    );
  }

	private form() {
		return this.login = this.fb.group({
			start: ['', Validators.required],
			end: ['', Validators.required],
		});
	}

}
