import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DataService} from './data.service';
import {ListComponent} from './list/list.component';
import {SearchComponent} from './search/search.component';

@NgModule({
  declarations : [ AppComponent, SearchComponent, ListComponent ],
  imports : [ BrowserModule, FormsModule, ReactiveFormsModule ],
  providers : [ DataService ],
  bootstrap : [ AppComponent ]
})
export class AppModule {
}
