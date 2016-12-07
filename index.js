(function () {
    var $area1 = $(".area1").melCoreSpinner();

    var $area2 = $(".area2").melCoreSpinner({
            DefaultValue: 1 
        });

    var $area3 = $(".area3").melCoreSpinner({ 
        Max: 5, 
        Min: 1, 
    });

    var $area4 = $(".area4").melCoreSpinner({ 
        Max: 42, 
        Min: 1, 
        DefaultValue: 21,
        CallBackPlus:function(r){
            alert("Click Plus value= "+r);
        }, 
        CallBackMinus:function(r){
            alert("Click Minus value= "+r);
        }
    });
    
    var $area5 = $(".area5").melCoreSpinner({
        Max: 45,
        Min: 41, 
        DefaultValue: 40, 
        Width: "150px" 
    });

} ());
