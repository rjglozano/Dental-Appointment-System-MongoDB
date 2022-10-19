
var Financedb = require('../model/finance_model');
const NewUserdb = require('../model/login_model');

exports.insertRecord = (req,res)=> {


    var finance = new Financedb();
    
        finance.currentMonth =req.body.month;
    
        finance.patientRevenue=req.body.patientRev1;
        finance.totalIncome=req.body.totalInc1;
    
        finance.grossProfit=req.body.gp1;
    
        finance.dentalSupplies=req.body.dps1;
        finance.laboratoryfee=req.body.labfee1;
        finance.staffPayroll=req.body.payroll1;
        finance.Marketing=req.body.marketing1;
        finance.rent=req.body.rent1;
    
        finance.generalAdmin=req.body.admin1;
        finance.totalExpense=req.body.totalexpense1;
        finance.interestIncome=req.body.interestInc1;
    
        finance.totalOtherIncome=req.body.otherIncome1;
        finance.otherExpenses=req.body.otherExpense1;
        finance.totalOtherExpenses=req.body.totalOEx1;
    
        finance.netIncome=req.body.netInc1;
    
        finance
        .save(finance)
        .then(data =>{
            // res.send(data)
            res.redirect("/finance");
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            });
        });

    
}

exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Financedb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found item with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error retrieving item with id " + id})
            })

    }else{
        Financedb.find()
            .then(item => {
                res.send(item)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retrieving item information" })
            })
    }

    
}
    

exports.update = (req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({message:"Data to update can not be empty"})
            
    }

    const id = req.params.id;
    Financedb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
        .then(data =>{
            if(!data){
                res.status(404).send({message: `Cannot Update finance with ${id}. Maybe finance not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message: "Error Update finance information"})
        })
    
}

exports.delete = (req,res)=>{
    const id = req.params.id;
 
    Financedb.findByIdAndDelete(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message: `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message: "Finance was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete Finance with id=" + id
            });
        });
}

