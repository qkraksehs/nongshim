// main.js

// mobile toggle-menu
$(function(){
    $('#gnb-toggle-btn').click(function(){
        $('#gnb').toggleClass('on');
    })

    // pc sitemap-menu
    $('#site-map-btn').click(function(){
        $('.sitemap-modal').addClass('on');
    })
    // sitemap-close
    $('#sitemap-modal-close').click(function(){
        $('.sitemap-modal').removeClass('on');
    })
});