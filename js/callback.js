(function(){      
    
    var funcA = function(){
        console.log("Func A");
    };

    var funcB = function(fx){
        console.log("Init");
        fx();
        console.log("Done.");
    }

    funcB(funcA);

}());