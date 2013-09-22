jQuery(function($){
    $('[data-module]').each(function(){
        var $this = $(this),
            module = $this.data('module')+'/index',
            isScript = $this.is("script"),
            parameters = {};

        if(isScript) {
          if(this.innerHTML.trim()) {
            parameters = JSON.parse(this.innerHTML);
          }
        } else {
          parameters = $this.data("parameters");
        }

        require.config({
            baseUrl : '/scripts'
        });

        require({
            baseUrl : "/scripts"
          },
          [module],
          function(module){
            if(!module.init) { return; }

            if(isScript) {
              module.init.call($this.parent().get(0), parameters);
            } else {
              module.init.call($this.get(0), parameters);
            }

          });
    });
});
