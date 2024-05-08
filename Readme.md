# take-home

# Mail Inbox Application for MBL Hightech

## Overview
This is a full-stack mail inbox application built with Node.js, Express.js, and MongoDB on the backend, and React on the frontend. It allows users to view their emails, mark them as read/unread, and view the full content of individual messages.

## Features
- User authentication: Users can log in with a predefined user account to access their inbox.
- Home page - Will greet the user and let him know how many messages he has and how many unread out of them.
- Inbox page: Displays a list of messages, showing the subject, preview, and read/unread status.
- Message view: Allows users to view the full content of individual messages.
- Unread message count: The top bar of the app indicates the number of unread messages.

## Backend Setup
1. Install dependencies:
   ```bash
    Yarn or npm install

    nodemon to start the server

## Set up environment variables:
    Create a .env file in the root directory and add the following: 
    JWT_SECRET_KEY = e.g supersecretkeyxxxxxxxx 
    ATLAS_URI=<your_mongodb_uri>

## API Endpoints:
   Register user : http://localhost:5000/api/users/register
   Login User : http://localhost:5000/api/users/login
   Get Single User : http://localhost:5000/api/users/find/your_user_id
   Get All users : http://localhost:5000/api/users

## Author:
  # Yahya Ahmad -(Yax-coder)
