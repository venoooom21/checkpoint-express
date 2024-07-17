const express = require('express');
const path = require('path');
const checkWorkingHours = require('./middleware');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(checkWorkingHours);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});