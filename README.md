# 🦸 Humble Superhero API

A **NestJS-based** backend system that celebrates every team member as a superhero, built for a **humble superhero platform**.   
This API allows **teams** to **create and sorted list** of superheroes, each with a name, superpower, and humility score. Real-time updates are supported via Socket.IO, and the service is fully dockerized with a **in memory storage**.

---

## 🎯 Features

- ✅ **Superhero Management** (Add & List)
- ✅ **Socket.IO** (Real-time notifications for new superheroes)
- ✅ **NestJS** (Structured & scalable Node.js framework)
- ✅ **RESTful API** with **Swagger Documentation**
- ✅ **Dockerized Deployment** with **Docker Compose** (optional)
- ✅ **Environment Variables** via `.env`

---

# 📦 Dockerized Setup

### 🚀 Run the Application with Docker

```bash
docker compose up --build -d
```
✅ **API**: [http://localhost:8080/](http://localhost:8080/)  

### 🛑 Stop the Application

```bash
docker compose down
```

---

# 📖 API Documentation

**Swagger UI** is available at:  
🔗 [http://localhost:8080/api-docs](http://localhost:8080/api-docs)

---

# 📂 Project Structure

```
📦 HUMBLE_SUPERHERO_API
 ┣ 📂 src
 ┃  ┣ 📂 superheros/                     # Superhero Folder
 ┃  ┃  ┣ 📂 dto/                         # DTO for creating a superhero
 ┃  ┃  ┣ 📜 superheroes.controller.ts    # Controller for superhero endpoints
 ┃  ┃  ┣ 📜 superheroes.gateway.ts       # Socket.IO gateway for real-time updates
 ┃  ┃  ┣ 📜 superheroes.module.ts        # Module for the superheroes feature
 ┃  ┃  ┣ 📜 superheroes.service.spec.ts  # Tests for superhero service
 ┃  ┃  ┣ 📜 superheroes.service.ts       # Business logic and in-memory storage
 ┃  ┣ 📜 app.module.ts     # Root module
 ┃  ┣ 📜 main.ts           # Entry point (bootstrap NestJS)
 ┣ 📂 test                 # E2E tests
 ┣ 📜 .env                 # Environment variables (e.g., PORT=8080)
 ┣ 📜 docker-compose.yml
 ┣ 📜 Dockerfile
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┗ 📜 README.md
```
---

# 🔥 API Endpoints

## 🦸 Superheroes

| Method | Endpoint        | Description                              |
|-------:|-----------------|------------------------------------------|
| `POST` | `/superheroes`  | Add a new superhero                      |
| `GET`  | `/superheroes`  | Retrieve all superheroes (descending by humility) |

---

# 🔑 Environment Variables (`.env`)

```env
PORT=8080
```

- **PORT**: The port your NestJS app will run on (default `8080`).  

---

# 🏗️ Running Locally (Without Docker)

1. **Install Dependencies**:
   ```bash
   yarn install
   ```
2. **Set up .env** with `PORT=8080` (or your desired port).
3. **Run**:
   ```bash
   yarn start
   ```
   Access at [http://localhost:8080](http://localhost:8080)

### For Development (Watch Mode)

```bash
yarn start:dev
```

---

# 🔧 Testing

- **Unit Tests**:  
  ```bash
  yarn test
  ```
- **End-to-End Tests**:  
  ```bash
  yarn test:e2e
  ```
  These tests may spin up the NestJS application to verify endpoints and real-time events.

---

## If I Had More Time

- **Database Integration**: Replace the in-memory storage with a real database (e.g., PostgreSQL or MongoDB).
- **Authentication**: Implement JWT-based or session-based auth for secure endpoints.
- **More Test Coverage**: Expand unit and e2e tests to cover error handling, edge cases, and performance.
- **CI/CD Pipeline**: Automate tests and deployment using GitHub Actions or another CI service.

---
# 🤝 Contributing

1. **Fork** the repository.  
2. **Create a new branch** (`git checkout -b feature-branch`).  
3. **Commit your changes** (`git commit -m "Add new feature"`).  
4. **Push to GitHub** (`git push origin feature-branch`).  
5. **Open a Pull Request** 🎉

---

# 📜 License

This project is licensed under the **MIT License**.

---

**Happy Coding!** 🦸
