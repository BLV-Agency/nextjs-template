# Next.js Template — BLV Agency

Template de déploiement automatique Next.js → VPS avec HTTPS.

## Utilisation

### 1. Créer un nouveau repo depuis ce template

Clique **"Use this template"** → **"Create a new repository"** dans l'org `BLV-Agency`.

### 2. Configurer les secrets GitHub

Dans **Settings → Secrets and variables → Actions**, ajoute :

| Secret | Valeur |
|--------|--------|
| `SSH_PRIVATE_KEY` | La clé privée du fichier `/root/.ssh/github_actions` du VPS |
| `SITE_NAME` | Nom du dossier sur le VPS (ex: `mon-site`) |

### 3. Préparer le VPS

Sur le VPS, crée le dossier du site et le fichier `.env` :

```bash
/opt/blv/add-site.sh mon-site mondomaine.com
```

Puis clone le repo dans ce dossier :

```bash
cd /opt/blv/sites/mon-site
git clone git@github.com:BLV-Agency/mon-nouveau-repo.git .
```

### 4. Déployer

Push sur `main` → le workflow GitHub Actions se déclenche → le site est en ligne avec HTTPS en ~2 minutes.

## Structure

- `Dockerfile` — Build multi-stage optimisé Next.js
- `docker-compose.yml` — Service Docker avec labels Traefik
- `.env.example` → copier en `.env` sur le VPS avec `SITE_NAME` et `DOMAIN`
- `.github/workflows/deploy.yml` — Pipeline CI/CD automatique
- `next.config.js` — Config Next.js avec `output: 'standalone'`

## Prérequis

- Le VPS doit avoir Traefik en cours d'exécution avec le réseau Docker `web`
- Le secret `SSH_PRIVATE_KEY` doit correspondre à une clé autorisée sur le VPS
