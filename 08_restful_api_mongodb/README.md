# Experiment 08: RESTful API with MongoDB

This project implements a basic RESTful API for User data using Express and Mongoose.

## Requirements

- Node.js
- MongoDB running locally at mongodb://127.0.0.1:27017

## Setup

1. Install dependencies:
   npm install

2. Start the server:
   npm run dev

   or

   npm start

3. Server runs on:
   http://localhost:5000

## API Endpoints

- POST /users
- GET /users
- GET /users/:id
- PUT /users/:id
- DELETE /users/:id

## Example JSON body for create and update

{
  "name": "Devang",
  "age": 21
}
