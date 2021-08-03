import { llamas } from '../../../data'

export default function llamaHandler(req, res) {
  const filtered = llamas.filter((l) => l.sold === 'Y')

  if (filtered.length > 0) {
    res.status(200).json(filtered)
  } else {
    res.status(404).json({ message: 'No Llamas sold found' })
  }
}
