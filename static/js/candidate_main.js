// Connecting the submit listener with the event handler
document.getElementById('candidateForm').addEventListener('submit', registerCandidate);

function registerCandidate(e) {
    // Declaring the variables that will hold the data
    var country, name, address, email, tel, gender, dob, 
    civilState, passport, language, languageExamPoints, impairment,
    programA, programB;

    // Declaring variables that will hold array data
    var papers = [];
    var academics = [];
    var works = [];
    
    // Decalring variables that will hold temp values
    var isImpairment = false;

    // Getting values from form
    country = $('#country').val();
    name = $('#name').val();
    address = $('#address').val();
    email = $('#email').val();
    gender = $('select[name=gender]').val();
    dob = $('#dob').val();
    civilState = $('#civilState').val();
    programA = $('select[name=programA]').val()
    programB = $('select[name=programB]').val()

    // Testing if the candidate is impairment
    if($('input[name=isImpairment]:checked').val() === 'true') { isImpairment = true; }
    
    // Mounting attribute with sub-attributes
    tel = { "mobile": $('#telMovel').val(), "fixed": $('#telFixed').val() };
    passport = { "number": $('#passportNumber').val(), "country": $('#passportCountry').val(), "expirationDate": $('#passportExpirationDate').val() };
    language = { "native": $('#languageNative').val(), "foreign": $('#languageForeign').val() };
    languageExamPoints = { "toefl": $('#languageExamPointsToefl').val(), "others": $('#languageExamPointsOthers').val() };
    impairment = { "isImpairment": isImpairment, "impairmentDetail": $('#impairmentDetail').val(), "needs": $('#needs').val() };

    // Building Array of papers.
    var papersTitle = $(".paperTitle").map(function() {
        return this.value;
    })
    var papersYear = $('.paperYear').map(function() {
        return this.value;
    })
    for(i = 0; i < papersTitle.length; i++){
        papers.push({ title: papersTitle[i], year: papersYear[i] })
    }
    if(papersTitle[0].length < 1) { papers.length=0; }

    // Building Array of academic
    var academicTitle = $('.degree').map(function() {
        return this.value;
    })
    var academicInstitution = $('.academicInstitution').map(function() {
        return this.value;
    })
    var academicCity = $('.academicCity').map(function() {
        return this.value;
    })
    var academicCoutry = $('.academicCountry').map(function() {
        return this.value;
    })
    var academicAverage = $('.academicAverage').map(function() {
        return this.value;
    })
    var academicStartDate = $('.academicStartDate').map(function() {
        return this.value;
    })
    var academicEndDate = $('.academicEndDate').map(function() {
        return this.value;
    })    
    var academicStudy = $('.academicStudy').map(function() {
        return this.value;
    })
    var academicProgramName = $('.academicProgramName').map(function() {
        return this.value;
    })
    for(i = 0; i < academicTitle.length; i++) {
        academics.push({ 
            degreeObtained: academicTitle[i],
            institution: academicInstitution[i],
            city: academicCity[i],
            country: academicCoutry[i],
            average: academicAverage[i],
            startDate: academicStartDate[i],
            endDate: academicEndDate[i],
            study: academicStudy[i],
            programName: academicProgramName[i]
        })
    }
    if(academicTitle[0].length < 1) { academics.length=0; }

    // Building Array Of Work Experience
    var officeHolder = $('.officeHolder').map(function() {
        return this.value;
    });
    var employingInstitution = $('.employingInstitution').map(function() {
        return this.value;
    })
    var workCity = $('.workCity').map(function() {
        return this.value;
    })
    var workCountry = $('.workCountry').map(function() {
        return this.value;
    })
    var workStartDate = $('.workStartDate').map(function() {
        return this.value;
    })
    var workEndDate = $('.workEndDate').map(function() {
        return this.value;
    })
    var workDescription = $('.workDescription').map(function() {
        return this.value;
    })
    for(i = 0; i < officeHolder.length; i++) {
        works.push({
            officeHolder: officeHolder[i],
            employingInstitution: employingInstitution[i],
            city: workCity[i],
            country: workCountry[i],
            startDate: workStartDate[i],
            endDate: workEndDate[i],
            description: workDescription[i]
        })
    }
    
    if(officeHolder[0].length < 1) { works.length=0; }
    
    axios.post('http://localhost:5000/users/', {
        country: country,
        name: name,
        address: address,
        email: email,
        tel: tel,
        gender: gender,
        dob: dob,
        civilState: civilState,
        passport: passport,
        language: language,
        languageExamPoints: languageExamPoints,
        impairment: impairment,
        programA: programA,
        programB: programB,
        papers: papers,
        academicHistory: academics,
        workExperience: works,
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

    e.preventDefault();
}
