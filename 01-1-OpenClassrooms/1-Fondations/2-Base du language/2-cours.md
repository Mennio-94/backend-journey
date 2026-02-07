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

    B. 3-Regroupez des tâches en utilisant des fonctions

    B. 4-Écrivez du code en évitant les erreurs courantes