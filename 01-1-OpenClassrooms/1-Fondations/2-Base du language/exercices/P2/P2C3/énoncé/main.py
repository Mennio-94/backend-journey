# Ecrivez votre code ici
def salaire_mensuel(salaire_annuel) -> float:
    return salaire_annuel / 12.0


def salaire_hebdomadaire(salaire_mensuel) -> float:
    return salaire_mensuel / 4.0


def salaire_horaire(salaire_hebdomadaire, heures_travaillees) -> str:
    res = salaire_hebdomadaire / heures_travaillees
    return print(f"Votre salaire horaire est de {res} euros.")


salaire_annuel = float(input("Veuillez saisir son salaire annuel"))
heure_travail = float(input("Veuillez saisir votre nombre d heure travailler"))

print(salaire_annuel)
print(heure_travail)

salaire_m = salaire_mensuel(salaire_annuel)

salaire_b = salaire_hebdomadaire(salaire_m)

salaire_horaire(salaire_b, heure_travail)
