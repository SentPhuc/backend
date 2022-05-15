const siteRouter = require('./site');
const newsRouter = require('./news');
function route(app){
    app.use('/',siteRouter);
    
    // app.get('/news', (req, res) => {
    //   res.render('news');
    // });

    app.use('/news',newsRouter);
    
    app.get('/search', (req, res) => {
      res.render('search');
    });
}

module.exports = route;