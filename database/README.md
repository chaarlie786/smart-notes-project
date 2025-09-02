# Smart Notes Summarizer Database Setup

This README provides instructions on how to set up and initialize the database for the Smart Notes Summarizer project.

## Database Setup Instructions

1. **Database Management System**: Ensure you have a compatible database management system installed (e.g., MySQL, PostgreSQL).

2. **Schema Initialization**:
   - Navigate to the `database` directory.
   - Run the SQL schema file to create the necessary tables. You can do this using a database client or command line interface.
   - Example command for MySQL:
     ```bash
     mysql -u username -p database_name < schema.sql
     ```

3. **Configuration**:
   - Update your database connection settings in the backend application to match your database credentials.

4. **Testing the Connection**:
   - After setting up the database, ensure that the backend application can connect to it by running the server and checking for any connection errors.

## Additional Information

- For more details on the database schema, refer to the `schema.sql` file.
- If you encounter any issues, please consult the backend README for troubleshooting steps related to database connectivity.