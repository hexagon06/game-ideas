import { render } from '@testing-library/react';

import PantryStock from './pantry-stock';

describe('PantryStock', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PantryStock />);
    expect(baseElement).toBeTruthy();
  });
});
