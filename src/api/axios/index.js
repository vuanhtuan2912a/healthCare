import axios from 'axios';

const api = axios.create({
  baseURL: 'https://restful-booker.herokuapp.com',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

api
  .post('/auth')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
