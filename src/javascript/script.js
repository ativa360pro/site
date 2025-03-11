$(document).ready(function() {
   
    $('#mobile_btn').on('click touchstart', function () {
        $('#mobile_menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-x'); 
    });

    $('.nav-item').on('click', function () {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
        $('#mobile_menu').removeClass('active');
    });

    $('.btn-acesso').on('click', function (e) {
        e.preventDefault();
        window.open("https://pay.kiwify.com.br/QmmcbQF", "_blank");
    });

    $(".faq-question").on("click", function () {
        let answer = $(this).next(".faq-answer");
    
       
            answer.slideUp();
        } else {
            $(".faq-answer").slideUp(); 
            answer.slideDown();
        }
    });