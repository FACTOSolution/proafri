$(document).ready(function() {
    $('#programA').prop('selectedIndex', -1);
    $('#programB').prop('selectedIndex', -1);
})    

$('#radioMestrado').click(function() {
    $('#programA').removeAttr('disabled')
    $('#programB').removeAttr('disabled')
})

$('#radioDoutorado').click(function() {
    $('#programA').removeAttr('disabled')
    $('#programB').removeAttr('disabled')
})

function matchRegion(sel){
    var regionA = sel.value.split(":");
    // RegionA is in regionA[1]
    var regionB = $('#programB').val().split(":");
    if(sel['name'] == 'programB') { regionB = $('#programA').val().split(":"); }
    //  RegionB is in regionB[1]
    if(regionA[1] == regionB[1])
    {
        $('#enviar').attr('disabled','disabled');
        $('#programA').notify(
            'Não pode ser selecionado dois programas da mesma região.', 
            'warn',
            { position: 'right'}
        );
    } else if(regionA[0] == regionB[0]) {
        $('#enviar').attr('disabled','disabled');
        $('#programA').notify(
            'Não pode ser selecionado dois programas iguais.', 
            'warn',
            { position: 'right'}
        );
    }
    else {
        $('#enviar').removeAttr('disabled');
    }
}