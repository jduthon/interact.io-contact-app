class AuthService {
  constructor(InteractApiService) {
    'ngInject'
    this.InteractApiService = InteractApiService;
    this.loginPath = 'login';
    this.logoutPath = 'logout';
  }

  login(credentials){
    return this.InteractApiService.postUrl(this.loginPath, false, credentials).then(
      response => {
        const data = response.data;
        this.user = data.user;
        this.InteractApiService.setAuthToken(data.token.authToken);
        return data.user;
      }
    );
  }

  logout(){
    const body = {
      'authToken': this.InteractApiService.getAuthToken()
    };
    return this.InteractApiService.postUrl(this.logoutPath, false, body).then(
      response => {
        this.InteractApiService.removeAuthToken();
        return response.data;
      }
    )
  }

  isAuthenticated(){
    return this.InteractApiService.getAuthToken() !== undefined;
  }

  getUser(){
    return this.user;
  }
}

export default AuthService;
