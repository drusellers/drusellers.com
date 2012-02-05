module.exports = function(app) {
  app.get('/', function(req, res){
    res.render('index', { 
      title: 'Express'
    })
  });

  app.get('/leaderboard', function(req, res){
    res.render('leaderboard', {
      atheletes : [
        {name:'Ingrid',rank:1,box:'CrossFit Central'},
        {name:'Winchester', rank:2, box:'CrossFitCentral'}
      ]
    });
  });

  app.get('/dataentry', function(req, res) {
    res.render('dataentry', {
      atheletes : [
        {name:'Ingrid',rank:1,box:'CrossFit Central'},
        {name:'Winchester', rank:2, box:'CrossFitCentral'}
      ]
    });
  });
};
