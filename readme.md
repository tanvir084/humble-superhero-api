# 🚀 Humble Superhero API

A **NestJS-based** backend system that celebrates every team member as a superhero.  
This API allows you to **create** new superheroes (with a name, superpower, and humility score) and **retrieve** a sorted list of these heroes based on their humility score.

---

## 🎯 Features

- ✅ **Add New Superheroes** (POST `/superheroes`)
- ✅ **List Superheroes** (GET `/superheroes`)
- ✅ **Validation**: Ensures `humilityScore` is between 1 and 10
- ✅ **Swagger Documentation**: Explore the API at `/api`
- ✅ **Dockerized Deployment**: Ready for containerization
- ✅ **Comprehensive Testing**: Unit tests (DTO validation) + end-to-end tests
- ✅ **In-Memory Data**: Simple for demos, easily replaced with a real DB

---

# 🏗️ Setup & Installation

### 🛠️ Prerequisites

| Dependency  | Version |
|-------------|--------:|
| **Node.js** | >=16.x  |
| **Yarn**    | Latest  |
| **Docker**  | Optional|

### 🔹 Clone the Repository

1. git clone https://github.com/tanvir084/humble-superhero-api.git
2. cd humble-superhero-api

### 🔹 Install Dependencies

- yarn install

### 🔹 Run the Application

- yarn start  
  (API at http://localhost:3000, Swagger at http://localhost:3000/api)

### 🔹 Build for Production

- yarn build  
  (Compiles into `dist/`)

---

## 📦 Dockerized Setup

### 🚀 Build & Run with Docker

1. docker build -t humble-superhero-api .
2. docker run -p 3000:3000 humble-superhero-api  
   (API at http://localhost:3000)

### Using Docker Compose

- Start: docker compose up --build -d  
- Stop: docker compose down

---

## 📖 API Documentation

When running, open http://localhost:3000/api to access Swagger UI.

---

## 📂 Project Structure

humble-superhero-api/  
 ├─ src/  
 │   ├─ app.module.ts               (Root module)  
 │   ├─ main.ts                     (App entry point)  
 │   └─ superheroes/  
 │       ├─ dto/  
 │       │   └─ create-superhero.dto.ts  (DTO: name, superpower, humilityScore)  
 │       ├─ superheroes.controller.ts    (POST /superheroes, GET /superheroes)  
 │       ├─ superheroes.service.ts       (Business logic & in-memory storage)  
 │       └─ superheroes.module.ts        (Superheroes feature module)  
 ├─ test/  
 │   ├─ superheroes.e2e-spec.ts     (E2E tests)  
 │   └─ create-superhero.dto.spec.ts (Unit tests for DTO validation)  
 ├─ Dockerfile                      (Docker image setup)  
 ├─ docker-compose.yml              (Docker Compose config)  
 ├─ package.json                    (Project metadata & scripts)  
 ├─ tsconfig.json                   (TypeScript config)  
 └─ README.md                       (This file)

---

## 🔥 API Endpoints

### POST `/superheroes`
**Description**: Add a new superhero  
**Body (JSON)** example:  
{  
  "name": "Captain Kindness",  
  "superpower": "Empathy",  
  "humilityScore": 9  
}  
**Validation**: humilityScore must be 1–10

### GET `/superheroes`
**Description**: Retrieve all superheroes, sorted by `humilityScore` (descending)

---

## 🧪 Testing

- Run all tests: yarn test  
- Run end-to-end tests: yarn test:e2e  
- Run unit tests: yarn test:unit

---

## 🤝 Contributing

1. Fork the repo  
2. Create a new branch: git checkout -b feature-branch  
3. Commit your changes: git commit -m "Add new feature"  
4. Push to GitHub: git push origin feature-branch  
5. Open a Pull Request

---

## If I Had More Time

- **Database Integration**: Replace in-memory storage with PostgreSQL or MongoDB  
- **Frontend Development**: Build a React UI for viewing/managing superheroes  
- **Enhanced Testing**: Increase coverage; add performance & integration tests  
- **CI/CD Pipelines**: Automate builds, tests, and deployments  
- **Advanced Error Handling**: Improve logging & error reporting

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

**Happy Coding!**  
If you have any questions or suggestions, open an issue or contact the maintainers.
