import teachersDaos from "../DAOS/teachers.daos.js";

const teacherControllers = {};

teacherControllers.getAll = (req, res) => {
    teachersDaos.getAll()
    .then((teachers)=>{
        res.render("indexTeachers.ejs",{teachers}) 
    })
    .catch((error)=>{
        res.status(500).json({
            message: error.message
        });
    });
};

teacherControllers.getOne = (req, res) => {
    teachersDaos.getOne(req.params.teacher_id)
    .then((teacher) => {
        if (teacher) {
             res.render("editTeachers.ejs", {teacher});
        } else {
            res.status(404).json({
                message: "Teacher not found"
            });
        }
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        });
    });
};

teacherControllers.insertOne = (req, res) => {
    teachersDaos.insertOne(req.body)
    .then((newTeacher) => {
        res.redirect("/api/teachers/getAll");
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        });
    });
};

teacherControllers.updateOne = (req, res) => {
    teachersDaos.updateOne(req.params.teacher_id, req.body)
    .then((updatedTeacher) => {
        if (updatedTeacher) {
            res.redirect("/api/teachers/getAll");
        } else {
            res.status(404).json({
                message: "Teacher not found"
            });
        }
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        });
    });
};

teacherControllers.deleteOne = (req, res) => {
    teachersDaos.deleteOne(req.params.teacher_id)
    .then((deletedTeacher) => {
        if (deletedTeacher) {
            res.redirect("/api/teachers/getAll");
        } else {
            res.status(404).json({
                message: "Teacher not found"
            });
        }
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        });
    });
};

export default teacherControllers;