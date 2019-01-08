const sql = require('mssql');

require("msnodesqlv8");
const conn = new sql.Connection({
    database: "OnlineCafe",
    server: "DESKTOP-9P4Q99S\\SQLEXPRESS",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});
conn.connect().then(() => {
    // ... sproc call, error catching, etc
    // example: https://github.com/patriksimek/node-mssql#request
});

// async () => {
//     try {
//         await sql.connect('mssql://username:password@localhost/database')
//         const result = await sql.query`select * from mytable where id = ${value}`
//         console.dir(result)
//     } catch (err) {
//         // ... error checks
//     }
// }