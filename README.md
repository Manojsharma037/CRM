# Mini CRM Backend – Prysm Labs Assignment

## 📌 Project Overview
This project is a **Mini CRM Backend System** developed as part of the **Prysm Labs – Backend Developer Intern Assignment**.

It demonstrates:
- JWT-based authentication
- Role-based authorization (ADMIN, EMPLOYEE)
- Clean and modular NestJS architecture
- PostgreSQL database with Prisma ORM
- Production-ready REST APIs
- Swagger API documentation

---

## 🛠 Tech Stack
- NestJS (TypeScript)
- PostgreSQL
- Prisma ORM
- JWT Authentication
- bcrypt (password hashing)
- class-validator & class-transformer
- Swagger (@nestjs/swagger)

---

## 👥 User Roles
- ADMIN
- EMPLOYEE

---

## 🔐 Authentication Module
### Endpoints
- POST `/auth/register`
- POST `/auth/login`

### Features
- Passwords are hashed using bcrypt
- JWT token is generated on login
- JWT payload contains `userId` and `role`
- Password is never returned in any response

---

## 👤 Users Module (ADMIN Only)
### Endpoints
- GET `/users`
- GET `/users/:id`
- PATCH `/users/:id` (Update role only)

---

## 🧑‍💼 Customers Module
### Features
- Full CRUD operations
- Pagination support
- Unique email & phone validation
- Proper error handling

### Access Control
- ADMIN: Full access
- EMPLOYEE: Read-only access

### Pagination Response Format
```json
{
  "page": 1,
  "limit": 10,
  "totalRecords": 50,
  "totalPages": 5,
  "data": []
}

✅ Tasks Module
Features

Tasks linked to customers

Tasks assigned to EMPLOYEE users

Task status tracking

Task Status

PENDING

IN_PROGRESS

DONE

Access Rules

ADMIN: Create and view all tasks

EMPLOYEE: View only assigned tasks

EMPLOYEE can update status of their own tasks only

🧱 Project Structure
src/
│── auth/
│── users/
│── customers/
│── tasks/
│── prisma/
│── main.ts
│── app.module.ts


⚙️ Environment Variables

Create a .env file using this template:

.env.example
DATABASE_URL=postgresql://user:password@localhost:5432/crm_db
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d

🗄 Database Setup (Prisma)
npx prisma migrate dev
npx prisma generate

▶️ How to Run the Project
npm install
npm run start:dev


Server will start at:

http://localhost:3000

📘 Swagger API Documentation

Swagger UI is available at:

http://localhost:3000/api


Swagger allows testing of protected routes using JWT Bearer token.

🧪 API Testing (Example curl)
curl -X POST http://localhost:3000/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "admin@example.com",
  "password": "password123"
}'

📤 Submission Information

Assignment: Prysm Labs – Backend Developer Intern

Repository: Public GitHub Repository

Deadline: 28 January 2026, 11:59 PM

👨‍💻 Author

Manoj Sharma
Backend Developer (NestJS, Node.js)

📜 License

This project is created solely for evaluation purposes under the Prysm Labs internship assignment.
