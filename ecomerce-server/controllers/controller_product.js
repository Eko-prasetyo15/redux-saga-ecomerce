const Product = require("../models").Product;
const view = require("../view/view");

class ControllerProduct {
    static add(title, rate, description, price, brand, detail) {
        models.Product.create({
            title: title,
            rate: rate,
            description: description,
            price: price,
            brand: brand,
            detail: detail

        })
            .then(data => {
                view.messageSuccess(data);
            })
            .catch(err => {
                view.messageErr(err.message);
            });
    }

    static read() {
        models.Product.findAll()
            .then(dataAllProduct => {
                dataAllProduct.forEach(data => {
                    view.messageSuccess(data.dataValues);
                });
            })
            .catch(err => {
                view.messageErr(err.message);
            });
    }

    static update(title, rate, description, price, brand, detail) {
        models.Product.update({

        }, {
            where: {
                id: id,
                title: title,
                rate: rate,
                description: description,
                price: price,
                brand: brand,
                detail: detail
            }
        })
            .then(() => {
                view.messageSuccess(`Data with id ${id} success to updated`);
            })
            .catch(err => {
                view.messageErr(err.message);
            });
    }

    static delete(id) {
        models.Product.destroy({
            where: {
                id: id
            }
        })
            .then(() => {
                view.messageSuccess(`Data with id ${id} success deleted`);
            })
            .catch(err => {
                view.messageErr(err.message);
            });
    }
}

module.exports = ControllerProduct;