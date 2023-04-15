# <p align="center">Ymood</p>
  
Challenge 48h<br>
Le but du projet est de créer un "nuage" représentant l'humeur générale des étudiants sur la semaine.
Il sera facilement intégrable à n'importe quel extranet d'école.
        
## 🛠️ Tech Stack
- [React](https://react.dev/)
- [Firebase](https://firebase.google.com/)
- [NoSQL](https://www.oracle.com/fr/database/nosql/what-is-nosql/#:~:text=Le%20terme%20%C2%AB%20NoSQL%20%C2%BB%20d%C3%A9signe%20les,donn%C3%A9es%20dans%20un%20format%20diff%C3%A9rent.)

## 🛠️ Install Dependencies    

Node.js est un prérequis.
Une fois le repository clone, vous pourrez installer tous les packages requis à l'aide des commandes ci-dessous (attention à bien le faire au même endroit que le fichier package.json)

```bash
cd ymood
npm install
```

## 🛠️ Start the server
Le site est déployé à cette URL mais pas pour la dernière version :
https://ymood-ce910.web.app/

Vous pouvez le lancer localement de cette manière :
```bash
npm start
```

## 🛠️ Packages / Librairies
- React-router 6
- React (latest version)
- Chart.js
- firebase
- antd

Puis vous pourrez vous rendre sur https://localhost:3000.

## 🧑🏻‍💻 Usage / Fonctionnalités

#### Step 1 : 
##### [Site vitrine de présentation du projet](https://ymood-ce910.web.app/) vous permettant, en cliquant sur le bouton "En savoir plus", d'aller sur l'espace Ymood.
Il vous faudra dans un premier temps vous connecter ou vous inscrire afin d'accéder au panel de boutons et d'inscrire votre émotion du jour et de consulter l'humeur générale de votre école !
Les boutons augmenteront le nombre de personnes pour une émotion, directement stockée dans notre base de données NoSQL sur Firebase avec un format nous permettant de les lister par jour de manière automatique.

#### Step 2 :
##### Configuration pour les administrateurs.
En effet, sur la route /admin, vous aurez accès à tout un panel administrateur vous permettant ainsi de configurer les différents boutons de choix d'émotion et d'indiquer si l'émotion est négative ou positive.
Vous pourrez également y configurer un message général pour l'école appelé "Le message de la péda".
Vous avez également de la visualisation sur toutes les données passées et présentes des humeurs de l'école, vous permettant ainsi d'avoir un suivi et de pouvoir en tirer des conclusions sur l'évolution de l'humeur générale de l'école sur toute l'année par exemple.
        

## Exemple d'intégration:
Les étudiants se connectent à l'extranet ynov, le nuage apparaît sur le site, si l'humeur générale est joyeuse,
il y a un soleil derrière le nuage, si l'humeur est plutôt triste, il y aura de la pluie sous le nuage
et s'il est neutre ce sera simplement un nuage.
Il sera possible de cliquer sur un bouton d'une emotion une fois par jour afin de participer au nuage.


## 🙇 Authors
#### Jean-Philippe CAETANO
- LinkedIn: [@jean-philippe-caetano](https://www.linkedin.com/in/jean-philippe-caetano-b30327229/)
- Github: [@JeanPhilippeCaetano](https://github.com/JeanPhilippeCaetano)

#### Hugo ROUMAGNE
- LinkedIn: [@hugo-roumagne](https://www.linkedin.com/in/hugo-roumagne/)
- Github: [@Kwayguen](https://github.com/Kwayguen)

#### Emile SEGURET
- LinkedIn: [@emile-seguret](https://www.linkedin.com/in/emile-seguret/)
- Github: [@Spikesito](https://github.com/Spikesito)

#### Tanguy MEIGNIER
- LinkedIn: [@tanguy-meignier](https://www.linkedin.com/in/tanguy-meignier-13a064204/)
- Github: [@MrTanguy](https://github.com/MrTanguy)

#### Bastien LOCATELLI
- LinkedIn: [@bastien-locatelli](https://www.linkedin.com/in/bastien-locatelli-a78119238/)
- Github: [@Basloc](https://github.com/Basloc)

#### Aymeric KREUZER
- LinkedIn: [@aymeric-kreuzer](https://www.linkedin.com/in/aymeric-kreuzer-049703270/)
- Github: [@KAymeric](https://github.com/KAymeric)
