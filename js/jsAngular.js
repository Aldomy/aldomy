
var aldomyApp= angular.module('aldomyApp', ['ui.router']);

aldomyApp.config(['$stateProvider', function(){
    
    var home={
        url:'/home',
        templeteUrl:'view/home.html',
        controller: 'homeCtrl',
        title: 'Home'
    },
        
    var services={
        url:'/services',
        templeteUrl:'view/services.html',
        controller: 'serviceCtrl',
        title: 'Services'
    },
        
    var home={
        url:'/home',
        templeteUrl:'view/home.html',
        controller: 'homeCtrl',
        title: 'Home'
    },   
        
    var home={
        url:'/home',
        templeteUrl:'view/home.html',
        controller: 'homeCtrl',
        title: 'Home'
    },
        
    var home={
        url:'/home',
        templeteUrl:'view/home.html',
        controller: 'homeCtrl',
        title: 'Home'
    };
    
    $stateProvider
        .State('home', home)
        .state('services',services)

    
}]);