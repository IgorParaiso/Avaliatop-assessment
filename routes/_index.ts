import { Router } from 'express';
import AuthRoutes from './AuthRoutes';
import AssessmentRoutes from './AssessmentRoutes';

const AllRoutes = Router();

AllRoutes.use('/api/', AuthRoutes);
AllRoutes.use('/api/', AssessmentRoutes);

export default AllRoutes;
