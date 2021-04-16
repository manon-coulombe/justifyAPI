# justifyAPI

Cette API fourni un service à un utilisateur enregistré. Après s'être authentifié, il obtiendra un Token unique qui lui permettra d'envoyer un texte à justifier.

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

Authentification et obtention du Token unique

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

Authentification et obtention du Token unique

**Route:** '/api/justify'

**Méthode:** 'POST'

**Request body**

@TODO

**Response body**

@TODO
