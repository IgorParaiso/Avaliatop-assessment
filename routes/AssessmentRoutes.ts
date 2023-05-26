import { Router } from 'express';
import AssessmentController from '../controllers/AssessmentController';
import isAuthenticated from '../middlewares/isAuthenticated';

const AssessmentRoutes = Router();

AssessmentRoutes.get('/assessment/listAll', isAuthenticated, AssessmentController.listAll);

AssessmentRoutes.post('/assessment/publishNew', isAuthenticated, AssessmentController.publishNew);

AssessmentRoutes.patch('/assessment/changeAssessment', isAuthenticated, AssessmentController.changeAssessment);

AssessmentRoutes.patch('/assessment/closeAssessment', isAuthenticated, AssessmentController.closeAssessment);

AssessmentRoutes.delete('/assessment/deleteAssessment', isAuthenticated, AssessmentController.deleteAssessment);

export default AssessmentRoutes;
