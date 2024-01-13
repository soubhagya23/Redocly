$(document).ready(function () {
    $('.owl-adviser').owlCarousel({

        //center: false,
        startPosition: 0, 
        items: 3,

        loop:false,

        margin: 0,

        nav: false,

        responsiveClass: true,

        autoplay: false,

        autoplayTimeout: 5000,

        autoHeight:false,

        dots: true,

        mouseDrag: true,

        touchDrag: true,

        responsive: {

            0: {items: 1, autoHeight:true},

            768: {items: 3, autoHeight:true},

            992: {items: 3, autoHeight:true},

            1000: {items: 3}

        }

    });
    $('.owl-team-wrap').owlCarousel({        
        startPosition: 0, 
        items: 6,

        loop:false,

        margin: 0,

        nav: false,

        responsiveClass: true,

        autoplay: false,

        autoplayTimeout: 5000,

        autoHeight:false,

        dots: true,

        mouseDrag: true,

        touchDrag: true,

        responsive: {

            0: {items: 1},

            480: {items: 2},

            767: {items: 3},

            991: {items: 4, dots: true},            

            1024: {items: 5, dots: true},            

            1200: {items: 6}

        }

    });
    $('.owl-testimonial-wrap').owlCarousel({        
        startPosition: 0, 
        items: 1,

        loop:false,

        margin: 0,

        nav: false,

        responsiveClass: true,

        autoplay: false,

        autoplayTimeout: 5000,

        autoHeight:true,

        dots: true,

        mouseDrag: true,

        touchDrag: true        

    });
    $(".owl-interested-app").owlCarousel({
        startPosition: 0, 
        loop:false,

        items: 4,

        //center: false,

        margin: 30,

        responsiveClass: true,

        autoplay: false,

        autoplayTimeout: 5000,

        autoHeight: false,

        dots: false,

        mouseDrag: true,

        touchDrag: true,

        // slideBy:1,

        // stagePadding: -100,


        endPosition: 1,

        mergeFit: false,

        // rewind:true,

        URLhashListener: true,

        nav: true,

        navText: [

            "<span class='prev-owl-btn'><span class='owl-btn-squre'><i class='fa fa-angle-left' aria-hidden='true'></i></span></span>",

            "<span class='next-owl-btn'><span class='owl-btn-squre'><i class='fa fa-angle-right' aria-hidden='true'></i></span></span>"

        ],

        responsive: {

            0: {

                items: 1,

                nav: false,

                dots: true

            },

            480: {

                items: 1

            },

            767: {

                items: 3

            },

            991: {

                items: 3

            },

            1024: {

                items: 4

            },

            1200: {

                items: 4

            }

        }

    });
    $('.owl-our-products').owlCarousel({

        startPosition: 0, 

        loop:false,



        items: 3,



        //center: false,



        margin: 30,



        responsiveClass: true,



        autoplay: false,



        autoplayTimeout: 5000,



        autoHeight: false,



        dots: false,



        mouseDrag: true,



        touchDrag: true,



        // slideBy:1,



        // stagePadding: -100,









        mergeFit: false,



        // rewind:true,



        URLhashListener: true,



        nav: true,



        navText: [



            "<span class='prev-owl-btn'><span class='owl-btn-squre'><i class='fa fa-angle-left' aria-hidden='true'></i></span></span>",



            "<span class='next-owl-btn'><span class='owl-btn-squre'><i class='fa fa-angle-right' aria-hidden='true'></i></span></span>"



        ],



        responsive: {



            0: {



                items: 1,



                nav: true,



            },



            480: {



                items: 1,

                nav: true,

            },



            767: {



                items: 2,

                nav: true,

            },



            991: {



                items: 2



            },



            1024: {



                items: 3



            },



            1200: {



                items: 3



            }



        }



    });
    $('.owl-related-blog').owlCarousel({

        startPosition: 0, 

        loop:false,



        items: 3,



        //center: false,



        margin: 30,



        responsiveClass: true,



        autoplay: false,



        autoplayTimeout: 5000,



        autoHeight: false,



        dots: false,



        mouseDrag: true,



        touchDrag: true,



        // slideBy:1,



        // stagePadding: -100,






        endPosition: 1,



        mergeFit: false,



        // rewind:true,



        URLhashListener: true,



        nav: true,



        navText: [



            "<span class='prev-owl-btn'><span class='owl-btn-squre'><i class='fa fa-angle-left' aria-hidden='true'></i></span></span>",



            "<span class='next-owl-btn'><span class='owl-btn-squre'><i class='fa fa-angle-right' aria-hidden='true'></i></span></span>"



        ],



        responsive: {



            0: {



                items: 1.3,

                margin: 26,

                nav: false



            },



            480: {



                items: 1



            },



            767: {



                items: 2



            },



            991: {



                items: 2



            },



            1024: {



                items: 3



            },



            1200: {



                items: 4



            }



        }



    });
    $(".owl-offers-deals").owlCarousel({
    
        startPosition: 0, 
    
        loop:false,
    
    
    
        items: 3,
    
    
    
        //center: false,
    
    
    
        margin: 30,
    
    
    
        responsiveClass: true,
    
    
    
        autoplay: false,
    
    
    
        autoplayTimeout: 5000,
    
    
    
        autoHeight: false,
    
    
    
        dots: false,
    
    
    
        mouseDrag: true,
    
    
    
        touchDrag: true,
    
    
    
        nav: true,
    
    
    
        slideby: 1,
    
    
    
        navText: [
    
    
    
            "<span class='prev-owl-btn'><span class='owl-btn-squre'><i class='fa fa-angle-left' aria-hidden='true'></i></span></span>",
    
    
    
            "<span class='next-owl-btn'><span class='owl-btn-squre'><i class='fa fa-angle-right' aria-hidden='true'></i></span></span>"
    
    
    
        ],
    
    
    
        responsive: {
    
    
    
            0: {
    
    
    
                items: 1.3,
    
    
    
                nav: false,
    
    
    
                margin: 26,
    
    
    
                dots: false
    
    
    
            },
    
    
    
            480: {
    
    
    
                items: 2,
    
    
    
                nav: false,
    
    
    
                margin: 10,
    
    
    
                dots: false
    
    
    
            },
    
    
    
            767: {
    
    
    
                items: 2
    
    
    
            },
    
    
    
            991: {
    
    
    
                items: 2
    
    
    
            },
    
    
    
            1024: {
    
    
    
                items: 3
    
    
    
            },
    
    
    
            1200: {
    
    
    
                items: 3
    
    
    
            }
    
    
    
        }
    
    
    
    });


    $(".owl-offers-deals2").owlCarousel({
    
        startPosition: 0, 
    
        loop:false,
    
    
    
        items: 3,
    
    
    
        //center: false,
    
    
    
        margin: 30,
    
    
    
        responsiveClass: true,
    
    
    
        autoplay: false,
    
    
    
        autoplayTimeout: 5000,
    
    
    
        autoHeight: false,
    
    
    
        dots: false,
    
    
    
        mouseDrag: true,
    
    
    
        touchDrag: true,
    
    
    
        nav: false,
    
    
    
        slideby: 1,
    
    
    
        navText: [
    
    
    
            "<span class='prev-owl-btn'><span class='owl-btn-squre'><i class='fa fa-angle-left' aria-hidden='true'></i></span></span>",
    
    
    
            "<span class='next-owl-btn'><span class='owl-btn-squre'><i class='fa fa-angle-right' aria-hidden='true'></i></span></span>"
    
    
    
        ],
    
    
    
        responsive: {
    
    
    
            0: {
    
    
    
                items: 1.3,
    
    
    
                nav: false,
    
    
    
                margin: 26,
    
    
    
                dots: false
    
    
    
            },
    
    
    
            480: {
    
    
    
                items: 2,
    
    
    
                nav: false,
    
    
    
                margin: 10,
    
    
    
                dots: false
    
    
    
            },
    
    
    
            767: {
    
    
    
                items: 1,
                dots: false
    
    
    
            },
    
    
    
            991: {
    
    
    
                items: 1,
                dots: false
    
    
    
            },
    
    
    
            1024: {
    
    
    
                items: 2,
                dots: false
    
    
    
            },
    
    
    
            1200: {
    
    
    
                items: 2,
                dots: false
    
    
    
            }
    
    
    
        }
    
    
    
    });

  $(".related-blog-owl-2").owlCarousel({
    
    startPosition: 0, 

    loop:false,



    items: 1.7,



    //center: false,



    margin: 30,



    responsiveClass: true,



    autoplay: false,



    autoplayTimeout: 5000,



    autoHeight: false,



    dots: false,



    mouseDrag: true,



    touchDrag: true,



    nav: true,




    navText: [



        "<span class='prev-owl-btn'><span class='owl-btn-squre'><i class='fa fa-angle-left' aria-hidden='true'></i></span></span>",



        "<span class='next-owl-btn'><span class='owl-btn-squre'><i class='fa fa-angle-right' aria-hidden='true'></i></span></span>"



    ],



    responsive: {



        0: {



            items: 1.7,



            nav: false,



            margin: 26,



            dots: false



        },



        480: {



            items: 2,



            nav: false,



            margin: 10,



            dots: false



        },



        767: {



            items: 2,
            dots: false



        },



        991: {



            items: 1.7,
            dots: false



        },



        1024: {



            items: 1.7,
            dots: false



        },



        1200: {



            items: 1.7,
            dots: false



        }



    }



});

    if ($(window).width() > 767) {
        $(".owl-more-from-rbl").owlCarousel({
            startPosition: 0, 
    
    
            loop:false,
        
        
        
            items: 3,
        
        
        
            //center: false,
        
        
        
            margin: 30,
        
        
        
            responsiveClass: true,
        
        
        
            autoplay: false,
        
        
        
            autoplayTimeout: 5000,
        
        
        
            autoHeight: false,
        
        
        
            dots: false,
        
        
        
            mouseDrag: true,
        
        
        
            touchDrag: true,
        
        
        
            nav: false,
        
        
        
            slideby: 1,
        
        
        
            navText: [
        
        
        
                "<span class='prev-owl-btn'><span class='owl-btn-squre'><i class='fa fa-angle-left' aria-hidden='true'></i></span></span>",
        
        
        
                "<span class='next-owl-btn'><span class='owl-btn-squre'><i class='fa fa-angle-right' aria-hidden='true'></i></span></span>"
        
        
        
            ],
        
        
        
            responsive: {
        
        
        
                0: {
        
        
        
                    items: 2,
        
        
        
                    nav: false,
        
        
        
                    margin: 26,
        
        
        
                    dots: false
        
        
        
                },
        
        
        
                480: {
        
        
        
                    items: 2,
        
        
        
                    nav: false,
        
        
        
                    margin: 10,
        
        
        
                    dots: false
        
        
        
                },
        
        
        
                767: {
        
        
        
                    items: 2,
                    dots: false
        
        
        
                },
        
        
        
                991: {
        
        
        
                    items: 3,
                    dots: false
        
        
        
                },
        
        
        
                1024: {
        
        
        
                    items: 4,
                    dots: false
        
        
        
                },
        
        
        
                1200: {
        
        
        
                    items: 4,
                    dots: false
        
        
        
                }
        
        
        
            }
        
        
        
        });
    
    $('.owl-quick-link').owlCarousel({
        startPosition: 0, 
        loop:false,

        items: 6,

        //    //center: false,

        margin: 30,

        responsiveClass: true,

        autoplay: true,

        autoplayTimeout: 5000,

        autoHeight: false,

        dots: true,

        mouseDrag: true,

        touchDrag: true,

        nav: true,

        navText: [

            "<span class='prev-owl-btn'><span class='owl-btn-squre'><i class='fa fa-angle-left' aria-hidden='true'></i></span></span>",

            "<span class='next-owl-btn'><span class='owl-btn-squre'><i class='fa fa-angle-right' aria-hidden='true'></i></span></span>"

       ],


        responsive: {

            0: { items: 2, nav: false },

            480: { items: 2 },

            767: { items: 3 },

            991: { items: 4 },

            1024: { items: 4 },

            1200: { items: 6 }

        }

    });

    }
$('.owl-team-wrap-single').owlCarousel({
    startPosition: 0, 
    items: 1,

    loop:false,

    margin: 0,

    responsiveClass: true,

    autoplay: true,

    autoplayTimeout: 5000,

    autoHeight: false,

    dots: true,

    mouseDrag: true,

    touchDrag: true,

    nav: false,

    navText: [

             "<span class='prev-owl-btn'><span class='owl-btn-squre'><i class='fa fa-angle-left' aria-hidden='true'></i></span></span>",

                "<span class='next-owl-btn'><span class='owl-btn-squre'><i class='fa fa-angle-right' aria-hidden='true'></i></span></span>"

        ],

});

$('.owl-partners-wrap').owlCarousel({
    startPosition: 0, 
    items: 4,

    loop:false,

    margin: 30,

    responsiveClass: true,

    autoplay: true,

    autoplayTimeout: 5000,

    autoHeight: false,

    dots: true,

    mouseDrag: true,

    touchDrag: true,

    nav: false,

    navText: ["<span class='prev-owl-btn'><i class='fa fa-angle-left' aria-hidden='true'></i></span>", "<span class='next-owl-btn'><i class='fa fa-angle-right' aria-hidden='true'></i></span>"],

    responsive: {

        0: { items: 2, nav: false },

        480: { items: 2 },

        767: { items: 3 },

        991: { items: 4 },

        1024: { items: 4 },

        1200: { items: 4 }

    }

});
$('.rewiew-cards-owl-carousel').owlCarousel({
    startPosition: 0, 
    loop:false,

    items: 4,

    margin: 15,

    responsiveClass: true,

    autoplay: false,

    autoplayTimeout: 5000,

    autoHeight: false,

    dots: false,

    mouseDrag: true,

    touchDrag: true,

    nav: false,

    navText: ["<span class='prev-owl-btn'><span class='owl-btn btn-sq btn-ylw'><i class='fa fa-angle-left' aria-hidden='true'></i></span></span>", "<span class='owl-btn btn-sq btn-ylw'><span class='next-owl-btn'><i class='fa fa-angle-right' aria-hidden='true'></i></span></span>"],

    responsive:{

        0:{ items:1.35, nav: false,mouseDrag: true, autoplay: true, touchDrag: true,},

        480: { items: 2, nav: false,mouseDrag: true, autoplay: true, touchDrag: true, },

        767: { items: 3, nav: false,mouseDrag: true, autoplay: true, touchDrag: true, },

        991: { items: 3, nav: false,mouseDrag: true, autoplay: true, touchDrag: true, },

        1020: { items: 4 },

    }

});
});