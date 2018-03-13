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

function query(degree) {
    axios.get('http://proafri.ufpi.br/programs/' + degree)
        .then(function(response) {
            $('#programA').html("")
            $('#programB').html("")
            response.data.forEach(element => {
                $('#programA').append('<option value=' + element._id + ':' + element.region + ">" + element.name + "</option>")
                $('#programB').append('<option value=' + element._id + ':' + element.region + ">" + element.name + "</option>")
                $('#programA').prop('selectedIndex', -1);
                $('#programB').prop('selectedIndex', -1);
            });
        })
        .catch(function(error) {
            console.log(error)
        })
}

function matchRegion(sel){
    console.log('entrou')
    var regionA = sel.value.split(":");
    // RegionA is in regionA[1]
    var regionB = $('#programB').val().split(":");
    if(sel['name'] == 'programB') { regionB = $('#programA').val().split(":"); }
    //  RegionB is in regionB[1]
    if(regionA[1] == regionB[1])
    {
        $('#enviar').attr('disabled','disabled');
        $('#programA').notify(
            'Não pode ser selecionado dois programas da mesma região ou iguais.', 
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
        $('#programA').notify(
            'Sua seleção está ok.', 
            'info',
            { position: 'right'}
        );
        $('#enviar').removeAttr('disabled');
    }
}
