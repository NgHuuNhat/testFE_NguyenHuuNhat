// header
$('.single-item').slick({
    dots: true
});

// section #share
$('.center').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 1,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
                dots: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
                dots: true
            }
        }
    ]
});