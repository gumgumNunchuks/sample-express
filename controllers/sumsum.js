const salesforce = require('../salesforce')

async function getSumSums(req, res) {
    result = await salesforce.query("SELECT Name, SumMessage__c  FROM SumSum__c");
    console.log(result)
    return res.send(result.records)
}

async function postSumSums(req, res) {
    console.log("Posting a sumsum")
    const name = req.params.name
    const sumsum = req.params.sumsum
    salesforce.sobject('SumSum__c').create({
        Name: name,
        SumMessage__c: sumsum
    }, (err, res) => {
        if (err || !res.success) { return console.error(err, res); }
        console.log("Created record id : " + res.id);
    })
    return res.send()
}

module.exports = {
    getSumSums,
    postSumSums
}