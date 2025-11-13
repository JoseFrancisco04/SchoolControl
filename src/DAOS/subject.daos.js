import subjectModel from '../models/subject.model.js';

const subjectDaos = {};

// Método para obtener todas las materias
subjectDaos.getAll = async () => {
    const subjects = await subjectModel.find();
    return subjects;
};

// Método para obtener una materia por su id
subjectDaos.getOne = async (subject_id) => {
    const subject = await subjectModel.findOne({subject_id: subject_id});
    return subject;
};

//Método para insertar una materia
subjectDaos.insertOne = async (subjectData) => {
    const newSubject = await subjectModel.create(subjectData);
    return newSubject;
};

// Método para actualizar una materia
subjectDaos.updateOne = async (subject_id, subjectData) => {
    const updatedSubject = await subjectModel.findOneAndUpdate(
        {subject_id: subject_id},
        subjectData,
    );
    return updatedSubject;
};

//Método para eliminar una materia
subjectDaos.deleteOne = async (subject_id) => {
    const deletedSubject = await subjectModel.findOneAndDelete({subject_id: subject_id});
    return deletedSubject;
};




export default subjectDaos;