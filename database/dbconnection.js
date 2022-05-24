const mongoose = require('mongoose');
const config=require('../config');


const dbconnection=mongoose.connect(config.database_uri,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(function(){
        console.log('Database connection successful');
    }).catch(function(err){
        console.log('Database connection failed', err);
      
    });

  module.exports = dbconnection;