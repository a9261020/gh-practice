import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Test from '../src/app/test';

test('Test', () => {
  render(<Test />);
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined();
});
