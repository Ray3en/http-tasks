
class HttpController{
    sample(req, res){
        res.type('text/plain');
        res.send('3333');
    }
    css(req, res){
        res.type('text/css');
        res.send('body {color: green}');
    }
}

module.exports = new HttpController()