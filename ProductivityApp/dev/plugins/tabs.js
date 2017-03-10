(function ( $ ) {

  let methods = {
    init: function () {
      return this.each(function () {

        let $tabs = $(this),
            data = $tabs.data('tabs'),
            $tabsControls =  $tabs.find('.tabs__link'),
            $tabsContent =  $tabs.find('.tabs__content');

        $tabsContent.hide().eq(0).show();
        $tabsControls.eq(0).addClass('tabs__link--active');

        if(!data){

          $tabsControls.on('click', function(e){
              e.preventDefault();
              let activeTab = $tabs.find('.tabs__content:visible'),
                  $this = $(this),
                  nextTabId = $this.attr('href');

              if (!activeTab.is($(this).attr('href'))){
                activeTab.hide();
                $(nextTabId).show();
                $tabs.find('.tabs__link--active').removeClass('tabs__link--active');
                $this.addClass('tabs__link--active');
              }
            });

            $tabs.data('tabs', {
              target : $tabs,
              tabs : 'tabs'
            });

        }
      });
    },
    destroy: function () {
      return this.find('.tabs__link').off('click');
    }
  };

  $.fn.tabs = function( method ) {
    if ($.type(method) === 'object' || $.type(method) === 'undefined'){
      return methods.init.apply(this, arguments);
    }
  };

}( jQuery ));