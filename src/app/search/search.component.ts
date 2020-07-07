import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {DataService} from '../data.service';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private readonly service: DataService) {
  }

  ngOnInit() {

    // add corresponding validators
    this.searchForm = this.fb.group({
      'searchCountry': [null, Validators.required]
    });

    this.searchForm.get('searchCountry').valueChanges.subscribe((searchCountry: string) => {
      this.service.changeCountryName(searchCountry);
    });
    // write a function that calls changeCountryName upon value change in the form
  }

}
