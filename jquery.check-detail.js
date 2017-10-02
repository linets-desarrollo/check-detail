;
(function ($) {
    $.fn.checkDetail = function () {
        var showCheckedOption = function ($element) {
            var key = $element.data('key');

            if ($element.is(':checked')) {
                $('[data-check-detail="' + key + '"]').show();
            } else {
                $('[data-check-detail="' + key + '"]').hide();
            }
        };

        return this.each(function (index, element) {
            var $element = $(element);

            $element.addClass('check-detail-active');

            $element.on('change', function () {
                showCheckedOption($element);
            });

            $element.change();
        });
    };
}(jQuery));