(function ( $ ) {

  let methods = {
    init: function (options) {
      return this.each(function () {

        let settings = $.extend({
          animationDuration: 300,
          easing: 'swing'
        }, options );

        let $this = $(this);

          let overlay = $('<div/>',{
            css: {
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 500,
              backgroundColor: 'rgba(0,0,0,0.5)'
            }
          }).addClass('modal-overlay');

          overlay.appendTo($this).hide();
          overlay.fadeIn({
            duration: settings.animationDuration,
            easing: settings.easing
          });
      });
    },
    destroy: function () {
      this.find('.modal-overlay').fadeOut('slow',()=>{
        this.find('.modal-overlay').remove();
      });
    }
  };

  $.fn.dialog = function( method ) {
    if (methods[method]){
      return methods[method].apply( this, Array.prototype.slice.call(arguments, 1));
    } else if ($.type(method) === 'object' || $.type(method) === 'undefined'){
      return methods.init.apply(this, arguments);
    }
  };

}( jQuery ));