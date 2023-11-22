🧑🏽‍💻PARA FUNCIONAR A APLICAÇÃO VOCÊ PRECISA SEGUIR OS SEGUINTES PASSOS

1º Clonar o repositório: git clone https://github.com/seu-usuario/seu-projeto.git
2º Entrar no Diretório do Projeto: cd seu-projeto
3º Instalar Dependências: npm install
4º Executar o Projeto: npm run dev


🧑🏽‍💻Na pasta "controllers" você encontra três arquivos:

🧑🏽‍💻1º clinica.controller.js

*criarClinica:*
Esta função trata a criação de uma nova clínica. Ela espera receber os dados da clínica através do corpo de uma solicitação HTTP (como em uma solicitação POST).
Verifica se o nome e o CNPJ não estão vazios. Se estiverem vazios, retorna uma resposta indicando que o nome e o CNPJ não podem estar vazios.
Se a lista clinicaModel estiver vazia, adiciona a nova clínica com o ID padrão 1. Caso contrário, obtém o ID da última clínica na lista e atribui um novo ID à nova clínica.
Retorna uma resposta indicando que a clínica foi criada.

*listarClinica:*
Esta função retorna todas as clínicas presentes na lista clinicaModel. Essa operação seria equivalente a uma solicitação GET que recupera todas as clínicas.

*deletarClinica:*
Esta função trata a exclusão de uma clínica com base no ID fornecido como parâmetro na solicitação HTTP (por exemplo, em uma solicitação DELETE).
Utiliza o método filter para criar uma nova lista de clínicas excluindo aquela com o ID correspondente ao fornecido na solicitação.
Retorna uma resposta indicando que a clínica foi deletada.

🧑🏽‍💻2º especialidade.controller.js

*listarEspecialidade:*
Esta função é responsável por listar todas as especialidades presentes na lista especialidadeModel.
Retorna uma resposta HTTP com o status 200 (OK) e um objeto JSON contendo as especialidades existentes.

*criarEspecialidade:*
Essa função lida com a criação de uma nova especialidade. Ela espera receber os dados da especialidade (clinicaId e nome) através do corpo de uma solicitação HTTP (como em uma solicitação POST).
Verifica se a lista especialidadeModel está vazia. Se estiver vazia, adiciona a nova especialidade com o ID inicial 1.
Se a lista não estiver vazia, obtém o ID da última especialidade na lista e atribui um novo ID à nova especialidade.
Retorna uma resposta JSON indicando que a especialidade foi criada.

*deletarEspecialidade:*
Essa função trata a exclusão de uma especialidade com base no ID fornecido como parâmetro na solicitação HTTP (por exemplo, em uma solicitação DELETE).
Utiliza o método filter para criar uma nova lista de especialidades excluindo aquela com o ID correspondente ao fornecido na solicitação.
Retorna uma resposta JSON indicando que a especialidade foi deletada.

🧑🏽‍💻3º senha.controller.js

*gerarSenha:*
Esta função trata a geração de uma nova senha. Ela espera receber os dados da senha (especialidade e tipoSenha) através do corpo de uma solicitação HTTP (como em uma solicitação POST).
Verifica se a lista senhaModel está vazia. Se estiver vazia, cria uma nova senha com o número 1 (o primeiro da sequência).
Se a lista não estiver vazia, obtém o número da última senha na lista e atribui um novo número à nova senha.
A senha também recebe a data e hora em que foi impressa.
Adiciona a nova senha à lista senhaModel e retorna uma resposta JSON indicando que a senha foi gerada.

*listarSenhas:*
Esta função retorna todas as senhas presentes na lista senhaModel. Essa operação seria equivalente a uma solicitação GET que recupera todas as senhas cadastradas.

*chamarProximaSenha:*
Essa função trata a chamada da próxima senha disponível. Se a lista senhaModel estiver vazia, retorna uma resposta com status 404 indicando que não há senhas disponíveis.
Se houver senhas na lista, obtém a próxima senha (a primeira da lista), remove-a da lista e retorna uma resposta JSON indicando que a senha foi chamada.

🧑🏽‍💻Na pasta "routes" você encontra três arquivos, sendo eles:

🧑🏽‍💻1ºclinica.router.js

*Importação de Módulos:*
O código importa o módulo express para criar um aplicativo Express e usa a sintaxe import { ... } from '...' do ECMAScript Modules para importar as funções deletarClinica, criarClinica, e listarClinica do arquivo clinica.controller.js. Essas funções são controladores que lidam com as operações relacionadas à entidade "clínica".

*Criação do Roteador:*
const clinicaRouter = express.Router();: Cria um novo roteador usando a função Router fornecida pelo Express. Este roteador será usado para definir as rotas relacionadas à entidade "clínica".

*Definição das Rotas:*
clinicaRouter.post('/criar/clinica', criarClinica);: Define uma rota para lidar com solicitações HTTP POST para criar uma nova clínica. A função criarClinica do controlador será chamada para processar essa rota.
clinicaRouter.get('/listar/clinica', listarClinica);: Define uma rota para lidar com solicitações HTTP GET para listar todas as clínicas. A função listarClinica do controlador será chamada para processar essa rota.
clinicaRouter.delete('/deletar/clinica/:clinicaId', deletarClinica);: Define uma rota para lidar com solicitações HTTP DELETE para deletar uma clínica específica com base no parâmetro clinicaId. A função deletarClinica do controlador será chamada para processar essa rota.
Cada rota é associada a uma função do controlador correspondente, permitindo a separação de preocupações e facilitando a manutenção do código.

