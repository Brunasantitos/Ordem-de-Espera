
export let especialidadeModel = [];

export const listarEspecialidade = (req, res) => {

    // listar todas as especialidaded
    res.status(200).json({
        ok: true,
        data: especialidadeModel
    })
}

export const criarEspecialidade = (req, res) => {
    const {clinicaId, nome} = req.body;

   
    // chechar se a lista  especilidadeModel está vazio

    // se estiver vazio, iremos adicionar a nova especilidade com o id inicia 1
    if(especialidadeModel.length === 0){
        especialidadeModel.push({
            clinicaId: clinicaId,
            nome:nome,
            id: 1
        });
    }

    // senão estiver vazia, vamos pegar o id da ultima especialidade da lista, e somar mais 1,
    // que será o id da nova especialidade cadastrada
    else{
        const lastEspecialideId = especialidadeModel[especialidadeModel.length - 1].id; // Id da ultima especialidade cadastrada

        especialidadeModel.push({
            clinicaId: clinicaId,
            nome: nome,
            id: lastEspecialideId + 1,
        });
    }


    res.json({
        ok: true,
        message: "especialidade criada"
    });
}

export const deletarEspecialidade = (req, res) => {
    const especialidadeId = parseInt(req.params.id); // id da especialidade que vai ser deletada

    // fazer um loop na lista e retorna soment a especialidade com o id diferent do especialideId
    especialidadeModel = especialidadeModel.filter( (value) => value.id !== especialidadeId );

    res.json({
        ok: true,
        message: "especialiade deleteda"
    });
}