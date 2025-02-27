const express = require('express');
const router = express.Router();

// Página inicial
router.get('/', (req, res) => {
    res.render('index', { title: 'Cores do Pulso' });
});

module.exports = router;
