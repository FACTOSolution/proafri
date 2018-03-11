exports.buildhtml = function(candidate) {
    var htmlString = "<html><body><h3>Candidato:</h3>" + candidate.name;
    var papersHtml = " " , workExperienceHtml = "", academicHistoryHtml = "";
    // Preparando o html para listar os papers
    papersHtml += "<h3>2.Publicações / Prêmios / Bolsas</h3>"
    candidate.papers.forEach(function(paper) {
        papersHtml += "<strong>Titulo:</strong>"+ paper.title + "<br>"
        papersHtml += "<strong>Ano De Publicação:</strong>"+ paper.year +"<br>"
        papersHtml += "<br>"
    })
    workExperienceHtml = "<h3>3.Experiência Profissional</h3>"
    candidate.workExperience.forEach(function(work) {
        workExperienceHtml += "<strong>Titulo Do Cargo:</strong>"+ work.officeHolder + "<br>"
        workExperienceHtml += "<strong>Instituição Empregadora:</strong>"+ work.employingInstitution +"<br>"
        workExperienceHtml += "<strong>Cidade:</strong>"+ work.city +"<br>"
        workExperienceHtml += "<strong>País:</strong>"+ work.country +"<br>"
        workExperienceHtml += "<strong>De:</strong>"+ work.startDate +"<br>"
        workExperienceHtml += "<strong>Até:</strong>"+ work.endDate +"<br>"
        workExperienceHtml += "<strong>Breve descrição de suas funções atuais:</strong>"+ work.description +"<br>"
        workExperienceHtml += "<br>"
    })
    academicHistoryHtml += "<h3>1.Educação Universitária</h3>"
    candidate.academicHistory.forEach(function(experience) {
        academicHistoryHtml += "<strong>Titulo Obtido:</strong>"+ experience.degreeObtained + "<br>"
        academicHistoryHtml += "<strong>Nome Da Instituição:</strong>"+ experience.institution + "<br>"
        academicHistoryHtml += "<strong>Cidade:</strong>"+ experience.city + "<br>"
        academicHistoryHtml += "<strong>País:</strong>"+ experience.country + "<br>"
        academicHistoryHtml += "<strong>Média obtida:</strong>"+ experience.average + "<br>"
        academicHistoryHtml += "<strong>Começou Em:</strong>"+ experience.startDate + "<br>"
        academicHistoryHtml += "<strong>Terminou Em:</strong>"+ experience.endDate + "<br>"
        academicHistoryHtml += "<strong>Área De Estudo:</strong>"+ experience.study + "<br>"
        academicHistoryHtml += "<strong>Nome Do Programa:</strong>"+ experience.programName + "<br>"
        academicHistoryHtml += "<br>"
    })
    htmlString += academicHistoryHtml;
    htmlString += papersHtml;
    htmlString += workExperienceHtml;
    return htmlString;
}