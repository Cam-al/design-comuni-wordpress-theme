jQuery( document ).ready(function() {

    let inputDescrizione = jQuery('textarea[name^="_dci_pratica_descrizione"]');
    inputDescrizione.each(function() {
        jQuery(this).on('change keyup paste', function(){
            dci_remove_highlight_missing_field('.cmb2-id--dci-pratica-descrizione');
        });
    });

    jQuery( 'form[name="post"]' ).on('submit', function(e) {

        /**
         * controllo compilazione campo Testo pratica
         */
        if (!jQuery('textarea[name^="_dci_pratica_descrizione"]').val()) {
            dci_highlight_missing_field('.cmb2-id--dci-pratica-descrizione');
            return false;
        }

        return true;
    });
});



function dci_highlight_missing_field(fieldClass) {
    jQuery(fieldClass).addClass("highlighted_missing_field")
        .append('<div id ="field-required-msg" class="field-required-msg"><em>campo obbligatorio !</em></div>')
    ;
    jQuery('html,body').animate({
        scrollTop: jQuery("#field-required-msg").parent().offset().top - 100
    }, 'slow');

}


function dci_remove_highlight_missing_field(fieldClass) {
    jQuery(fieldClass).removeClass("highlighted_missing_field");
    jQuery('.field-required-msg').remove();
}