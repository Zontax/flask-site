from app import app
from flask import render_template, url_for
from app import variable


@app.errorhandler(404)  # Error 404
def pageNotFount(error):
    return render_template('error/404.html', title="Сторінку не знайдено"), 404


@app.errorhandler(500)  # Error 500
def internal_error(error):
    return render_template('error/500.html'), 500
