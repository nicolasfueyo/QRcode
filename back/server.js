const express = require('express');
const app = express();

let counter = 0;

// Middleware pour servir les fichiers statiques (comme index.html)
app.use(express.static(__dirname));

// Endpoint pour incrémenter le compteur
app.get('/qr-scanned', (req, res) => {
    // Incrémentez le compteur
    counter++;

    // Redirigez vers index.html
    res.redirect('/index.html');
});

// Endpoint pour obtenir le compteur actuel
app.get('/counter', (req, res) => {
    res.send(`Le nombre de personnes ayant scanné le QR code est : ${counter}`);
});

// Démarrez le serveur sur le port 3000
app.listen(3000, () => {
    console.log('Serveur en cours d\'exécution sur le port 3000');
});
