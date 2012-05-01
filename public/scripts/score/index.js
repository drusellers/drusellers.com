define([], function(){
    return {
        init : function(params){
            var $self = $(this);
            inner($self, 0, params.value);
        }
    }

    //would be cool if it could 'ease' into the score
    function inner(self, amount, goal) {
        if(amount <= goal) {
            self.html(amount);
            setTimeout(function(){
                var inc = Math.floor(Math.random()*30);
               inner(self, amount+inc, goal);
            },100);
        } else {
            self.html(goal);
            self.addClass('done')
        }
    }
});