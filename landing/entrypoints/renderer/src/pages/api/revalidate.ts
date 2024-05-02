export default async function handler(req, res) {
  if (req.query.secret !== process.env.REVALIDATE_DATA_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    await res.revalidate('/')
    await res.revalidate('/404')
    await res.revalidate('/contacts')
    await res.revalidate('/privacy-policy')

    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
