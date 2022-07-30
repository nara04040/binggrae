$(document).ready(function () {
    // header
    let header = document.querySelector('header');
    let depth2 = document.querySelector('depth2');
    header.addEventListener('mouseenter', function () {
        header.classList.add('on');
    })
    header.addEventListener('mouseleave', function () {
        header.classList.remove('on');
    })


    // slick
    var slideContainer01 = $('.item-cate-list');
    slideContainer01.each(function () {
        slideContainer01.slick({
            infinite: false,
            slidesToShow: 6, // 한 화면에 보여질 컨텐츠 개수
            slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
            speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
            arrows: true, // 옆으로 이동하는 화살표 표시 여부
            // prevArrow: $('.sec02_slider01 .sec02_arrow.prev'),
            prevArrow: $('.item-cate-slider .item-arrow.prev'),
            // nextArrow: $('.sec02_slider01 .sec02_arrow.next'),
            nextArrow: $('.item-cate-slider .item-arrow.next'),
            dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
            autoplay: false, // 자동 스크롤 사용 여부
            autoplaySpeed: 4000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
            pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
            vertical: false, // 세로 방향 슬라이드 옵션
            draggable: false,
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {

                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        infinite: false,
                        arrows: false,
                        dots: true,
                        autoplay: false,
                        rows: 2,
                        slidesPerRow: 1,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
            ]
        });

    })
})

window.onload = function () {

}