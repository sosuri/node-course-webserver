const express = require('express');
const hbs = require('hbs');
const app = express();

const port = process.env.PORT || 3000
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('getProjectsMsg', (text) => {
    return 'Hello '+ text;
});

app.get('/', (req, res) => {
    res.render('welcome.hbs', {
        pageTitle: 'Welcome',
        welcomeMsg: 'We would like to welcome you.',
        year: new Date().getFullYear()
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About'
    });
});

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle: 'Projects',
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to process the request.'
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});