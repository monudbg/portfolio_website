# Portfolio Website

A modern, full-stack portfolio website built with **Django** and **React**.

## 🚀 Features
- **Dynamic Frontend**: Built with React, Vite, and Framer Motion for smooth animations.
- **Glassmorphism Design**: Sleek, modern UI with a premium feel.
- **Django Backend**: Robust API to manage profile, skills, and projects.
- **Automated Deployment**: GitHub Actions pipeline for automatic frontend builds to GitHub Pages.
- **Production Ready**: Configured with WhiteNoise for static assets and environment variable support.

## 🛠️ Tech Stack
- **Frontend**: React.js, Vite, Axios, Lucide React, Framer Motion
- **Backend**: Django, Django REST Framework, WhiteNoise
- **Database**: SQLite (Development) / PostgreSQL (Production)
- **Deployment**: GitHub Pages (Frontend), Render/Fly.io (Backend recommended)

## 📁 Project Structure
```text
├── backend/            # Django REST API
│   ├── api/            # Main application logic
│   ├── core/           # Project settings & configuration
│   └── requirements.txt# Backend dependencies
├── frontend/           # React frontend
│   ├── src/            # Components & Logic
│   └── vite.config.js  # Vite configuration
└── .github/workflows/  # CI/CD deployment scripts
```

## ⚙️ Local Setup

### Backend
1. Navigate to the backend folder: `cd backend`
2. Create a virtual environment: `python -m venv venv`
3. Activate the venv: `source venv/bin/activate` (Mac/Linux) or `venv\Scripts\activate` (Windows)
4. Install dependencies: `pip install -r requirements.txt`
5. Run migrations: `python manage.py migrate`
6. Start the server: `python manage.py runserver`

### Frontend
1. Navigate to the frontend folder: `cd frontend`
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

## 🌐 Deployment
The frontend is automatically deployed to GitHub Pages via GitHub Actions when pushing to the `main` branch.

---
Built with ❤️ by [Monu Manish](https://github.com/monudbg)
