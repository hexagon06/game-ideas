import { render } from '@testing-library/react';

import PantryOverview from './pantry-overview';

describe('PantryOverview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PantryOverview />);
    expect(baseElement).toBeTruthy();
  });
});
