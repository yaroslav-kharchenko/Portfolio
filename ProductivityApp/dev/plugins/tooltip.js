(function ( $ ) {

  let methods = {
    init: function (options) {
      return this.each(function () {

        let settings = $.extend({
          background: '#fff',
          opacity: .9,
          color: '#3c5162'
        }, options );

        let $this = $(this),
            data = $this.data('tooltip'),
            tooltip = $('<div/>',{
              text: $this.attr('title'),
              css:{
                fontFamily: 'Roboto, Arial, sans-serif',
                fontSize: '12px',
                fontWeight: 'bold',
                position: 'absolute',
                padding: '10px 17px',
                borderRadius: '3px',
                zIndex: 1000,
                whiteSpace: 'nowrap',
                height: '12px',
                background: settings.background,
                opacity: settings.opacity,
                color: settings.color
              }
            }).addClass('tooltip').hide();

        if(!data){
          $this.hover( () => {
            tooltip.appendTo('body').fadeIn('slow');
            $this.data('text', $this.attr('title')).removeAttr('title');
          }, ()=> {
            $('.tooltip').remove();
            $this.attr('title', $this.data('text'));
          });

          $this.mousemove( (e) => {
            let mouseX = e.pageX + 0;
            let mouseY = e.pageY + 33;
            $('.tooltip').css({ top: mouseY, left: mouseX - 18 })
          });

          $this.data('tooltip', {
            target : $this,
            tooltip : tooltip
          });
        }
      });
    },
    destroy: function () {
      return this.unbind('mouseenter mouseleave mousemove');
    }
  };

  $.fn.tooltip = function( method ) {
    if ($.type(method) === 'object' || $.type(method) === 'undefined'){
      return methods.init.apply(this, arguments);
    }
  };

}( jQuery ));