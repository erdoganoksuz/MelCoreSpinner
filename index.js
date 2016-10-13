$.fn.extend({
    melCoreSpinner: function (options) {
        var $scope = this.each(function () {
            $(this).html(['<div class="melcore-spinner">',
                '<span class="minus">-</span>',
                '<input class="count" disabled type="number"', options && options.DefaultValue ? ('value="' + options.DefaultValue + '"') : "", '/>',
                '<span class="plus">+</span>',
                '</div>'
            ].join(" "));
        });
        $scope.find(".plus").off("click").on("click", function () {
            if (options && Number(options.Max) > (Number($(this).prev().val()))) {
                $(this).prev().val(Number($(this).prev().val()) + 1);
            }
        });
        $scope.find(".minus").off("click").on("click", function () {
            if (options && Number(options.Min) < (Number($(this).next().val()))) {
                $(this).next().val(Number($(this).next().val()) - 1);
            }
        });
        return $scope.find("input");
    }
});

(function(){
    $(".area1").melCoreSpinner({Max:99,Min:1,DefaultValue:32});
    $(".area1").melCoreSpinner({Max:13,Min:1,DefaultValue:9});
    $(".area1").melCoreSpinner({Max:5,Min:1,DefaultValue:2});
    $(".area1").melCoreSpinner({Max:42,Min:1,DefaultValue:21});
    $(".area1").melCoreSpinner({Max:45,Min:41,DefaultValue:40});
}());