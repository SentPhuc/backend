
class NewsController{
    //Get page news 
    index(req, res){
        res.render('news');
    }

    //Show detail news
    show(req, res){
        res.send('News detail');
    }
}

module.exports = new NewsController;