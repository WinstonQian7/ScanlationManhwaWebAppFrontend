import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import userEvent from '@testing-library/user-event/';
import { TeamSelectMenu } from './TeamSelectMenu';

const user = userEvent.setup();

function renderTeamSelectMenu(seriesTeamList?: string[]) {
  return render(
    <TeamSelectMenu 
      seriesTeamList={seriesTeamList ?? defaultSeriesTeamList} 
      displayTeamRef={{ current: 'scan team' }}
    />
  );
}

describe('TeamSelectMenu', () => {
  it('renders default text with menu closed', () => {
    renderTeamSelectMenu([]);
    expect(screen.getByRole('menu')).toBeVisible();
    expect(screen.getByRole('menuitem', {name: /Scan Team/ui})).toBeVisible();
    expect(screen.getAllByRole('menuitem')).toHaveLength(1);
  });

  it('renders no menuitems when input is clicked with no options', async () => {
    renderTeamSelectMenu([]);
    await user.click(screen.getByRole('menu'));
    expect(screen.getAllByRole('menuitem')).toHaveLength(1);
  });

  it('renders menuitems when input is clicked with options', async () => {
    renderTeamSelectMenu();
    await user.click(screen.getByRole('menu'));
    expect(screen.getAllByRole('menuitem')).toHaveLength(defaultSeriesTeamList.length + 1);
  });

  it('clicking menuitem updates displayed menu item', async () => {
    renderTeamSelectMenu();
    await user.click(screen.getByRole('menu'));
    const selectedMenuItemIdx = 2;
    const selectedMenuItem = screen.getAllByRole('menuitem')[selectedMenuItemIdx];

    await user.click(selectedMenuItem);
    expect(screen.getAllByRole('menuitem')[0].textContent).toStrictEqual(selectedMenuItem.textContent);
  });

  it.todo('menu closes on escape key');
  it.todo('menu closes on outside menu click');
  it.todo('focus is trapped in menu');

  it('no a11y violation', async () => {
    const { container } = renderTeamSelectMenu();

    expect(await axe(container)).toHaveNoViolations();
  });
})

const defaultSeriesTeamList = ['series one', 'series two', 'series three'];