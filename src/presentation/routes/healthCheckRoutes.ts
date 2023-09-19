// healthCheckRoutes.ts in the presentation/routes/ folder
import express from 'express';
import { HealthCheckController } from '../controllers/HealthCheckController';

const router = express.Router();
const healthCheckController = new HealthCheckController();

router.get('/health', (req, res) => {
  const health = healthCheckController.check();
  res.status(200).json(health);
});

export default router;
