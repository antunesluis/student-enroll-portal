# Student Management API

This project is a comprehensive student management system that includes a backend API for student registration, user management, authentication, and profile photo uploads, along with a frontend interface for system interaction.

## Technologies Used

### Backend

- Node.js: JavaScript runtime environment
- Express.js: Web application framework
- Sequelize: ORM for database interaction
- MariaDB: Relational database
- JWT: Token-based authentication
- bcryptjs: Password hashing
- multer: Handling multipart/form-data for file uploads

## Features

- User authentication and authorization
- Student CRUD operations
- User management
- Profile photo upload
- Input validation and error handling
- Secure password storage with bcrypt
- Token-based authentication with JWT

## API Routes

### Students

- `GET /alunos`: Retrieve all registered students
- `POST /alunos`: Register a new student (Authentication required)
- `GET /alunos/:id`: Retrieve details of a specific student
- `PUT /alunos/:id`: Update an existing student's data (Authentication required)
- `DELETE /alunos/:id`: Remove a student from the system (Authentication required)

### Photos

- `POST /fotos`: Upload a profile photo for a student (Authentication required)

### Users

- `POST /users`: Register a new user
- `GET /users`: Retrieve all registered users (Authentication required)
- `PUT /users`: Update user information (Authentication required)
- `DELETE /users`: Delete user account (Authentication required)

### Authentication

- `POST /tokens`: Generate a JWT for authentication

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/student-management-api.git
   ```

2. Install dependencies:

   ```
   cd student-management-api
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```
   DATABASE_URL=your_database_connection_string
   TOKEN_SECRET=your_jwt_secret
   ```

4. Run database migrations:

   ```
   npx sequelize-cli db:migrate
   ```

5. Start the server:

   ```
   npm start
   ```

## Testing

To run the test suite:

```
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
