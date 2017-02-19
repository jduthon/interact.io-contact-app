import AuthModule from './auth';
import interactApiModule from '../InteractApiService/interactApi';

const credentials = {
  username: 'INSERT_VALID_USERNAME',
  password: 'INSERT_VALID_PASSWORD'
};

describe('AuthModule', () => {
  beforeEach(() => {
    angular.mock.module(AuthModule);
    angular.mock.module(interactApiModule);
  });

  describe('AuthService', () => {
    let AuthService;
    beforeEach(() => {
      angular.mock.inject((_AuthService_) => {
        AuthService = _AuthService_;
      });
    });

    it('can login', () => {
      AuthService.login(credentials).then(
        result => {
          expect(result.user).to.have.property('id');
        }
      );
    });
  });

});
