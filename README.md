# Employee Directory

This is a simple full-stack Employee Directory application built as part of an assignment.

## Features
- View list of employees
- Search employees by name or department
- Add new employee
- Edit existing employee details

## Tech Stack
- Frontend: React (Vite)
- Backend: Node.js, Express
- Database: MySQL
- Styling: Basic CSS

## Project Structure
- backend/ - API and database logic
- frontend/ - React frontend application

## Database Setup (MySQL)

This project uses MySQL to store employee data.

### Create Database and Table

1. Open MySQL terminal or MySQL Workbench
2. Run the following commands:

```sql
CREATE DATABASE employee_directory;
USE employee_directory;

CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  role VARCHAR(100),
  department VARCHAR(100),
  email VARCHAR(100)
);

```

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=employee_directory
PORT=5000

Note: .env file is not committed to GitHub for security reasons.
```
## How to Run the Project

### Backend
1. Go to backend folder
2. Install dependencies  
   npm install
3. Create a `.env` file with database credentials
4. Start server  
   node index.js

### Frontend
1. Go to frontend folder  
   cd frontend/frontend
2. Install dependencies  
   npm install
3. Start development server  
   npm run dev

## Notes
- `.env` and `node_modules` are intentionally ignored.
- This project follows proper file separation and naming conventions.
