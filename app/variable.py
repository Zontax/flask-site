from datetime import datetime

realtime = str(datetime.today()) # Час в системі
user = {'username': 'Zontax'}
menu = [
    {
        "title": "Logo",
        "url": "/"
    },
    {
        "title": "Чат",
        "url": "/explore"
    },
    {
        "title": "Про сайт",
        "url": "/about"
    },
    {
        "title": realtime[0:-10],
        "url": "/"
    },
]

