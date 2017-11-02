//index.js acts like a traffic cop to handle all the initialization of wiring up all those operation that need to be done.
(function(controllers){
    var homeController = require("./homeController");
        controllers.init = function(app){
            homeController.init(app);
        }
    
    })(module.exports);