
class RegauthController{
    users(req,res){
        const { login, password } = req.body;

        if (login && password) {
          res.status(200).json({ user_id: 12345 });
        } else {
          res.status(400).send('Что-то не так с запросом');
        }
    }
}

module.exports = new RegauthController()