# aurora_project_IFF

Site web statique pour la cellule de communication I Fabulosi Filette (IFF) du Centre de Contrôle Aurora, Mission Odyssey IV, 2079.

## Contenu

- `index.html` : structure de la page, sections, navigation et liens vers les fichiers externes.
- `style.css` : identité visuelle, responsive, barre de scroll, curseur personnalisé et animations de fond.
- `script.js` : transmissions dynamiques, typewriter, compteur, canvas d’étoiles, menu mobile et état d’inactivité.
- `assets/` : logos et visuels utilisés par le site.

## Fonctionnalités

- Header fixe avec navigation responsive.
- Hero immersif avec canvas d’étoiles et texte animé.
- Section Mission, Transmissions et À propos.
- Curseur personnalisé en croix.
- Barre de scroll blanche, fine, arrondie et masquée après inactivité.
- Animations de veille avec cercles latéraux façon planètes.

## Lancer le site

Le projet ne nécessite aucun build ni framework.

1. Ouvre `index.html` dans un navigateur.
2. Ou lance un serveur local si tu préfères éviter l’ouverture directe du fichier.

Exemple avec Python :

```bash
python -m http.server 8000
```

Puis ouvre `http://localhost:8000`.

## Modifier les transmissions

Les transmissions sont définies dans le tableau `transmissions` en haut de `script.js`.

Chaque entrée suit ce format :

```js
{
	titre: "...",
	date: "YYYY-MM-DD",
	type: "ALERTE" | "INFO" | "RAPPORT",
	contenu: "..."
}
```

Ajouter un objet dans ce tableau ajoute automatiquement une nouvelle carte dans la section Transmissions.

## Logos et assets

- Logo du header : `assets/logo_rose.png`
- Icône de page : `assets/logo_jaune.png`
- Autres variantes disponibles dans `assets/`, dont `assets/logo_violet.png`

## Notes

- Le site utilise uniquement du HTML, du CSS et du JavaScript vanilla.
- Les polices proviennent de Google Fonts.
- Le design est pensé mobile first et s’adapte aux écrans desktop.