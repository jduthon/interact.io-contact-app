class interactApiService {
  constructor($http, $q) {
    'ngInject'
    this.$http = $http;
    this.$q = $q;
    this.baseUrl = 'https://internal-api-staging-lb.interact.io/v2/';
    this.defaultConfig = {
      'headers': {
        'Content-Type': 'application/json'
      }
    };
    this.localStorageKey = 'interactAuthenticationToken';

    this.init();
  }

  init(){
    const authToken = window.localStorage.getItem(this.localStorageKey);
    if(authToken){
      this.setAuthToken(authToken);
    }
  }

  setAuthToken(token){
    this.authToken = token;
    window.localStorage.setItem(this.localStorageKey, this.authToken);
  }

  getAuthToken(){
    return this.authToken;
  }

  removeAuthToken(){
    delete this.authToken;
    window.localStorage.removeItem(this.localStorageKey);
  }

  _getAuthConfig(){
    return this.authToken ? {headers: {authToken : this.authToken}} :
    {error: 'No auth token has been set, cannot make an authenticated request'};
  }

  getConfig(authenticated){
    const deferred = this.$q.defer();
    let config = this.defaultConfig;
    if(authenticated){
      const authConf = this._getAuthConfig();
      if(authConf.error){
        deferred.reject(authConf)
      } else {
        config = {...config, ...authConf};
      }
    }
    deferred.resolve(config);
    return deferred.promise;
  }

  _buildUrl(path){
    return `${this.baseUrl}${path}`;
  }

  _processUrl(method, url, authenticated, data){
    return this.getConfig(authenticated).then( authConfig => {
      const config = {
        method,
        url: this._buildUrl(url),
        params: data.params ? data.params : {},
        data: data.data ? data.data : {},
        ...authConfig
      };
      return this.$http(config);
    })
  }

  getUrl(url, authenticated, params = undefined){
    const data = {
      params
    };
    return this._processUrl('GET',url, authenticated, data);
  }

  _processDataUrl(method, url, authenticated, data){
    const _data = {
      data: data
    };
    return this._processUrl(method, url, authenticated, _data);
  }

  postUrl(url, authenticated, data = undefined){
    return this._processDataUrl('POST', url, authenticated, data);
  }

  deleteUrl(url, authenticated, data = undefined){
    return this._processDataUrl('DELETE', url, authenticated, data);
  }
}

export default interactApiService;
