
# Welcome to TaskFlow - Your Todo Management Oasis!

Embark on a journey of productivity with TaskFlow, your go-to destination for seamless todo management. Unlock the power to register, log in, and effortlessly conquer your to-do list. Elevate your productivity game, one task at a time!


<!-- ## API Documentation: for Swagger

You can explore the API documentation using Swagger UI. Access the documentation by navigating to:

   http://3.84.245.69:8080/api-docs -->

## Functionality

The API includes the following functionality:
- User Registration
- User Login and Authentication
- User details
- Todo Management - create, update, delete

## Backend Deployment

The backend of this project is deployed on AWS and can be accessed via the following link:

[Backend Deployment Link](https://todo-management-alpha.vercel.app/)

## Backend-Routes
- **User Authentication**:
  - `POST /user/register`: Register a new user.
  - `POST /user/login`: Log in with a registered user.
  - `GET /user/`: Get all user details (jwt protected) .
  - `GET /user/{:id}`: Get all user details (jwt protected) .
- **Todo Management**:
  - `GET /todo/`: List of all todos (jwt protected).
  - `GET /todo/{:id}`: Get a todo (jwt protected).
  - `POST /todo/`: Add a new todo (jwt protected).
  - `PUT /todo/`: Update todo details (jwt protected).
  - `DELETE /todo/`: Delete a todo from the database (jwt protected).

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Bcrypt
- JWT

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Rubel011/node-express-todo.git


2. Navigate to the project directory:
    ```bash
    cd node-express-todo
3. Install the project dependencies:
    ```bash
    npm install 

4. Create a .env file in the project root and configure the following environment variables:
    ```markdown
    PORT=8080
    mongoUrl=database link
    SALT_ROUNDS=15
    ACCESS_TOKEN_SECRET=masai-school-web
    REFRESH_TOKEN_SECRET=masai-school
    ACCESS_TOKEN_EXPIRATION=1d
    REFRESH_TOKEN_EXPIRATION=24d


4. Start the server:
    ```
    npm run server
    ```

5. Access the backend API at http://localhost:PORT.



Feel free to customize it further based on your project's specific details and requirements.
