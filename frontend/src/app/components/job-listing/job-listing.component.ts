import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job.model';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html'
})
export class JobListingComponent implements OnInit {
  jobs: Job[] = [];
  selected: Job | null = null;
  newJob: Job = { title: '', company: '', location: '', description: '' };

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.jobService.getJobs().subscribe(j => this.jobs = j);
  }

  select(job: Job) {
    this.selected = job;
  }

  create() {
    if(!this.newJob.title || !this.newJob.company) { alert('Title and company required'); return; }
    this.jobService.createJob(this.newJob).subscribe(() => {
      this.newJob = { title: '', company: '', location: '', description: '' };
      this.load();
    });
  }

  delete(id?: number) {
    if(!id) return;
    if(!confirm('Delete job?')) return;
    this.jobService.deleteJob(id).subscribe(() => this.load());
  }

  update() {
    if(!this.selected || !this.selected.id) return;
    this.jobService.updateJob(this.selected.id, this.selected).subscribe(() => {
      this.selected = null;
      this.load();
    });
  }
}
