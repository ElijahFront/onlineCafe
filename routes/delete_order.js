module.exports = function (req, res, next) {
    let orderId = req.params.order_id;
    console.log(orderId);

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
        request.query(`delete from UserInfo 
                        where UserInfoID = ${orderId}`, (err, result) => {
            if (err) console.error(err);
        });
    });
};
