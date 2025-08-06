# Contributing to URL Shortener

Thank you for taking the time to contribute.  
Contributions of all kinds are welcome — bug fixes, feature development, documentation updates, or suggestions.  
This guide will walk you through the process of setting up the project locally and submitting your changes.

---

## Getting Started

To contribute effectively, you’ll want to run the project locally.

### Prerequisites

- Node.js and npm installed
- MongoDB (local instance or Atlas)

### Clone the Repository

```bash
git clone https://github.com/sohaibkundi2/url-shortener.git
cd url-shortener
```
## Backend Setup
```
cd backend
npm install
```

- Create a .env file inside the backend directory:

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```
- Start the server:

```
npm run dev
The backend will run on: http://localhost:3000
```

## Frontend Setup
```
cd ../frontend
npm install
npm run dev
```
- Make these local changes:

```
// UrlForm.jsx
const BASE_URL = "api.shrtit.tech";
// change to:
const BASE_URL = "http://localhost:3000";

// UserUrl.jsx
const BASE_URL = "https://shrtit.tech/";
// change to:
const BASE_URL = "http://localhost:3000";
```
- The frontend will run on: http://localhost:5173

## Making a Contribution
### 1. Create a new branch:

```
git checkout -b feature/your-feature-name
```
### 2. Make your changes.

### 3. Commit with a clear message:

```
git add .
git commit -m "Add: [Short description of your change]"
```
### 4. Push your branch:
```
git push origin feature/your-feature-name
```
### 5. Open a pull request against the main branch.
- Include a description of what you changed and why.
---
## Contribution Guidelines

- Keep changes focused and limited in scope

- Test your code before submitting

- Use consistent formatting and follow existing patterns

- Document new features and update README if necessary

- Be respectful in communication and feedback

### Need Help?
If you're stuck or have questions, feel free to:

- Open an issue on GitHub

- Contact the maintainer: @Sohaibkundi2

### Thanks for contributing ❤️

