import { createUser } from './models.js';

describe('createUser', () => {
  it('should work', () => {
    expect(createUser('Ada')).toEqual({ id: 'ada', name: 'Ada' });
  });
});
