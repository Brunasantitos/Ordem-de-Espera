

Gerar uma nova senha:
curl -X POST -H "Content-Type: application/json" -d '{"especialidade": "Cardiologia", "tipoSenha": "normal"}' http://localhost:3000/gerarSenha


Obter todas as senhas:
curl http://localhost:3000/senhas


Chamar a próxima senha:
curl http://localhost:3000/chamarProximaSenha

