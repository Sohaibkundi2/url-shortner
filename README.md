# 🔗 URL Shortener

A simple full-stack URL shortener application built with React (frontend) and Node.js/Express (backend). Users can create short URLs, view their created links, and track click counts.

---

## Features

- **Create Short URLs:** Enter a long URL and get a short, shareable link.
- **User Dashboard:** View all your created URLs in a table.
- **Copy to Clipboard:** Easily copy short URLs with one click.
- **Click Tracking:** See how many times each short URL has been visited.
- **Animated UI:** Smooth transitions using Framer Motion.
- **No Page Refresh Needed:** URLs and click counts update automatically.

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, Framer Motion, React Query
- **Backend:** Node.js, Express, MongoDB 
- **Clipboard API:** For copying URLs

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB running 

### Clone the Repository

```bash
git clone https://github.com/sohaibkundi2/url-shortener.git
cd url-shortener
```

### Backend Setup

1. Go to the backend folder:
    ```bash
    cd BACKEND
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file and set your MongoDB URI and other configs.
4. Start the backend server:
    ```bash
    npm start
    ```
    The backend will run on `http://localhost:5000/` by default.

### Frontend Setup

1. Open a new terminal and go to the frontend folder:
    ```bash
    cd FRONTEND
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the frontend:
    ```bash
    npm start
    ```
    The frontend will run on `http://localhost:3000/` by default.

---

## Usage

- Open [http://localhost:3000/](http://localhost:3000/) in your browser.
- Enter a long URL to generate a short link.
- View, copy, and track your URLs in the dashboard.

---

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
├── README.md
└── .gitignore

```

---

## Customization

- **API Base URL:** Update the `BASE_URL` in your frontend code if your backend runs on a different port or domain.
- **Styling:** Uses Tailwind CSS for easy customization.

---

## License

This project is for learning and demonstration purposes.

---

## Credits

- [React](https://react.dev/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Query](https://tanstack.com/query/latest)

---