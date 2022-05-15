
class SiteController{
    //Get page news 
    home(req, res){
        res.render('home');
    }

    //Show detail news
    search(req, res){
        res.render('search');
    }
}

module.exports = new SiteController;