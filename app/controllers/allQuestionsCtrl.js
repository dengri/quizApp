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
            
           
        }
    
    
        

})();