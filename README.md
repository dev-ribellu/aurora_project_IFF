# aurora_project_IFF

Site web statique pour la cellule de communication IFF (Centre de Contrôle Aurora).

## Résumé

Ce dépôt contient une interface statique immersive (HTML/CSS/JS) et une nouvelle page de suivi EVA : `eva-tracking.html`.

## Changements récents

- Ajout de `eva-tracking.html` — tableau de bord EVA sombre « EVA TRACKING — LIVE ».
- Styles EVA intégrés dans `style.css` (grilles, feed, carte secteur, galerie, readouts).
- `script.js` rendu tolérant aux pages partielles (vérifications d'existence des éléments pour éviter les erreurs).
- Lien de navigation ajouté dans `index.html` vers la page EVA.
- Correction du décalage du header sur la page EVA via la classe `eva-page` (annule l'espace réservé au bandeau d'alerte).
- Le minuteur de mission sur la page EVA démarre désormais depuis aujourd'hui à 11:30 (heure locale) par défaut.

## Arborescence importante

- `index.html` : page principale et barre de navigation partagée.
- `eva-tracking.html` : nouvelle page autonome pour le suivi EVA (reprend le header et le style global).
- `style.css` : styles globaux + règles EVA ajoutées.
- `script.js` : logique partagée (galerie, feed, canvas) — désormais protégée contre l'absence d'éléments.
- `assets/` : images et icônes utilisées par le site et la galerie EVA.

## Lancer localement

Le projet ne nécessite pas de build ; ouvre `index.html` ou utilise un petit serveur local :

```bash
python -m http.server 8000
```

Puis visite `http://localhost:8000`.

## Utiliser la page EVA

- Depuis la navigation principale, clique sur « EVA Tracking » pour accéder au tableau de bord.
- Le tableau affiche : statut mission (EN COURS / TERMINÉE), minuteur (départ 11:30 aujourd'hui), liste de mises à jour (les plus récentes en haut), carte secteur avec un marqueur, galerie d'images et readouts télémetriques simulés.
- Les mises à jour sont actuellement simulées localement ; pour intégrer une source réelle, fournir une API ou un socket et j'adapterai le code.

## Notes pour les développeurs

- Le script partagé (`script.js`) contient maintenant des gardes `if (elem) { ... }` pour éviter les erreurs sur pages qui n'ont pas tous les composants.
- La règle CSS `.eva-page { --alert-banner-h: 0px; --degraded-banner-h: 0px; }` neutralise l'espace réservé au bandeau d'alerte uniquement pour la page EVA.
- Le minuteur est configuré en heure locale ; pour forcer UTC, remplacer l'initialisation dans `eva-tracking.html` par un `Date.UTC(...)` explicite.

## Contribuer

- Modifier une ressource locale, puis ouvrir la page dans un navigateur ou lancer un serveur local comme indiqué ci‑dessus.
- Ouvrir une issue si tu veux : ajouter un vrai flux de télémetrie, changer l'origine du timer (UTC), ou améliorer l'accessibilité.

## Contacts

Pour des ajouts de données réelles (API, WebSocket), fournis les endpoints et les schémas, je ferai l'intégration.
