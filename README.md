# HMCTS Case Management System

This is a case management system designed for managing court cases and related tasks for HMCTS. The system allows users to create, update, delete, and view case-related tasks. It includes a user-friendly frontend and a robust backend API to handle task data.

This solution was created for the HMCTS Developer Challenge.

## Features
- Create, update, and delete tasks.
- Task listing and filtering.
- Responsive design for easy use on desktop and mobile devices.

 ## Frontend Setup

The frontend of this application is built using React.js, a popular JavaScript library for building user interfaces.

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Create a folder
2. Clone the repository:
   git clone https://github.com/NuriaAgbasi/HMTS-dts-challenge-frontend
   cd hmcts-dts-challenge/frontend
3. Install dependencies:  npm install
4. To start the frontend development server, run:
    npm start
5. find the backend repo : https://github.com/NuriaAgbasi/HMTS-dts-challenge-backend

    ###  **How to Run the Application (Development Environment)**
This section will explain how to run both the frontend and backend together.

## Running the Application

1. Start the backend:
    ```bash
   cd backend
   npm start

2.In another terminal window, start the frontend: cd frontend
npm start
This will run the frontend on http://localhost:3000 and the backend on http://localhost:5000. The frontend will make API requests to the backend to manage tasks.



### **Technologies Used**
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js, Supabase/PostgreSQL
- **Database:** Supabase/PostgreSQL
- **Version Control:** Git, GitHub
- **Other Tools:** Axios (for API calls)

