jQuery(document).on('scroll', function(){
jQuery('heading').css("top", Math.max(15 - 0.2*window.scrollY, 1) + "vw");
})