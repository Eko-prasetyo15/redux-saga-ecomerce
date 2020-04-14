const product = require('../models').product;

module.exports = {
    list(req, res) {
        return product
            .findAll({
                include: [],
                order: [
                    ['createdAt', 'DESC'],
                ],
            })
            .then((product) => res.status(200).send(product))
            .catch((error) => { res.send(error); });
    },
    add(req, res) {
        return product
            .create({
                title: req.body.title,
                rate: req.body.rate,
                description: req.body.description,
                price: req.body.price,
                brand: req.body.brand,
                detailproduct: req.body.detailproduct
            })
            .then((product) => res.status(200).send(product))
            .catch((error) => res.send(error));
    },
    update(req, res) {
        return product
            .findByPk(req.params.id)
            .then(product => {
                if (!barang) {
                    return res.status(404).send({
                        message: 'Product Not Found',
                    });
                }
                return product
                    .update({
                        title: req.body.title || product.title,
                        rate: req.body.rate || product.rate,
                        description: req.body.description || product.description,
                        price: req.body.price || product.price,
                        brand: req.body.brang || product.brand,
                        detailproduct: req.body.detailproduct || product.detailproduct,
                    })
                    .then((product) => res.status(200).send(product))
                    .catch((error) => res.send(error));
            })
            .catch((error) => res.send(error));
    },
    delete(req, res) {
        return product
            .findByPk(req.params.id)
            .then(product => {
                if (!product) {
                    return res.status(400).send({
                        message: 'Product Not Found',
                    });
                }
                return product
                    .destroy()
                    .then((product) => res.status(200).send(product))
                    .catch((error) => res.send(error));
            })
            .catch((error) => res.send(error));
    },
};