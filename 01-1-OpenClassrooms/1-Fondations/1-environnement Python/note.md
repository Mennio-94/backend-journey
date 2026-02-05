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


# Codes de statut HTTP — Résumé

| Code | Nom | Description |
|------|-----|-------------|
| **Réponses informatives (1xx)** | | |
| 100 | Continue | Le client peut continuer sa requête |
| 101 | Switching Protocols | Le serveur change de protocole suite à une demande du client |
| 102 | Processing *(obsolète)* | Requête reçue, traitement en cours (WebDAV) |
| 103 | Early Hints | Permet le préchargement de ressources via l'en-tête `Link` |
| **Réponses de succès (2xx)** | | |
| 200 | OK | Requête réussie |
| 201 | Created | Nouvelle ressource créée (typiquement après PUT/POST) |
| 202 | Accepted | Requête reçue mais pas encore traitée |
| 203 | Non-Authoritative Information | Méta-informations provenant d'une copie locale ou tierce |
| 204 | No Content | Pas de contenu à renvoyer, en-têtes potentiellement utiles |
| 205 | Reset Content | Demande de réinitialisation du document |
| 206 | Partial Content | Réponse partielle suite à une requête de plage |
| 207 | Multi-Status | Informations sur plusieurs ressources (WebDAV) |
| 208 | Already Reported | Évite les énumérations répétées (WebDAV) |
| 226 | IM Used | Résultat de manipulations d'instance sur une ressource |
| **Messages de redirection (3xx)** | | |
| 300 | Multiple Choices | Plusieurs réponses possibles, le client doit choisir |
| 301 | Moved Permanently | L'URL de la ressource a changé définitivement |
| 302 | Found | L'URI a été modifiée temporairement |
| 303 | See Other | Redirection vers un autre URI via GET |
| 304 | Not Modified | Ressource inchangée, utiliser le cache |
| 305 | Use Proxy *(obsolète)* | Réponse devant transiter par un proxy |
| 306 | *(unused)* | Code réservé, plus en service |
| 307 | Temporary Redirect | Redirection temporaire en conservant la méthode HTTP |
| 308 | Permanent Redirect | Redirection permanente en conservant la méthode HTTP |
| **Erreurs client (4xx)** | | |
| 400 | Bad Request | Syntaxe de requête invalide |
| 401 | Unauthorized | Authentification requise |
| 402 | Payment Required | Réservé pour usage futur (paiement numérique) |
| 403 | Forbidden | Accès refusé |
| 404 | Not Found | Ressource introuvable |
| 405 | Method Not Allowed | Méthode HTTP non supportée pour cette ressource |
| 406 | Not Acceptable | Aucun contenu ne correspond aux critères du client |
| 407 | Proxy Authentication Required | Authentification via proxy requise |
| 408 | Request Timeout | Connexion en attente trop longtemps |
| 409 | Conflict | Conflit avec l'état actuel du serveur |
| 410 | Gone | Ressource supprimée définitivement |
| 411 | Length Required | En-tête `Content-Length` manquant |
| 412 | Precondition Failed | Préconditions du client non remplies |
| 413 | Content Too Large | Entité trop volumineuse |
| 414 | URI Too Long | URI trop long pour le serveur |
| 415 | Unsupported Media Type | Format média non supporté |
| 416 | Range Not Satisfiable | Plage demandée hors limites |
| 417 | Expectation Failed | Attentes de l'en-tête `Expect` non satisfaites |
| 418 | I'm a teapot | Le serveur refuse de brasser du café avec une théière ☕ |
| 421 | Misdirected Request | Serveur incapable de produire une réponse |
| 422 | Unprocessable Content | Erreurs sémantiques (WebDAV) |
| 423 | Locked | Ressource verrouillée (WebDAV) |
| 424 | Failed Dependency | Échec dû à une requête précédente (WebDAV) |
| 425 | Too Early | Requête potentiellement rejouable refusée |
| 426 | Upgrade Required | Changement de protocole nécessaire |
| 428 | Precondition Required | Requête conditionnelle imposée |
| 429 | Too Many Requests | Limitation de débit atteinte |
| 431 | Request Header Fields Too Large | En-têtes trop volumineux |
| 451 | Unavailable For Legal Reasons | Ressource bloquée pour raisons légales |
| **Erreurs serveur (5xx)** | | |
| 500 | Internal Server Error | Erreur générique du serveur |
| 501 | Not Implemented | Méthode de requête non supportée |
| 502 | Bad Gateway | Réponse invalide reçue par la passerelle |
| 503 | Service Unavailable | Serveur en maintenance ou surchargé |
| 504 | Gateway Timeout | Délai d'attente de la passerelle dépassé |
| 505 | HTTP Version Not Supported | Version HTTP non prise en charge |
| 506 | Variant Also Negotiates | Dépendance circulaire dans la négociation de contenu |
| 507 | Insufficient Storage | Stockage insuffisant (WebDAV) |
| 508 | Loop Detected | Boucle infinie détectée (WebDAV) |
| 510 | Not Extended | Extension HTTP non prise en charge |
| 511 | Network Authentication Required | Authentification réseau requise |