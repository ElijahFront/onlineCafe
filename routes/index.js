module.exports = function (app) {
    app.get(['/', '/index'], require('./main'));
    app.get('/bookings', require('./show_bookings'));
    app.get('/add_user', require('./add_user_page'));

    app.post('/delete_booking/:booking_id', require('./delete_booking'));
    app.post('/new__user', require('./addNewValue'));
};