*Exportação do Roteador:*
export const clinicaRouter;: Exporta o roteador clinicaRouter para que possa ser usado em outros módulos ou arquivos da aplicação.

🧑🏽‍💻2ºespecialidades.router.js 

*Importação de Módulos:*
O código importa o módulo express para criar um aplicativo Express e utiliza a sintaxe import { ... } from '...' do ECMAScript Modules para importar as funções listarEspecialidade, criarEspecialidade, e deletarEspecialidade do arquivo especialidade.controller.js. Essas funções são controladores que lidam com as operações relacionadas à entidade "especialidade".

*Criação do Roteador:*
export const especialidadeRouter = express.Router();: Cria um novo roteador usando a função Router fornecida pelo Express. Este roteador será usado para definir as rotas relacionadas à entidade "especialidade".

*Definição das Rotas:*
especialidadeRouter.get("/list", listarEspecialidade);: Define uma rota para lidar com solicitações HTTP GET para listar todas as especialidades. A função listarEspecialidade do controlador será chamada para processar essa rota.
especialidadeRouter.delete('/delete/:id', deletarEspecialidade);: Define uma rota para lidar com solicitações HTTP DELETE para deletar uma especialidade específica com base no parâmetro id. A função deletarEspecialidade do controlador será chamada para processar essa rota.
especialidadeRouter.post('/create', criarEspecialidade);: Define uma rota para lidar com solicitações HTTP POST para criar uma nova especialidade. A função criarEspecialidade do controlador será chamada para processar essa rota.
Cada rota é associada a uma função do controlador correspondente, permitindo a separação de preocupações e facilitando a manutenção do código.

*Exportação do Roteador:*
export const especialidadeRouter;: Exporta o roteador especialidadeRouter para que possa ser usado em outros módulos ou arquivos da aplicação.

🧑🏽‍💻3ºsenha.router.js

*Importação de Módulos:*
O código importa o módulo express para criar um aplicativo Express e utiliza a sintaxe import { ... } from '...' do ECMAScript Modules para importar as funções gerarSenha, listarSenhas, e chamarProximaSenha do arquivo senha.controller.js. Essas funções são controladores que lidam com as operações relacionadas à entidade "senha".

*Criação do Roteador:*
export const senhaRouter = express.Router();: Cria um novo roteador usando a função Router fornecida pelo Express. Este roteador será usado para definir as rotas relacionadas à entidade "senha".

*Definição das Rotas:*
senhaRouter.post('/gerar/senha', gerarSenha );: Define uma rota para lidar com solicitações HTTP POST para gerar uma nova senha. A função gerarSenha do controlador será chamada para processar essa rota.

senhaRouter.get('/proxima/senha', chamarPromixaSenha);: Define uma rota para lidar com solicitações HTTP GET para chamar a próxima senha disponível. A função chamarProximaSenha do controlador será chamada para processar essa rota.

senhaRouter.get('/listar/senhas', listarSenhas);: Define uma rota para lidar com solicitações HTTP GET para listar todas as senhas. A função listarSenhas do controlador será chamada para processar essa rota.
Cada rota é associada a uma função do controlador correspondente, permitindo a separação de preocupações e facilitando a manutenção do código.

*Exportação do Roteador:*
export const senhaRouter;: Exporta o roteador senhaRouter para que possa ser usado em outros módulos ou arquivos da aplicação.

🧑🏽‍💻ARQUIVO INDEX.JS
Esse código configura um aplicativo Express para servir uma API com três conjuntos de rotas (especialidade, senha e clínica):

*Importação de Módulos:*
O código importa o módulo express para criar um aplicativo Express.
Importa os roteadores (especialidadeRouter, senhaRouter e clinicaRouter) de seus respectivos arquivos. Esses roteadores contêm as definições de rotas para as entidades especialidade, senha e clínica.

*Criação do Aplicativo Express:*
const app = express();: Cria uma instância do aplicativo Express.

*Middlewares:*
app.use(express.json());: Configura o middleware para permitir o parsing de dados JSON nas solicitações.
app.use(express.urlencoded({extended:true}));: Configura o middleware para permitir o parsing de dados de formulário nas solicitações.

*Definição de Rotas:*
app.use('/api/v1/especialidade', especialidadeRouter);: Define que as rotas definidas no especialidadeRouter serão acessíveis a partir do caminho "/api/v1/especialidade".
app.use('/api/v1/senha', senhaRouter);: Define que as rotas definidas no senhaRouter serão acessíveis a partir do caminho "/api/v1/senha".
app.use('/api/v1/clinica', clinicaRouter);: Define que as rotas definidas no clinicaRouter serão acessíveis a partir do caminho "/api/v1/clinica".

*Início do Servidor:*
app.listen(3000, () => {...});: Inicia o servidor na porta 3000 e exibe uma mensagem no console indicando que a API está rodando.
Esse código segue uma arquitetura modular e organizada, onde cada entidade (especialidade, senha, clínica) tem seu próprio conjunto de rotas definido em um arquivo separado. O uso de middlewares facilita a manipulação de diferentes tipos de dados nas solicitações, e a organização das rotas torna o código mais legível e fácil de manter. A API estará disponível em http://localhost:3000.






