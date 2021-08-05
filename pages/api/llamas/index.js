// import { llamas } from '../../../data'
const fs = require('fs');

export default function handler(req, res) {
  console.log('api path: ' + __dirname);
  let rawData = fs.readFileSync('./llamas.json');
  let llamas = JSON.parse(rawData);
  res.status(200).json(llamas);
}
