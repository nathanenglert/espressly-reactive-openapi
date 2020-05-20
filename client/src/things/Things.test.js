import React from 'react';
import { render, waitForDomChange, fireEvent } from '@testing-library/react';

import Things from './Things';
import ThingsAPI from './ThingsAPI';

describe('<Things />', () => {
  it('should display a list of things', async () => {
    const expected = 'A thing';

    jest
      .spyOn(ThingsAPI, 'getThings')
      .mockResolvedValue(Promise.resolve([{ _id: 1, name: expected }]));

    const { getByText } = render(<Things />);
    await waitForDomChange();

    const listElement = getByText(expected);
    expect(listElement).toBeInTheDocument();
  });

  it('should display the created thing', async () => {
    const expected = 'Another thing';

    jest
      .spyOn(ThingsAPI, 'createThing')
      .mockResolvedValue(Promise.resolve({ _id: 2, name: expected }));

    const { getByText } = render(<Things />);
    const button = getByText('Add');

    fireEvent.click(button);

    await waitForDomChange();

    const listElement = getByText(expected);
    expect(listElement).toBeInTheDocument();
  });

  it('should call the API with the new thing name', async () => {
    const expected = 'Another thing';

    const spy = jest.spyOn(ThingsAPI, 'createThing');

    const { getByText, getByPlaceholderText } = render(<Things />);
    const input = getByPlaceholderText('Thing');
    const button = getByText('Add');

    fireEvent.change(input, { target: { value: expected } });
    fireEvent.click(button);

    await waitForDomChange();

    expect(spy).toHaveBeenCalledWith({ name: expected });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
