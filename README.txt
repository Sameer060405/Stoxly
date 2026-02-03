STOXLY - Stock Trading Platform
📊 Overview

Stoxly is a modern full-stack stock trading platform inspired by Zerodha, designed to provide users with a seamless trading experience. It enables users to buy and sell stocks, view their holdings, track live market data, and visualize performance using interactive charts.

The platform is built using the MERN stack — MongoDB, Express.js, React, and Node.js — and offers an intuitive, responsive interface powered by Material UI and Chart.js.

🚀 Features

User Authentication: Secure signup/login using JWT authentication.

Portfolio Management: View and track user holdings stored in MongoDB.

Real-time Market Data: Fetch and display live stock prices using Axios.

Interactive Charts: Visualize stock trends and portfolio performance with Chart.js.

Responsive Dashboard: Built with Material UI for a clean and modern design.

Buy/Sell Modal: User-friendly interface for executing mock trades.

Routing: Smooth navigation between pages using React Router.

🧱 Tech Stack

Frontend:

React.js

Material UI (MUI)

Chart.js / React-Chartjs-2

Axios

React Router DOM

Backend:

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

📁 Folder Structure
Stoxly/
│
├── backend/
│   ├── index.js
│   ├── models/
│   ├── routes/
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── dashboard/
│   │   ├── LandingPage/
│   │   ├── pages/ (Signup, Login, Home, About, Pricing, etc.)
│   │   ├── context/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
│
├── .gitignore
└── README.txt

⚙️ Installation & Setup
Prerequisites

Node.js and npm installed

MongoDB running locally or via cloud (e.g., MongoDB Atlas)

Steps to Run the Project

Clone the repository

git clone https://github.com/your-username/Stoxly.git
cd Stoxly


Install dependencies

npm install


Run both frontend and dashboard together

npm run dev


This command uses concurrently and cross-env to start:

Frontend on http://localhost:3000

Dashboard on http://localhost:3001

Run backend separately (if applicable)

cd backend
npm start


Access the app
Open your browser and go to http://localhost:3000

🔑 Environment Variables

Create a .env file in the root of your backend directory and include:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

🧩 Future Enhancements

Integrate live stock market APIs for real data.

Add two-factor authentication for better security.

Implement a watchlist and real-time price updates via WebSocket.

Add admin panel for managing user portfolios.

👨‍💻 Developer

Author: Sameer Kaushik
Project Name: Stoxly
Tech Stack: MERN + MUI + Chart.js
Version: 1.0.0