  $(document).ready(function () {
            $('[data-toggle="offcanvas-left"]').click(function () {
                
                $('.row-offcanvas').removeClass('right').toggleClass('left');
            });
            
            $('[data-toggle="offcanvas-right"]').click(function () {
                $('.row-offcanvas').removeClass('left').toggleClass('right');
            });
            
        });