IT Consultant Service - Frontend
This is the frontend of the IT Consultant Service application, built with React. It provides a dynamic, responsive user interface for customers to explore IT services, submit inquiries, and seamlessly interact with the backend.

Features
Dynamic routing with React Router for seamless navigation.

Integration with backend APIs for real-time data updates.

Component-based architecture for reusability and scalability.

Optimized for desktop and mobile devices.

Technologies Used
React: Frontend library for building user interfaces.

React Router: For managing routes and navigation.

CSS: For styling and responsive layouts.

Project Structure
plaintext
client/
├── public/                 # Public assets (HTML, favicon, etc.)
│   ├── index.html          # Main HTML file
│   └── assets/             # Static assets (images, logos)
├── src/                    # Source code
│   ├── assets/             # Fonts, images, etc.
│   ├── components/         # Reusable React components
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Pages for different routes (Home, Contact, etc.)
│   ├── styles/             # CSS styles
│   ├── utils/              # Utility functions
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point for React
│   └── App.css             # Global styles
├── Dockerfile              # Docker configuration for frontend
├── .env.local              # Environment variables for development
├── .env.production.env     # Environment variables for production
├── package.json            # Project dependencies
└── README.md               # Documentation
Setup
Prerequisites
Node.js (v16 or later)

npm or Yarn

Installation
Navigate to the frontend directory:

bash
cd client
Install dependencies:

bash
npm install
Environment Variables
Development
Create a .env.local file in the client directory:

env
REACT_APP_API_URL=http://localhost:5000
Production
Create a .env.production.env file in the client directory:

env
REACT_APP_API_URL=https://your-backend-domain.com
Run Frontend Server
Start the development server:

bash
npm start
The frontend will run at http://localhost:3000.

Docker
Build and Run Frontend with Docker
Build the Docker image:

bash
docker build -t ghcr.io/<repository_owner>/itconsultantservice-frontend:latest .
Run the container:

bash
docker run -p 3000:3000 --env-file .env.local ghcr.io/<repository_owner>/itconsultantservice-frontend:latest
API Integration
Base URL: http://localhost:5000
Endpoints
Services: Retrieve all available services from the backend.

Inquiries: Submit user inquiries to the backend for processing.

Testing
Run frontend tests:

bash
npm test
License
This project is licensed under the MIT License.