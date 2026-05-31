# aurora_project_IFF

Site web statique pour la cellule de communication IFF du Centre de Contrôle Aurora. Le projet présente l’univers AURORA de bout en bout : la mission, les livrables, les transmissions, la galerie visuelle, les capsules vidéo et les scores de production.

## Mise en avant du site

Le site est pensé comme une archive immersive et narrative. Il ne se contente pas d’afficher des pages : il raconte une mission entière, du premier contact visuel jusqu’au retour final du signal.

Voici ce que l’on retrouve dans l’ensemble du dispositif :

- un site principal cohérent avec une direction artistique SF sobre et lisible ;
- une archive officielle complète qui regroupe les productions, la timeline, les transmissions et la galerie ;
- des pages dédiées à des moments clés de la mission, comme le suivi EVA, la découverte NOVA et le terminal de crise ;
- une logique de navigation et de scoring qui rend l’ensemble vivant et crédible ;
- des visuels et vidéos intégrés directement depuis les livrables du dossier AURORA.

## Ce que contient le dépôt

### Pages principales

- [index.html](index.html) : page d’accueil du projet AURORA.
- [archive.html](archive.html) : archive officielle et page la plus complète du dispositif.
- [eva-tracking.html](eva-tracking.html) : page de suivi EVA.
- [nova-discovery.html](nova-discovery.html) : page dédiée à la découverte NOVA.
- [signal.html](signal.html) : page d’alerte / signal anormal.
- [crisis-terminal.html](crisis-terminal.html) : interface de crise et mode dégradé.

### Styles et scripts

- [style.css](style.css) : styles globaux du site principal.
- [script.js](script.js) : logique du site principal.
- [css/archive.css](css/archive.css) : styles spécifiques de l’archive.
- [js/archive.js](js/archive.js) : logique complète de l’archive.

### Assets

- `assets/` : visuels génériques, logos et éléments utilisés sur plusieurs pages.
- `assets/aurora_iff_rendu/aurora_iff/` : livrables officiels, visuels, PDFs, vidéos, sons et sous-dossiers thématiques.
- `assets/aurora_iff_rendu/aurora_iff/EVT_B_15/` : série visuelle EVTB-15 ajoutée à la galerie.

## L’archive AURORA, de A à Z

La page [archive.html](archive.html) est organisée comme un vrai dossier de mission.

### 1. Introduction

- loader d’arrivée et ambiance visuelle d’ouverture ;
- hero avec statut de mission, compteurs et résumé du contexte ;
- identité graphique inspirée du reste du site.

### 2. Contexte mission

- synopsis global de la mission Odyssey IV ;
- présentation de l’équipage ;
- paramètres de mission synthétiques.

### 3. Timeline interactive

- événements ordonnés chronologiquement ;
- filtres par phase narrative ;
- cartes ouvrables avec transmissions et badges de missions ;
- liens directs vers les productions ou sous-pages correspondantes.

### 4. Productions livrées

- récapitulatif des pages déjà produites ;
- accès rapide au site principal, à la découverte NOVA, au signal, au terminal de crise et au suivi EVA.

### 5. Flux de transmissions

- journal condensé des messages de l’équipage ;
- classement par tonalité et par état de crise ;
- lecture plus rapide des moments clés de la mission.

### 6. Galerie d’archive

- miniatures paresseuses ;
- visionneuse personnalisée ;
- ajout des nouveaux visuels EVTB-15 ;
- intégration d’un short YouTube en galerie ;
- suppression des anciennes entrées visuelles 04 à 07 à la demande.

### 7. Capsules vidéo

- capsules vidéo intégrées directement dans la page ;
- short DCP affiché dans la capsule ;
- remplacement du placeholder final par la vidéo YouTube fournie.

### 8. Scores

- calcul automatique des CM ;
- progression des missions ;
- répartition des scores par catégorie.

## Données embarquées

Les données de l’archive sont hardcodées dans [js/archive.js](js/archive.js) pour garder une version stable, lisible et autonome.

- `MISSIONS_SOCLE` : socles de base.
- `TIMELINE_EVENTS` : événements de la mission et missions associées.
- `EXISTING_PAGES` : pages du site déjà livrées.
- `GALLERY_ITEMS` : éléments affichés dans la galerie, images et vidéos comprises.

Le calcul des CM est automatique via les missions marquées comme terminées.

## État des ajouts récents

- archive complète créée et intégrée.
- ajout des visuels EVTB-15 dans la galerie.
- ajout du short DCP en capsule et en galerie avec lightbox vidéo.
- remplacement du placeholder de capsule par la vidéo YouTube fournie.
- amélioration de la lightbox pour supporter les vidéos YouTube.
- correction d’un souci de syntaxe JS et d’un overflow mobile.
- mise à jour du README pour présenter l’ensemble du projet.

## Lancer le projet

Le projet ne nécessite aucun build.

```bash
python -m http.server 8000
```

Puis ouvrir :

```text
http://localhost:8000/index.html
http://localhost:8000/archive.html
```

## Vérifications utiles

- Vérifier la syntaxe JavaScript de l’archive :

```bash
node --check js/archive.js
```

- Vérifier les fichiers EVTB-15 présents :

```bash
dir assets\aurora_iff_rendu\aurora_iff\EVT_B_15
```

- Tester visuellement la galerie et la capsule dans le navigateur.

## Notes techniques

- Les chemins d’assets sont encodés dans [js/archive.js](js/archive.js) avec une fonction dédiée.
- La lightbox gère à la fois les images et les vidéos YouTube.
- La galerie et la timeline sont construites à partir des tableaux de données internes.
- Le site a été ajusté pour rester lisible sur desktop et mobile.

## Crédits et remerciements

Merci aux organisateurs pour le cadre, les livrables et le travail de coordination qui ont rendu ce projet possible.

Un remerciement tout particulier à Romain Delon pour son accompagnement, son implication et la qualité du suivi.

---
Dernière mise à jour : 31/05/2026
