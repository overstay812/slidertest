$(function () {
    $('.slider').slick({
        // centerMode: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerMode: true,
                    dots: true,
                    centerPadding: '1px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })
})
