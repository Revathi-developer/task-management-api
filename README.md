

# Task Management System

A full-stack Task Management System built with **Django REST Framework** and **React**. The application allows authenticated users to securely create, manage, search, filter, and organize their tasks.

## Features

### Authentication & User Management

* User Registration
* JWT Authentication
* Access and Refresh Tokens
* User Profile
* Change Password
* Protected API endpoints
* Protected React routes

### Task Management

* Create tasks
* View tasks
* Update tasks
* Delete tasks
* Task status management
* Assign tasks to users
* Search tasks
* Filter tasks by status and assigned user
* Ordering
* Pagination
* Custom permissions
* Serializer validation

### API Documentation

* Interactive Swagger API documentation using `drf-spectacular`

## Technology Stack

### Backend

* Python
* Django
* Django REST Framework
* JWT Authentication
* PostgreSQL
* drf-spectacular

### Frontend

* React
* JavaScript
* Vite
* CSS

### Development Tools

* Git
* GitHub
* VS Code

## Project Structure

```text
task-management-api/
│
├── taskapp/
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   └── urls.py
│
├── users/
│   ├── serializers.py
│   ├── views.py
│   └── urls.py
│
├── taskproject/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   └── pages/
│   ├── package.json
│   └── vite.config.js
│
├── manage.py
├── requirements.txt
├── README.md
└── .gitignore
```

## API Endpoints

### Authentication

| Method | Endpoint              | Description                          |
| ------ | --------------------- | ------------------------------------ |
| POST   | `/api/register/`      | Register a new user                  |
| POST   | `/api/token/`         | Obtain JWT access and refresh tokens |
| POST   | `/api/token/refresh/` | Refresh an access token              |

### User

| Method | Endpoint                | Description                     |
| ------ | ----------------------- | ------------------------------- |
| GET    | `/api/profile/`         | View authenticated user profile |
| POST   | `/api/change-password/` | Change user password            |

### Tasks

| Method    | Endpoint             | Description     |
| --------- | -------------------- | --------------- |
| GET       | `/api/taskapi/`      | List tasks      |
| POST      | `/api/taskapi/`      | Create a task   |
| GET       | `/api/taskapi/{id}/` | Retrieve a task |
| PUT/PATCH | `/api/taskapi/{id}/` | Update a task   |
| DELETE    | `/api/taskapi/{id}/` | Delete a task   |

## Search, Filtering and Ordering

The Task API supports:

* Search by task title and description
* Filter by task status
* Filter by assigned user
* Ordering by supported task fields
* Pagination of task results

Example:

```text
/api/taskapi/?search=django
```

```text
/api/taskapi/?status=completed
```

## Database

The application uses **PostgreSQL** as the database.

PostgreSQL can be managed locally using **pgAdmin**.

Database credentials and other sensitive configuration are stored using environment variables and are not committed to GitHub.

## Installation

### Backend Setup

Clone the repository:

```bash
git clone https://github.com/Revathi-developer/task-management-api.git
```

Go into the project:

```bash
cd task-management-api
```

Create and activate a virtual environment:

```bash
python -m venv .venv
```

Install the required Python packages:

```bash
pip install -r requirements.txt
```

Configure the required environment variables in a `.env` file.

Run migrations:

```bash
python manage.py migrate
```

Start the Django development server:

```bash
python manage.py runserver
```

### Frontend Setup

Open another terminal and go to the frontend folder:

```bash
cd frontend
```

Install the React dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The React application will then be available at the local URL shown by Vite.

## API Documentation

When the Django development server is running, Swagger documentation is available at:

```text
http://127.0.0.1:8000/swagger/
```

The API schema is available at:

```text
http://127.0.0.1:8000/api/schema/
```

## Environment Variables

Create a `.env` file and configure your local environment:

```text
SECRET_KEY=your-secret-key
DEBUG=True

DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
DB_PORT=5432
```

Do not commit your `.env` file to GitHub.

## Future Improvements

* Docker containerization
* Automated unit and API testing
* CI/CD pipeline
* Production deployment
* Improved frontend UI/UX
* Role-based administration
* Additional task management features

## Author

**Revathi**

GitHub: `https://github.com/Revathi-developer`
