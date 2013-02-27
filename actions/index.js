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
                    score:'365'
                },
                {
                  movement:'Backsquat',
                  score:'300'
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
                    score:'180'
                },
                {
                    movement:'Front Squat',
                    score:'250'
                },
                {
                    movement:'Jerk',
                    score:'240'
                }
            ]
        });
    });
};
