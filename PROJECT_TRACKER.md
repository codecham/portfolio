# 📋 Portfolio Next.js - Suivi de Projet

> **Instructions Claude** : Lis ce fichier au début de chaque conversation pour connaître l'état du projet.

---

## 🎯 Informations Projet

| Clé | Valeur |
|-----|--------|
| **Projet** | Portfolio personnel |
| **Objectif** | Site vitrine pour présenter projets 42 + stage Proximus |
| **Stack** | Next.js 15 + TypeScript + Tailwind CSS |
| **Hébergement** | Vercel (prévu) |
| **Développeur** | Corentin - Dev FullStack Junior (42 Belgium) |

---

## 📁 Structure du Projet

```
portfolio/
├── public/
│   ├── images/
│   │   └── projects/        # Screenshots des projets
│   └── cv.pdf               # CV téléchargeable (à ajouter)
├── app/
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Page d'accueil
│   └── globals.css          # Styles globaux
├── components/              # ✅ Créé
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/                    # ✅ Créé
│   └── content.ts           # ✅ Créé
├── lib/                     # ✅ Créé
│   └── utils.ts
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

**Note** : Pas de dossier `src/`, structure à la racine.

---

## ✅ Checklist des Étapes

### Phase 1 : Setup Initial
- [x] Créer le projet Next.js
- [x] Créer les dossiers (components, data, lib)
- [x] Créer le fichier content.ts
- [x] Configurer tailwind.config.ts (couleurs personnalisées)
- [x] Configurer globals.css (classes utilitaires)
- [x] Configurer layout.tsx (metadata SEO + font)

### Phase 2 : Composants de Base
- [x] Header.tsx - Navigation
- [x] Footer.tsx - Pied de page
- [x] Hero.tsx - Section d'accroche

### Phase 3 : Sections Principales
- [ ] About.tsx - Parcours et présentation
- [ ] ProjectCard.tsx - Composant carte projet
- [ ] Projects.tsx - Grille des projets
- [ ] Experience.tsx - Stage Proximus
- [ ] Skills.tsx - Compétences techniques
- [ ] Contact.tsx - Section contact

### Phase 4 : Assemblage
- [ ] Intégrer tous les composants dans page.tsx
- [ ] Ajouter la navigation smooth scroll
- [ ] Vérifier le responsive (mobile/tablet/desktop)

### Phase 5 : Contenu & Assets
- [ ] Remplir content.ts avec les vraies données
- [ ] Ajouter les screenshots des projets
- [ ] Ajouter le CV en PDF
- [ ] Ajouter photo de profil (optionnel)

### Phase 6 : Optimisation
- [ ] Vérifier les métadonnées SEO
- [ ] Optimiser les images (format, taille)
- [ ] Tester sur différents navigateurs
- [ ] Corriger les erreurs console

### Phase 7 : Déploiement
- [ ] Push sur GitHub
- [ ] Connecter à Vercel
- [ ] Premier déploiement
- [ ] Tester l'URL en production
- [ ] (Optionnel) Configurer domaine personnalisé

---

## 🔄 Étape Actuelle

```
► PHASE 1 : Setup Initial - Configuration des fichiers de base
```

**Prochaine action** : Configurer tailwind.config.ts avec les couleurs personnalisées

---

## 📝 Notes & Décisions

| Date | Note |
|------|------|
| 02/12/2024 | Projet créé sans dossier src/ (structure racine) |
| 02/12/2024 | Dossiers components/, data/, lib/ créés |
| 02/12/2024 | Fichier content.ts créé |

---

## 🎨 Design & Branding (à définir)

| Élément | Valeur |
|---------|--------|
| Couleur primaire | `#0070f3` (bleu - à confirmer) |
| Couleur secondaire | `#1a1a1a` (noir - à confirmer) |
| Couleur accent | `#00d4ff` (cyan - à confirmer) |
| Font principale | Inter (par défaut Next.js) |
| Style général | Moderne, minimaliste, professionnel |

---

## 🔗 Liens Utiles

- **Repo GitHub** : (à ajouter après création)
- **URL Vercel** : (à ajouter après déploiement)
- **Figma/Maquette** : (si applicable)

---

## 💡 Idées & Améliorations Futures

- [ ] Mode sombre (dark mode)
- [ ] Animations avec Framer Motion
- [ ] Section blog
- [ ] Formulaire de contact fonctionnel
- [ ] Multi-langue (FR/EN)

---

*Dernière mise à jour : 02/12/2024*