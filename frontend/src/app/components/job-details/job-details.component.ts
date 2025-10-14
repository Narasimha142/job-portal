import { Component, Input } from '@angular/core';
import { Job } from '../../models/job.model';

@Component({
  selector: 'app-job-details',
  template: `
  <div *ngIf="job" class="card p-3">
    <h5>{{job.title}}</h5>
    <p><strong>{{job.company}}</strong> — {{job.location}}</p>
    <p>{{job.description}}</p>
  </div>
  `
})
export class JobDetailsComponent {
  @Input() job?: Job;
}
