import os
from flask import Flask, render_template
from flaskext.assets import Environment, Bundle
import feedparser

app = Flask(__name__)
assets = Environment(app)
app.debug = True

app.config['LESS_PATH']='/usr/local/bin/lessc'

less = Bundle('styles/base.less', filters='less', output='styles/base.css',
    debug=True)

assets.register('all-css', less, output='styles/gen.css')

def take(num, items):
    for i in range(num):
        yield items[i]

#blog posts - not sure codebetter has individual feeds
#posts = feedparser.parse('http://codebetter.com/drusellers/feed/').entries
#tweets
#tweets = feedparser.parse('http://twitter.com/statuses/user_timeline/drusellers.rss?count=10').entries
#github
#commits = feedparser.parse('https://github.com/drusellers.private.actor.atom?token=1dbb0464b79d688827f66a9120c32b10').entries
#wods?
#log = feedparser.parse('http://drusellers.tumblr.com/rss').entries

@app.route('/')
def hello():

    return render_template('index.html')
#            tweets=take(10, tweets),
#            commits=take(10, commits),
#            posts=take(10, posts),
#            log=take(10, log))

@app.route('/skills')
def skills():
    return render_template('skills.html')

@app.route('/send_email', methods=['POST'])
def send_email(name, email, message):
    #redirect to hello?
    #need to figure out to send emails on heroku
    pass

if __name__ == '__main__':
    port = int(os.environ.get("PORT","5000"))
    app.run(host='0.0.0.0',port=port)
