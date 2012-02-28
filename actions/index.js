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
                    score:'320'
                },
                {
                  movement:'Backsquat',
                  score:'250'
                },
                {
                  movement:'Shoulder Press',
                  score:'145'
                },
                {
                    movement:'Clean',
                    score:'210'
                }
            ]
        });
    });
};
