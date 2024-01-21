
class ApiController{
    cookiesGet(req,res){
        res.set('Set-Cookie', 'user_id=2222');
        res.status(200).send();
    }
    cookiesAuth(req,res){
        const cookieHeader = req.get('Cookie');
        if (cookieHeader && cookieHeader.includes('name=monster')) {
            res.status(200).json({ code: 9867 });
        } else {
            res.status(400).json({ error: '' });
        }
    }
    tokensAuth(req,res){
        const { login, password } = req.body;
        const contentType = req.get('Content-Type');
        if (login === 'async' && password === 'letmein' && contentType && contentType.toLowerCase() === 'application/json') {
          res.status(200).json({ token: '0304' });
        } else {
          res.status(400).type('text/plain').send('');
        }
    }
    tokenList(req,res){
        const { token, s } = req.body;
        if (token === 'abcd' && req.get('Content-Type') === 'application/json') {
            res.status(200).type('text/json').json(['cookies', 'coffee']);
        } else {
          res.status(401).send('Unauthorized');
        }
    }
    tokenProfile(req,res){
        const authorizationHeader = req.get('Authorization');
        const userProfile = {
            email: 'async@domain.com',
            name: 'Alex Async'
        };
        if (authorizationHeader) {
          const [bearer, token] = authorizationHeader.split(' ');
          if (bearer.toLowerCase() === 'bearer' && token === 'abcd') {
            res.status(200).json(userProfile);
          } else {
            res.status(401).send('Unauthorized');
          }
        } else {
          res.status(401).send('Unauthorized');
        }
    }
    corsGetOrigins(req,res){
        res.header('Access-Control-Allow-Origin', 'curious_monkeys.me');
        res.header('Allow-Origins', 'curious_monkeys.me');
        res.status(200).json({});

    }
}

module.exports = new ApiController()