import { render, screen } from '@testing-library/react';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('renders login page initially', () => {
  render(
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  );
  const loginHeading = screen.getByText(/Login/i);
  expect(loginHeading).toBeInTheDocument();
});
