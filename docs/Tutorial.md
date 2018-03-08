1) Adicione os Admins:
```shell
node addAdmins.js
```
e sigua o formato <name> <password> <university>

2) Adicionando um candidato :: /users

```shell
curl -v -XPOST -H "Content-type: application/json" -d '{
    "country": "Brazil",
    "name": "Gabriel Toledo",
    "address": "Rua da ESL",
    "email": "fallen@sk.com",
    "tel": {
        "mobile": "1234-5678",
        "fixed": "3333-3333"
    },
    "gender": "feminino",
    "dob": "7/09/1986",
    "civilState": "Divorciada",
    "passport": {
        "number": "345",
        "country": "Brazil",
        "expirationDate": "05/09/2020"
    },
    "language": {
        "native": "Russian",
        "foreign": ["Albania", "Belarus", "Colombia"]
    },
    "languageExamPoints": {
        "toefl": 8000,
        "others" : 7670
    },
    "impairment": {
        "isImpairment": true,
        "impairmentDetail": "None Impair",
        "needs": "Coofeine"
    },
    "programA": {
        "name": "PA",
        "university": "URSS1",
        "region": "Leningrado"
    },
    "programB": {
        "name": "PB",
        "university": "URSS2",
        "region": "Stalingrado"
    }

}' 'http://localhost:3000/users/'
```

3) Fazendo o login :: /admin
``` shell
curl -v -X POST -d "name=shaka&password=cdz" 'http://localhost:3000/admin' 
```

no *header* da _response_ tera o token, se o login estiver correto

4) Pegando todos os cadastrados :: /admin/page
```shell
curl -v -H "x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWEwNzI5NjQ1YzZlOTE1Y2NjMWU4ZGEiLCJuYW1lIjoic2hha2EiLCJpYXQiOjE1MjA0NjU4MDAsImV4cCI6MTUyMDQ2NzYwMH0.7sFWE_b_3layIxwocajexy7ZN4qn6EU09X5W_m2XWE4" 'http://localhost:3000/admin/page'
```