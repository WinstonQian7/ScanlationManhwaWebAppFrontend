import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { DeleteModal } from './DeleteModal';

function renderDeleteModal() {
  const defaultData = [];
  
  return render (
    <DeleteModal />
  );
}

describe('DeleteModal', () => {
  it.todo('renders modal', () => {

  });
  it.todo('clicking cancel button closes modal', async () => { });
  it.todo('clicking confirm button sends delete API request', async () => { });
  it.todo('no a11y violations', async () => {

  });
});