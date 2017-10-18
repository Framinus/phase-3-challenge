const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// get route - returns number corresponding to day of week entered.
app.get('/api/days/:day', (request, response) => {
  const day = request.params.day;
  const daysOfWeek = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7
  };
  if (daysOfWeek[day] !== undefined) {
    response.status(200);
    response.type('text/plain');
    response.send(daysOfWeek[day].toString());
  } else {
  response.status(400);
  response.type('text/plain');
  response.send(`${day} is not a day of the week!`);
  }
});

// post route - returns a concated array from two arrays sent in request body.
app.post('/api/array/concat', (request, response) => {
  const { array1, array2 } = request.body;
  if (Array.isArray(array1) && Array.isArray(array2)) {
    const results = array1.concat(array2);
    response.status(200);
    response.type('application/json');
    response.send({ results });
  } else {
    response.status(400);
    response.type('application/json');
    response.send({ "Error":"Input data should be of type array." });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The app is running on port ${port}`);
});
