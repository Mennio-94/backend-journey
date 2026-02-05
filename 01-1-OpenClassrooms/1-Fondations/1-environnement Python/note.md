# 1. Place-toi dans ton dossier de projet
cd ~/backend-journey/backend-journey/01-1-OpenClassrooms/1-Fondations/1-environnement\ Python

# 2. Crée un environnement virtuel (le dossier "venv" va apparaître)
python3 -m venv venv

# 3. Active-le
source venv/bin/activate

# 4. Maintenant pip fonctionne normalement !
pip install matplotlib

Voici les commandes utiles tirées des deux cours :

**Vérifier ses installations :**
- `python --version` — vérifie la version de Python installée
- `pip --version` — vérifie la version de pip installée

**Gérer les paquets :**
- `pip install <paquet>` — installe un paquet (ex : `pip install matplotlib`)
- `pip list` — liste tous les paquets installés avec leurs versions (format lisible)
- `pip freeze` — liste les paquets installés au format `paquet==version` (utile pour générer un `requirements.txt`)
- `pip show <paquet>` — affiche les détails d'un paquet (version, auteur, dépendances…)
- `pip show <paquet1> <paquet2> <paquet3>` — même chose pour plusieurs paquets à la fois

**Dans un script Python :**
- `import <module>` — importe un module ou paquet pour l'utiliser dans le code (ex : `import matplotlib.pyplot as plt`)

**Navigation terminal :**
- `cd <répertoire>` — se placer dans le dossier contenant le script avant de l'exécuter
- `python <fichier.py>` — exécuter un script Python (ex : `python generate_graph.py`)