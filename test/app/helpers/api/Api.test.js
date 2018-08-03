import Api from 'helpers/api/Api.js'; // eslint-disable-line

describe('src/test/app/helpers/api/Api.test.js', () => {
  const url = 'mock-url';

  it('Static get', async () => {
    const response = await Api.get(url);
    const expected = {
      mockedField: 'mockedValue',
    };

    expect(response).toEqual(expected);
  });

  it('Static post', async () => {
    const response = await Api.post(url);
    const expected = {
      mockedFieldPost: 'mockedValuePost',
    };

    expect(response).toEqual(expected);
  });

  describe('Static fetch', () => {
    it('status===200', () => {
      const response = {
        status: 200,
        data: {
          success: {
            mockedField: 'mockedValue',
          },
        },
      };

      const data = Api.fetch(response);
      const expected = {
        mockedField: 'mockedValue',
      };

      expect(data).toEqual(expected);
    });

    it('status!==200', () => {
      const response = {
        status: 199,
        data: {
          error: {
            mockedField: 'mockedValue',
          },
        },
      };

      const data = Api.fetch(response);
      const expected = {
        mockedField: 'mockedValue',
      };

      expect(data).toEqual(expected);
    });

    it('response.data===undefined', () => {
      const response = {};
      const data = Api.fetch(response);

      expect(data).toEqual(undefined);
    });
  });
});
