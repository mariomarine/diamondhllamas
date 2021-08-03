import { llamas } from '../../../data'

export default function llamaHandler({ query: { id } }, res) {
  const filtered = llamas.filter((l) => l.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Llama with id: ${id} not found.` })
  }
}
