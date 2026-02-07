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

        # Résumé du cours : Enregistrez vos données avec des variables

            ## 1. Qu'est-ce qu'une variable ?

            Une variable est comme un **carton de déménagement** : elle stocke une donnée et porte un nom pour la retrouver facilement. Elle est composée de trois éléments : un **nom**, un **type** (vu au chapitre suivant) et une **valeur**.

            ```python
            livre = "Gatsby le Magnifique"
            ```
            Ici, `livre` = nom, `"Gatsby le Magnifique"` = valeur.

            ## 2. Modifier une variable

            On réassigne simplement une nouvelle valeur avec l'opérateur `=` :

            ```python
            livre = "Gatsby le Magnifique"
            livre = "Beloved"
            print(livre)  # → Beloved
            ```

            La dernière valeur assignée écrase les précédentes. Une variable est un raccourci vers une valeur en **mémoire vive**.

            ## 3. Afficher des variables avec les f-strings

            La **f-string** permet d'insérer des variables dans une chaîne de caractères en les plaçant entre accolades `{}`, précédée d'un `f` :

            ```python
            nom = "Dupont"
            prenom = "Jean"
            age = 30
            print(f"Bonjour, je m'appelle {prenom} {nom} et j'ai {age} ans.")
            # → Bonjour, je m'appelle Jean Dupont et j'ai 30 ans.
            ```

            ## 4. Règles de nommage des variables

            - **Noms descriptifs** : `quantite_en_stock` plutôt que `qte`
            - **Mots complets** : `revenu_annuel` plutôt que `rev_annuel`
            - **Convention snake_case** (PEP8) : mots séparés par des `_` → `nombre_de_chats`
            - **Commencer** par une lettre ou `_`, jamais par un chiffre
            - **Uniquement** lettres, chiffres et `_` — **pas d'accents** ni de caractères spéciaux
            - **Sensible à la casse** : `age`, `Age` et `AGE` sont trois variables différentes


    A. 4-Classez des données avec les types de données :

    # Résumé du cours : Classez des données avec les types de données

        ## 1. Qu'est-ce qu'un type de données ?

        Le type d'une variable est déterminé par **la nature de sa valeur**. Python possède 4 types **primitifs** :

        ## 2. Les types numériques

        **Entiers (int)** : nombres entiers sans décimale → `1`, `4`, `3934`

        **Virgules flottantes (float)** : nombres décimaux → `3.14`, `99.9`

        ⚠️ `100` est un entier, `100.0` est un float.
        ⚠️ En Python, on utilise le **point** (et non la virgule) pour les décimales : `12.4`

        **Opérateurs arithmétiques :**
        - `+` addition, `-` soustraction, `*` multiplication, `/` division, `%` modulo (reste de la division)

        ## 3. Les chaînes de caractères (str)

        Du texte entouré de guillemets simples `'...'` ou doubles `"..."` :

        ```python
        salutations = "bonjour !"
        prenom = "Sam"
        ```

        ⚠️ `912` = entier, mais `"912"` ou `'912'` = chaîne de caractères (à cause des guillemets).

        ## 4. Les booléens (bool)

        Seulement deux valeurs possibles : **`True`** (vrai) ou **`False`** (faux).

        ```python
        temps_ensoleille = True
        ```

        Très utiles pour la logique du code (conditions, etc.).

        ## 5. La fonction `type()`

        Permet de vérifier le type d'une variable :

        ```python
        type(age)  # → <class 'int'>
        ```

    A. 5-Enregistrez des groupes de données avec les listes :
        # Résumé du cours : Enregistrez des groupes de données avec les listes

            ## 1. Qu'est-ce qu'une liste ?

            Une liste permet de stocker **une collection d'éléments** dans une seule variable, en utilisant des crochets `[]`. Elle accepte **tous les types de données**, même mélangés.

            ```python
            plateformes_sociales = ["Facebook", "Instagram", "Snapchat", "Twitter"]
            ```

            ## 2. Accéder aux éléments

            Chaque élément a un **indice** commençant à **0** :

            ```python
            plateformes_sociales[0]   # → "Facebook"
            plateformes_sociales[1]   # → "Instagram"
            plateformes_sociales[-1]  # → "Twitter" (dernier élément)
            ```

            Fonctionne aussi avec les **chaînes de caractères** (qui sont des listes de caractères) :
            ```python
            langage = "PYTHON"
            langage[2]   # → "T"
            langage[-4]  # → "T"
            ```

            ## 3. Modifier un élément

            On utilise l'indice + l'opérateur `=` :
            ```python
            plateformes_sociales[2] = "LinkedIn"
            ```

            ## 4. Méthodes et fonctions des listes

            | Méthode / Fonction | Action | Exemple |
            |---------|--------|---------|
            | `append()` | Ajoute un élément **à la fin** | `fruits.append("kiwi")` |
            | `remove()` | Retire la **première occurrence** d'un élément | `fruits.remove("orange")` |
            | `sort()` | Trie (alphabétique ou numérique) | `fruits.sort()` |
            | `len()` | Renvoie la **longueur** (fonction, pas méthode) | `len(fruits)` |
            | `extend()` | Ajoute **plusieurs éléments** à la fin | `fruits.extend(["mangue", "cerise"])` |
            | `insert()` | Insère un élément à une **position précise** | `fruits.insert(1, "kiwi")` → insère à l'indice 1 |
            | `pop()` | Supprime et **renvoie** l'élément à une position donnée (ou le dernier si aucun indice) | `fruits.pop()` ou `fruits.pop(2)` |
            | `index()` | Renvoie l'indice de la **première occurrence** d'un élément | `fruits.index("banane")` |
            | `count()` | Renvoie le **nombre d'occurrences** d'un élément | `fruits.count("pomme")` |
            | `reverse()` | **Inverse** l'ordre des éléments | `fruits.reverse()` |

            ⚠️ Ne pas accéder à un indice ≥ taille de la liste → **IndexError**

            ## 5. Les tuples

            Comme les listes mais avec des parenthèses `()` et **immuables** (non modifiables après création) :
            ```python
            mon_tuple = ("Facebook", "Instagram", "TikTok")
            ```

            ## 6. Chercher un élément avec `in`

            ```python
            5 in [1, 2, 3, 4, 5]  # → True
            8 in [1, 2, 3, 4, 5]  # → False
            ```

    A. 6-Enregistrez des données complexes avec des dictionnaires
        # Résumé du cours : Gérez des données complexes avec les dictionnaires

            ## 1. Qu'est-ce qu'un dictionnaire ?

            Un dictionnaire stocke des données sous forme de **paires clé-valeur**, entre accolades `{}`. Chaque clé doit être **unique**.

            ```python
            nouvelle_campagne = {
                "responsable": "Jeanne d'Arc",
                "nom": "Campagne chiens",
                "date_debut": "01/01/2020",
                "influenceurs": ["@MonAmourDeChien", "@MeilleuresFriandises"]
            }
            ```

            ## 2. Créer un dictionnaire

            Deux façons :
            ```python
            # Directement avec des valeurs
            dico = {"clé1": "valeur1", "clé2": "valeur2"}

            # Vide puis rempli progressivement
            dico = {}  # ou dict()
            dico["facebook"] = 3.4
            dico["instagram"] = 1.2
            ```

            ## 3. Accéder à une valeur

            On utilise la **clé** entre crochets :
            ```python
            nouvelle_campagne["responsable"]  # → "Jeanne d'Arc"
            ```

            ## 4. Opérations courantes

            **Ajouter / modifier** une paire :
            ```python
            dico["nouvelle_clé"] = "valeur"  # ajoute si la clé n'existe pas, écrase sinon
            ```

            **Supprimer** une paire :
            ```python
            del dico["clé"]      # avec le mot-clé del
            dico.pop("clé")      # avec la méthode pop()
            ```

            ## 5. Méthodes des dictionnaires

            | Méthode | Action |
            |---------|--------|
            | `keys()` | Retourne toutes les **clés** |
            | `values()` | Retourne toutes les **valeurs** |
            | `items()` | Retourne tous les couples **(clé, valeur)** |
            | `get(clé)` | Retourne la valeur associée (ou `None` si absente) |
            | `pop(clé)` | Supprime la clé et **retourne** sa valeur |
            | `clear()` | Supprime **tous** les éléments |

            ## 6. Vérifier l'existence d'une clé avec `in`

            ```python
            "poids" in infos_labradoodle  # → True
            "race" in infos_labradoodle   # → False
            ```