import { defer } from 'rxjs';
import {GamesService} from './games.service';
import {GameDataObjectMother} from './object-mother';

describe('Data Service', () => {
  function mockGetRequestWithData(expectedData) {
    return { get: jest.fn(() => expectedData) };
  }

  function mockPostRequestWithException(exceptionToThrow) {
    return { get: jest.fn(() => asyncData(exceptionToThrow())) };
  }

  function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
  }

  function createSUT(mockHttpGet) {
    return new GamesService(mockHttpGet);
  }

  describe('Function : getGamesListData', () => {

    it('Should request the games data from the service and return it', async () => {

      const stubReturnData = GameDataObjectMother.getGameData();
      const mockHttpGet = mockGetRequestWithData(stubReturnData);
      const sut = createSUT(mockHttpGet);

      const result = await sut.getGamesListData();
      expect(result.length).toBe(3);
    });

    it('Should throw an error when the API call fails', async () => {

      const mockHttpGet = mockPostRequestWithException(() => { throw new Error('error from test'); });
      const sut = createSUT(mockHttpGet);

      try {
        await sut.getGamesListData();
      } catch (err) {
        expect(err).toBeDefined();
      }
    });
  });

});
