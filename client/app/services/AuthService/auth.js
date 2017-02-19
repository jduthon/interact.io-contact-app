import angular from 'angular';
import AuthService from './auth.service';

let AuthModule = angular.module('interact.authService', [])

.service('AuthService', AuthService)

.name;

export default AuthModule;
