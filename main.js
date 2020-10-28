$(document).ready(function() {

    // intercetto il click sull'icona "next"
    $('.next i').click(function() {

        // recupero l'immagine corrente
        var img_corrente = $('img.active');
        // recupero il pallino corrente
        var pallino_corrente = $('indicatori_immagine i');

        // tolgo la classe active all'immagine corrente
        img_corrente.removeClass('active');
        // tolgo la classe fas al pallino corrente
        pallino_corrente.removeClass('fas').addClass('far');
        // pallino_corrente.removeClass('active');

        // verifico se esiste un'immagine successiva
        if(img_corrente.next('img').length) {
            // c'è un elemento successivo
            // assegno la classe active all'immagine successiva
            img_corrente.next('img').addClass('active');

            // assegno la classe fas al pallino successivo
            pallino_corrente.next('indicatori_immagine i').addClass('fas');
        } else {
            // non c'è un'immagine successiva
            // assegno la classe active alla prima immagine
            $('.carousel img:first-child').addClass('active');
            // assegno la classe active al primo pallino
            // $('.indicatori_immagine i:first-child').addClass('active');
            $('.indicatori_immagine i:first-child').removeClass('far').addClass('fas');
        }
    });

    // intercetto il click sull'icona "prev"
    $('.prev i').click(function() {
        // recupero l'immagine corrente
        var img_corrente = $('img.active');
        // recupero il pallino corrente
        var pallino_corrente = $('span.active');

        // tolgo la classe active all'immagine corrente
        img_corrente.removeClass('active');
        // tolgo la classe active al pallino corrente
        pallino_corrente.removeClass('active');

        // verifico se esiste un'immagine precedente
        if(img_corrente.prev('img').length) {
            // c'è un'immagine precedente
            // assegno la classe active all'immagine precedente
            img_corrente.prev('img').addClass('active');
            // assegno la classe active al pallino precendete
            pallino_corrente.prev('span').addClass('active');
        } else {
            // non c'è un elemento precedente
            // assegno la classe active all'ultima immagine
            $('.carousel img:last-of-type').addClass('active');
            // assegno la classe active all'ultimo pallino
            $('.indicatori_immagine span:last-child').addClass('active');
        }
    });


    // intercetto il click su un pallino
    $('.indicatori_immagine i').click(function() {

        // recupero il pallino corrente
        var pallino_corrente = $('.indicatori_immagine i.fas');
        // tolgo la classe fas al pallino corrente e aggiungo far
        pallino_corrente.removeClass('fas').addClass('far');

        // aggiungo la classe fas e tolgo la classe far al pallino su cui l'utente ha cliccato
        $(this).toggleClass('fas far');

        // recupero l'immagine corrente
        var img_corrente = $('img.active');
        // tolgo la classe active all'immagine corrente
        img_corrente.removeClass('active');

        // recupero il numero del pallino su cui l'utente ha cliccato
        var indice_pallino = $(this).index();
        // recupero l'immagine corrispondente allo stesso numero
        var nuova_img = $('.carousel img').eq(indice_pallino);
        // assegno la classe active alla nuova immagine
        nuova_img.addClass('active');

    });

});
