(function () {
    "use strict";
    var app = angular.module("quizzApp", ['ui.router', 'common.services']);
    
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
                )
                
                .state(
                    "home", {
                        url: "/",
                        templateUrl: "app/templates/welcome.html",
                     }
                )
                
                .state(
                    "allQuestions", {
                        url: "/all-questions",
                        templateUrl: "app/templates/all-questions.html",
                        controller: "allQuestionsCtrl as vm"
                    }
                 
                );
        }/*function*/
    ]);/*app.config*/
    
}());