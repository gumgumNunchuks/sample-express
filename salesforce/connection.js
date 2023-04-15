const salesforce = require('jsforce')

const conn = new salesforce.Connection({
    loginUrl: 'https://forcecom-4fc-dev-ed.develop.my.salesforce.com'
})

conn.login('gumgum@force.com', 'A$#win1236htTJg2gmUbB7xSfJPttruwLS', (err, res) => {
    if (err) {
        console.log("Error Occurred")
        console.log(err)
        return
    }
    console.log("User ID: " + res.id);
    console.log("Org ID: " + res.organizationId);
})


module.exports = {
    conn
}