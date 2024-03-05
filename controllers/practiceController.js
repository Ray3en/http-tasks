const axios = require('axios')
const crypto = require('crypto')

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
    hashDataMp(req, res) {
        const ct = (req.get('Content-Type') || '').toLowerCase()
        if (!ct.startsWith('multipart/form-data;')) {
            error(res, 'Wrong Content-Type')
        } else {
            const secretKey = 'p6Wi0%|D?ho2j@XmTv}LMaN}BDd}t#FH'
            const hash = crypto
                .createHmac('sha256', secretKey)
                .update(JSON.stringify(req.body))
                .digest('hex')
            success(res, { hash })
        }
    }
    hashDataJson(req, res) {
        if ((req.get('Content-Type') || '').toLowerCase() !== 'application/json') {
            error(res, 'Wrong Content-Type')
        } else {
            const secretKey = '1aJ3vy#GIOOmPZYtZ*4SR2~pF#u7Q*wz'
            const hash = crypto
                .createHmac('sha256', secretKey)
                .update(JSON.stringify(req.body))
                .digest('hex')
            success(res, { hash })
        }
    }
    async corsProxy(req, res) {
        if (!req.query.url) {
            error(res, 'Empty url')
        } else {
            try {
                const resp = await axios.get(req.query.url, {
                    transformResponse: []
                })
                res.status(resp.status).type(resp.headers['content-type']).send(resp.data)
            } catch (e) {
                error(res, e.message)
            }
        }
    }
}

module.exports = new PracticeController()
