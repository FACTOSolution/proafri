// Connecting the submit listener with the event handler
document.getElementById('candidateForm').addEventListener('submit', registerCandidate);

function registerCandidate(e) {
    // Declaring the variables that will hold the data
    var country, name, address, email, email2, tel, gender, dob, 
    civilState, passport, language, languageExamPoints, impairment,
    programA, programB;

    // Declaring variables that will hold array data
    var papers = [];
    var academics = [];
    var works = [];
    var scholarships = [];
    
    // Decalring variables that will hold temp values
    var isImpairment = false;

    // Getting values from form
    country = $('#country').val();
    name = $('#name').val();
    address = $('#address').val();
    email = $('#email').val();
    email2 = $('#email2').val();
    gender = $('select[name=gender]').val();
    dob = $('#dob').val();
    civilState = $('#civilState').val();
    programA = $('select[name=programA]').val().split(':')
    programB = $('select[name=programB]').val().split(':')

    // // Testing if the candidate is impairment
    // if($('input[name=isImpairment]:checked').val() === 'true') { isImpairment = true; }
    
    // Mounting attribute with sub-attributes
    tel = { "mobile": $('#telMovel').val(), "fixed": $('#telFixed').val() };
    passport = { "number": $('#passportNumber').val(), "country": $('#passportCountry').val(), "expirationDate": $('#passportExpirationDate').val() };
    // language = { "native": $('#languageNative').val(), "foreign": $('#languageForeign').val() };
    // languageExamPoints = { "toefl": $('#languageExamPointsToefl').val(), "others": $('#languageExamPointsOthers').val() };
    // impairment = { "isImpairment": isImpairment, "impairmentDetail": $('#impairmentDetail').val(), "needs": $('#needs').val() };

    // // Building Array of papers.
    // var papersTitle = $(".paperTitle").map(function() {
    //     return this.value;
    // })
    // var papersYear = $('.paperYear').map(function() {
    //     return this.value;
    // })
    // for(i = 0; i < papersTitle.length; i++){
    //     papers.push({ title: papersTitle[i], year: papersYear[i] })
    // }
    // if(papersTitle[0].length < 1) { papers.length=0; }

    // // Building Array of academic
    // var academicTitle = $('.degree').map(function() {
    //     return this.value;
    // })
    // var academicInstitution = $('.academicInstitution').map(function() {
    //     return this.value;
    // })
    // var academicCity = $('.academicCity').map(function() {
    //     return this.value;
    // })
    // var academicCoutry = $('.academicCountry').map(function() {
    //     return this.value;
    // })
    // var academicAverage = $('.academicAverage').map(function() {
    //     return this.value;
    // })
    // var academicStartDate = $('.academicStartDate').map(function() {
    //     return this.value;
    // })
    // var academicEndDate = $('.academicEndDate').map(function() {
    //     return this.value;
    // })    
    // var academicStudy = $('.academicStudy').map(function() {
    //     return this.value;
    // })
    // var academicProgramName = $('.academicProgramName').map(function() {
    //     return this.value;
    // })
    // for(i = 0; i < academicTitle.length; i++) {
    //     academics.push({ 
    //         degreeObtained: academicTitle[i],
    //         institution: academicInstitution[i],
    //         city: academicCity[i],
    //         country: academicCoutry[i],
    //         average: academicAverage[i],
    //         startDate: academicStartDate[i],
    //         endDate: academicEndDate[i],
    //         study: academicStudy[i],
    //         programName: academicProgramName[i]
    //     })
    // }
    // if(academicTitle[0].length < 1) { academics.length=0; }

    // // Building Array Of Work Experience
    // var officeHolder = $('.officeHolder').map(function() {
    //     return this.value;
    // });
    // var employingInstitution = $('.employingInstitution').map(function() {
    //     return this.value;
    // })
    // var workCity = $('.workCity').map(function() {
    //     return this.value;
    // })
    // var workCountry = $('.workCountry').map(function() {
    //     return this.value;
    // })
    // var workStartDate = $('.workStartDate').map(function() {
    //     return this.value;
    // })
    // var workEndDate = $('.workEndDate').map(function() {
    //     return this.value;
    // })
    // var workDescription = $('.workDescription').map(function() {
    //     return this.value;
    // })
    // for(i = 0; i < officeHolder.length; i++) {
    //     works.push({
    //         officeHolder: officeHolder[i],
    //         employingInstitution: employingInstitution[i],
    //         city: workCity[i],
    //         country: workCountry[i],
    //         startDate: workStartDate[i],
    //         endDate: workEndDate[i],
    //         description: workDescription[i]
    //     })
    // }
    // if(officeHolder[0].length < 1) { works.length=0; }

    // // Building the array of scholarships
    // var scholarInstitution = $('.scholarshipInstitution').map(function() {
    //     return this.value;
    // })
    // var scholarPurpose = $('.scholarshipPurpose').map(function() {
    //     return this.value;
    // })
    // var scholarCountry = $(".scholarshipCountry").map(function() {
    //     return this.value;
    // })
    // var scholarStart = $('.scholarshipStartDate').map(function() {
    //     return this.value;
    // })
    // var scholarEnd = $('.scholarshipEndDate').map(function() {
    //     return this.value;
    // })
    // for(i = 0; i < scholarInstitution.length; i++) {
    //     scholarships.push({
    //         institution: scholarInstitution[i],
    //         purpose: scholarPurpose[i],
    //         country: scholarCountry[i],
    //         startDate: scholarStart[i],
    //         endDate: scholarEnd[i]
    //     })
    // }
    // if(scholarInstitution[0].length < 1) { scholarships.length=0; }

    // Sending the pdf first and retrieve his unique id
    var formData = new FormData();
    var imageFile = document.querySelector('#file')
    formData.append('pdf', imageFile.files[0]);
    formData.append('email', email);
    axios.post('http://proafri.ufpi.br/users/upload_pdf', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(function(response){
            axios.post('http://proafri.ufpi.br/users/', {
            country: country,
            name: name,
            address: address,
            email: email,
            email2: email2,
            tel: tel,
            gender: gender,
            dob: dob,
            civilState: civilState,
            passport: passport,
            // language: language,
            // languageExamPoints: languageExamPoints,
            // impairment: impairment,
            programA: programA[0],
            programB: programB[0],
            // papers: papers,
            // academicHistory: academics,
            // workExperience: works,
            pdf: response.data.id,
            // scholarships: scholarships
        })
        .then(function(response) {
            if(response.data.success == true) {
                if(!alertify.ProAfri){
                    alertify.dialog('ProAfri',function factory(){
                    return{
                        main:function(message){
                        this.message = message;
                        },
                        setup:function(){
                            return { 
                            buttons:[{text: "OK", key:27/*Esc*/}],
                            focus: { element:0 },
                            options: {
                                title: 'ProAfri',
                                modal: true,
                                transition: 'fade',
                                onclose: function() { window.location.replace('http://www.grupocoimbra.org.br/')}
                            }
                            };
                        },
                        prepare:function(){
                        this.setContent(this.message);
                        }
                    }});
                }
                //launch it.
                alertify.ProAfri("Sua inscrição foi cadastrada com sucesso.");
                console.log("Enviado com sucesso");
            }
        })
        .catch(function(error) {
            console.log(error);
        })
    })
    .catch(function(error) {
        $('#file').notify(
            'Apenas PDF são permitidos',
            'error',
            { position: 'right'}
        )
    })
    
    
    e.preventDefault();
}
