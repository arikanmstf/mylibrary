import { createFakeStore } from 'helpers/connect/fakeStore';

describe('test/app/helpers/connect/fakeStore.test.js', () => {
  it('createFakeStore', () => {
    const store = createFakeStore({ loader: { dummyField: 'dummyValue' } });
    expect(store).toEqual({ props: { loader: { dummyField: 'dummyValue' } } });
  });
});
