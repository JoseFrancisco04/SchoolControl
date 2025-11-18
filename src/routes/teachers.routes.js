import {Router} from "express";

import teacherControllers from "../controllers/teachers.controllers.js";

const router = Router();

//rutas de maestros
router.get('/getAll',teacherControllers.getAll);
router.get('/getOne/:teacher_id',teacherControllers.getOne);
router.post('/insertOne',teacherControllers.insertOne);
router.post('/updateOne/:teacher_id',teacherControllers.updateOne);
router.delete('/deleteOne/:teacher_id',teacherControllers.deleteOne);
router.get('/deleteOne/:teacher_id',teacherControllers.deleteOne);

export default router;