const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.set('Content-Type')
// GET requests to the /api/days/:day route responds with content type text/plain, as described in the example above

app.get('/', (request, response) => {
  response.status(200);
  response.type('text/plain');
  response.send('Go to /api/days/ and type in a day of the week after the last slash to get a number!');
})

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



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The app is running on port ${port}`);
});
