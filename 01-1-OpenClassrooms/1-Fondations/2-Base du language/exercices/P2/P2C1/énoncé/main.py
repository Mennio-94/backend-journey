# Ecrivez votre code ici !
nb1 = input("Entrez un nombre entier: ")
nb2 = input("Entrez un nombre entier: ")

if nb1 and nb2:
    if nb1.isnumeric() and nb2.isnumeric():
        nombre_1 = int(nb1)
        nombre_2 = int(nb2)
        operation = input("Entrez l'opération souhaitée ['+', '-', '*' ou '/']: ")
        resultat = None
        if operation:
            if operation == "+":
                resultat = nombre_1 + nombre_2
            elif operation == "-":
                resultat = nombre_1 - nombre_2
            elif operation == "*":
                resultat = nombre_1 * nombre_2
            elif operation == "/":
                if nombre_2 != 0:
                    resultat = round(nombre_1 / nombre_2, 2)
                else:
                    raise SystemExit("fin du programme")
            else:
                raise SystemExit("fin du programme")
        else:
            print("operation manquante")
    else:
        raise SystemExit("fin du programme")
else:
    print("aucun caractere rentrer au clavier")

print(resultat)
