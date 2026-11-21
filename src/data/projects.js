import churchDashboard from '../assets/Caisse eglise/Bord.png'

import churchEntries from '../assets/Caisse eglise/entre.png'

import churchEntryForm from '../assets/Caisse eglise/form.png'

import churchChart from '../assets/Caisse eglise/Histogramme.png'

import churchLogin from '../assets/Caisse eglise/Login.png'

import churchMovements from '../assets/Caisse eglise/Mouvement.png'

import churchReport from '../assets/Caisse eglise/pdf.png'

import isteDashboard from '../assets/Nouveau dossier/bord.png'

import isteStudents from '../assets/Nouveau dossier/etudiant.png'

import isteAuth from '../assets/Nouveau dossier/auth.png'

import isteAddStudent from '../assets/Nouveau dossier/ajoutEtudiant.png'

import isteReferential from '../assets/Nouveau dossier/referentiel.png'

import isteTranscript from '../assets/Nouveau dossier/releve.png'

import isteImport from '../assets/Nouveau dossier/mportExcel.png'

import productDashboard from '../assets/Gestion produit/bord.png'

import productList from '../assets/Gestion produit/liste.png'

import productAdd from '../assets/Gestion produit/ajouter.png'

import productChart from '../assets/Gestion produit/courbe.png'

import productLogin from '../assets/Gestion produit/login.png'

import productAccount from '../assets/Gestion produit/acc.png'

import studentGrades from '../assets/note-lycee/bord.png'

import studentLogin from '../assets/note-lycee/login.png'

import studentAddGrades from '../assets/note-lycee/ajouterNotes.png'

import studentSubject from '../assets/note-lycee/detailMatiere.png'

import studentEdit from '../assets/note-lycee/modifier-eleve.png'

import studentSettings from '../assets/note-lycee/parametre.png'

import pensionDashboard from '../assets/Penssion retraite/bord.png'

import pensionHistory from '../assets/Penssion retraite/histo.png'

import pensionExport from '../assets/Penssion retraite/export.png'

import pensionPeople from '../assets/Penssion retraite/personnes.png'

