from flask import Flask
app = Flask(__name__)

@app.route("/")
def function():
    return 'hello from python server\n'

if __name__ == '__main__':
   app.run()