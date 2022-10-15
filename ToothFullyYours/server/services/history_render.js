// Check

const axios = require('axios');

exports.history = (req, res) =>{
    // Make a get request to /api/history
    axios.get("http://localhost:5000/history-data")
        .then(function(response){
            res.render('history', {history: response.data});
        })

    .catch(err =>{  
        res.send(err);
    })


}

exports.add_history = (req, res) =>{
    res.render('add_history');
}

exports.update_history = (req, res) =>{
    axios.get("http://localhost:5000/history", {params:{id:req.query.id}})
        .then(function(historydata){
            res.render("update_history", {history: historydata.data})
        })
    .catch(err =>{
        res.send(err);
    })

}