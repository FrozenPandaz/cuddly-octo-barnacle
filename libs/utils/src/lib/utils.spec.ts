import { greet } from './utils.js';

describe('greet', () => {
  it('should work', () => {
    expect(greet('Ada')).toEqual('Hello, Ada');
  });
});
