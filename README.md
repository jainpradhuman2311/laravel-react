# Laravel + React Dockerized Project

## Project Structure

```
laravel-react/
├── backend/      # Laravel backend application
├── frontend/     # React frontend application
├── docker-compose.yml
```

- **backend/**: Laravel PHP application (API, business logic, migrations, seeders)
- **frontend/**: React application (UI, static assets)
- **docker-compose.yml**: Multi-container orchestration (backend, frontend, db, phpmyadmin)

## Setup Instructions

### Prerequisites
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

### 1. Clone the Repository
```sh
git clone <repo-url>
cd laravel-react
```

### 2. Build and Start Containers
```sh
docker-compose up --build -d
```

### 3. Install Backend Dependencies (Laravel)
```sh
docker exec -it laravel_backend composer install
```

### 4. Install Frontend Dependencies (React)
```sh
docker exec -it react_frontend npm install
```

### 5. Run Database Migrations
```sh
docker exec -it laravel_backend php artisan migrate
```

### 6. Seed the Database
```sh
docker exec -it laravel_backend php artisan db:seed
```

### 7. (Optional) Access phpMyAdmin
- URL: [http://localhost:8081](http://localhost:8081)
- Server: `db`
- Username: `laravel_user`
- Password: `laravel_password`

## Application URLs
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:8000](http://localhost:8000)

## API Documentation

### Login API
- **Endpoint:** `POST /api/login`
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "your_password"
  }
  ```
- **Response:**
  - 200 OK: `{ "token": "...", "user": { ... } }`
  - 401 Unauthorized: `{ "message": "Invalid credentials" }`

### Change Password API
- **Endpoint:** `POST /api/change-password`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Request Body:**
  ```json
  {
    "current_password": "old_password",
    "new_password": "new_password",
    "new_password_confirmation": "new_password"
  }
  ```
- **Response:**
  - 200 OK: `{ "message": "Password changed successfully" }`
  - 400/422: `{ "message": "Error message" }`

## Useful Docker Commands
- View logs: `docker-compose logs -f`
- Stop containers: `docker-compose down`
- Rebuild containers: `docker-compose up --build -d`

---

For any issues, please open an issue or contact the maintainer.