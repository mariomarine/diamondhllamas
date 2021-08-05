//import { llamas } from '../../../data'
const fs = require('fs');

export default function llamaHandler(req, res) {
  let filepath = './llamas.json'
  let rawData = fs.readFileSync(filepath);
  let llamas = JSON.parse(rawData);

  const filtered = llamas.filter((l) => l.for_sale === 'Y')

  if (filtered.length > 0) {
    res.status(200).json(filtered)
  } else {
    res.status(404).json({ message: 'No Llamas for sale found' })
  }
}
