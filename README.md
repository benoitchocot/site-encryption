
# 🔐 Site Encryption

Projet d'estimation de coût pour des applications **web** et **mobiles** — développé en **PHP 7.2** avec **Symfony 4.4**.

> Ce projet permet de simuler le coût d'une application en fonction de différents paramètres métiers, plateformes et besoins techniques.

---

## 🚀 Technologies

- PHP 7.2
- Symfony 4.4
- Docker + Makefile
- Doctrine ORM
- Twig
- Bootstrap (si applicable)
- Fixtures pour données de test

---

## 🛠️ Installation

Clonez le dépôt :

```bash
git clone https://github.com/ton-user/site-encryption.git
cd site-encryption
```

Initialisez l’environnement de développement via les commandes suivantes :

```bash
make up
make composer-install
make db-create
make db-schema
make db-fixtures-all
```

> ⚠️ Assurez-vous que **Docker** et **Make** sont bien installés sur votre machine.

---

## 🔐 Connexion à l'application

Utilisez les identifiants suivants pour vous connecter :

- **Email** : `johndoe@easterapp.fr`  
- **Mot de passe** : `adminpassword1A!`

---

## 🧪 Accès à l'application

Une fois les services démarrés, accédez à l'application à l'adresse :

👉 http://localhost:8080

---

## 📁 Structure principale du projet

```
├── bin/                 # Commandes Symfony
├── config/              # Configuration des bundles
├── public/              # Racine publique (DocumentRoot)
├── src/                 # Code source PHP
├── templates/           # Fichiers Twig (vues)
├── tests/               # Tests unitaires et fonctionnels
├── docker/              # Configuration Docker
└── Makefile             # Commandes utilitaires (make)
```

---

## 📦 Commandes utiles

```bash
make up                 # Démarrer les conteneurs Docker
make stop              # Stopper les conteneurs
make composer-install  # Installer les dépendances PHP
make db-create         # Créer la base de données
make db-schema         # Générer le schéma
make db-fixtures-all   # Injecter des données de test
```

---

## 📄 Licence

Projet privé – Tous droits réservés ©️ 2025

---

## 🙋‍♂️ Auteur

Développé par Bonoit dans le cadre d'une formation.
