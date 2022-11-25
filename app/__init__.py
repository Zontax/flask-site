from flask import Flask

app = Flask(__name__)

# Підключення файлів
from app import routes
from app import routes_error
