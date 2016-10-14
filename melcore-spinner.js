$.fn.extend({
    melCoreSpinner: function (options) {
        var $scope = this.each(function () {
            $(this).html(['<div class="melcore-spinner">',
                '<span class="minus">-</span>',
                '<input', (options && options.Width ? ('style="width:' + options.Width + '"') : ""),
                'class="count" disabled type="number"',
                (options && options.DefaultValue ? ('value="' + options.DefaultValue + '"') : ""), '/>',
                '<span class="plus">+</span>',
                '</div>'
            ].join(" "));
        });
        $scope.find(".plus").off("click").on("click", function () {
            if (options && options.Max) {
                if (Number(options.Max) > (Number($(this).prev().val()))) {
                    $(this).prev().val(Number($(this).prev().val()) + 1);
                }
            }
            else {
                $(this).prev().val(Number($(this).prev().val()) + 1);
            }

            options && options.CallBackPlus ? options.CallBackPlus($(this).prev().val()) : null;
        });
        $scope.find(".minus").off("click").on("click", function () {
            if (options && options.Min) {
                if (Number(options.Min) < (Number($(this).next().val()))) {
                    $(this).next().val(Number($(this).next().val()) - 1);
                }
            }
            else {
                $(this).next().val(Number($(this).next().val()) - 1);
            }

            options && options.CallBackMinus ? options.CallBackMinus($(this).next().val()) : null;
        });
        return $scope.find("input");
    }
});