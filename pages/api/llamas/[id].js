// import { llamas } from '../../../data'
const fs = require('fs');

//export default function llamaHandler({ query: { id } }, res) {
export default function llamaHandler(req, res) {
  const { id } = req.query;
  let filepath = './llamas.json'
  let rawData = fs.readFileSync(filepath);
  let llamas = JSON.parse(rawData);

  if (req.method == 'GET') {
    const filtered = llamas.filter((l) => l.id === id);

    if (filtered.length > 0) {
      res.status(200).json(filtered[0]);
    } else {
      res.status(404).json({ message: `Llama with id: ${id} not found.` });
    }
  } else if (req.method == 'POST') {
    const single_llama = llamas.filter((l) => l.id === id);
    let copy_llama = JSON.parse(JSON.stringify(single_llama));
    copy_llama = copy_llama[0];
    copy_llama.id = '4';
    llamas.push(copy_llama);
    fs.writeFileSync(filepath, JSON.stringify(llamas));
    res.status(200).json({ message: 'Check if llama posted' });
  } else {
    res.status(400).json({ message: 'Wrong method, must be GET or POST' });
  }
}
