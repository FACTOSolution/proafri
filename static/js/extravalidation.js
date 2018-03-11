// Putting required when have text in academic
$('#degree').change(function () {
    if($('#degree').val().length > 0){
        $('.degree').attr('required','required')
        $('.academicInstitution').attr('required','required')
        $('.academicCity').attr('required','required')
        $('.academicCountry').attr('required','required')
        $('.academicAverage').attr('required','required')
        $('.academicStartDate').attr('required','required')
        $('.academicEndDate').attr('required','required')
        $('.academicStudy').attr('required','required')
        $('.academicProgramName').attr('required','required')
    }else{
        $('.degree').removeAttr('required')
        $('.academicInstitution').removeAttr('required')
        $('.academicCity').removeAttr('required')
        $('.academicCountry').removeAttr('required')
        $('.academicAverage').removeAttr('required')
        $('.academicStartDate').removeAttr('required')
        $('.academicEndDate').removeAttr('required')
        $('.academicStudy').removeAttr('required')
        $('.academicProgramName').removeAttr('required')
    }
})

//Putting required when have text in publicacoes
$('#paperTitle').change(function() {
    if($('#paperTitle').val().length > 0) {
        $('.paperTitle').attr('required','required')
        $('.paperYear').attr('required','required')
    }else{

        $('.paperTitle').removeAttr('required')
        $('.paperYear').removeAttr('required')
    }
})

//Putting required when have text in bolsas
$('#scholarshipInstitution').change(function() {
    if($('#scholarshipInstitution').val().length > 0) {
        $('.scholarshipInstitution').attr('required','required')
        $('.scholarshipPurpose').attr('required','required')
        $('.scholarshipCountry').attr('required','required')
        $('.scholarshipStartDate').attr('required','required')
        $('.scholarshipEndDate').attr('required','required')
    }else{
        $('.scholarshipInstitution').removeAttr('required')
        $('.scholarshipPurpose').removeAttr('required')
        $('.scholarshipCountry').removeAttr('required')
        $('.scholarshipStartDate').removeAttr('required')
        $('.scholarshipEndDate').removeAttr('required')
    }  
})

// Putting required when we have text in experiencia
$('#officeHolder').change(function() {
    if($('#officeHolder').val().length > 0) {
        $('.officeHolder').attr('required','required')
        $('.employingInstitution').attr('required','required')
        $('.workCity').attr('required','required')
        $('.workStartDate').attr('required', 'required')
        $('.workEndDate').attr('required', 'required')
        $('.workDescription').attr('required', 'required')
    } else {
        $('.officeHolder').attr('required')
        $('.employingInstitution').removeAttr('required')
        $('.workCity').removeAttr('required')
        $('.workStartDate').removeAttr('required')
        $('.workEndDate').removeAttr('required')
        $('.workDescription').removeAttr('required')
    }
})