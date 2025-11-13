import Student from "../models/Student.js";
const studentsDaos = {};

//Este es un metodo que tiene todos los estudiantes
studentsDaos.getAll = async() => {
    //aqui le voy a pedir paro al modelo de moongose
    //para extraer los estudiantes de mi clouster
    const student =await Student.find();
    return student;
};
//Este es un metodo que obtiene un estudiante por su id
studentsDaos.getOne = async(student_id) => {
    const student = await Student.findOne ({student_id: student_id});
    return student;
}
//Este metodo crea un estudiante
studentsDaos.insertOne = async (studentData) => {
    const newStudent = await Student.create(studentData);
    return newStudent;

}
//Este metodo actualiza un estudiante
studentsDaos.UpdateOne = async (student_id , studentData) => {
    const updatedStudent = await Student.findOneAndUpdate(
        {student_id: student_id},
        studentData,
    );
    return updatedStudent;

};
//Metodo para eliminar un estudiante
studentsDaos.deleteOne = async (student_id) => {
    const deletedStudent = await Student.findOneAndDelete({student_id: student_id});
    return deletedStudent;
}
export default studentsDaos;