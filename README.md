# Washapp

Washapp is a web application that allows users to manage appointments. It provides functionalities to consult user appointments and book new appointments.

## Features

- View user appointments
- Book new appointments

## System Dependencies

To run this project, you'll need the following:

- Angular CLI version 12.2.4 or higher
- Node.js version 14.17.5 or higher
- Express (install using `npm install express`)
- MySQL (install using `npm install mysql`)
- CORS (install using `npm install cors`)
- Sequelize (install using `npm install sequelize`)

## Installation

1. Clone the project repository to your local machine (exp: htdocs for XAMPP):
git clone https://github.com/rimaessaidi-esp/Washapp-Final.git

or use a GitHub Client.

2. Create the database schema using the following SQL statements:

-- Schema for the "user" table

CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Schema for the "appointment" table

CREATE TABLE appointment (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

3. Navigate to the project's root directory.

4. Install the project dependencies using the following command:
`npm install`

## Running the Project

1. Make sure your MySQL database server is running.

2. Start the Angular server by running the following command:
`ng serve`

The Angular server will be accessible at `http://localhost:4200`.

3. Start the Node.js server by running the following command:
`node server.js`

The Node.js server will be accessible at `http://localhost:3000`.
