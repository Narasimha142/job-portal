package com.example.jobportal.config;

import com.example.jobportal.model.Job;
import com.example.jobportal.repo.JobRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {
    @Bean
    CommandLineRunner init(JobRepository repo) {
        return args -> {
            if (repo.count() == 0) {
                repo.save(Job.builder()
                        .title("Backend Java Developer")
                        .company("Acme Tech")
                        .location("Remote")
                        .description("Design and implement REST APIs using Spring Boot.")
                        .build());
                repo.save(Job.builder()
                        .title("Frontend Angular Developer")
                        .company("WebWorks")
                        .location("New York, NY")
                        .description("Build reactive UI with Angular and TypeScript.")
                        .build());
                repo.save(Job.builder()
                        .title("Full-Stack Engineer")
                        .company("InnovateX")
                        .location("San Francisco, CA")
                        .description("Work across frontend and backend to deliver features.")
                        .build());
            }
        };
    }
}
