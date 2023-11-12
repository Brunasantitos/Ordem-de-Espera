import { getEspecialidadeModel, deleteEspecialidadeModel, addEspecialidadeModel } from "../models/especialidade.js";


export const especialidadeList = (req, res) => {

    const data = getEspecialidadeModel();

    res.status(200).json({
        ok: true,
        data: data
    })
}

export const createEspecialidade = (req, res) => {
    const {clinicaId, nome} = req.body;

    addEspecialidadeModel(clinicaId, nome);


    res.json({
        ok: true,
        message: "especialidade criada"
    });
}

export const deleteEspecialidade = (req, res) => {
    const especialidadeId = parseInt(req.params.id);

    deleteEspecialidadeModel(especialidadeId);

    res.json({
        ok: true,
        message: "especialiade deleteda"
    });
}