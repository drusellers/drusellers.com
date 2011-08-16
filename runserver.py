from flask import Flask, render_template
from flaskext.assets import Environment, Bundle

app = Flask(__name__)
assets = Environment(app)
app.debug = True

sass = Bundle('styles/base.sass', filters='sass', output='styles/base.css',
        debug=False)

assets.register('all-css', sass, output='styles/gen.css')

@app.route('/')
def hello():
    #blog posts
    #tweets
    #github?
    #wods?
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
