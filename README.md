# Expense Tracker (Backend)

This is the backend of the **Expense Tracker Web Application**, built using **Node.js, Express.js, and MongoDB**.  
It provides secure APIs for authentication, income & expense tracking, and balance management.

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anaghbrati/expenseTracker-Backend.git
   cd expenseTracker-Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. **Run the development server**
   ```bash
   npm start
   ```
   or, if using **nodemon**:  
   ```bash
   npm run dev
   ```

➡️ Server will run on **http://localhost:5000** by default.

---

## 🛠️ Tech Stack

- **Node.js** → JavaScript runtime  
- **Express.js** → Backend framework for APIs & routing  
- **MongoDB** → Database to store user data & expenses  
- **JWT Authentication** → Secure signup/login  
- **body-parser** → Parsing incoming requests  
- **CORS** → Secure cross-origin communication  

---

## 🔗 Frontend Repo  

Find the frontend here 👉 [Expense Tracker Frontend](https://github.com/Anaghbrati/expenseTracker-Backend)  

---

## 🌐 Live Demo  

Check it out here 👉 [Live Link](https://expense-tracker-frontend-dkm9.vercel.app/)
