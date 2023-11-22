import moment from "moment"

let senhaModel = []


export const gerarSenha = (req, res) => {
    const { especialidade, tipoSenha } = req.body;

    let newSenha;

    // checar se a lista senha model está vazio

    // se estivar vazia vamos adicionar a nova senha com o numero 1 (id)
    if(senhaModel.length === 0){
        newSenha = {
            especialidade,
            tipoSenha,
            numero: 1, // id da senha
            impressaEm: moment().format('YYYY-MM-DD HH:mm:ss'),
        }
    }
    // se não estiver vazio, vamos pegar o id da ultima senha e somar mais 1,
    // que sera o id da nova senha
    else{

        const lastSenhaId = senhas[senhas.length - 1].numero;

        newSenha = {
            especialidade,
            tipoSenha,
            numero: lastSenhaId + 1,
            impressaEm: moment().format('YYYY-MM-DD HH:mm:ss')
        };
    }
    
    // adicionar a senha na lista
    senhaModel.push(newSenha);
    
    res.json({
        ok:true,
        senha: newSenha
    });
}

export const listarSenhas = (req, res) => {

    // mostar todas as senhas cadastradas
    res.json({ok:true, senhaModel});
}


export const chamarPromixaSenha  = (req, res) => {
    // checar não tem senha para ser chamada
    if (senhaModel.length === 0) {
        res.status(404).json({ message: 'Não há senhas disponíveis.' });

    }
    // se estiver senha para ser chamada, iremos mostra essa senha e deletar da lista
    else {

        const proximaSenha = senhaModel.shift(); // deleta a ultima senha da lista e grava na variavel promixaSenha

        res.json({ ok: true,
            senha: proximaSenha
        });
    }
}