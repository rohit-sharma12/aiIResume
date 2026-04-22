# 🤖 AI Resume Backend (aiIResume)

This is a backend system for an **AI-powered Resume Application**, where users can securely register, authenticate, and prepare for AI-driven resume generation and analysis features.

---

## 🚀 Features

* 🔐 User Authentication (Register & Login)
* 🔑 JWT-based Authorization
* 🛡 Secure Password Hashing using bcrypt
* 📦 Scalable User Schema (AI-ready)
* ⚙️ Clean Backend Architecture (MVC Pattern)

---

## 🧠 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT (JSON Web Token)
* **Security:** bcrypt

---

## 🧱 Project Structure

```bash
aiIResume/
│
├── models/
│   └── user.model.js
│
├── controllers/
│   └── auth.controller.js
│
├── routes/
│   └── auth.routes.js
│
├── config/
│   └── db.js
│
├── middleware/
│   └── auth.middleware.js
│
├── .env
├── server.js
```

---

## 📊 User Model (AI-Ready)

The User schema is designed with future AI features in mind:

* 👤 Basic Information (Name, Email, Password)
* 🎭 Role Management (User/Admin)
* ⚡ AI Credits System (for usage tracking)
* 📈 Usage Tracking (tokens & prompts)
* 🎨 Preferences (theme, language)

---

## 🔐 Authentication Flow

1. User registers with email & password
2. Password is hashed using bcrypt
3. JWT token is generated on login
4. Protected routes validate user via middleware

---

## 🔌 API Endpoints

### 📝 Register User

```bash
POST /api/auth/register
```

### 🔑 Login User

```bash
POST /api/auth/login
```

---

## ⚙️ Environment Variables

Create a `.env` file in root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
npm run dev
```

---

## 💡 Future Enhancements

* 🤖 AI Resume Generator (LLM Integration)
* 📄 Resume Analyzer & Suggestions
* 💬 Chat-based Resume Assistant
* ⚡ Redis for caching & rate limiting
* 💳 Subscription & usage-based credits

---

## 📌 Learning Outcomes

* Built a secure authentication system using JWT
* Designed scalable backend architecture
* Structured project using MVC pattern
* Prepared backend for AI-based extensions

---

## 👨‍💻 Author

**Rohit Sharma**
Aspiring Full Stack Developer (React.js + Node.js)

---
