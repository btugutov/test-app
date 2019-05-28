const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicweb = process.env.PUBLICWEB || './dist';
var bodyParser = require('body-parser');

const jsonParser = require('body-parser').json();
app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(express.static(publicweb));
console.log(`serving ${publicweb}`);
app.use(bodyParser.urlencoded({ extended: true }));
const session = require('express-session');
app.use(session({
    secret: 'blablabla',
    saveUninitialized: false,
    resave: true,
    cookie: {
        path: "/",
        maxAge: 3600000
    }
}));
var routes_setter = require('./routes/routes.js');
routes_setter(app);
app.get('*', (req, res) => {
    res.sendFile(`index.html`, { root: publicweb });
});




app.listen(port, () => console.log(`listening on http://localhost:${port}`));