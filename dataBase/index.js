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
    request.query(`select ui.Name, oh.DateOfOrder, oh.SumToPay, oh.Bill
                    from OrderHeader oh
                    join Booking b on b.Bill = oh.Bill
                    join UserInfo ui on oh.UserInfoID = ui.UserInfoID`, (err, result) => {
        if (err){
            console.error(err);
        }else{
            console.log(result.recordset)
        }
    });
});
