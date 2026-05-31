# aurora_project_IFF — Documentation complète

Site web statique pour la cellule de communication IFF (Centre de Contrôle Aurora). Ce dépôt contient le site principal et une nouvelle page d'archive immersive créée pour consolider les livrables, les transmissions et les assets de la mission AURORA.

## Résumé rapide

La principale nouveauté ajoutée : une page d'archive complète et autonome qui regroupe les productions, la timeline interactive, la galerie, un player vidéo capsule et un tableau de scores.

Principaux fichiers créés/modifiés :

- Page archive : [archive.html](archive.html)
- Styles dédiés : [css/archive.css](css/archive.css)
- Logique JS de l'archive : [js/archive.js](js/archive.js)
- Assets principaux : `assets/aurora_iff_rendu/aurora_iff/` (voir liste ci‑dessous)

## Fonctionnalités de l'archive

- Loader d'initialisation et barres de progression.
- Navigation fixe et structure responsive.
- Hero avec compteur de scores et statut de mission.
- Timeline interactive : filtres, cartes extensibles, badges de mission avec liens vers livrables.
- Productions : résumé des pages livrées et accès direct.
- Transmissions (feed) : affichage filtrable des événements.
- Galerie : miniatures paresseuses, visionneuse/lightbox personnalisée.
- Lightbox : lecture d'images et intégration de vidéos YouTube (injection/suppression d'iframe pour stopper la lecture).
- Capsule vidéo : trois slots, le short DCP intégré en embed et synchronisé avec la galerie.
- Canvas « starfield » et curseur personnalisé pour l'ambiance.
- Calcul automatique des scores (CM) via les tableaux `MISSIONS_SOCLE` et `TIMELINE_EVENTS`.

## Données embarquées

Les tableaux principaux sont définis dans `js/archive.js` :

- `MISSIONS_SOCLE` : socles de base (charte, kit réseaux, identité, etc.).
- `TIMELINE_EVENTS` : événements (EVT-01 → EVT-13, EVT-CONTACT) avec leurs missions imbriquées.
- `EXISTING_PAGES` : pages du site référencées dans la section Productions.
- `GALLERY_ITEMS` : items présentés dans la galerie (images + miniatures + éléments vidéo).

Les données sont actuellement hardcodées pour garantir une archive stable hors connexion.

## Assets importants

Les livrables et visuels sont stockés sous `assets/aurora_iff_rendu/aurora_iff/` — exemples :

- `Message_Terre_Livrables/` (contact audio, objet.png, explication.txt)
- `EVT_B_15/` (série visuelle EVTB-15 ajoutée)
- `Visuels anti-désinformation/`, `Visuel citation spatiale/`, `Séquence émotion.mp4`, `Transmission dégradée.mp4`, etc.

Note : les images EVTB-15 ont été ajoutées à la galerie et sont référencées dans `js/archive.js`.

## Changements récents (résumé)

- Ajout complet de l'archive : [archive.html](archive.html), [css/archive.css](css/archive.css), [js/archive.js](js/archive.js).
- Intégration des visuels `EVT_B_15/*` dans la galerie.
- Suppression des entrées « Archive visuelle 04 → 07 » de la galerie à la demande.
- Ajout d'un YouTube Short (ID `E4nhrnWL_sk`) : intégré en embed dans la section capsule et ajouté comme item vidéo dans la galerie avec lightbox.
- Lightbox étendu pour supporter la lecture de vidéos YouTube (injection d'iframe + autoplay paramètre).
- Corrections : fix syntaxique JS précédemment détecté, correction d'overflow mobile (suppression d'un transform scale problématique dans la CSS).

## Vérifications et commandes utiles

- Vérifier la syntaxe du script de l'archive :

```bash
node --check js/archive.js
```

- Lancer un serveur local et ouvrir la page d'archive :

```bash
python -m http.server 8000
# puis ouvrir http://localhost:8000/archive.html
```

- Rechercher les assets EVTB-15 :

```bash
ls assets/aurora_iff_rendu/aurora_iff/EVT_B_15
```

## Tests rapides manuels

- Ouvrir [archive.html](archive.html) et vérifier :
	- Timeline : expansion des cartes, liens des badges ouvrent les fichiers locaux.
	- Galerie : miniatures, lightbox image; l'item « Short DCP » ouvre un lecteur vidéo et la lecture s'arrête en fermant la lightbox.
	- Capsule : la section contient maintenant le short incrusté ainsi que les autres vidéos.

## Notes pour les développeurs

- Si vous déplacez des fichiers d'`assets/`, mettez à jour les chemins codés dans `js/archive.js` (fonctions `assetPath()` et `GALLERY_ITEMS`).
- Pour ajouter un nouveau visuel à la galerie, ajouter un objet suivant la forme existante dans `GALLERY_ITEMS` :

```js
{
	src: "assets/.../image.jpg",
	title: "Titre",
	meta: "Meta info",
	// optionnel pour vidéo :
	type: "video",
	video: "https://www.youtube.com/embed/<ID>"
}
```

- Pour forcer l'autoplay muet des vidéos dans la lightbox, modifier la génération de l'iframe en ajoutant `&mute=1` ou en définissant l'attribut `muted` côté player si nécessaire.

## TODO / pistes d'amélioration

- Valider l'intégrité complète des liens (tâche en cours).
- Tests cross‑device automatisés (headless browser) pour garantir qu'il n'y a pas d'overflow sur toutes tailles d'écran.
- Ajouter un indicateur « dossier » pour les missions dont le lien pointe vers un répertoire plutôt qu'un fichier.

## Contact / prochaines étapes

Si tu veux que j'active l'autoplay muet pour les shorts, que je mette en avant un item dans la galerie, ou que j'intègre d'autres visuels, dis‑moi et je ferai les modifications.

---
Dernière mise à jour : 31/05/2026 — archive enrichie, EVTB-15 et Short DCP intégrés.
