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

$('.open').click(function(){
    $('.popup-sction').fadeIn();
});
$('.close').click(function(){
    $('.popup-sction').fadeOut();
});

$('.open-modal').click(function(){
    $('.popup').fadeIn();
});
$('.close').click(function(){
    $('.popup').fadeOut();
});