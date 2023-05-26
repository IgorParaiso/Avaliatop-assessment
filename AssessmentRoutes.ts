import { Router } from 'express';
import AssessmentController from '../controllers/AssessmentController';

const AssessmentRoutes = Router();

AssessmentRoutes.get('/assessment/listAll', AssessmentController.listAll);

AssessmentRoutes.post('/assessment/publishNew', AssessmentController.publishNew);

AssessmentRoutes.patch('/assessment/changeAssessment', AssessmentController.changeAssessment);

AssessmentRoutes.patch('/assessment/closeAssessment', AssessmentController.closeAssessment);

AssessmentRoutes.delete('/assessment/deleteAssessment', AssessmentController.deleteAssessment);

export default AssessmentRoutes;
