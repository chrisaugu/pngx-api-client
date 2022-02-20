

export default async function handler(req, res) {
  const { id } = req.query;

  // res.status(200).json({ name: 'John Doe' })

  const response = await fetch(`http://localhost:5000/api/historicals/${id}`);
  
  if (response.ok) {
    const r = await response.json();
    res.status(200).json(r);
  }
  else {
    res.status(500).json({ 
      statusCode: 500,
      message: `Fetch to the API failed with code: ${response.status}`
    });
  }
}
