// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('render to initial state', () => {
    const { getByText } = render(<Dashboard />);
    let lockStatus = getByText('Unlocked');
    let lockCommand = getByText('Lock Gate');
    let gateStatus = getByText('Open');
    let gateCommand = getByText('Close Gate');

    expect(lockStatus.textContent).toBe('Unlocked');
    expect(lockCommand.textContent).toBe('Lock Gate');
    expect(gateStatus.textContent).toBe('Open');
    expect(gateCommand.textContent).toBe('Close Gate');
  });

  it('change lock status', () => {
    const { getByText } = render(<Dashboard />);
    let lockButton = getByText('Lock Gate');
    let gateButton = getByText('Close Gate');
    
    fireEvent.click(gateButton);
    let gateStatus = getByText('Closed');
    lockButton = getByText('Open Gate');

    expect(gateStatus.textContent).toBe('Closed');
    expect(lockButton.textContent).toBe('Open Gate');

    fireEvent.click(gateButton);
    gateStatus = getByText('Open');
    lockButton = getByText('Close Gate');

    expect(gateStatus.textContent).toBe('Open');
    expect(lockButton.textContent).toBe('Close Gate');
  });
})