export default function handler(req, res) {
    // Pastikan hanya menerima method POST untuk proses checkout
    if (req.method === 'POST') {
        const cartData = req.body;
        
        // Di sini backend Anda bisa memproses data pesanan, total harga, dll.
        console.log("Pesanan diterima:", cartData);

        return res.status(200).json({
            success: true,
            message: "Pesanan berhasil diproses oleh backend Vercel!",
            orderId: "INV-" + Math.floor(Math.random() * 100000),
            data: cartData
        });
    } else {
        // Jika diakses selain POST
        return res.status(405).json({ message: "Method not allowed" });
    }
}
