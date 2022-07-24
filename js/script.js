$(window).ready(function () {
    let mainTop = $('.main-top');
    let header = $('.header');
    let gnb = $('.gnb');
    let depth_1 = $('.depth1');
    let depth_2 = $('.depth2');
    let mainTopMaxHeight = mainTop.outerHeight();
    let headerMinheight = header.outerHeight();

    mainTop.css('height', headerMinheight);
    depth_1.mouseenter(function () {
        mainTop.css('height', mainTopMaxHeight);
    });
    mainTop.mouseleave(function () {
        mainTop.css('height', headerMinheight)
    });

})

window.onload = function () {

}