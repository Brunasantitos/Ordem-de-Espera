let clinicaModel = [];


export const criarClinica = (req, res) => {
    
    const { nome, cnpj, } =  req.body;

    if(nome == "" || cnpj == ""){

        // checar se o nome ou cnpj está vazio
        res.json({
            ok: false,
            message: "O nome e cnpj não pode estar vazio"
        });
    }

    else{

        // checar se a lista clinicaModel está vazio

        // se estiver vazio irá adicionor a nova clinica com o id 1 por padão
        if(clinicaModel.length === 0){
            clinicaModel.push({
                nome: nome,
                cnpj: cnpj,
                id: 1
            });
        }

        // se não estiver vazio, iremos pegar o ID da ultima clinica da lista 
        // e somar mais 1 que será o id da nova clinica
        else{
            const lastClinicaId = clinicaModel[ clinicaModel.length - 1].id;

            clinicaModel.push({
                nome:nome,
                cnpj: cnpj,
                id: lastClinicaId + 1
            });
        }
    }

    res.json({
        ok:true,
        message: "clinca criada"
    });

}

export const listarClinica = (req, res) => {

    // simplemente retorna toda a lista 


    res.json({
        ok:true,
        clinicas: clinicaModel
    });
}



export const deletarClinica = (req, res) => {

    const {clinicaId} = req.params; // Id da clinica que será deletada

    // fazer um loop na lista clinicaModel e retornar todas a clinica exceto a clinica que tem o id iqual clinicaId
    clinicaModel = clinicaModel.filter( (clinica) => clinica.id !== parseInt(clinicaId) );

    res.json({
        ok:true,
        message: "clinca deletada"
    });

}


