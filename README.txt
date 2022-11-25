Запуск та керування проектом
<VENV VENV>
python -m venv venv
venv\Scripts\activate

<RUN App>
flask db init
FLASK_APP=start_site.py
flask run
<!-- comands db -->

flask db migrate -m "users table"
flask db upgrade
flask db downgrade <!-- відміна останньої migrate -->
flask db migrate -m "posts table"

<!-- Коли добавляємо нові колонки робим migrate-->
flask db upgrade
flask db migrate -m "new fields in user model"
flask db upgrade

<!-- Add New User to db -->
flask shell
from app.models import User
from app import db
u = User(username='jolygolf', email='jolygolf@example.com')
u.set_password('jolygolf')
db.session.add(u)
db.session.commit()

<!-- Хостинг на heroku -->
pip install gunicorn
pip freeze > requirements.txt
heroku login
heroku git:remote -a microblog-flask-test

<!--! Git -->
# …or create a new repository on the command line
echo "# Python-Learning" >> README.md
git init
git add .
git commit -m "create origin main"
git branch -M main
git push -u origin main
#
git remote add origin https://github.com/Zontax/Python-Learning.git
git push -u origin main

# …or push an existing repository from the command line
git remote add origin https://github.com/Zontax/Python-Learning.git
git branch -M main
git push -u origin main