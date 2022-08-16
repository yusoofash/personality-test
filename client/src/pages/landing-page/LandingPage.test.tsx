import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './index';

test('renders the landing page', () => {
  render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );

  const heading = screen.getByText(/What's your personality trait?/i, { selector: 'h1' });
  expect(heading).toBeInTheDocument();

  const description = screen.getByText(
    /Are you an introvert or extrovert\? Take the psychology quiz to reveal your personality trait./i,
    { selector: 'p' }
  );
  expect(description).toBeInTheDocument();

  const button = screen.getByText(/Start personality test/i, { selector: 'button' });
  expect(button).toBeInTheDocument();

  const introvertImg = screen.getByAltText('introvert');
  expect(introvertImg).toBeInTheDocument();
  const extrovertImg = screen.getByAltText('extrovert');
  expect(extrovertImg).toBeInTheDocument();
  const ambivertImg = screen.getByAltText('ambivert');
  expect(ambivertImg).toBeInTheDocument();
});
