B. Gérez la logique du programme dans python :

    B. 1-Contrôlez le déroulement de votre programme avec des conditions
        # Résumé du cours : Contrôlez le déroulement de votre programme avec des conditions

            ## 1. Le déroulement du programme

            C'est l'ordre dans lequel les lignes de code sont exécutées. Les **instructions conditionnelles** permettent de contrôler la logique du code selon des conditions (comme dans la vie : "s'il fait beau → plage").

            ## 2. Instructions if / else

            ```python
            ensoleille = True
            if ensoleille:
                print("on va à la plage !")
            else:
                print("on reste à la maison !")
            ```
            - **if** : exécute le code si la condition est **True**
            - **else** : exécute le code si la condition est **False**

            ## 3. Conditions alternatives avec elif

            Permet d'ajouter **autant de conditions** que nécessaire :

            ```python
            if ensoleille:
                print("on va à la plage !")
            elif neige:
                print("on fait un bonhomme de neige")
            else:
                print("on reste à la maison !")
            ```
            Les conditions sont vérifiées **dans l'ordre**, la première vraie est exécutée.

            ## 4. Opérateurs logiques

            | Opérateur | Action |
            |-----------|--------|
            | `and` | Vrai si les **deux** conditions sont vraies |
            | `or` | Vrai si **au moins une** condition est vraie |
            | `not` | Inverse la condition (vrai → faux, faux → vrai) |

            ```python
            if avec_soleil and not en_semaine:
                print("on va à la plage !")
            ```

            ⚠️ `and` s'arrête dès qu'une condition est fausse, `or` s'arrête dès qu'une condition est vraie.

            ## 5. Opérateurs de comparaison

            | Opérateur | Signification |
            |-----------|--------------|
            | `==` | Égal à |
            | `!=` | Non égal à |
            | `<` | Moins que |
            | `<=` | Moins ou égal |
            | `>` | Plus que |
            | `>=` | Plus ou égal |

            ⚠️ Ne pas confondre `=` (assignation) et `==` (comparaison).

            ## 6. Simplifier avec match/case

            Alternative plus lisible aux if/elif/else multiples :

            ```python
            fruit = "pomme"
            match fruit:
                case "pomme":
                    print("J'aime les pommes !")
                case "banane":
                    print("Je n'aime pas les bananes.")
                case _:
                    print("Je ne connais pas ce fruit.")
            ```
            `_` = cas par défaut (si aucun case ne correspond).

            ## 7. L'indentation

            Après un `if`, `elif`, `else`, `case`, le code doit être **indenté** (décalé). C'est obligatoire en Python pour délimiter les blocs.


    B. 2-Répétez des tâches facilement à l’aide de boucles
        # Résumé du cours : Répétez des tâches facilement à l'aide de boucles

            ## 1. Pourquoi utiliser des boucles ?

            Les boucles permettent de **répéter un ensemble d'instructions** plusieurs fois, soit un nombre connu de fois, soit jusqu'à ce qu'une condition soit remplie.

            ## 2. La boucle for

            Itère sur une **séquence** (liste, tuple, dictionnaire, chaîne de caractères) :

            ```python
            races_de_chien = ["golden retriever", "chihuahua", "terrier", "carlin"]
            for chien in races_de_chien:
                print(chien)
            ```

            ### Fonctionnement de la boucle for (schéma) :
            ```
            Début → Pour chaque élément en séquence
                        ↓
                ┌─ Dernier élément atteint ? ──Vrai──→ Fin de la boucle For
                │       ↓ Faux
                │   Instructions
                └───────┘ (retour au test)
            ```
            → Tant que le dernier élément n'est pas atteint, la boucle exécute les instructions puis passe à l'élément suivant.

            ### La fonction range()

            Permet de boucler un **nombre précis** de fois :

            ```python
            for x in range(5):
                print(x)  # affiche 0, 1, 2, 3, 4
            ```

            - `range(5)` → de 0 à 4
            - `range(4, 10)` → de 4 à 9
            - Par défaut, commence à 0

            ## 3. La boucle while

            S'exécute **tant qu'une condition est vraie** :

            ```python
            capacite_actuelle = 3
            while capacite_actuelle < 10:
                capacite_actuelle += 1  # s'exécute 7 fois
            ```

            ### Fonctionnement de la boucle while (schéma) :
            ```
            Début → Entrer dans la boucle while
                        ↓
                ┌─ Tester l'expression ──Faux──→ Fin de la boucle While
                │       ↓ Vrai
                │   Instructions
                └───────┘ (retour au test)
            ```
            → Tant que l'expression testée est **Vraie**, les instructions s'exécutent. Dès qu'elle devient **Fausse**, la boucle s'arrête.

            ⚠️ **Boucles infinies** : si la condition ne devient jamais fausse, la boucle tourne indéfiniment.
            ```python
            x = 0
            while x != 5:
                x += 2  # x vaut 0, 2, 4, 6... jamais 5 !
            ```

            ### Quand utiliser quoi ?
            - **for** : quand on connaît le nombre d'itérations à l'avance
            - **while** : quand on ne le connaît pas et qu'on attend qu'une condition soit remplie

            ## 4. Les mots-clés break et continue

            **`break`** : **interrompt** la boucle prématurément
            ```python
            for i in range(10):
                if i == 5:
                    break
                print(i)  # affiche 0, 1, 2, 3, 4
            ```

            **`continue`** : **saute** l'itération en cours et passe à la suivante
            ```python
            for element in [1, 2, 3, 4, 5]:
                if element == 3:
                    continue
                print(element)  # affiche 1, 2, 4, 5
            ```

    B. 3-Regroupez des tâches en utilisant des fonctions

    B. 4-Écrivez du code en évitant les erreurs courantes