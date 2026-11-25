import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should greet', () => {
    const { getByText } = render(<App />);
    expect(getByText('Hello, Ada')).toBeTruthy();
  });
});
