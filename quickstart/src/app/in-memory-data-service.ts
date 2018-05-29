import { InMemoryDbService } from 'angular-in-memory-web-api';
import { createTestCustomers, states } from './test-data';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      customers: createTestCustomers(),
      states: states
    };
  }
}
