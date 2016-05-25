(function () {
    "use strict";
  
  
    angular
        .module('quizzApp')
        .controller('allQuestionsCtrl' ,allQuestionsCtrl); 
  
  
    
     function allQuestionsCtrl(questionsResource) {
            
           
            
           var vm = this;
            
           var data = questionsResource.all({}, function () {
                
                vm.categories = data;
                
                console.log(data);
                data.forEach(function (theme) {
                    
                    theme.questions.forEach(function (question) {
                            var answers = questionsResource.answers({id: question.id}, function () {
                                question.answers = answers.answers;
                                console.log(question.answers); 
                         }); 
                    });
                    
                });
                    
            });
            
            
            
            var testOpen = false;
            vm.testClass = "col-md-4 col-xs-6";
            
            
            
           vm.toggleTestClass = function(){
                vm.testClass = testOpen ? "col-md-4 col-xs-6" : "col-md-12 col-xs-12"; 
                testOpen = !testOpen; 
            } 
            
           
        }
    
    
        

})();