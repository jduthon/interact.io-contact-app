class LoginController {
  constructor(AuthService, $state) {
    'ngInject'
    this.user = {};
    this.AuthService = AuthService;
    this.$state = $state;
  }

  login(){
    this.AuthService.login(this.user).then(
      response => {
        this.$state.go('main.contacts');
      }
    )
  }
}

export default LoginController;
