import config from 'config';
import express from 'express';
import healthCheckRoutes from './presentation/routes/healthCheckRoutes';

const app = express();
const port = config.get('port');

// Use routes
app.use('/', healthCheckRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
