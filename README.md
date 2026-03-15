# 🤖 SigmaGPT – AI Conversational Assistant

SigmaGPT is a **full-stack AI chatbot** that allows users to interact with an AI model and receive intelligent responses in real time.

The application also **stores chat history in MongoDB**, allowing users to revisit previous conversations. This project demonstrates modern **full-stack development, AI API integration, and scalable backend architecture**.

---

## 🚀 Features

- 💬 AI-powered conversational chatbot
- 🧠 Intelligent responses using **Gemini API**
- 🗂 Chat history stored in **MongoDB**
- ⚡ Fast and responsive chat interface
- 🔐 Secure API key management using environment variables
- 🌐 RESTful backend API built with **Express.js**
- 🎨 Modern frontend built with **React + Vite**
- 🔄 Seamless frontend–backend communication

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### AI Integration
- Gemini API

---

## 📂 Project Structure

```
SigmaGPT
│
├── Backend
│   ├── models
│   │   └── Thread.js
│   │
│   ├── routes
│   │   └── chat.js
│   │
│   ├── utils
│   │   └── gemini.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── Frontend
│   ├── public
│   │   └── vite.svg
│   │
│   ├── src
│   │   ├── assets
│   │   ├── App.jsx
│   │   ├── Chat.jsx
│   │   ├── ChatWindow.jsx
│   │   ├── Sidebar.jsx
│   │   ├── MyContext.jsx
│   │   ├── main.jsx
│   │   └── CSS files
│   │
│   ├── index.html
│   └── package.json
│
├── .gitignore
├── .env.example
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Zoregaurav/SigmaGPT-AI-Conversational-Assistant.git
cd SigmaGPT-AI-Conversational-Assistant
```

### 2️⃣ Install Dependencies

**Backend**
```bash
cd Backend
npm install
```

**Frontend**
```bash
cd ../Frontend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `Backend` folder.

Example:
```env
GEMINI_API_KEY=your_gemini_api_key_here
MONGODB_URL=your_mongodb_connection_string_here
```

---

## ▶️ Running the Application

### Start Backend Server

```bash
cd Backend
npm run dev
```

> Make sure `nodemon` is configured in `package.json`

Example:
```json
"scripts": {
  "dev": "nodemon server.js"
}
```

### Start Frontend

```bash
cd Frontend
npm run dev
```

---

## 🌐 Access the Application

Open your browser and visit:

```
http://localhost:5173
```

You can now interact with SigmaGPT and view stored chat history.

---

## 🎯 Learning Outcomes

This project demonstrates:

- ✅ Full-stack application development
- ✅ AI API integration
- ✅ MongoDB database design for chat history
- ✅ RESTful API development
- ✅ Secure environment variable management
- ✅ Building interactive chat interfaces with React

---
## 📌 Future Scope & Improvements

- 🔐 **User Authentication & Authorization** — Secure login/signup system for personalized access
- 🌗 **Light & Dark Theme** — Toggle between light and dark mode for better user experience
- 📋 **Dropdown Functionality** — Implement interactive dropdown menus for better navigation
- 🎙️ **Voice Feature** — Add voice input/output support using OpenAI APIs

---
## 📸 UI Preview

![SigmaGPT UI](https://github.com/Zoregaurav/SigmaGPT-AI-Conversational-Assistant/blob/e66f8c27ecf52ccc894357c466918092c34fcd6f/asset-1.png)

![SigmaGPT UI](https://github.com/Zoregaurav/SigmaGPT-AI-Conversational-Assistant/blob/e66f8c27ecf52ccc894357c466918092c34fcd6f/asset-2.png)

---
## 👨‍💻 Author

**Gaurav Zore**

- 🐙 GitHub: [Zoregaurav](https://github.com/Zoregaurav)
- 💼 LinkedIn: [Gaurav Zore](https://www.linkedin.com/in/gaurav-zore-760480250/)
