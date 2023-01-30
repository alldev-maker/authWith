export default function handler(req, res) {
  const { users } = req.query
  res.end(`Post: ${users}`)
}