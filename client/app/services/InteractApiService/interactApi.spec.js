import InteractApiModule from './interactApi'

const credentials = {
  username: 'duthon.jean@gmail.com',
  password: 'T2eDLAlbF84b'
};

describe('InteractApiService', () => {
  beforeEach(angular.mock.module(InteractApiModule));

  describe('InteractApiService', () => {
    let InteractApiService;
    beforeEach(() => {
      angular.mock.inject((_InteractApiService_) => {
        InteractApiService = _InteractApiService_;
      });
    });

    it('has a property authToken which can be set and deleted', () => {
      const fakeToken = 'test';
      InteractApiService.setAuthToken(fakeToken);
      expect(InteractApiService.getAuthToken()).to.equal(fakeToken);
      InteractApiService.removeAuthToken();
      expect(InteractApiService.getAuthToken()).to.be.undefined;
    });
  });

});
