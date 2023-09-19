import express from 'express';
import { HealthCheckController } from './presentation/controllers/HealthCheckController';

const app = express();
const port = 3000;

const healthCheckController = new HealthCheckController();

app.get('/health', (req, res) => {
  const result = healthCheckController.check();
  res.status(200).json(result);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
