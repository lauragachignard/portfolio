
(function($) {
    'use strict';

    $(document).ready(function() {
      $('#menu-trigger').click(() => {
        const status = ($('#menu').css('display') === 'none') ? 'block' : 'none';
        $('#menu').css('display', status)
      });
    });

    $(document).ready(function() {
      $('.image-link').magnificPopup({type:'image'});
    });

})(jQuery);
