import teachersModel from "../models/teachers.model.js";

const teachersDaos = {};

//Metodo para obtener todos los maestros
teachersDaos.getAll = async () => {
    const teachers = await teachersModel.find();
    return teachers;
};
//Metodo para obtener un maestro por su id
teachersDaos.getOne = async (teacher_id) => {
    const teacher = await teachersModel.findOne({teacher_id: teacher_id});
    return teacher;
};
//Metodo para insertar un maestro
teachersDaos.insertOne = async (teacherData) => {
    const newStudent = await teachersModel.create(teacherData);
    return newStudent;
};
//Metodo para actualizar un maestro
teachersDaos.updateOne = async (teacher_id, teacherData) => {
    const updatedTeacher = await teachersModel.findOneAndUpdate(
        {teacher_id: teacher_id},
        teacherData,
    );
    return updatedTeacher;
};
//Metodo para eliminar un maestro
teachersDaos.deleteOne = async (teacher_id) => {
    const deletedTeacher = await teachersModel.findOneAndDelete({teacher_id: teacher_id});
    return deletedTeacher;
};

export default teachersDaos;