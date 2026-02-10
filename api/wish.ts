
export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // Must return 200
  }

  // 3️⃣ Handle actual POST
  if (req.method === 'POST') {
    try {
      const gasUrl = 'https://script.google.com/macros/s/AKfycbzUL2aV8yLPpMLd1YmoKsAGUUQgqEKO-qCrymtJVc6nVIZ_xfKEi25nTm-2l3uucM5t/exec'; // your GAS URL
      const response = await fetch(gasUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      });
      const text = await response.text();
      return res.status(200).send(text);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Proxy failed' });
    }
  }

  // 4️⃣ Anything else → method not allowed
  return res.status(405).json({ error: 'Method not allowed' });

  try {
    const gasResponse = await fetch(
      'https://script.google.com/macros/s/AKfycbzUL2aV8yLPpMLd1YmoKsAGUUQgqEKO-qCrymtJVc6nVIZ_xfKEi25nTm-2l3uucM5t/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
      }
    );

    const text = await gasResponse.text();
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: 'Proxy failed' });
  }
}
