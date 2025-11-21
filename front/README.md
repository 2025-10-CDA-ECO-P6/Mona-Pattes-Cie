# Pattes & Cie – Frontend
Carnet de santé digital pour clinique vétérinaire

## Installation & lancement
1. Cloner le projet  -> branch develop 
```bash
git clone https://github.com/2025-10-CDA-ECO-P6/Mona-Pattes-Cie.git  
cd Mona-Pattes-Cie/front  
```
2. Installer les dépendances
```bash
npm install
```

2. Lancer l’environnement de développement
```bash
npm run dev
```

## Arborescence du projet  
```bash
src/app
├── animaux
│   ├── [id]
│   │   ├── page.jsx
│   │   └── page.module.css
│   ├── page.jsx
│   └── page.module.css
├── components
│   ├── Button.jsx
│   ├── Button.module.css
│   ├── Card.jsx
│   ├── Card.module.css
│   ├── Consultation.jsx
│   ├── Consultation.module.css
│   ├── Filter.jsx
│   ├── Filter.module.css
│   ├── Menu.jsx
│   ├── Menu.module.css
│   ├── SearchBar.jsx
│   ├── SearchBar.module.css
│   ├── Treatment.jsx
│   ├── Treatment.module.css
│   ├── Vaccination.jsx
│   └── Vaccination.module.css
├── favicon.ico
├── globals.css
├── layout.js
├── page.js
└── page.module.css
```

## Structure générale
5.1 /animaux 
- Liste des animaux  
- Affichage des cartes  
- Barre de recherche  
- Filtrage par catégories  

5.2 /animaux/[id]
- Fiche complète d’un animal
- Vaccinations
- Consultations
- Traitements
- Informations générales

5.3 components/
Composants réutilisables :  
- Card : carte d’animal pour liste  
- Menu : barre de navigation  
- Filter : filtres sur la homepage (prochaine consultation, liste alphabétique)  
- Vaccination, Consultation, Treatment : composants séparés  
- SearchBar : barre de recherche (non fonctionnel)  