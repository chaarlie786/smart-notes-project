# Smart Notes Summarizer and Tagger Backend

## Overview
The Smart Notes Summarizer and Tagger is a web application designed to help users efficiently manage their notes. The backend is built using Node.js and Express, providing a RESTful API for interaction with the frontend and the AI service.

## Prerequisites
- Node.js (version 14 or higher)
- MongoDB (for database storage)

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd smart-notes-summarizer/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Running the Server
To start the backend server, run the following command:
```
npm start
```
The server will run on `http://localhost:3000` by default.

## API Endpoints
- **POST /register**: Register a new user.
- **POST /login**: Authenticate a user.
- **POST /upload**: Upload a new note.
- **GET /documents**: Retrieve all documents for the authenticated user.

## Database Setup
Ensure that your MongoDB instance is running and properly configured. The database connection details can be found in the `app.js` file.

## Testing
You can use tools like Postman or curl to test the API endpoints.

## Contributing
Feel free to submit issues or pull requests for improvements and bug fixes.

## License
This project is licensed under the MIT License.