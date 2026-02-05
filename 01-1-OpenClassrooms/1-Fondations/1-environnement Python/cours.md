1- Les paquest python :

- Les paquets Python sont des regroupements de modules (fichiers .py) créés par la communauté pour éviter de réinventer la roue. Il faut les distinguer de la bibliothèque standard, qui est livrée avec Python et utilisable sans installation. Les paquets externes, eux, doivent être installés séparément. Un exemple classique : le module csv est intégré, tandis que requests est un paquet externe.

- pip est l'outil en ligne de commande qui permet d'installer, désinstaller et mettre à jour ces paquets. Il est inclus par défaut avec Python ≥ 3.4, donc normalement aucune installation supplémentaire n'est nécessaire. On vérifie sa présence avec pip --version.

- PyPI (Python Package Index) est le dépôt central où sont publiés les paquets — environ 240 000 au moment de la rédaction du cours. Chaque page de paquet sur PyPI donne les instructions d'installation, l'historique des versions, les liens vers la documentation et le code source. La démarche recommandée avant de coder quoi que ce soit : chercher si un paquet existant répond déjà au besoin.

2. Gérez des paquets Python :

- Installer un paquet se fait avec pip install <paquet>. Le cours utilise matplotlib comme exemple : on crée un script generate_graph.py, on l'exécute, et si le module est absent, Python renvoie une erreur ModuleNotFoundError. Un simple pip install matplotlib résout le problème et permet de générer un graphique.

- Vérifier les paquets installés passe par trois commandes utiles. pip list affiche tous les paquets installés (avec leurs dépendances) dans un format lisible. pip freeze produit une sortie plus brute au format paquet==version, pensée pour être enregistrée dans un fichier requirements.txt (notion abordée plus tard dans le cours). Enfin, pip show <paquet> donne le détail d'un ou plusieurs paquets : version, auteur, licence, dépendances requises et paquets qui en dépendent.

- Le workflow type est donc simple : on identifie un besoin, on cherche le paquet sur PyPI, on l'installe avec pip install, on l'importe dans son script avec import, et on vérifie son installation avec pip list, pip freeze ou pip show.

3. Importez des paquets et modules python :

- L'import classique avec import <module> charge l'intégralité du module. On accède ensuite à ses fonctionnalités avec la notation pointée, par exemple os.getcwd() ou numpy.ceil(1.2). La syntaxe est identique qu'il s'agisse d'un module standard (os, json, datetime) ou d'un paquet installé via pip (numpy, matplotlib).
L'import sélectif avec from <module> import <fonction> permet de n'importer que ce dont on a besoin. L'avantage : on utilise directement la fonction sans préfixe, par exemple getcwd() au lieu de os.getcwd().

- L'import total avec from <paquet> import * importe tout le contenu d'un paquet sans avoir besoin du préfixe. C'est pratique dans le shell Python interactif pour tester rapidement des choses, mais c'est déconseillé dans du vrai code applicatif : si deux paquets exportent des fonctions portant le même nom, cela crée des conflits silencieux difficiles à déboguer.

- Les alias avec import <paquet> as <alias> offrent un compromis entre lisibilité et concision. Certains alias sont devenus des conventions quasi universelles dans la communauté Python, comme import numpy as np. Le cours recommande de choisir des abréviations logiques du nom du paquet — pas des noms fantaisistes.

4. Systeme de versioning de paquets :

- Le format de versioning suit la convention major.minor.patch, où chaque nombre a une signification précise. Une incrémentation de patch correspond à une correction de bug rétrocompatible, minor signale l'ajout d'une nouvelle fonctionnalité rétrocompatible, et major indique un changement non rétrocompatible (un "breaking change") qui peut casser du code existant. Par exemple, requests 2.24.0 signifie version majeure 2, mineure 24, correctif 0.

- Le comportement par défaut de pip : quand on lance pip install <paquet> sans préciser de version, pip installe automatiquement la dernière version disponible.

- Les opérateurs de version permettent un contrôle fin sur ce qui est installé. == fixe une version exacte (pip install requests==2.1.0). L'opérateur ~= autorise les mises à jour dans une plage limitée : requests~=2.2 accepte toute version 2.x mais pas 3.0, tandis que requests~=2.1.0 reste dans la plage 2.1.x uniquement. 

- Les opérateurs de comparaison >, < permettent de définir des fourchettes, par exemple "requests>2.4.0,<2.6.0" pour installer la version la plus récente entre ces deux bornes.

- La désinstallation se fait avec pip uninstall <paquet>, ce qui est utile quand on veut tester différentes versions d'un même paquet.