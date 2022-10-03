import { SeriesDashboard } from './SeriesDashboard';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';

function renderSeriesDashboard() {
  return render(<SeriesDashboard />);
}

describe.skip('SeriesDashboard', () => {
  it('renders the series table', async () => {
    renderSeriesDashboard();

    expect(screen.getByRole('table')).toBeVisible();
  });

  it('no a11y violation', async () => {
    const { container } = renderSeriesDashboard();

    expect(await axe(container)).toHaveNoViolations();
  });
});