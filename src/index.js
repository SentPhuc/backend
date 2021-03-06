const express = require('express');
var path = require('path');
var morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes');
const { Route } = require('express');
const app = express();
const port = 3000;

/*URL static*/
app.use(express.static(path.join(__dirname, 'public')));

/*HTTP logger */
app.use(morgan('combined'));

/* Template Emgine */
const optionHandleBars = {
  extname: '.hbs',
  partialsDir :path.join(__dirname, 'resources/views/layouts/partials')
};

app.engine('hbs', handlebars(optionHandleBars));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})