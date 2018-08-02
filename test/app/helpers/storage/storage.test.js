import storage from 'helpers/storage/storage';

describe('src/helpers/storage/storage', () => {
  it('save and load', async () => {
    storage.save({
      key: 'dummyKey',
      data: 'dummyData',
    });

    const result = await storage.load({ key: 'dummyKey' });
    expect(result).toEqual('dummyData');
  });
});
