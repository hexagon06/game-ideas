import { render } from '@testing-library/react';

import PantryItems from './pantry-items';

describe('PantryItems', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PantryItems />);
    expect(baseElement).toBeTruthy();
  });
});
