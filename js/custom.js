       document.addEventListener(
                "DOMContentLoaded", () => {
                    new Mmenu( "#menu", {
                       "offCanvas": {
                          "position": "right-front"
                       },
                       "theme": "light"
                    });
                }
            );

$(document).ready(function(){
    $(".open").click(function(){
        $(".popup-section").fadeIn(500);
        $("body").addClass('active');
    })

    $(".close-popup").click(function(){
        $(".popup-section").fadeOut(500)
        $("body").removeClass('active');
    })
    

})
