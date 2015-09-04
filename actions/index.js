var everest = require('./everest-data.json');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {
            title:'Dru Sellers',
            body_id:'home',
            cover: 'index-cover',
            logo:'logo-black'
        })
    });

    app.get('/everest', function(req, res){
        res.render('everest', {
            title : 'Everest',
            body_id : 'everest',
            logo:'logo-black',
            timeline: everest
        });
    });

    app.get('/xyz', function(req, res){
        res.render('xyz', {
            title : 'random',
            body_id : 'random'
        });
    });

    app.get('/creed', function(req, res){
        res.render('creed', {
            logo:'logo-black'
        });
    });

    app.get('/resume', function(req, res){
        res.render('resume', {
            title:'Dru Sellers/resume',
            body_id:'resume',
            exp: new Date().getFullYear() - 2001,
            logo : "logo-black"
        });
    });

    app.get('/iron', function(req, res){
        res.render('iron', {
            title:'Iron and the Soul',
            body_id:'iron',
            logo : "logo-black"
        });
    });
    app.get('/allegory', function(req, res){
        res.render('allegory', {
            title:'Allegory of the Cave',
            body_id:'allegory',
            logo : "logo-black"
        });
    });
;
};
