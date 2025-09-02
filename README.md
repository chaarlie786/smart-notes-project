# Smart Notes Summarizer and Tagger

This project is a Smart Notes Summarizer and Tagger system designed to help users efficiently manage their notes by summarizing content and tagging it for easier retrieval. The system is built using Node.js for the backend, Python for the AI/ML service, and a relational database for storage.

## Project Structure

```
smart-notes-summarizer
├── backend                # Node.js backend
│   ├── src
│   │   ├── app.js        # Entry point of the application
│   │   ├── controllers    # Contains controllers for handling requests
│   │   │   └── notesController.js
│   │   ├── routes         # Defines API routes
│   │   │   └── notesRoutes.js
│   │   └── models         # Database models
│   │       └── noteModel.js
│   ├── package.json       # NPM dependencies
│   └── README.md          # Backend documentation
├── ai-service             # Python AI/ML service
│   ├── src
│   │   ├── summarizer.py  # Summarization logic
│   │   ├── tagger.py      # Tagging logic
│   │   └── utils.py       # Utility functions
│   ├── requirements.txt    # Python dependencies
│   └── README.md          # AI service documentation
├── database               # Database setup
│   ├── schema.sql         # SQL schema
│   └── README.md          # Database documentation
└── README.md              # Project overview
```

## Features

- **Note Management**: Users can upload, summarize, and tag their notes.
- **AI Summarization**: Utilizes advanced AI models to generate concise summaries of lengthy texts.
- **Tagging System**: Automatically extracts relevant tags from notes for better organization.
- **RESTful API**: Provides a robust API for frontend integration.

## Getting Started

### Prerequisites

- Node.js and npm for the backend
- Python and pip for the AI service
- A relational database (e.g., MySQL, PostgreSQL)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd smart-notes-summarizer
   ```

2. Set up the backend:
   - Navigate to the `backend` directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```

3. Set up the AI service:
   - Navigate to the `ai-service` directory:
     ```
     cd ../ai-service
     ```
   - Install Python dependencies:
     ```
     pip install -r requirements.txt
     ```

4. Set up the database:
   - Navigate to the `database` directory:
     ```
     cd ../database
     ```
   - Run the schema file to set up the database:
     ```
     <database-command> < schema.sql
     ```

### Running the Application

- Start the backend server:
  ```
  cd backend
  node src/app.js
  ```

- Start the AI service (if applicable):
  ```
  cd ai-service
  python src/summarizer.py
  ```

## Usage

- Use the API endpoints defined in the backend to interact with the note management system.
- Refer to the individual README files in the `backend`, `ai-service`, and `database` directories for more detailed instructions on usage and functionality.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.