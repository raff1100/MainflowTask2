const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const menuItems = [
    { name: 'Espresso', price: '$2.50', description: 'Strong and bold espresso.' },
    { name: 'Cappuccino', price: '$3.50', description: 'Espresso with steamed milk and foam.' },
    { name: 'Latte', price: '$3.50', description: 'Smooth espresso with steamed milk.' },
    { name: 'Mocha', price: '$4.00', description: 'Espresso with chocolate and steamed milk.' },
    { name: 'Americano', price: '$2.75', description: 'Espresso with hot water.' },
    { name: 'Macchiato', price: '$3.00', description: 'Espresso with a dollop of foam.' },
    { name: 'Tea', price: '$2.00', description: 'Various flavors of tea.' },
    { name: 'Hot Chocolate', price: '$3.00', description: 'Rich and creamy hot chocolate.' },
    { name: 'Iced Coffee', price: '$3.00', description: 'Chilled coffee served over ice.' },
    { name: 'Iced Latte', price: '$3.75', description: 'Iced espresso with milk.' },
    { name: 'Iced Mocha', price: '$4.25', description: 'Iced espresso with chocolate and milk.' },
    { name: 'Croissant', price: '$2.50', description: 'Buttery and flaky croissant.' },
    { name: 'Muffin', price: '$2.75', description: 'Blueberry or chocolate chip muffin.' },
    { name: 'Bagel', price: '$2.50', description: 'Plain, sesame, or everything bagel.' },
    { name: 'Sandwich', price: '$5.00', description: 'Ham, turkey, or veggie sandwich.' },
    { name: 'Salad', price: '$6.00', description: 'Fresh garden salad with dressing.' },
    { name: 'Soup', price: '$4.50', description: 'Tomato or chicken noodle soup.' },
    { name: 'Quiche', price: '$4.75', description: 'Spinach, cheese, and egg quiche.' },
    { name: 'Pastry', price: '$3.00', description: 'Assorted pastries.' },
    { name: 'Smoothie', price: '$4.50', description: 'Fruit smoothies with yogurt.' }
];

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/menu', (req, res) => {
    res.render('menu', { title: 'Menu', menuItems });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});