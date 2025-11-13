import subjectDaos from "../DAOS/subject.daos.js";
const subjectControllers = {};

subjectControllers.getAll = (req, res) => {
    subjectDaos.getAll()
    .then((subjects)=>{
        res.json({
            data: subjects
        });
    })
    .catch((error)=>{
        res.status(500).json({
            message: error.message
        });
    });
};

subjectControllers.getOne = (req, res) => {
    subjectDaos.getOne(req.params.subject_id)
    .then((subject) => {
        if (subject) {
            res.json({
                data: subject
            });
        } else {
            res.status(404).json({
                message: "Subject not found"
            });
        }
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        });
    });
};

subjectControllers.insertOne = (req, res) => {
    subjectDaos.insertOne(req.body)
    .then((newSubject) => {
        res.status(201).json({
            message: "Subject created successfully",
            data: newSubject
        });
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        });
    });
};

subjectControllers.updateOne = (req, res) => {
    subjectDaos.updateOne(req.params.subject_id, req.body)
    .then((updatedSubject) => {
        if (updatedSubject) {
            res.json({
                message: "Subject updated successfully",
                data: updatedSubject
            });
        } else {
            res.status(404).json({
                message: "Subject not found"
            });
        }
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        });
    });
};

subjectControllers.deleteOne = (req, res) => {
    subjectDaos.deleteOne(req.params.subject_id)
    .then((deletedSubject) => {
        if (deletedSubject) {
            res.json({
                message: "Subject deleted successfully",
                data: deletedSubject
            });
        } else {
            res.status(404).json({
                message: "Subject not found"
            });
        }
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        });
    });
};


export default subjectControllers;