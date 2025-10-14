package com.example.jobportal.service;

import com.example.jobportal.model.Job;
import com.example.jobportal.repo.JobRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobService {
    private final JobRepository repo;

    public JobService(JobRepository repo) { this.repo = repo; }

    public List<Job> getAllJobs() { return repo.findAll(); }

    public Optional<Job> getJob(Long id) { return repo.findById(id); }

    public Job createJob(Job job) { return repo.save(job); }

    public Job updateJob(Long id, Job job) {
        return repo.findById(id).map(existing -> {
            existing.setTitle(job.getTitle());
            existing.setCompany(job.getCompany());
            existing.setLocation(job.getLocation());
            existing.setDescription(job.getDescription());
            return repo.save(existing);
        }).orElseThrow(() -> new RuntimeException("Job not found: " + id));
    }

    public void deleteJob(Long id) { repo.deleteById(id); }
}
