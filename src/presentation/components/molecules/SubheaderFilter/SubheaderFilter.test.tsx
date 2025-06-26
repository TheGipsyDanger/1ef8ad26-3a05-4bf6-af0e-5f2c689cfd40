import * as React from 'react';
import { SubheaderFilter } from './';
import { render } from '@testing-library/react-native';

describe('Render SubheaderFilter', () => {
  it('Should be SubheaderFilter exist', () => {
    const { getByTestId } = render(<SubheaderFilter />);
    const currentElement = getByTestId(`SubheaderFilter`);
    expect(currentElement).toBeTruthy();
  });
});