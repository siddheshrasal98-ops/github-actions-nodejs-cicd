# GitHub Actions Node.js CI/CD

## Project Overview
This project demonstrates a CI/CD pipeline for a Node.js application using GitHub Actions, Docker, and Docker Hub.

## Technologies Used
- Node.js
- Express.js
- Docker
- GitHub Actions
- Docker Hub
- Git

## Project Structure
```
.
├── .github/workflows/main.yml
├── Dockerfile
├── .dockerignore
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

## CI/CD Workflow
1. Checkout Repository
2. Setup Node.js
3. Install Dependencies
4. Run Tests
5. Login to Docker Hub
6. Build Docker Image
7. Push Docker Image

## Docker Image
Docker Hub Repository:
siddheshrasal98ops/github-actions-nodejs-cicd

## Run Locally

Install dependencies

```bash
npm install
```

Start application

```bash
npm start
```

Build Docker Image

```bash
docker build -t github-actions-nodejs-cicd:v1 .
```

Run Docker Container

```bash
docker run -d -p 3001:3001 github-actions-nodejs-cicd:v1
```

## Output
Application URL:
http://localhost:3001