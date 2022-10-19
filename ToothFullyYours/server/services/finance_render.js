const axios = require('axios');
const { render } = require('ejs');

exports.finance = (req, res) =>{
    // Make a get request to /api/employee
    axios.get("http://localhost:5000/api/finance")
        .then(function(response){
            res.render('finance-table', {finance: response.data});
        })

    .catch(err =>{  
        res.send(err);
    })

}

exports.addFinance = (req, res) =>{
    res.render('finance');
}

exports.viewFinance = (req, res) =>{
    axios.get("http://localhost:5000/api/finance", {params:{id:req.query.id}})
        .then(function(financedata){
            res.render("view_finance", {finance: financedata.data})
        })
    .catch(err =>{
        res.send(err);
    })

}