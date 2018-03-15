const moment = require('moment')

exports.buildhtml = function(candidate) {
    var htmlString = "<html><body><h3>Candidato:</h3>" + candidate.name +"</br>";
    htmlString += "<br><strong>Número Inscrição</strong> - " + this.pad(candidate.regNumber) + "</br>";
    htmlString += "<br><strong>País</strong> - " + candidate.country + "</br>";
    htmlString += "<br><strong>Endereço</strong> - " + candidate.address + "</br>";
    htmlString += "<br><strong>Email 1</strong> - " + candidate.email + "</br>";
    htmlString += "<br><strong>Email 2</strong> - " + candidate.email2 + "</br>";
    htmlString += "<br><strong>Telefone Fixo</strong> - " + candidate.tel.fixed + "</br>";
    htmlString += "<br><strong>Telefone Movel</strong> - " + candidate.tel.mobile + "</br>";
    htmlString += "<br><strong>Gênero</strong> - " + candidate.gender + "</br>";
    htmlString += "<br><strong>Data De Nascimento</strong> - " + moment(candidate.dob).format('DD-MM-YYYY') + "</br>";
    htmlString += "<br><strong>Estado Cívil</strong> - " + candidate.civilState + "</br>";
    htmlString += "<br><strong>Número Do Passaporte</strong> - " + candidate.passport.number + "</br>";
    htmlString += "<br><strong>País Do Passaporte</strong> - " + candidate.passport.country + "</br>";
    htmlString += "<br><strong>Data De Expiração Do Passaporte</strong> - " + moment(candidate.passport.expirationDate).format('DD-MM-YYYY') + "</br>";
    htmlString += "<br><strong>Universidade Escolhida</strong> - " + candidate.programA.university + "</br>";
    htmlString += "<br><strong>Programa Escolhido</strong> - " + candidate.programA.name + "</br>";
    htmlString += "<br><strong>Universidade Escolhida</strong> - " + candidate.programB.university + "</br>";
    htmlString += "<br><strong>Programa Escolhido</strong> - " + candidate.programB.name + "</br>";
    // var papersHtml = "" , workExperienceHtml = "", academicHistoryHtml = "", scholarships = "";
    // // Preparando o html para listar os papers
    // papersHtml += "<h3>2.Publicações / Prêmios / Bolsas</h3>"
    // candidate.papers.forEach(function(paper) {
    //     papersHtml += "<strong>Titulo:</strong>"+ paper.title + "<br>"
    //     papersHtml += "<strong>Ano De Publicação:</strong>"+ moment(paper.year).format('YYYY') +"<br>"
    //     papersHtml += "<br>"
    // })
    // candidate.scholarships.forEach(function(scholar) {
    //     scholarships += "<strong>Intituição:</strong>" + scholar.institution + "</br>"
    //     scholarships += "<strong>Propósito:</strong>" + scholar.purpose + "</br>"
    //     scholarships += "<strong>País:</strong>" + scholar.country + "</br>"
    //     scholarships += "<strong>Data De Início:</strong>" + moment(scholar.startDate).format('DD-MM-YYYY') + "</br>"
    //     scholarships += "<strong>Data De Término:</strong>" + moment(scholar.endDate).format('DD-MM-YYYY') + "</br>"
    //     scholarships += "<br>"
    // })
    // workExperienceHtml = "<h3>3.Experiência Profissional</h3>"
    // candidate.workExperience.forEach(function(work) {
    //     workExperienceHtml += "<strong>Titulo Do Cargo:</strong>"+ work.officeHolder + "<br>"
    //     workExperienceHtml += "<strong>Instituição Empregadora:</strong>"+ work.employingInstitution +"<br>"
    //     workExperienceHtml += "<strong>Cidade:</strong>"+ work.city +"<br>"
    //     workExperienceHtml += "<strong>País:</strong>"+ work.country +"<br>"
    //     workExperienceHtml += "<strong>De:</strong>"+ moment(work.startDate).format('DD-MM-YYYY') +"<br>"
    //     workExperienceHtml += "<strong>Até:</strong>"+ moment(work.endDate).format('DD-MM-YYYY') +"<br>"
    //     workExperienceHtml += "<strong>Breve descrição de suas funções atuais:</strong>"+ work.description +"<br>"
    //     workExperienceHtml += "<br>"
    // })
    // academicHistoryHtml += "<h3>1.Educação Universitária</h3>"
    // candidate.academicHistory.forEach(function(experience) {
    //     academicHistoryHtml += "<strong>Titulo Obtido:</strong>"+ experience.degreeObtained + "<br>"
    //     academicHistoryHtml += "<strong>Nome Da Instituição:</strong>"+ experience.institution + "<br>"
    //     academicHistoryHtml += "<strong>Cidade:</strong>"+ experience.city + "<br>"
    //     academicHistoryHtml += "<strong>País:</strong>"+ experience.country + "<br>"
    //     academicHistoryHtml += "<strong>Média obtida:</strong>"+ experience.average + "<br>"
    //     academicHistoryHtml += "<strong>Começou Em:</strong>"+ moment(experience.startDate).format('DD-MM-YYYY') + "<br>"
    //     academicHistoryHtml += "<strong>Terminou Em:</strong>"+ moment(experience.endDate).format('DD-MM-YYYY') + "<br>"
    //     academicHistoryHtml += "<strong>Área De Estudo:</strong>"+ experience.study + "<br>"
    //     academicHistoryHtml += "<strong>Nome Do Programa:</strong>"+ experience.programName + "<br>"
    //     academicHistoryHtml += "<br>"
    // })
    // htmlString += academicHistoryHtml;
    // htmlString += papersHtml;
    // htmlString += scholarships;
    // htmlString += workExperienceHtml;
    htmlString += "</body></html>"
    return htmlString;
}

exports.pad = function(num, size) {
    var s = "000000" + num;
    return s.substr(s.length - size);
}