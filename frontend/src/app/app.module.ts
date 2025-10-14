import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JobListingComponent } from './components/job-listing/job-listing.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';

@NgModule({
  declarations: [
    AppComponent,
    JobListingComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