const projects = [

  { id: 1, problem: 'Le suivi des dossiers, des notes et des référentiels était dispersé entre plusieurs opérations.', role: 'Conception et développement de l’application web, de ses écrans de gestion et de l’import Excel.', result: 'Les écrans de gestion scolaire sont réunis dans un parcours unique, jusqu’au relevé de notes.', title: 'Gestion des notes — ISTE', category: 'Application web', year: '', tone: 'blue', mark: '01', tags: ['React', 'Django', 'Excel'], description: 'Application de gestion scolaire pour centraliser les dossiers et les notes des étudiants de l’ISTE. Elle réunit les référentiels, la consultation des résultats et la génération des relevés dans une interface unique.', status: 'Application web', cover: isteDashboard, screenshots: [

    { label: 'Tableau de bord', src: isteDashboard }, { label: 'Authentification', src: isteAuth }, { label: 'Liste des étudiants', src: isteStudents }, { label: 'Ajout d’un étudiant', src: isteAddStudent }, { label: 'Référentiels', src: isteReferential }, { label: 'Relevé de notes', src: isteTranscript }, { label: 'Import Excel', src: isteImport },

  ] },

  { id: 2, problem: 'Le suivi des mouvements de caisse et la consultation des rapports étaient dispersés entre plusieurs outils.', role: 'Réalisation des interfaces de suivi financier, des formulaires de mouvements et des vues de reporting.', result: 'Les opérations de caisse, leur historique et les rapports sont accessibles depuis une même application.', repoUrl: 'https://github.com/vincianceaurelien-2005/gestion-de-caisse-d-une-eglise', title: 'Gestion de caisse d’église', category: 'Application web', year: '', tone: 'lavender', mark: '02', tags: ['HTML / CSS / JavaScript', 'PHP', 'MySQL'], description: 'Application de gestion de caisse pour enregistrer les entrées et sorties, consulter le solde et retrouver les mouvements par période. Le tableau de bord présente aussi les statistiques et les rapports PDF.', status: 'Application web', cover: churchDashboard, screenshots: [

    { label: 'Tableau de bord', src: churchDashboard }, { label: 'Connexion', src: churchLogin }, { label: 'Mouvements d’entrée', src: churchEntries }, { label: 'Formulaire d’entrée', src: churchEntryForm }, { label: 'Mouvements de caisse', src: churchMovements }, { label: 'Statistiques mensuelles', src: churchChart }, { label: 'Rapport PDF', src: churchReport },

  ] },

  // TODO: remplacer par la vraie stack

  { id: 3, problem: 'Le catalogue et les informations de suivi des produits devaient être regroupés dans un outil facile à consulter.', role: 'Réalisation des écrans de gestion du catalogue, du formulaire produit et du tableau de bord.', result: 'Le catalogue, la création de produits et les indicateurs sont présentés dans une interface unique.', repoUrl: 'https://github.com/vincianceaurelien-2005/gestion-de-produit', title: 'Gestion de produits', category: 'Application web', year: '', tone: 'mint', mark: '03', tags: [], description: 'Application de gestion de produits avec tableau de bord, catalogue, formulaire de création et graphiques de suivi. Elle rassemble les vues utiles au suivi du catalogue et de son activité.', status: 'Application web', cover: productDashboard, screenshots: [

    { label: 'Tableau de bord', src: productDashboard }, { label: 'Connexion', src: productLogin }, { label: 'Liste des produits', src: productList }, { label: 'Ajouter un produit', src: productAdd }, { label: 'Graphique de suivi', src: productChart }, { label: 'Compte utilisateur', src: productAccount },

  ] },

  // TODO: remplacer par la vraie stack

  { id: 4, problem: 'Les opérations de suivi des élèves et de leurs notes devaient être accessibles dans un espace commun.', role: 'Développement des vues de gestion des élèves, des matières et de la saisie des notes.', result: 'Les écrans de saisie et de consultation facilitent le suivi des résultats scolaires.', repoUrl: 'https://github.com/vincianceaurelien-2005/Gestion_note_Lyc-en', title: 'Gestion des notes de lycée', category: 'Application web', year: '', tone: 'peach', mark: '04', tags: [], description: 'Outil de suivi scolaire pour consulter et saisir les notes, gérer les élèves, les matières et les paramètres. Les écrans couvrent le tableau de bord, la saisie et la consultation par matière.', status: 'Application web', cover: studentGrades, screenshots: [

    { label: 'Tableau de bord', src: studentGrades }, { label: 'Connexion', src: studentLogin }, { label: 'Saisie des notes', src: studentAddGrades }, { label: 'Détail d’une matière', src: studentSubject }, { label: 'Modification d’un élève', src: studentEdit }, { label: 'Paramètres', src: studentSettings },

  ] },

  // TODO: remplacer par la vraie stack

  { id: 5, problem: 'Le suivi des dossiers, de leur historique et de leur export demandait un point d’accès organisé.', role: 'Conception des interfaces de consultation, de l’historique et des vues d’export.', result: 'Les principales informations des dossiers et leurs actions de suivi sont regroupées dans une application.', repoUrl: 'https://github.com/vincianceaurelien-2005/Gestion_pension', title: 'Gestion de pension de retraite', category: 'Application web', year: '', repoVisibility: 'private', tone: 'lavender', mark: '05', tags: [], description: 'Application de suivi des dossiers de pension de retraite. Elle permet de consulter les personnes, parcourir l’historique et accéder aux fonctions d’export des données.', status: 'Application web', cover: pensionDashboard, screenshots: [

    { label: 'Tableau de bord', src: pensionDashboard }, { label: 'Historique', src: pensionHistory }, { label: 'Export', src: pensionExport }, { label: 'Dossiers des personnes', src: pensionPeople },

  ] },

]





export const categories = ['Tout', ...new Set(projects.map(project => project.category))]

export default projects







