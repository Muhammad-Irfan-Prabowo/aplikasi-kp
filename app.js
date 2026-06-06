const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(`
        <div style="text-align: center; font-family: Arial, sans-serif; margin-top: 50px;">
            <h1 style="color: #34a853;">Contoh Penerapan Cloud Computing - Dicoding Kampus Merdeka</h1>
            <h2>Aplikasi Web Berhasil Dideploy di Cloud Computing!</h2>
            <hr style="width: 50%; margin: 20px auto;">
            <p><strong>Nama:</strong> [Muhammad Irfan Prabowo]</p>
            <p><strong>Program:</strong> Cloud Computing - MSIB Dicoding</p>
            <p><strong>Status Server:</strong> Aktif & Berjalan Lancar</p>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`Aplikasi berjalan di http://localhost:${PORT}`);
});