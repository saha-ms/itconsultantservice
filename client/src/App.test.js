
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const headerElement = screen.getByText(/welcome to my it services platform!/i);
  expect(headerElement).toBeInTheDocument();

  const paragraphElement = screen.getByText(/offering cutting-edge solutions to meet all your it requirements./i);
  expect(paragraphElement).toBeInTheDocument();
});

