import { createFakeStore } from 'helpers/connect/fakeStore';

describe('src/helpers/connect/fakeStore', () => {
  it('createFakeStore', () => {
    const store = createFakeStore({ loader: { dummyField: 'dummyValue' } });
    expect(store).toEqual({ props: { loader: { dummyField: 'dummyValue' } } });
  });
});
