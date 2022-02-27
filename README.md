# Projet 7 OC - Groupomania

Septième et dernier projet du parcours Dev Web de OpenClassrooms
Créer le mvp d'un réseau social interne à une entreprise.

Ma stack pour ce projet:

- VueJs, Vue-cli
- Node, express
- Mysql, sequelize

## Base de données

Créer une base de données Mysql, facilement avec Mysql Workbench par exemple.

Connecter votre base de données mysql en créant un fichier .env dans le dossier back, et en renseignant les trois variables d'environnement suivantes :

- DB_NAME
- DB_USERNAME
- DB_PASSWORD

Les tables users et posts devraient se créer automatiquement lors du démarrage du serveur.

## Backend

Ouvrir le dossier back dans le terminal de votre éditeur puis exécuter la commande:

    npm install

puis

    nodemon server

## Frontend

Ouvrir le dossier front, puis le dossier groupomania dans le terminal de votre éditeur puis exécuter la commande:

    npm install

puis

    npm run serve

si le navigateur ne s'ouvre pas automatiquement allez à :

- http://localhost:8080/

## Utilisation

Pour s'inscrire sur le réseau social Groupomania, il vous faut renseigner :

- Un pseudo
- Une adresse mail
- Un mot de passe

Vous êtes ensuite redirigé vers la page des posts.
Il est impossible de créer plusieurs comptes avec une même adresse mail.
Pour l'instant, le site étant encore en développement, aucune regex n'a été implémentée, afin de faciliter les tests du site.

Pour vous connecter, il vous faut renseigner :

- votre adresse mail
- votre mot de passe

Une fois connecté vous pouvez :

- publier un post (avec ou sans image/gif)
- modifier chacun de vos anciens posts
- supprimer chacun de vos anciens posts
- supprimer votre compte
- vous déconnecter
