const express = require('express');
const hbs = require('hbs');
const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
// app.get('/', (req, res) => {
//     res.send({
//         name: 'sourabh',
//         likes: [
//             'food',
//             'travel'
//         ]
//     });
// });
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
    //return 'blah';
})
app.get('/', (req, res) => {
    res.render('welcome.hbs', {
        welcomeMsg: 'We would like to welcome you.',
        year: new Date().getFullYear()
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        year: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to process the request.'
    });
});





app.listen(3000);