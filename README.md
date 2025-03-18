# Installation

## Frontend
```bash
npm install
```

## Backend

### Creation de l'environnement 
```bash
# Sur Window
python -m venv venv
venv\Scripts\activate
# dans venv :
pip install -r requirements.txt
python.exe -m pip install --upgrade pip
# Creation du .env à la main
# Il est important d'avoir une génération de clé bien sécurisé
# Avec ChatGPT sur le terminal je peux faire : 
python -c "from django.core.management.utils import get_random_secret_key; print('KEY=' + get_random_secret_key())"
# Ou bien laisser Django faire...
# Creation de la BDD
python manage.py migrate
python manage.py runserver
```

Dans venv pour vérifier les utilisateurs existants :
```bash
python manage.py shell
from django.contrib.auth import get_user_model
User = get_user_model()
print(User.objects.all())
```
http://127.0.0.1:8000/api/etc...