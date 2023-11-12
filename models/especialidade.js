// Especialidade
// id: number (codigo unico para cada especialidade);  
// nome: string (nome da especialidade: "Dentista", "Oftamologista", "Terapeuta" ,etc)
// clinicaId: number ( identificador da cline onde essa especialidade está cadastrada)

let especialidadeModel = [];

export const deleteEspecialidadeModel = (id) => {
    especialidadeModel = especialidadeModel.filter( (value) => value.id !== id );
}

export const addEspecialidadeModel = (clinicaId, nome) => {
    if(especialidadeModel.length === 0){
        especialidadeModel.push({
            clinicaId: clinicaId,
            nome:nome,
            id: 1
        });
    }
    else{

        const lastEspecialideId = especialidadeModel[especialidadeModel.length - 1].id; // Id da ultima especialidade cadastrada

        especialidadeModel.push({
            clinicaId: clinicaId,
            nome: nome,
            id: lastEspecialideId + 1,
        })
    }
}

export const getEspecialidadeModel =() => {
    return especialidadeModel
}