import studentsDaos from "../DAOS/students.daos.js";

const studentControllers={};

studentControllers.getAll = (req,res)=>{
    //aqui se va a lo datos de los estudiantes al dao
    studentsDaos.getAll()
    .then((students) => {
        
        res.json({
            data: students
        });
        
       

    })
    .catch((error) => {
        res.status(500).json({
            message: "An error has occurred",
            error: error
        })
    });
    //aqui respondemos al cliente
    
};

studentControllers.getOne = (req,res)=>{
    studentsDaos.getOne(req.params.student_id)
    .then((student) =>{
       if(student){
        res.json({
            data: student
        });
       } else {
        res.status(404).json({
            message: "Student not found"
        });
       }
    })
    .catch((error) =>{
        res.status(500).json({
            message: error.message
           
        });
    });
}

studentControllers.insertOne = (req,res) => {
    studentsDaos.insertOne (req.body)
    .then((newStudent) => {
        res.status(201).json({
            message: "Student crated succefull",
            data: newStudent

        });
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        });
    });
}

studentControllers.updateOne = (req, res) => {
    studentsDaos.UpdateOne(req.params.student_id, req.body)
    .then((updatedStudent) => {
        if (updatedStudent) {
            res.json({
                message: "Student updated successfully",
                data: updatedStudent

            });
        } else {
            res.status(404).json({
                message: "Student not found"
            });
        }
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        });
    });
}

studentControllers.deleteOne = (req, res) => {
    studentsDaos.deleteOne(req.params.student_id)
    .then((deletedStudent) => {
        if (deletedStudent) {
           res.json({
                message: "Student deleted successfully",
                data: deletedStudent

           });
        } else {
            res.status(404).json({
                message: "Student not found"
            });
        }
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        });
    });
}
    
export default studentControllers;