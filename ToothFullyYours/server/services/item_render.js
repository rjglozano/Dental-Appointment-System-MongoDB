const axios = require('axios');


exports.inventory = (req, res) => {
    // Make a get request to /api/items
    axios.get('http://localhost:5000/api/items')
        .then(function(response){
            res.render('index', { items : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_item = (req, res) =>{
    res.render('add_item');
}

exports.update_item = (req, res) =>{
    axios.get('http://localhost:5000/api/items', { params : { id : req.query.id }})
        .then(function(itemdata){
            res.render("update_item", { item : itemdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}