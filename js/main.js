$(document).ready(() => {

    $( "#accordion" ).accordion();

    $('.menu-btn').click((e) => {
        $('.menu-btn').toggleClass('menu-btn-active');
        $('.menu-nav').toggleClass('menu-nav-active');
    });

    $('.menu-nav, .menu-nav a').click(() => {
        $('.menu-nav').removeClass('menu-nav-active');
        $('.menu-btn').removeClass('menu-btn-active');
    });

    // -------------
    $num = $('.my-card').length;
    $even = $num / 2;
    $odd = ($num + 1) / 2;

    if ($num % 2 == 0) {
        $('.my-card:nth-child(' + $even + ')').addClass('active');
        $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
        $('.my-card:nth-child(' + $even + ')').next().addClass('next');
    } else {
        $('.my-card:nth-child(' + $odd + ')').addClass('active');
        $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
        $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
    }

    $('.my-card').click(function() {
        $slide = $('.active').width();
        console.log($('.active').position().left);

        if ($(this).hasClass('next')) {
            $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
        } else if ($(this).hasClass('prev')) {
            $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
        }

        $(this).removeClass('prev next');
        $(this).siblings().removeClass('prev active next');

        $(this).addClass('active');
        $(this).prev().addClass('prev');
        $(this).next().addClass('next');

    });

// Keyboard nav
    $('html body').keydown(function(e) {
        if (e.keyCode == 37) { // left
            $('.active').prev().trigger('click');
        }
        else if (e.keyCode == 39) { // right
            $('.active').next().trigger('click');
        }
    });
    //--------------


    $('#discount-action .btn-gold').click(() => {
        $('#discount-pop-up').css('display', 'flex');
    });

    $('#frame-cancel-close, #discount-pop-up').click((e) => {
        if (e.target.id === 'discount-pop-up' || e.target.id === 'frame-cancel-close')
            $('#discount-pop-up').hide();
    });

    $('#main-info-action .btn-gold, .btn-card, .link').click(() => {
        $('#sign-up-container').css('display', 'flex');
    });

    $('#sign-up-cancel, #sign-up-container').click((e) => {
        if (e.target.id === 'sign-up-container' || e.target.id === 'sign-up-cancel-close')
            $('#sign-up-container').hide();
    });

    $('#phone-number').keypress ((event) => {
        if (isNaN(event.key)) {
            event.preventDefault();
        }
    });

    $('#reserve-button > button').click(() => {
        let name = $('#name');
        let service = $('#service');
        let date = $('#date');
        let number = $('#phone-number');
        let masters = $('#masters');
        let time = $('#time');


        //
        if (!name.val()) {
            name.css('border-color', 'red');
            $('#input-name .reserve-error').css('color', 'red');
        } else {
            name.css('border-color', 'rgb(163, 136, 92)');
            $('#input-name .reserve-error').css('color', 'transparent');
        }
        if (service.val() == '204') {
            service.css('border-color', 'red');
            $('#select-service .reserve-error').css('color', 'red');
        } else {
            service.css('border-color', 'rgb(163, 136, 92)');
            $('#select-service .reserve-error').css('color', 'transparent');
        }
        if (!date.val()) {
            date.css('border-color', 'red');
            $('#input-date .reserve-error').css('color', 'red');
        } else {
            date.css('border-color', 'rgb(163, 136, 92)');
            $('#input-date .reserve-error').css('color', 'transparent');
        }
        if (!number.val()) {
            number.css('border-color', 'red');
            $('#input-number .reserve-error').css('color', 'red');
        } else {
            number.css('border-color', 'rgb(163, 136, 92)');
            $('#input-number .reserve-error').css('color', 'transparent');
        }
        if (masters.val() == '204') {
            masters.css('border-color', 'red');
            $('#select-masters .reserve-error').css('color', 'red');
        } else {
            masters.css('border-color', 'rgb(163, 136, 92)');
            $('#select-masters .reserve-error').css('color', 'transparent');
        }
        if (time.val() == '204') {
            time.css('border-color', 'red');
            $('#select-time .reserve-error').css('color', 'red');
        } else {
            time.css('border-color', 'rgb(163, 136, 92)');
            $('#select-time .reserve-error').css('color', 'transparent');
        }

        if (name.val() && (!(service.val() == '204')) && date.val() && number.val() && (!(masters.val() == '204')) && (!(time.val() == '204'))) {

            //При подключении хостинга: ->
            //
            //
            // $.ajax({
            //     type: 'post',
            //     url: 'mail.php',
            //     data: 'name=' + name.val() + '&service=' + service.val() + '&date=' + date.val() + '&number=' + number.val()  + '&masters=' + masters.val()   + '&time=' + time.val(),
            //     success: () => {
            //         $('#reservation-sent').show();
            //         $('#sign-up-content').hide();
            //     },
            //     error: () => {
            //         $('#sign-up-content').hide();
            //         alert('Ошибка бронирования. Свяжитесь пожалуйста, по номеру телефона');
            //     }
            // });
            //_____________

            $('#reservation-sent').show();
            $('#sign-up-content').hide();
        }
    });
});
