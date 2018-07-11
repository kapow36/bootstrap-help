(function ($)
{
    $.fn.bootstrapHelp = function ()
    {
        this.each(function ()
        {
            var _this = $(this);

            if (!_this.is("div"))
            {
                throw "bootstrap-help must be a div";
            }

            _this.data("toggle", "tooltip");
            _this.attr("tabindex", "10000");
            _this.empty();
            _this.append('<span class="glyphicon glyphicon-question-sign"></span>');
            _this.tooltip();
        });        
    };
}(jQuery));


$(document).ready(function ()
{
    $(".bootstrap-help").bootstrapHelp();
});
