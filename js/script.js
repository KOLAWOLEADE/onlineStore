$(document).ready(function(){
    $("#move").slick({
        // centermode: true,
        // centerpadding: "50px",
        slideToShow:6,
        slideToScroll:1,
        Infinity:true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrow: false,
                    centerpadding : "40px",
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    });





    // $(document).ready(function(){
    //     $(".carousel").slick({
    //         slideToShow: 6,
    //         dots:true,
    //         centermode: true,
    //     })
    // })



// ANOTHRE JS

    $(document).ready(function(){
        let images = $(".carousel img");

        let i = 0;
        // SHOW FIRST IMAGE
        images.eq(i).addClass("active");


        //SET INTERVAL TO CHANGE IMAGE EVERY 3 seconds

        setInterval(function(){
            // FADE OUT CURRENT IMAGE

            images.eq(i).removeClass("active");

            // INCREMENT IMAGE index,wrap arround if at end

            i = (i + 1 ) % images.length;

            // Fade in next image

            images.eq(i).addClass("active");


        }, 3000);
    });