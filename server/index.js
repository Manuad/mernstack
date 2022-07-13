const express = require('express');
const cors = require('cors');
const app = express();
const PhoneBook = require('./Models/PhoneBook.model');


app.use(express.json());
app.use(cors());
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//Connect to MongoDB
const mongoose = require('mongoose')
const DB = 'mongodb://localhost/phone-book'
mongoose.connect(DB, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})

//Creating data for book POST /api/phone-book

app.post('/api/add-phone', async (req, res) => {
  const phoneNumber = new PhoneBook(req.body);
  try {
    await phoneNumber.save();
    res.status(201).json({
      status: 'Success',
      data: {phoneNumber}
    });
  }
  catch (err) {
    res.status(500).json({
      status: 'Error',
      message: err
    });
  }
});

//Getting data for book GET /api/all-phones GET
app.get('/api/all-phones', async (req, res) => {
  const phoneNumbers = await PhoneBook.find({});
  try {
    res.status(200).json({
      status: 'Success',
      data: {phoneNumbers}
    });
  }
  catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: err
    });
  }
});

//Updating data for book PUT /api/update-phone/:id
app.put('/api/update-phone/:id', async (req, res) => {
  const phoneNumberUpdated = await PhoneBook.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
    runValidators: true
  });
  try {
    res.status(200).json({
      status: 'Success',
      data: {phoneNumberUpdated}
    });
  }
  catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: err
    });
  }
});

//Deleting data for book DELETE /api/delete-phone/:id
app.delete('/api/delete-phone/:id', async (req, res) => {
  const phoneNumberDeleted = await PhoneBook.findByIdAndDelete(req.params.id);
  try {
    res.status(200).json({
      status: 'Success',
      data: {phoneNumberDeleted}
    });
  }
  catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: err
    });
  }
});