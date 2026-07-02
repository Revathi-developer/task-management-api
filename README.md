# Task Management API

A RESTful Task Management API built with Django REST Framework that allows users to securely manage their tasks using JWT Authentication.

## Features

- User Registration
- User Login
- JWT Authentication
- User Profile
- Create, Read, Update and Delete Tasks (CRUD)
- Search Tasks
- Ordering
- Pagination
- Custom Permissions
- Serializer Validation
- Interactive API Documentation (Swagger)

## Tech Stack

- Python
- Django
- Django REST Framework
- PostgreSQL
- JWT Authentication
- Render
- Swagger (drf-spectacular)

## Installation

```bash
git clone https://github.com/Revathi-developer/task-management-api.git

cd task-management-api

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

## API Endpoints

- POST `/api/register/`
- POST `/api/token/`
- POST `/api/token/refresh/`
- GET `/api/profile/`
- CRUD `/api/taskapi/`

## Live Demo

API Base URL:

https://task-management-api-rbp0.onrender.com/

Swagger Documentation:

https://task-management-api-rbp0.onrender.com/swagger/

## Environment Variables

Create a `.env` file and configure:

```text
SECRET_KEY=your-secret-key
DEBUG=True

DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
DB_PORT=5432
```

## Future Improvements

- Docker
- Unit Testing
- CI/CD Pipeline