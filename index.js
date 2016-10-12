$.fn.extend({
    melCoreSpinner: function(options) {
        var $scope = this.each(function() {
            $(this).html(['<div class="melcore-spinner">',
                '<span class="minus">-</span>',
                '<input disabled class="count" type="number" value="0"/>',
                '<span class="plus">+</span>',
                '</div>'
            ].join(" "));
        });
        $scope.find(".plus").off("click").on("click", function() {
          if(options && Number(options.Max)>(Number($(this).prev().val()))){
            $(this).prev().val(Number($(this).prev().val()) + 1);
          }
        });
        $scope.find(".minus").off("click").on("click", function() {
            if(options && Number(options.Min)<(Number($(this).next().val()))){
              $(this).next().val(Number($(this).next().val()) - 1);
            }
        });
    }
});

(function() {



    $(".spinner-area").melCoreSpinner({Min:-1,Max:10});
}())
