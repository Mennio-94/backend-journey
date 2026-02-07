# Ecrivez votre code ici !
nombre = input(
    "Saisisez une liste de nombre separer par des  virgules exemples :1,2,3,4: "
)

liste = nombre.split(",")

list_entier = []
nombre_entier = None
for i in liste:
    nombre_entier = int(i)
    list_entier.append(nombre_entier)

avg = None
somme = 0
for i in list_entier:
    somme = somme + i

if somme:
    print(f"la somme des nombres est égale {somme}")

avg = somme / len(list_entier)
if avg:
    print(f"la somme des nombres est égale {avg}")

for i in list_entier:
    if i > avg:
        print(f"je suis supérieur a la moyenne voici mon nombre {i}")
