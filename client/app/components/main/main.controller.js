class MainController{
  constructor(AuthService, $state){
    'ngInject'
    this.AuthService = AuthService;
    this.$state = $state;
    this.init();
  }

  logout(){
    this.AuthService.logout().then(
      () => this.$state.go('auth.login')
    );
  }

  init(){
    this.user = this.AuthService.getUser();
  }
}

export default MainController;
