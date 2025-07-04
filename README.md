# URL Shortener

![Version](https://img.shields.io/badge/version-1.1.0-blue?style=flat-square)

A modern full-stack URL shortener built with **React** and **Node.js/Express**. Users can create custom short URLs, track visits, and manage their links in a clean UI.

---

## Live Demo

- Frontend: [https://shrtit.tech](https://shrtit.tech)
- Backend/API: [https://api.shrtit.tech](https://api.shrtit.tech)

---

## Features

- Shorten URLs with optional custom slugs
- User dashboard to manage links
- Click tracking with live stats
- One-click copy to clipboard
- Smooth UI animations with Framer Motion
- Data fetching and syncing using TanStack React Query

---

## Tech Stack

- **Frontend**: React, Tailwind CSS, Framer Motion, React Query
- **Backend**: Node.js, Express, MongoDB
- **API**: RESTful with cookie-based authentication
- **Deployment**: Vercel (Frontend), Railway (Backend)

---

## Getting Started (Locally)

### Prerequisites

- Node.js and npm
- MongoDB (local or MongoDB Atlas)

### 1. Clone Repository


```bash
git clone https://github.com/sohaibkundi2/url-shortener.git
cd url-shortener
```

## 2. Backend Setup
```
cd backend
npm install
```
- Create a .env file:
```
PORT=3000
MONGODB_URI=your_mongo_connection
JWT_SECRET=your_secret
CLIENT_URL=http://localhost:3000
```
```
npm run dev
```
- The backend runs at http://localhost:3000

## 3. Frontend Setup
```
cd ../frontend
npm install
npm run dev
```
- The frontend runs at http://localhost:5173
---

#  Usage
- Visit your deployed site shrtit.tech

- Log in or sign up to create custom links

- Copy and share the generated short URLs

- Dashboard auto-updates click counts using React Query


## Project Structure

```
url-shortener/
├── backend/
│   ├── controllers/
│   ├── models/
│   └── app.js
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   └── App.jsx
│   └── index.html
│   └── vite.config.js
├── README.md
└── .gitignore

```

---
#  Vercel Configuration

Vercel handles client-side routing by using this config in vercel.json (already included if deployed correctly):

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```
- This ensures routes like /auth or /dashboard don’t give a 404 on refresh.

---
##  Authentication
- Login/signup system with JWT (stored in HttpOnly cookies)

- Protected routes handled on frontend and backend

##  License

- This project is for educational and demonstration purposes only.
---

##  Credits

- [React](https://react.dev/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TanStack Query](https://tanstack.com/query/latest)
---


##  Author
```
Made with 💻 by Sohaib Kundi.
```