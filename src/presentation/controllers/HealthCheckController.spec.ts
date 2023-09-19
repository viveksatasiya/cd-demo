import { HealthCheckController } from './HealthCheckController';

describe('HealthCheckController', () => {
  it('should return 200 OK', () => {
    const healthCheckController = new HealthCheckController();
    const result = healthCheckController.check();
    expect(result).toEqual({ status: 'OK' });
  });
});
