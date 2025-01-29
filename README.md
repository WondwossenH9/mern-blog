# Blog Web Application

Developed by: Wondwossen Hailu  
Date: January 2025  

# Overview

This is a blog project built using the **MERN** stack (MongoDB, Express.js, React.js, and Node.js). The application provides users with a platform to create, read, update, and delete blog posts. Additionally, users can authenticate their accounts and engage with others by liking and commenting on blog posts.

# Features

- User Authentication: Secure login and registration process.
- CRUD Operations: Users can create, read, update, and delete their own blog posts.
- Social Interaction: Users can like and comment on blogs posted by others.
- Responsive Design: The application is designed to be mobile-friendly and accessible on various devices.

# Technologies Used

- Backend: 
  - Node.js: JavaScript runtime for the server.
  - Express.js: Web application framework for Node.js.
  - MongoDB: NoSQL database to store blog data.
  
- Frontend: 
  - React.js: JavaScript library for building user interfaces.
  - Axios: Promise-based HTTP client for making requests to the backend.

# Getting Started

1. Clone the repository:
   bash
   git clone <https://github.com/WondwossenH9/mern-blog/tree/main>
   

2. Change to the project directory:
   bash
   cd mern-blog
   

3. Install dependencies:

   For the backend:
   bash
   cd server
   npm install
   

   For the frontend:
   bash
   cd client
   npm install
   

4. Configuration:

   - Create a `.env` file in the `server` directory to configure your database connection and any other environment variables. Sample:
     
     MONGODB_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     

5. Running the Application:

   Start the backend server:
   bash
   cd server
   npm start
   

   Start the frontend application:
   bash
   cd client
   npm start
   

6. Access the Application:
   Open your web browser and navigate to `http://localhost:3000` to view the application.

# Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

# License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

# Acknowledgments

- Special thanks to the open-source community and the various libraries and frameworks that made this project possible.
