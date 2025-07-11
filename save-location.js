export default function handler(req, res) {
  if (req.method === 'POST') {
    const { lat, lon } = req.body;
    console.log(`📌 موقع جديد: Latitude=${lat}, Longitude=${lon}`);
    res.status(200).json({ message: '📍 تم استلام الموقع بنجاح' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
