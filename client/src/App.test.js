
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading', { name: /welcome to it services platform!/i });
  expect(headerElement).toBeInTheDocument();
});



