module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {
            title:'Dru Sellers',
            body_id:'home'
        })
    });

    app.get('/resume', function(req, res){
        res.render('resume', {
            title:'Dru Sellers/resume',
            body_id:'resume',
            exp: new Date().getFullYear() - 2001
        });
    });

    app.get('/iron', function(req, res){
        res.render('iron', {
            title:'Iron and the Soul',
            body_id:'iron'
        });
    });

    app.get('/prs', function (req, res) {
        res.render('prboard', {
            title:'PRs',
            body_id:'prboard',
            scores:[
                {
                    movement:'Deadlift',
                    score:'385'
                },
                {
                  movement:'Backsquat',
                  score:'325'
                },
                {
                  movement:'Press',
                  score:'155'
                },
                {
                    movement:'Clean',
                    score:'255'
                },
                {
                    movement:'Snatch',
                    score:'190'
                },
                {
                    movement:'Front Squat',
                    score:'280'
                },
                {
                    movement:'Jerk',
                    score:'245'
                },
                {
                    movement:'Benchpress',
                    score:'225'
                }
            ],
          wods : [
            {
                name: 'Fight Gone Bad',
                score: '258'
            },
            {
                name: 'Jackie',
                score: '8:47'
            },
            {
                name: 'Nancy',
                score: '16:04'
            },
            {
                name: 'Fran',
                score: '5:46'
            },
            {
                name: 'Diane',
                score: '6:35'
            },
            {
                name: 'Helen',
                score: '10:23'
            },
            {
                name: 'Grace',
                score: '3:47'
            },
            {
                name: 'Karen',
                score: '8:52'
            }
          ]
        });
    });
};
