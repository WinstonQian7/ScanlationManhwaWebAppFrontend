import { TopBar } from './TopBar';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

function renderTopBar() {
  return render(<TopBar />);
}

describe('TopBar', () => {
  it('render the topbar', async () => {
    renderTopBar();
    
    expect(screen.getByRole('img', {name: /scanlation manhwa/ui})).toBeVisible();
    expect(screen.getByRole(''))
    expect(screen.getByRole('')).toBeVisible();
  });

  it('no a11y violation', async () => {
    const { container } = renderTopBar();
    
    expect(await axe(container)).toHaveNoViolations();
  });
});
