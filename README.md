# justifyAPI

Cette API fourni un service à un utilisateur enregistré. Après s'être authentifié, il obtiendra un Token unique qui lui permettra d'envoyer un texte à justifier.

## Téchnologies utilisées

- NodeJS
- Express
- MongoDB
- Librairies (JWT, Bcrypt, Mongoose)

---
---

## Endpoints

### Register

Inscription à la base de données de l'API

**Route:** '/api/register'

**Méthode:** 'POST'

**Requst bodys**

```json
{
  "email": "[email enregistré]",
  "password": "[mot de passe associé"
}
```
---
### Token

Authentification et obtention du Token unique.

**Route:** '/api/token'

**Méthode:** 'POST'

**Request body**

```json
{
  "email": "[email]",
  "password": "[mot de passe de 8 caractères minimum]"
}
```

**Response body**

```json
{
  "userId": "[id]",
  "token": "[token]"
}
```
---

### Justify

Justification d'un texte passé en paramètre, avec une longueur de 80 caractères par lignes

**Route:** '/api/justify'

**Méthode:** 'POST'

**Request body**

@TODO

**Response body**

@TODO
