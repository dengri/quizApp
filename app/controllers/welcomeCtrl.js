(function() {
    "use strict";
    
    angular
        .module("quizzApp")
        .controller('welcomeCtrl', welcomeCtrl);
        
        
        function welcomeCtrl() {
            var vm = this;
            vm.hello = "Hello World";
            
            /*------------- JQuery offcanvas start ----------------*/
            
            $(document).ready(function () {
                $('[data-toggle="offcanvas-left"]').click(function () {
                    
                    $('.row-offcanvas').removeClass('right').toggleClass('left');
                });
                
                $('[data-toggle="offcanvas-right"]').click(function () {
                    $('.row-offcanvas').removeClass('left').toggleClass('right');
                });
            
            });            
            
            /*------------- JQuery offcanvas end ----------------*/
        
            
        }
        
        
        
        
        
        
        
        
        
})()