$(window).scroll(function(){
 if ($(window).scrollTop()>50){
    $(".header-bottom").addClass("fixed");
 }
 else{
    $(".header-bottom").removeClass("fixed");
 }

})