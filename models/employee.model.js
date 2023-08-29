const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    MessName: {
        type: String,
        
    
    },
    Menu: {
        type: String
    },
    Price: {
        type: String
    },
    Status: {
        type: String
    }
});

//  collection
mongoose.model('Employee', employeeSchema);