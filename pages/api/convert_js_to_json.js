import { llamas } from '../../data'
const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '../../../../llamas.json')

export default function handler(req, res) {
  console.log(filePath);
  let llama_json = JSON.stringify(llamas)
  console.log(llama_json);
  fs.writeFileSync(filePath, llama_json);
  res.status(200).json({message: "done?"});
}
