import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container mt-4">
    <h1 class="mb-3">Job Portal</h1>
    <app-job-listing></app-job-listing>
  </div>
  `
})
export class AppComponent { }
