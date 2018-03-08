// Connecting the submit listener with the event handler
document.getElementById('candidateForm').addEventListener('submit', registerCandidate);

function registerCandidate(e) {
    // Declaring the variables that will hold the data
    var country, name, address, email, tel, gender, dob, civilState, passport, language, languageExamPoints, impairment, programA, programB;
    
    // Getting values from form
    country = "Brasil";
    name = "Jeova";
    address = "AV Universitaria";
    email = "albpedro458@gmail.com";
    gender = "masculino";
    dob = "10/02/2018";
    civilState = "Solteiro";
    
    // Mounting attribute with sub-attributes
    tel = { "mobile": "32239188", "fixed": "99318394" };
    passport = { "number": "4864", "country": "Brazil", "expirationDate": "05/09/2015" };
    language = { "native": "Russian", "foreign": ["Albania","Belarus"] };
    languageExamPoints = { "toefl": 5465, "others": { "isf": 546 } };
    impairment = { "isImpairment": true, "impairmentDetail": "None Impar", "needs": "Coffeine" };
    programA = { "name": "PA", "university": "URSS1", "region": "Leningrado" }
    programB = { "name": "PB", "university": "URSS2", "region": "Stalingrado" }

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
        programB, programB     
    })
    .then(function(response) {
        console.log("Enviado com sucesso");
    })
    .catch(function(error) {
        console.log("Error: " + error);
    })
}