Créez un environnement virtuel Python avec virtualenv

1. Découvrez les environnements virtuels :

- Le problème : quand on travaille sur plusieurs projets, chacun peut nécessiter des paquets différents, voire des versions différentes d'un même paquet. Par exemple, un projet web pourrait utiliser requests==2.23.0 tandis qu'un projet d'analyse de données a besoin de requests==2.12.0. Sans mécanisme d'isolation, ces exigences entrent en conflit puisqu'on ne peut avoir qu'une seule version d'un paquet installée à la fois.

- La solution : l'environnement virtuel. C'est un espace isolé qui contient sa propre version de Python et ses propres paquets. Chaque projet a le sien, ce qui garantit que les dépendances d'un projet n'interfèrent pas avec celles d'un autre.

-L'outil : le module venv, intégré à Python depuis la version 3.3. On vérifie sa disponibilité avec python -m venv --help. Aucune installation supplémentaire n'est nécessaire tant qu'on utilise Python ≥ 3.3.

2. Créez votre premier environnement virtuel :

- Le problème sans environnement virtuel : quand on installe des paquets globalement, ils sont partagés entre tous les projets. Si le paquet requests est installé globalement, le script fonctionne. S'il ne l'est pas, on obtient une erreur ModuleNotFoundError. Cette dépendance aux paquets globaux est fragile et source de conflits entre projets.

- Créer un environnement virtuel se fait avec python -m venv env, ce qui crée un dossier env dans le répertoire du projet. Ce dossier contient une copie isolée de Python et un espace vierge pour les paquets.

- L'activer : on lance source env/bin/activate (Linux/Mac) ou env\Scripts\activate.bat (Windows). Le terminal affiche alors (env) en début de ligne pour indiquer qu'on travaille dans l'environnement. À ce moment, pip freeze ne retourne rien — l'environnement est vide.

- Installer les paquets : on utilise pip install comme d'habitude, mais les paquets s'installent uniquement dans l'environnement virtuel, pas globalement. Le script peut alors s'exécuter correctement.

- Le désactiver : la commande deactivate permet de quitter l'environnement virtuel depuis n'importe quel répertoire. Le préfixe (env) disparaît du terminal.

3. Travaillez avec plusieurs environnements virtuels :

Ce chapitre montre comment gérer plusieurs projets Python en parallèle, chacun avec son propre environnement virtuel.

-Créer un second environnement suit exactement le même processus que pour le premier : on crée un dossier projet, on entre dedans, on lance python -m venv env, on active avec source env/bin/activate, puis on installe les paquets nécessaires. Chaque projet a ainsi ses dépendances isolées — demo-app utilise requests, demo-app-2 utilise matplotlib et numpy, sans interférence.

-Basculer entre environnements est simple : on désactive l'environnement actuel avec deactivate, on navigue vers l'autre projet, puis on active son environnement avec source env/bin/activate. Un pip freeze confirme qu'on est bien dans le bon environnement en listant les paquets spécifiques à ce projet.

-Raccourci pratique : il n'est pas obligatoire de désactiver un environnement avant d'en activer un autre. L'activation d'un nouvel environnement remplace automatiquement l'ancien. On peut donc enchaîner directement cd ../autre-projet puis source env/bin/activate.

-Point d'attention : si tous les environnements s'appellent env, le préfixe (env) dans le terminal reste identique et ne permet pas de distinguer visuellement dans quel projet on travaille. Ce sujet est abordé dans le chapitre suivant sur les conventions de nommage.

4. Nommez vos environnements virtuels :

- Pourquoi toujours utiliser env ? Deux raisons principales justifient cette convention largement adoptée par les professionnels.

- Premièrement, la rapidité de basculement : quand on jongle entre plusieurs projets, pouvoir systématiquement taper source env/bin/activate sans réfléchir fait gagner du temps. Avec des noms différents, il faudrait d'abord lister les fichiers pour retrouver le nom de l'environnement.

- Deuxièmement, la simplicité du .gitignore : l'environnement virtuel ne doit pas être versionné dans Git (il est volumineux et spécifique à chaque machine). Si tous les développeurs d'une équipe utilisent env, une seule ligne env/ dans le .gitignore suffit. Avec des noms différents par développeur, le fichier deviendrait ingérable.

- Pourquoi ne pas nommer l'environnement comme le projet ? Cela crée une confusion dans la structure de répertoires. Si le projet s'appelle demo-app et l'environnement aussi, on se retrouve avec un dossier demo-app à l'intérieur de demo-app, ce qui prête à confusion.

5. Gérez les environnements virtuels à l'aide du fichier requirements.txt :

Ce chapitre explique comment partager et reproduire un environnement virtuel entre développeurs grâce au fichier requirements.txt.

- Le problème : quand un autre développeur récupère un projet, comment sait-il quels paquets installer dans son environnement virtuel ? Sans documentation, il doit deviner en lisant le code et en cherchant les imports.
La solution : le fichier requirements.txt liste tous les paquets nécessaires au projet, idéalement avec leurs versions exactes. Exemple :
matplotlib==3.2.2
numpy==1.19.0
requests>=2.0,<3.0

- Créer un requirements.txt — deux méthodes existent. La méthode manuelle consiste à créer le fichier soi-même en listant uniquement les paquets qu'on a installés explicitement (sans les dépendances). La méthode automatique utilise pip freeze > requirements.txt, ce qui capture tous les paquets installés avec leurs versions exactes, dépendances incluses. La première approche est plus légère, la seconde plus exhaustive et reproductible.

- Installer depuis un requirements.txt : quand on récupère un projet existant, on crée son environnement virtuel, on l'active, puis on lance pip install -r requirements.txt. Cette commande installe automatiquement tous les paquets listés dans le fichier avec les versions spécifiées.
Bonne pratique : tout projet utilisant un environnement virtuel devrait avoir un requirements.txt. Si un projet n'en a pas, il est légitime de demander pourquoi à son auteur.

- Le workflow complet devient : créer le venv → l'activer → pip install -r requirements.txt → travailler → mettre à jour le requirements.txt si on ajoute des paquets.

6. Supprimez les environnements virtuels :

- Pourquoi supprimer ? Plusieurs raisons peuvent justifier cette action : le projet est terminé et on veut nettoyer, on a fait une faute de frappe dans le nom de l'environnement, ou on rencontre des problèmes inexplicables et on veut repartir de zéro avec un environnement propre.


- Comment supprimer ? C'est simple : un environnement virtuel n'est qu'un dossier. On le supprime avec rm -r env/ (ou le nom qu'on lui a donné). Pas de commande spéciale, pas de désinstallation — juste une suppression de répertoire.

- Cas particulier : si on supprime l'environnement alors qu'il est encore activé, le préfixe (env) peut rester affiché dans le terminal, ce qui prête à confusion. Il suffit alors de taper deactivate pour que l'affichage redevienne normal, même si l'environnement n'existe plus.

- Le workflow de reconstruction est donc : rm -r env/ → python -m venv env → source env/bin/activate → pip install -r requirements.txt. C'est une manipulation courante quand quelque chose ne fonctionne pas et qu'on veut repartir sur une base saine.