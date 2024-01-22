const {randomError} = require('../utils')

class ExampleController{
    checkAvailability(req, res) {
        if (randomError(0.1)) {
            res.status(404).json({ error: 'Все грумеры заняты' });
        } else {
            res.status(200).json({ id: req.query.id, availableQuantity: 2 });
        }
    }

    reserve(req, res) {
        if (randomError(0.1)) {
            res.status(503).json({ error: 'Бронирование услуги временно недоступно' });
        } else {
            res.status(200).json({ orderId: Math.floor(Math.random() * 10000), animalId: req.query.id });
        }
    }

    appointment(req, res) {
        if (randomError(0.1)) {
            res.status(503).json({ error: 'Назначение даты временно недоступна' });
        } else {
            let estimatedDeliveryDate = new Date();
            estimatedDeliveryDate.setDate(estimatedDeliveryDate.getDate() + 3);
            res.status(200).json({ estimatedDeliveryDate: estimatedDeliveryDate.toISOString().split('T')[0], orderId: req.query.orderId });
        }
    }
}

module.exports = new ExampleController()
