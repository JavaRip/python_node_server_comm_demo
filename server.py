import requests
from flask import Flask
app = Flask(__name__)

@app.route("/")
def reply():
  return 'hello from python server\n'

@app.route('/ask_node')
def ask_node():
  # http:// required
  # 127.0.0.1 works but localhost does not

  return requests.get('http://127.0.0.1:3000/').content

if __name__ == '__main__':
  app.run()