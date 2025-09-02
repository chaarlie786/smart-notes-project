# Smart Notes Summarizer and Tagger AI Service

This directory contains the AI service for the Smart Notes Summarizer and Tagger project. The AI service is responsible for processing notes to generate summaries and extract relevant tags.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd smart-notes-summarizer/ai-service
   ```

2. **Install Dependencies**
   Make sure you have Python installed. Then, install the required packages using pip:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Service**
   You can run the service using Flask or FastAPI. Ensure that you have the necessary environment variables set up for your application.

   For example, if using Flask:
   ```bash
   export FLASK_APP=src/app.py
   flask run
   ```

## API Usage

The AI service exposes endpoints for summarization and tagging. You can send POST requests with the text data to the respective endpoints.

### Endpoints

- **Summarization**
  - **URL:** `/summarize`
  - **Method:** POST
  - **Request Body:** 
    ```json
    {
      "text": "Your text to summarize."
    }
    ```
  - **Response:** 
    ```json
    {
      "summary": "The summarized text."
    }
    ```

- **Tagging**
  - **URL:** `/tag`
  - **Method:** POST
  - **Request Body:** 
    ```json
    {
      "text": "Your text to extract tags from."
    }
    ```
  - **Response:** 
    ```json
    {
      "tags": ["tag1", "tag2", "tag3"]
    }
    ```

## Development

Feel free to contribute to the AI service by adding new features or improving existing functionalities. Make sure to follow the coding standards and include tests for new features.

## License

This project is licensed under the MIT License - see the LICENSE file for details.