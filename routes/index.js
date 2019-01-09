module.exports = function (app) {
    app.get(['/', '/index'], require('./main'));
    app.get('/orders', require('./show_orders'));
    app.get('/add_order', require('./add_order_page'));

    app.post('/delete_order/:order_id', require('./delete_order'));
    app.post('/new__user', require('./addNewValue'));
};
