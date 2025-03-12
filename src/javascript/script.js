$(document).ready(function() {
    $('#mobile_btn').on('click touchstart', function (e) {
        e.preventDefault();
        $('#mobile_menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-x'); 
    });


    $('.nav-item a').on('click', function () {
        $('.nav-item').removeClass('active');
        $(this).parent().addClass('active'); 
        $('#mobile_menu').removeClass('active');
    });


    $('.btn-acesso').on('click', function (e) {
        e.preventDefault();
        window.open("https://pay.kiwify.com.br/QmmcbQF", "_blank");
    });


    $(".faq-question").on("click touchstart", function (e) {
        e.preventDefault();
        let answer = $(this).next(".faq-answer");

        if (answer.is(":visible")) {
            answer.slideUp();
            $(this).removeClass('active'); 
        } else {
            $(".faq-answer").slideUp(); 
            $(".faq-question").removeClass('active'); 
            answer.slideDown();
            $(this).addClass('active');
        }
    });
});
