const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}

const getRandomString = (len, alpha='abcdef0123456789') => {
    const a = new Array(len)
    for (let i = 0; i < len; i++) {
        a[i] = alpha[getRandomNumber(0, alpha.length)]
    }
    return a.join('')
}

const error = (res, message='') => {
    res.status(400).type('text/plain').send(message)
}
const success = (res, data) => {
    res.status(200).json(data)
}

class PracticeController {
    jsonLogin(req, res) {
        if ((req.get('Content-Type') || '').toLowerCase() !== 'application/json') {
            error(res, 'Wrong Content-Type')
        } else if (req.body.login === 'async' && req.body.password === 'letmein') {
            success(res, { token: getRandomString(32) })
        } else {
            error(res, 'Wrong login/password')
        }
    }
    fdLogin(req, res) {
        if ((req.get('Content-Type') || '').toLowerCase() !== 'application/x-www-form-urlencoded') {
            error(res, 'Wrong Content-Type')
        } else if (req.body.login === 'async' && req.body.password === 'letmein') {
            success(res, { token: getRandomString(32) })
        } else {
            error(res, 'Wrong login/password')
        }
    }
    balance(req, res) {
        if (req.query.error === '1') {
            error(res)
        } else if (req.get('Authorization') === 'Bearer e4bc91c5502df25048d8fb69cc167f52') {
            success(res, { balance: getRandomNumber(0, 1_000_000) })
        } else {
            error(res, 'Wrong token')
        }
    }
    anyData(req, res) {
        if (req.query.error === '1') {
            error(res)
        } else {
            success(res, { data: getRandomNumber(0, 1_000_000) })
        }
    }
}

module.exports = new PracticeController()
