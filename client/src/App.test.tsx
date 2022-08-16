import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders the app', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const logo = screen.getByText(/MY LOGO/i);
  expect(logo).toBeInTheDocument();
  expect(global.window.location.href).toContain('/');
});
