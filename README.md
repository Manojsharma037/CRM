# 🚀 Prysm Labs – CRM Backend Assignment

This repository contains the backend implementation of a simple **CRM (Customer Relationship Management)** system built using **NestJS**, **Prisma**, and **PostgreSQL**, with **JWT-based authentication** and **role-based access control (RBAC)**.

---

## 🛠️ Tech Stack

- **Backend Framework:** NestJS (TypeScript)
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** JWT (Passport)
- **Authorization:** Role-based (ADMIN / EMPLOYEE)
- **API Documentation:** Swagger (OpenAPI)

---

## ✨ Features

- User registration and login
- JWT authentication
- Role-based access control (ADMIN, EMPLOYEE)
- User management
- Customer management
- Task management
- Secure APIs
- Swagger API documentation
- Prisma migrations

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone <your-github-repository-url>
cd prysm-crm-backend

2️⃣ Install Dependencies
npm install

🔐 Environment Variables

Create a .env file in the project root.

.env.example
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/prysm_crm"
JWT_SECRET="supersecretkey"
PORT=3000


Make sure:

PostgreSQL is running

Database prysm_crm exists

🗄️ Database Migration (Prisma)
Generate Prisma Client
npx prisma generate

Run Database Migrations
npx prisma migrate dev --name init

(Optional) Prisma Studio
npx prisma studio

▶️ Start the Server
npm run start:dev


The server will start at:

http://localhost:3000

📚 Swagger API Documentation

Swagger UI is available at:

http://localhost:3000/api

Using JWT in Swagger

Login using /auth/login

Copy the accessToken

Click Authorize in Swagger

Paste:

Bearer <your_access_token>

🔑 Authentication & Roles
Roles

ADMIN

EMPLOYEE

Role-based Access
Feature	ADMIN	EMPLOYEE
Create Users	✅	❌
View Users	✅	❌
Create Customers	✅	❌
View Customers	✅	✅
Create Tasks	✅	❌
View Tasks	✅	✅
Update Task Status	✅	✅ (own tasks only)
🧪 API Testing (Curl Examples)
Login
curl -X POST http://localhost:3000/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"admin@gmail.com","password":"password123"}'

Register User
curl -X POST http://localhost:3000/auth/register \
-H "Content-Type: application/json" \
-d '{"name":"User","email":"user@gmail.com","password":"password123"}'

Create Customer (ADMIN only)
curl -X POST http://localhost:3000/customers \
-H "Authorization: Bearer <ADMIN_TOKEN>" \
-H "Content-Type: application/json" \
-d '{"name":"ABC Corp","email":"abc@corp.com","phone":"9999999999"}'

Get Customers
curl -X GET http://localhost:3000/customers \
-H "Authorization: Bearer <TOKEN>"

Create Task (ADMIN only)
curl -X POST http://localhost:3000/tasks \
-H "Authorization: Bearer <ADMIN_TOKEN>" \
-H "Content-Type: application/json" \
-d '{
  "title": "Follow up call",
  "description": "Call customer for feedback",
  "assignedTo": 2,
  "customerId": 1
}'

Update Task Status
curl -X PATCH http://localhost:3000/tasks/1/status \
-H "Authorization: Bearer <TOKEN>" \
-H "Content-Type: application/json" \
-d '{"status":"DONE"}'

✅ Assignment Completion Status

 Authentication & Authorization

 Role-based access control

 PostgreSQL integration using Prisma

 Prisma migrations

 Swagger documentation

 Secure API endpoints

 Curl/Postman testing

👨‍💻 Author

Manoj Sharma
Backend Developer – NestJS | Prisma | PostgreSQL