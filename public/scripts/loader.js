jQuery(function($){
    $('[data-module]').each(function(){
        var $this = $(this);
        require.config({
            baseUrl : '/scripts'
        });

        require([$this.data('module')+'/index'], function(module){
            module.init.call($this, $this.data('params'));
        });
    });
});