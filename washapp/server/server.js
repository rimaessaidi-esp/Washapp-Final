const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const { testConnection } = require('./database');
const { Appointment } = require('./models/appointment');

//for json parsing
app.use(express.json());

//to go to the server path
app.get('/', (req, res) => {
  res.send('Hello from the Node.js server!');
});

//to connect to the server via port 3000 including connectivity testing
const port = 3000;
app.listen(port, async () => {
  try {
    await testConnection();
    console.log('Database connection successful.');
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
});

// API endpoint for booking an appointment
app.post('/book-appointment', async (req, res) => {
  const { customerId, dateTime } = req.body;

  try {
    // Creation of a new appointment in the appointments table
    const appointment = await Appointment.create({
      user_id: customerId,
      appointment_date: dateTime.date,
      appointment_time: dateTime.time,
    });

    res.status(201).json({ message: 'Appointment created successfully' });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ error: 'Failed to create appointment' });
  }
});

// API endpoint for retrieving user appointments
app.get('/user-appointments/:customerId', async (req, res) => {
  const { customerId } = req.params;

  try {
    // Fetching appointments for the specified customer from the appointments table
    const appointments = await Appointment.findAll({
      where: {
        user_id: customerId,
      },
    });

    res.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
});