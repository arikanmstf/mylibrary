import storage from 'helpers/storage/storage';

describe('test/app/helpers/storage/storage.test.js', () => {
  it('save and load', async () => {
    storage.save({
      key: 'dummyKey',
      data: 'dummyData',
    });

    const result = await storage.load({ key: 'dummyKey' });
    expect(result).toEqual('dummyData');
  });
});
