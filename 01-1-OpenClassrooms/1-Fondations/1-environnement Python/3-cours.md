# Résumé du cours : Optimiser PyCharm

Ce chapitre explique comment tirer le meilleur parti de PyCharm en le personnalisant et en maîtrisant ses fonctionnalités avancées.

## Les raccourcis clavier essentiels

L'apprentissage des raccourcis est présenté comme un investissement rentable : quelques jours d'apprentissage pour des années de productivité. Trois raccourcis fondamentaux sont mis en avant :

- **⇧⇧** (Shift deux fois) : ouvre la recherche globale pour trouver et ouvrir n'importe quel fichier du projet
- **Ctrl+E** (Windows/Linux) ou **⌘E** (Mac) : affiche la liste des fichiers récemment ouverts
- **Ctrl+/** (Windows/Linux) ou **⌘/** (Mac) : commente/décommente la ligne ou le bloc sélectionné

## La personnalisation de l'éditeur

Tout se passe dans **File → Settings** (ou **Ctrl+Alt+S**). Les personnalisations courantes incluent :

- **Editor → Font** : modifier la police, sa taille et l'interligne
- **Editor → Color Scheme** : changer le thème visuel (le cours recommande "Darcula", le thème sombre, plutôt que "Classic Light" par défaut)
- **Visual Guides** : ajouter une ligne verticale à 99 caractères pour respecter les conventions Python de longueur de ligne

La barre de recherche dans les Settings permet de trouver rapidement n'importe quel paramètre.

## L'intégration Git

PyCharm peut remplacer la ligne de commande ou un client Git externe. Depuis l'écran d'accueil, **Get From Version Control** permet de cloner un dépôt GitHub après authentification. Une fois le projet ouvert, l'onglet **git** en bas à gauche donne accès à toutes les opérations : créer des branches, consulter l'historique, faire des commits via le panneau latéral gauche.

Le cours conseille de tester les trois approches (terminal, client GUI, IDE intégré) pour choisir celle qui convient le mieux à son workflow.