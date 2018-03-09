// Connecting the submit listener with the event handler
document.getElementById('candidateForm').addEventListener('submit', registerCandidate);

function registerCandidate(e) {
    // Declaring the variables that will hold the data
    var country, name, address, email, tel, gender, dob, civilState, passport, language, languageExamPoints, impairment, programA, programB;
    
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

    // Building Array of data.

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
        programB: programB     
    })
    .then(function(response) {
        console.log("Enviado com sucesso");
    })
    .catch(function(error) {
        console.log(error);
    })

    e.preventDefault()
}