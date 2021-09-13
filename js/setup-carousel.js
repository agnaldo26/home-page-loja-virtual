$('#carousel-banner').owlCarousel({
    loop:true,
    nav:true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
})

$('#carousel-shelf').owlCarousel({
    loop:true,
    nav:true,
    items: 4,
    slideBy: 4,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 2
        },
        900:{
            items:3
        },
        1200:{
            items:4
        }
    }
})