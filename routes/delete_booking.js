module.exports = function (req, res, next) {
    let bookingId = req.params.booking_id;
    console.log(bookingId);

    const sql = require('mssql');

    const pool = new sql.ConnectionPool({
        user: 'cuprum',
        password: 'ginger',
        server: 'DESKTOP-9P4Q99S',
        database: 'OnlineCafe',
        port:'18842'
    });

    pool.connect(err => {
        console.error(err);
        let request = new sql.Request(pool);
        request.query(`delete from Booking 
                        where BookingID = ${bookingId}`, (err, result) => {
            if (err){
                console.error(err);
            } else{
                res.sendStatus(200);
            }
        });
    });
};
