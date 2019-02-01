// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls';

describe('<Controls />', () => {
  describe('Lock Control', () => {
    it('rerenders lock', () => {
      // initialize to unlocked
      const { getByText, rerender } = render(<Controls locked={false} />);
      let lock = getByText('Lock Gate');
      expect(lock.textContent).toBe('Lock Gate');

      // rerender to locked
      rerender(<Controls locked={true} />);
      lock = getByText('Unlock Gate');
      expect(lock.textContent).toBe('Unlock Gate');
    });
    it('toggle disabled when gate is open/close', () => {
      const { getByText, rerender } = render(<Controls locked={false} closed={true}/>);
      let lock = getByText('Lock Gate');
      expect(lock.textContent).toBe('Lock Gate');
      expect(lock.disabled).toBe(false);
      
      rerender(<Controls closed={false} />);
      lock = getByText('Lock Gate');
      expect(lock.disabled).toBe(true);
    });
  });

  describe('Gate Control', () => {
    it('rerenders gate', () => {
      // initialize to opened
      const { getByText, rerender } = render(<Controls closed={false} />);
      let gate = getByText('Close Gate');
      expect(gate.textContent).toBe('Close Gate');

      // rerender to closed
      rerender(<Controls closed={true} />);
      gate = getByText('Open Gate');
      expect(gate.textContent).toBe('Open Gate');
    });
    it('toggle disabled when gate is locked/unlocked', () => {
      // initialize to unlocked
      const { getByText, rerender } = render(<Controls locked={false} closed={true}/>);
      let gate = getByText('Open Gate');
      expect(gate.disabled).toBe(false);

      rerender(<Controls locked={true} closed={true} />);
      gate = getByText('Open Gate');
      expect(gate.disabled).toBe(false);
    });
  });
})