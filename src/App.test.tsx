import { render, screen } from '@testing-library/react';
import App from './App';
import Weather from './Components/weather';

test('Check rendered with required elements in the root', () => {
  render(<App />);
  const customButton = screen.getByTestId('eventButton');
  const weatherLink = screen.getByTestId('weatherLink');
  const mooToolsMessage = screen.getByTestId('mooToolsMessage');
  expect(customButton).toBeInTheDocument();
  expect(weatherLink).toBeInTheDocument();
  expect(mooToolsMessage).toBeInTheDocument();
});

test('Check rendered with required elements in the weather', () => {
  render(<Weather />);
  const rootLink = screen.getByTestId('rootLink');
  expect(rootLink).toBeInTheDocument();
});
