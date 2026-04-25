# Basic Django CI Project

This is a very small Django project with one app, one homepage, and a GitHub Actions workflow for CI.

## Run Locally

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

On Windows PowerShell:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Open http://127.0.0.1:8000/ and you should see:

```text
Hello, Django! CI/CD is ready.
```

## CI Pipeline

The workflow is in `.github/workflows/django-ci.yml`.

It runs on:

- pushes to `main`
- pull requests targeting `main`
- manual runs from the GitHub Actions tab

Pipeline steps:

- check out the repository
- install Python 3.12
- install dependencies from `requirements.txt`
- run `python manage.py check`
- run `python manage.py test`
