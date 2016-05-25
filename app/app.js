/**
 * Created by Deb on 8/20/2014.
 */
(function () {
    "use strict";
    var app = angular.module("quizzApp", ['ui.router']);
    
    app.config([
        "$stateProvider",
        "$urlRouterProvider",
        function($stateProvider, $urlRouterProvider) {
            
            $urlRouterProvider.otherwise("/welcome");
            
            $stateProvider
                .state(
                    "welcome", {
                        url: "/welcome",
                        templateUrl: "app/templates/welcome.html",
                        controller: "welcomeCtrl as vm"
                    }
                );/*state*/
        }/*function*/
    ]);/*app.config*/
    
}());