import angular from 'angular';
import InteractApiService from './interactApi.service';

let interactApiModule = angular.module('interactApi', [])

.service('InteractApiService', InteractApiService)

.name;

export default interactApiModule;
