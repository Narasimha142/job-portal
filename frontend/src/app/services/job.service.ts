import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';

@Injectable({ providedIn: 'root' })
export class JobService {
  private apiUrl = '/api/jobs'; // proxied to backend

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  getJob(id: number) {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }

  createJob(job: Job) {
    return this.http.post<Job>(this.apiUrl, job);
  }

  updateJob(id: number, job: Job) {
    return this.http.put<Job>(`${this.apiUrl}/${id}`, job);
  }

  deleteJob(id: number) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
