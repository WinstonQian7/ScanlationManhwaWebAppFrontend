import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import { AddSeriesForm } from './AddSeriesForm';
import { axe } from 'jest-axe';

const mockSetPopup = jest.fn();
const user = userEvent.setup();

function renderAddSeriesForm() {  
  const defaultSeriesTeamList = {'asura': ['series one', 'series two', 'series three'],
    'reaper': ['series one', 'series two'],
    'flame': ['different series', 'different series two']
  }; 
  return render(
    <AddSeriesForm popupState={mockSetPopup} seriesTeamList={defaultSeriesTeamList}/>
  );
}

describe('AddSeriesForm', () => {
  beforeEach(() => {
    renderAddSeriesForm();
  });

  it.skip('renders form content', () => {
    expect(screen.getByText(/ADD SERIES/ui)).toBeVisible();
    expect(screen.getByRole('button', {name: /Cancel/ui})).toBeVisible();
    expect(screen.getByRole('button', {name: /Confirm/ui})).toBeVisible();
  });

  it('clicking cancel button closes form', async () => {
    await user.click(screen.getByRole('button', {name: /Cancel/ui}));
    
    expect(mockSetPopup.call.length).toBe(1);
  });
  
  // it.todo('failed submission triggers error modal', async () => {});
  // it.todo('valid submission triggers success modal', async () => {});
  // it.todo('clicking submit button validates data', async () => {});
  it('clicking outside form closes form', async () => {
    await user.click(document.body);
    
    expect(screen.queryByRole('form', {name: /Add Series/})).toBeNull();
  });

  it('pressing escape closes form', async () => {
    await user.keyboard('{Escape}');

    expect(screen.queryByRole('form', {name: /Add Series/ui})).toBeNull();
  });
  // it.todo('focus is trapped in form', async () => {});
  it.skip('no a11y violation', async () => {
    const { container } = renderAddSeriesForm();

    expect(await axe(container)).toHaveNoViolations();
  }); 
});