module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {
            title:'Express'
        })
    });

    app.get('/prs', function (req, res) {
        res.render('prboard', {
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
                  movement:'Shoulder Press',
                  score:'155'
                },
                {
                    movement:'Clean',
                    score:'240'
                },
                {
                    movement:'Snatch',
                    score:'186'
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
