module.exports = function (req, res, next) {
    let name = req.body.add__name,
        dateOfReg = req.body.add__date,
        isAdmin = req.body.add__admin;


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
        request.query(`INSERT into [dbo].[UserInfo] ([Name], [DateOfRegistration], [IsAdmin])
         VALUES (\'${name}\', getdate(), ${isAdmin})`, (err, result) => {
            if (err){
                console.error(err);
            } else{
                console.log("successfully added user");

                res.redirect("/add_order");
            }
        });
    });
};
