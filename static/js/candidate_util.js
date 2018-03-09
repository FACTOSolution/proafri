// Add One More Paper
$('#addPaper').click(function() {
    var newPaperFields = $("<br><br><div class=\"form-group\"><label class=\"control-label\" for=\"paperTitle\"> \
        Papers - T&iacute;tulo \
    </label>\
    <input class=\"form-control paperTitle\" id=\"paperTitle\" name=\"paperTitle\" type=\"text\"/>\
    <span class=\"help-block\" id=\"hint_paperTitle\">\
        Coloque o t&iacute;tulo de sua publica&ccedil;&atilde;o\
    </span>\
</div>\
<div class=\"form-group\">\
    <label class=\"control-label\" for=\"paperYear\">\
        Paper - Ano De Publica&ccedil;&atilde;o\
    </label>\
    <input class=\"form-control paperYear\" id=\"paperYear\" name=\"paperYear\" placeholder=\"2015\" type=\"text\"/>\
    <span class=\"help-block\" id=\"hint_paperYear\">\
        Coloque o ano de publica&ccedil;&atilde;o de seu artigo\
    </span>\
</div>");
   $('#paperSection').append(newPaperFields);
})


$(document).ready(function() {
    $('input[name=isImpairment]').change(function() {
        if ($('input[name=isImpairment]:checked').val() === 'true') {
            $('#impairmentDetail').removeAttr('disabled');
            $('#needs').removeAttr('disabled');
        }
        else {
            $('#impairmentDetail').attr('disabled', 'disabled');
            $('#needs').attr('disabled','disabled');
        }
    })
})