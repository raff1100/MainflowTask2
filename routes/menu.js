const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
    const menuItems = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/menuItems.json'), 'utf8'));
    res.render('menu', { title: 'Our Menu', menuItems: menuItems });
});

module.exports = router;