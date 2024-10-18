import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from './login.form';

test('performance: Form renders within acceptable limits', () => {
  const start = performance.now();
  render(<LoginForm />);
  const end = performance.now();

  const renderTime = end - start;
  console.log(`Counter rendered in ${renderTime} milliseconds`);

  expect(renderTime).toBeLessThan(100); // example threshold in milliseconds
});
