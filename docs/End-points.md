End-points

* /
  * Method: GET
  * Description: 
    - Retorna a pagina index com os forms

- /users
  - Method: POST
  - Content-type: JSON
  	 Data: um JSON obedecendo o model do 'Candidate'	
  - Description: 
    - Adiciona um candidato no banco

- /admin
  - Method: GET
  - Description:
  	- Retorna a pagina de login dos admins

- /admin
  - Method: POST
  - Data: { name: "fulano", password: "senhadofulano" }
  - Description:
  	- Efetua o login

- /admin/page
  - Method: GET
  - Description:
    - Retorna a lista com todos os candidatos