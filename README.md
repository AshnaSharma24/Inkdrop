# 📝 Inkdrop — Modern Notes App (MERN Stack)

Welcome to **Inkdrop**, a full-stack notes application built with the **MERN stack**: **MongoDB**, **Express**, **React**, and **Node.js**. Organize your thoughts, create pages, and manage your notes seamlessly with a beautiful, responsive interface.

**Live Demo:** https://inkdrop.onrender.com

---

## 🌟 Features

### Core Functionality
- 📄 **Create Pages:** Easily make new note pages to organize your thoughts
- ✏️ **Edit Notes & Pages:** Update existing notes and pages with just a few clicks
- 🗑️ **Delete Notes & Pages:** Remove any notes or pages you no longer need
- 📝 **Title & Description:** Every note can have a distinct title and description for easy reference

### Technical Highlights
- 🧱 **Full-Stack Architecture:** Integrated backend & frontend for seamless experience
- 🛠️ **REST API:** Fully functional RESTful API with Express.js
- ⏳ **Rate Limiting:** Real-world API protection using Upstash Redis rate limiting
- 🔒 **Security:** Helmet.js for HTTP headers, Express Mongo Sanitize for data validation
- 🚀 **Responsive UI:** Optimized for all devices—desktop, tablet, and mobile
- 🎨 **Modern UI:** Built with React 19, TailwindCSS, and DaisyUI
- 🔔 **Toast Notifications:** User-friendly notifications with React Hot Toast
- 📱 **Lucide Icons:** Beautiful, consistent icon library throughout the app

---

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Upstash Redis** - Rate limiting solution
- **Helmet.js** - Security headers
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development server with auto-reload

### Frontend
- **React 19** - UI library
- **React Router 7** - Client-side routing
- **Vite** - Fast build tool & dev server
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - React component library
- **Axios** - HTTP client
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications
- **ESLint** - Code quality

---

## 📋 Prerequisites

Before getting started, ensure you have:
- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **MongoDB** instance (local or MongoDB Atlas)
- **Upstash Redis** account (for rate limiting)

---

## 🧪 Environment Setup

Create a `.env` file in the `/backend` folder with the following variables:

```env
# MongoDB Connection
MONGO_URI=<your_mongodb_connection_string>

# Upstash Redis Configuration
UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>

# Environment
NODE_ENV=development
```

### Getting Credentials
- **MongoDB:** Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Upstash Redis:** Sign up at [Upstash](https://upstash.com) and create a Redis database

---

## 🚀 Installation & Running

### Option 1: Run Backend and Frontend Separately (Recommended for Development)

#### Backend Setup
```bash
cd backend
npm install
npm run dev
```
The backend server will start on `http://localhost:5000`

#### Frontend Setup (in a new terminal)
```bash
cd frontend
npm install
npm run dev
```
The frontend will start on `http://localhost:5173`

### Option 2: Full Build (Production)
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
Inkdrop/
├── backend/
│   ├── src/
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API endpoints
│   │   ├── controllers/      # Business logic
│   │   └── server.js        # Entry point
│   ├── package.json
│   └── .env                 # Environment variables
│
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🔌 API Endpoints

### Notes CRUD Operations
- `GET /api/notes` - Fetch all notes
- `POST /api/notes` - Create a new note
- `GET /api/notes/:id` - Get note by ID
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

### Pages CRUD Operations
- `GET /api/pages` - Fetch all pages
- `POST /api/pages` - Create a new page
- `GET /api/pages/:id` - Get page by ID
- `PUT /api/pages/:id` - Update a page
- `DELETE /api/pages/:id` - Delete a page

---

## 🔐 Security Features

- **Helmet.js** - Protects against common vulnerabilities
- **Express Mongo Sanitize** - Prevents NoSQL injection attacks
- **CORS** - Controls cross-origin requests
- **Rate Limiting** - Prevents API abuse using Upstash Redis
- **Environment Variables** - Sensitive data stored securely

---

## 📱 Responsive Design

Inkdrop is fully responsive and works seamlessly on:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 🖥️ Desktop screens (1024px and up)

---

## 🚀 Deployment

The app is deployed on **Render** and can be deployed to other platforms like:
- Vercel (frontend)
- Heroku (backend)
- AWS, Google Cloud, Azure
- DigitalOcean

---

## 🤝 Contributing

Have ideas or found a bug? Contributions and suggestions are always welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 Topics & Keywords

`MERN` • `MongoDB` • `Express.js` • `React` • `Node.js` • `REST API` • `Rate Limiter` • `Responsive Design` • `TailwindCSS` • `Toast Notifications` • `CRUD Operations`

---

## 🎯 Learning Outcomes

This project helps you understand:
- Full-stack application architecture
- RESTful API design and implementation
- MongoDB and Mongoose ODM
- React state management and hooks
- Client-side routing with React Router
- API security and rate limiting
- Responsive web design with TailwindCSS
- Modern JavaScript (ES6+)
- Development workflows with npm and Vite

---

## 📧 Questions & Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Check the existing documentation
- Review the code comments

---

Ready to organize your notes and learn full-stack development? 🚀 **Dive into Inkdrop and start building today!**

---

*Last updated: May 2026*
