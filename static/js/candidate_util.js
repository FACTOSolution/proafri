// Add One More Paper
$('#addPaper').click(function() {
    var newPaperFields = $("<br><div class=\"panel panel-info\">\
    <div class=\"panel-heading\">Publicação/Prêmio/Bolsa</div>\
    <div class=\"form-group panel-body\" style=\"padding-bottom:0px\">\
    <label class=\"control-label\" for=\"paperTitle\"> \
        T&iacute;tulo \
    </label>\
    <input class=\"form-control paperTitle\" id=\"paperTitle\" name=\"paperTitle\" type=\"text\"/>\
    <span class=\"help-block\" id=\"hint_paperTitle\">\
        Coloque o t&iacute;tulo de sua publica&ccedil;&atilde;o\
    </span>\
</div>\
<div class=\"form-group panel-body\" style=\"padding-bottom:0px\">\
    <label class=\"control-label\" for=\"paperYear\">\
        Ano De Publica&ccedil;&atilde;o\
    </label>\
    <input class=\"form-control paperYear\" id=\"paperYear\" name=\"paperYear\" placeholder=\"2015\" type=\"text\"/>\
    <span class=\"help-block\" id=\"hint_paperYear\">\
        Coloque o ano de publica&ccedil;&atilde;o de seu artigo\
    </span>\
</div></div>");
   $('#paperSection').append(newPaperFields);
});

// Add One More Academic
$('#addAcademic').click(function() {
    var newAcademicFields = $("#academicParent").clone();
    $('#academicSection').append(newAcademicFields);
})

// Add One More Work
$('#addWork').click(function() {
    var newWorkFields = $('#workParent').clone();
    $('#workSection').append(newWorkFields);
})  

// Add One More Work
$('#addScholarship').click(function() {
    var newScholarFields = $('#scholarParent').clone();
    $('#scholarshipSection').append(newScholarFields);
})  

$(document).ready(function() {
    $('input[name=isImpairment]').change(function() {
        if ($('input[name=isImpairment]:checked').val() === 'true') {
            $('#impairmentDetail').removeAttr('disabled');
            $('#needs').removeAttr('disabled');
            $('#impairmentDetail').attr('required', 'required');
            $('#needs').attr('required','required');
        }
        else {
            $('#impairmentDetail').removeAttr('required');
            $('#needs').removeAttr('required');
            $('#impairmentDetail').attr('disabled', 'disabled');
            $('#needs').attr('disabled','disabled');
        }
    })
})