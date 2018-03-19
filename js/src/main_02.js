$( document ).ready(function() {
    $( '.menu-button' ).click(function() {
      $( ".menu-button" ).toggleClass('menu-button-open');
      $( ".menu-items" ).toggleClass('menu-items-open');
    });
  });