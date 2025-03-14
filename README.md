# Job Portal

A full-stack job portal application built using **Angular (Frontend)** and **Spring Boot (Backend)**. This platform allows users to search for jobs, apply online, and employers to manage job postings.

## Features
- User authentication (Signup/Login)
- Job listings with search functionality
- Resume upload & application tracking
- Employer dashboard for job management
- Responsive UI with Bootstrap
- RESTful API integration

## Tech Stack
### Frontend (Angular)
- Angular 10+
- Bootstrap
- TypeScript
- RxJS

### Backend (Spring Boot)
- Java (Spring Boot)
- Spring Data JPA
- MySQL Database
- REST API
- Spring Security (JWT Authentication)

## Installation
### Backend Setup
1. Clone the backend repository:
   ```sh
   git clone https://github.com/your-username/job-portal-backend.git
   ```
2. Navigate into the project:
   ```sh
   cd job-portal-backend
   ```
3. Configure **MySQL Database** in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/jobportal
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   ```
4. Run the application:
   ```sh
   mvn spring-boot:run
   ```

### Frontend Setup
1. Clone the frontend repository:
   ```sh
   git clone https://github.com/your-username/job-portal-frontend.git
   ```
2. Navigate into the project:
   ```sh
   cd job-portal-frontend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   ng serve --open
   ```

## API Endpoints
| Method | Endpoint        | Description       |
|--------|---------------|------------------|
| GET    | /api/jobs      | Get all job listings |
| POST   | /api/jobs      | Create a new job |
| GET    | /api/jobs/{id} | Get job by ID |
| PUT    | /api/jobs/{id} | Update job details |
| DELETE | /api/jobs/{id} | Delete job |

## Contributing
Feel free to fork and contribute! Submit a PR for any enhancements.

## License
This project is licensed under the MIT License.

---

Let me know if you need additional features! 🚀

