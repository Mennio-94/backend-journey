A. Créez des données avec Python :

    A. 1-Installez votre environnement Python

        # Résumé du cours : Installer votre environnement Python

            ## 1. Installer Visual Studio Code

            VS Code est l'éditeur principal recommandé pour le développement Python. Il est disponible sur Windows, macOS et Linux.

            **Installation sur Windows :** télécharger depuis [code.visualstudio.com](https://code.visualstudio.com/), puis suivre l'assistant (accepter la licence → choisir le dossier → créer un raccourci bureau → installer → terminer).

            **Sur Mac :** glisser l'application téléchargée dans le dossier Applications.

            **Extension indispensable :** installer l'extension **Python** (par Microsoft) depuis le panneau Extensions de VS Code. Elle apporte la coloration syntaxique, l'autocomplétion, le débogage interactif, etc.

            ## 2. Installer et utiliser Git & GitHub

            **Git** = système de contrôle de version décentralisé (suivi des modifications, gestion de branches, retour à des versions antérieures). **GitHub** = plateforme cloud d'hébergement de code basée sur Git.

            **Installation :**
            - **Windows :** télécharger depuis [git-scm.com](https://git-scm.com/), lancer l'installateur avec les paramètres par défaut.
            - **Mac :** Git est généralement préinstallé (vérifier avec `git --version`). Sinon, l'installer via Homebrew ou le site officiel.

            ## 3. Cloner un projet GitHub

            Cloner = créer une copie locale d'un dépôt distant.

            **Procédure :** aller sur la page GitHub du projet → cliquer sur "Code" → copier l'URL → ouvrir un terminal (sur Windows : rechercher "Invite de commandes") → exécuter `git clone <URL>`.

            **Alternative :** télécharger le projet en ZIP via le bouton "Download ZIP".

    A. 2-Lancez votre premier programme Python :    

        # Résumé du cours : Pourquoi utiliser Python ?

            ## 1. Pourquoi Python ?

            Python est un langage **populaire, facile à apprendre et polyvalent**. Il convient aux débutants comme aux experts grâce à sa syntaxe lisible. Il est utilisé en développement web, analyse de données, data science, marketing, etc.

            **Message clé :** la difficulté du codage n'est pas la syntaxe ou la logique, mais l'effort mental pour persévérer. Ne pas se décourager, tous les experts sont passés par là.

            ## 2. Installer Python

            Télécharger depuis [python.org](https://python.org), choisir son OS et installer.

            ⚠️ **Sur Windows** : cocher impérativement **"Add to path"** pour ajouter Python aux variables d'environnement.

            ## 3. Exécuter son premier programme

            ### Méthode 1 : directement dans le terminal
            - Ouvrir le terminal (Mac) ou l'invite de commandes (Windows)
            - Taper `python` (ou `python3` selon l'OS) → les chevrons `>>>` apparaissent
            - Taper `print("hello, world!")` → Entrée → le message s'affiche

            ### Méthode 2 : via un fichier
            - Écrire le code dans un éditeur (ex : VS Code, Sublime Text)
            - Sauvegarder le fichier avec l'extension **.py** (ex : `helloworld.py`)
            - Dans le terminal, exécuter : `python3 helloworld.py`

            ### Commandes selon l'OS :
            - **Windows :** `python` ou `py`
            - **macOS/Linux :** `python3`
            - **Environnement virtuel :** `python`

            ## 4. Python comme calculatrice

            Python peut effectuer des calculs mathématiques (addition, soustraction, multiplication, division, etc.). Exemple dans le terminal : `(100 + 81) * 11` → résultat : **1991** (année de naissance de Python !).



    A. 3-Enregistrez vos données avec des variables

    A. 4-Classez des données avec les types de données

    A. 5-Enregistrez des groupes de données avec les listes

    A. 6-Enregistrez des données complexes avec des dictionnaires