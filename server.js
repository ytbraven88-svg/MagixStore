const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk membaca file statis
app.use(express.static(path.join(__dirname)));

// Endpoint backend contoh untuk proses checkout/transaksi di masa depan
app.post('/api/checkout', (express.json()), (req, res) => {
    const cartData = req.body;
    // Logika backend untuk memproses pesanan bisa ditaruh di sini nanti
    res.json({ success: true, message: "Pesanan berhasil diterima oleh backend!" });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});