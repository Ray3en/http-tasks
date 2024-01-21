
class HeadersController{
    referer(req, res){
        const refererHeader = req.get('Referer');
        if (refererHeader === 'https://example.com') {
          res.status(200).type('text/plain').send('0451');
        } else {
          res.status(400).type('text/plain').send('Неверно указан заголовок Referer');
        }
    }
    contentType(req,res){
        const contentTypeHeader = req.get('Content-Type');
      
        if (contentTypeHeader === 'text/plain') {
          res.status(200).type('text/plain').send('7301');
        } else {
          res.status(400).type('text/plain').send('Неверно указан заголовок Content-Type');
        }
    }
    contentLength(req,res){
        res.status(200).type('text/plain').send('hello developer')
    }
    simpleCache(req,res){
        res.set('Cache-Control', 'max-age=300');
        res.status(200).type('text/plain').send('Caching is Awesome');
    }
}

module.exports = new HeadersController()