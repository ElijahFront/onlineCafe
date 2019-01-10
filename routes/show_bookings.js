module.exports = function (req, res, next) {
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
        request.query(`select b.BookingID, b.CafeTableID, b.StartTime, b.EndTime, o.TotalSum 
from Booking b join OrderDetail o on b.Bill = o.Bill`, (err, result) => {
            if (err){
                console.error(err);
            }else{
                res.render('bookings', {bookings:result.recordset})
            }
        });
    });

};
