import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter.test', () => {
  test('with only first param', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });
  test('decrement', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId('decrement-btn'));
    await waitFor(() => {
      expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
  });
  test('increment', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId('increment-btn'));
    await waitFor(() => {
      expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
  });
});
