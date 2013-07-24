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
                  score:'315'
                },
                {
                  movement:'Press',
                  score:'155'
                },
                {
                    movement:'Clean',
                    score:'245'
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
                    score:'240'
                },
                {
                    movement:'Benchpress',
                    score:'210'
                }
            ]
        });
    });
};
