// config.js
const dotenv = require('dotenv');
if(process.env.NODE_ENV === 'development'){
  console.log("development config loaded")
  console.log(`../.env.${process.env.NODE_ENV}.local`)
  dotenv.config({path: '../.env.development.local'});
}
else if(process.env.NODE_ENV === 'production') {
  console.log("production config loaded")
  console.log(`../.env.${process.env.NODE_ENV}.local`)
  dotenv.config({path: '../.env.production.local'});
}
module.exports = {
  SERVER_IP: process.env.REACT_APP_SERVER_IP,
  SERVER_PORT: process.env.REACT_APP_SERVER_PORT
};
