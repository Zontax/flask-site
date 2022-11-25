from app import app
from app import variable
from flask import render_template, url_for, redirect, flash


@app.route('/', methods=['GET', 'POST'])  # Index
def index():
    return render_template(
        'index.html',
        title='Головна',
        sub_title='Приклад сайта написаного фреймворком Flask\n')


@app.route('/contact')  # Contact
def contact():
    return render_template('contact.html', title='Контакти')


@app.route('/portfolio')  # Portfolio
def portfolio():
    return render_template(
        'portfolio.html',
        title='Portfolio розробника',
        sub_title=
        'Я Zontax вивчаю Python, а саме його мікрофреймворк Flask та бази данних\n'
    )


@app.route('/test')  # Test
def test():
    user = {'username': 'Zontax'}
    return '''
<html>
    <head>
        <title>''' + variable.user['username'] + '''</title>
    </head>
    <body>
        <h1>Привіт, ''' + variable.user['username'] + '''!</h1>
        <h1>Це пуста сторінка 😯</h1>
        <p>Наповніть її своїм текстом</p>
        <a href="''' + url_for('index') + '''"><<Повернутись</a>
    </body>
</html>
'''