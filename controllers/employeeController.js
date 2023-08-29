 const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');


router.get('/service',(req,res)=>{
    res.render('employee/service');
   });

   router.get('/about',(req,res)=>{
    res.render('employee/about');
   });

   router.get('/',(req,res)=>{
    res.render('employee/front');
   });

   
   
router.get('/addOrEdit', (req, res) => {
    res.render("employee/addOrEdit", {
        viewTitle: "Insert Mess Menu"
    });
});



router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});


function insertRecord(req, res) {
    var employee = new Employee();
    employee.MessName = req.body.MessName;
    employee.Menu= req.body.Menu;
    employee.Price = req.body.Price;
    employee.Status = req.body.Status;
    employee.save((err, doc) => {
        
            if (!err)
            res.redirect('employee/list');
            
             else
             console.log('Error during record insertion : ' + err);
        
    });
}

function updateRecord(req, res) {
    Employee.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
         if (!err) { res.redirect('employee/list'); }
        
            else
            console.log('Error during record update : ' + err);
            
        
    });
}


router.get('/list', (req, res) => {
    Employee.find((err, docs) => {
         if (!err) {
            res.render("employee/list", {
                list: docs
            });
         }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
});

router.get('/student', (req, res) => {
    Employee.find((err, docs) => {
         if (!err) {
            res.render("employee/student", {
                list: docs
            });
         }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
});




router.get('/:id', (req, res) => {
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("employee/addOrEdit", {
                viewTitle: "Update Menu",
                employee: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
         if (!err) {
            res.redirect('/employee/list');
         }
         else { console.log('Error in employee delete :' + err); }
    });
});

module.exports = router;