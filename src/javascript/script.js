$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-x'); // Alterna o ícone do botão
    });

    $('.nav-item').on('click', function () {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');

        // Fecha o menu ao clicar em um item (opcional)
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