(function ( $ ) {

  let methods = {
    init: function (options) {
      return this.each(function () {

        let settings = $.extend({
          animationDuration: 400,
          easing: 'swing'
        }, options );

        let $this = $(this),
            data = $this.data('accordion');
        let $accControl = $this.find("[data-accordion-role='control']"),
            $accContent = $this.find("[data-accordion-role='content']").hide().eq(0).show();

        if(!data){
          $accControl.click( (e) => {
            e.preventDefault();
            let index = $accControl.index(this);
            $accContent.eq(index).css({
              boxSizing: 'border-box',
              padding: '5px'
            });
            $accContent.eq(index).slideToggle({
              duration: settings.animationDuration,
              easing: settings.easing
            });
            $accContent.eq(index).animate({'padding':'0'});
            $accControl.toggleClass('opened-list');
          });

          $this.data('accordion', {
            target : $this,
            accordion : 'accordion'
          });
        }
      });
    },
    destroy: function () {
      return this.unbind('click');
    }
  };

  $.fn.accordion = function( method ) {
    if ($.type(method) === 'object' || $.type(method) === 'undefined'){
      return methods.init.apply(this, arguments);
    }
  };

}( jQuery ));