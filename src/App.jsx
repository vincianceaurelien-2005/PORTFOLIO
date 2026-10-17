import { useMemo, useState } from 'react'
import './App.css'
import './dark-theme.css'
import profilePhoto from './assets/profi/98020d12-9311-49b1-8bb1-01a7d451af8f.jfif'
import churchDashboard from './assets/Caisse eglise/Bord.png'
import churchEntries from './assets/Caisse eglise/entre.png'
import churchEntryForm from './assets/Caisse eglise/form.png'
import churchChart from './assets/Caisse eglise/Histogramme.png'
import churchLogin from './assets/Caisse eglise/Login.png'
import churchMovements from './assets/Caisse eglise/Mouvement.png'
import churchReport from './assets/Caisse eglise/pdf.png'
import isteDashboard from './assets/Nouveau dossier/bord.png'
import isteStudents from './assets/Nouveau dossier/etudiant.png'
import isteAuth from './assets/Nouveau dossier/auth.png'
import isteAddStudent from './assets/Nouveau dossier/ajoutEtudiant.png'
import isteReferential from './assets/Nouveau dossier/referentiel.png'
import isteTranscript from './assets/Nouveau dossier/releve.png'
import isteImport from './assets/Nouveau dossier/mportExcel.png'
import productDashboard from './assets/Gestion produit/bord.png'
import productList from './assets/Gestion produit/liste.png'
import productAdd from './assets/Gestion produit/ajouter.png'
import productChart from './assets/Gestion produit/courbe.png'
import productLogin from './assets/Gestion produit/login.png'
import productAccount from './assets/Gestion produit/acc.png'
import studentGrades from './assets/Note lycéen/bord.png'
import studentLogin from './assets/Note lycéen/login.png'
import studentAddGrades from './assets/Note lycéen/ajouterNotes.png'
import studentSubject from './assets/Note lycéen/detailMatiere.png'
import studentEdit from './assets/Note lycéen/modifier eleve.png'
import studentSettings from './assets/Note lycéen/parametre.png'
import pensionDashboard from './assets/Penssion retraite/bord.png'
import pensionHistory from './assets/Penssion retraite/histo.png'
import pensionExport from './assets/Penssion retraite/export.png'
import pensionPeople from './assets/Penssion retraite/personneù.png'

const projects = [
  { id: 1, title: 'Gestion des notes — ISTE', category: 'Application web', year: '2026', tone: 'blue', mark: '01', tags: ['React', 'Django', 'Excel'], description: 'Application de gestion scolaire pour centraliser les dossiers étudiants, les notes, les référentiels et les relevés. Les captures montrent le tableau de bord et les principaux écrans de gestion.', status: 'Application web', cover: isteDashboard, screenshots: [
    { label: 'Tableau de bord', src: isteDashboard }, { label: 'Authentification', src: isteAuth }, { label: 'Liste des étudiants', src: isteStudents }, { label: 'Ajout d’un étudiant', src: isteAddStudent }, { label: 'Référentiels', src: isteReferential }, { label: 'Relevé de notes', src: isteTranscript }, { label: 'Import Excel', src: isteImport },
  ] },
  { id: 2, title: 'Gestion de caisse d’église', category: 'Application web', year: '2026', tone: 'lavender', mark: '02', tags: ['HTML / CSS / JavaScript', 'PHP', 'MySQL'], description: 'Application web de gestion financière pour une église : suivi des entrées et sorties, consultation du solde, recherche des mouvements par période et statistiques. Les captures présentent les écrans actuels.', status: 'Application web', cover: churchDashboard, screenshots: [
    { label: 'Tableau de bord', src: churchDashboard }, { label: 'Connexion', src: churchLogin }, { label: 'Mouvements d’entrée', src: churchEntries }, { label: 'Formulaire d’entrée', src: churchEntryForm }, { label: 'Mouvements de caisse', src: churchMovements }, { label: 'Statistiques mensuelles', src: churchChart }, { label: 'Rapport PDF', src: churchReport },
  ] },
  { id: 3, title: 'Gestion de produits', category: 'Application web', year: '2026', tone: 'mint', mark: '03', tags: ['Application web', 'Gestion', 'Statistiques'], description: 'Application de gestion de produits avec tableau de bord, catalogue, formulaire d’ajout et graphiques de suivi.', status: 'Application web', cover: productDashboard, screenshots: [
    { label: 'Tableau de bord', src: productDashboard }, { label: 'Connexion', src: productLogin }, { label: 'Liste des produits', src: productList }, { label: 'Ajouter un produit', src: productAdd }, { label: 'Graphique de suivi', src: productChart }, { label: 'Compte utilisateur', src: productAccount },
  ] },
  { id: 4, title: 'Gestion des notes de lycée', category: 'Application web', year: '2026', tone: 'peach', mark: '04', tags: ['Scolarité', 'Notes', 'Gestion'], description: 'Outil de suivi scolaire pour consulter et saisir les notes, gérer les élèves, les matières et les paramètres.', status: 'Application web', cover: studentGrades, screenshots: [
    { label: 'Tableau de bord', src: studentGrades }, { label: 'Connexion', src: studentLogin }, { label: 'Saisie des notes', src: studentAddGrades }, { label: 'Détail d’une matière', src: studentSubject }, { label: 'Modification d’un élève', src: studentEdit }, { label: 'Paramètres', src: studentSettings },
  ] },
  { id: 5, title: 'Gestion de pension de retraite', category: 'Application web', year: '2026', tone: 'lavender', mark: '05', tags: ['Gestion', 'Retraite', 'Export'], description: 'Application de gestion de pension de retraite, avec consultation des dossiers, historique et export des données.', status: 'Application web', cover: pensionDashboard, screenshots: [
    { label: 'Tableau de bord', src: pensionDashboard }, { label: 'Historique', src: pensionHistory }, { label: 'Export', src: pensionExport }, { label: 'Dossiers des personnes', src: pensionPeople },
  ] },
]

const categories = ['Tout', 'Application web']
const CURRENT_YEAR = new Date().getFullYear()

function Arrow({ diagonal = false }) {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d={diagonal ? 'M5 15 15 5M6 5h9v9' : 'M3 10h13m-5-5 5 5-5 5'} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function App() {
  const [activeCategory, setActiveCategory] = useState('Tout')
  const [selectedProject, setSelectedProject] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const visibleProjects = useMemo(() => activeCategory === 'Tout' ? projects : projects.filter(project => project.category === activeCategory), [activeCategory])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('randriamanana25@gmail.com')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = 'mailto:randriamanana25@gmail.com'
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return <>
    <header className="site-header">
      <a className="brand" href="#accueil" onClick={closeMenu} aria-label="Accueil — RANDRIAMANANA Vinciance Aurelien"><span className="brand-mark">A<span>.</span></span><span className="brand-name">RANDRIAMANANA<span>VINCIANCE AURELIEN · DÉVELOPPEUR</span></span></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i/><i/></button>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navigation principale">
        <a href="#accueil" onClick={closeMenu}>Accueil</a><a href="#apropos" onClick={closeMenu}>À propos</a><a href="#projets" onClick={closeMenu}>Projets</a><a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Parlons de votre projet <Arrow diagonal /></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="accueil">
        <div className="hero-copy"><div className="availability"><span/> OUVERT AUX OPPORTUNITÉS</div><p className="hero-overline">RANDRIAMANANA VINCIANCE AURELIEN · DÉVELOPPEUR</p><h1>Je transforme<br/>les idées en <em>expériences</em><br/>numériques.</h1><p className="hero-intro">Développeur web basé à Madagascar. Je conçois des produits utiles, des interfaces soignées et des applications pensées pour les personnes qui les utilisent.</p><div className="hero-actions"><a className="button button-dark" href="#projets">Découvrir mes projets <Arrow diagonal /></a><a className="text-link" href="#contact">Me contacter <Arrow /></a></div><div className="hero-meta"><span><b>01</b> Créativité</span><span><b>02</b> Développement</span><span><b>03</b> Résultats</span></div></div>
        <div className="hero-art" aria-label="Portrait de RANDRIAMANANA Vinciance Aurelien" role="img"><div className="art-grid"/><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="floating-label label-top"><span className="label-dot"/> Idée en mouvement</div><div className="portrait-card"><img className="hero-portrait" src={profilePhoto} alt="Portrait de RANDRIAMANANA Vinciance Aurelien" /><span className="portrait-caption">RANDRIAMANANA VINCIANCE AURELIEN</span></div><div className="floating-label label-bottom"><span className="sparkle">✳</span> Design + code</div><div className="hero-stamp">MADE<br/>WITH<br/><b>CARE</b></div></div>
        <a className="scroll-cue" href="#apropos"><span className="scroll-line"/>Défiler pour découvrir</a>
      </section>

      <section className="about-section section-wrap" id="apropos"><div className="section-index">01 / À PROPOS</div><div className="about-layout"><h2>Un peu de méthode.<br/><em>Beaucoup de curiosité.</em></h2><div className="about-copy"><p>J’aime construire des outils numériques clairs et accessibles, du premier croquis jusqu’à l’application qui fonctionne. Chaque projet est une occasion d’apprendre, de résoudre un vrai problème et de soigner les détails.</p><p>Mon parcours, mes compétences et ma présentation seront personnalisés avec les informations que vous m’enverrez.</p><a href="#contact" className="underlined-link">Faisons connaissance <Arrow /></a></div></div><div className="skill-row"><span className="skill-label">CE QUE J’APPORTE</span><div className="skill-pills"><span>Développement front-end</span><span>Applications web</span><span>UI & expérience utilisateur</span><span>Résolution de problèmes</span></div></div></section>

      <section className="projects-section" id="projets"><div className="section-wrap"><div className="projects-heading"><div><div className="section-index">02 / SÉLECTION DE PROJETS</div><h2>Du travail concret,<br/><em>des idées qui prennent vie.</em></h2></div><p>Une sélection de projets réalisés, avec des captures d’écran pour découvrir leurs principaux écrans.</p></div><div className="project-toolbar"><span>{String(visibleProjects.length).padStart(2, '0')} PROJETS</span><div className="filters" role="group" aria-label="Filtrer les projets">{categories.map(category => <button key={category} type="button" className={activeCategory === category ? 'filter active' : 'filter'} onClick={() => setActiveCategory(category)}>{category}</button>)}</div></div><div className="project-grid">{visibleProjects.map((project, index) => <article className="project-card" key={project.id} style={{ '--delay': `${index * 70}ms` }}><button type="button" className={`project-visual ${project.tone}`} onClick={() => setSelectedProject(project)} aria-label={`Voir ${project.title}`}><span className="project-number">{project.mark} <i>—</i> {project.year}</span><div className="project-illustration">{project.cover ? <img className="project-cover" src={project.cover} alt={`Aperçu : ${project.title}`} /> : <><span className="project-window"><span className="window-top"><i/><i/><i/></span><span className="window-body"><span className="window-sidebar"/><span className="window-main"><i/><i/><i/></span></span></span><span className="project-orb">{project.id === 1 ? 'G' : '✳'}</span></>}</div><span className="visual-open"><Arrow diagonal /></span></button><div className="project-info"><div><span className="project-category">{project.category} <i>·</i> {project.status}</span><h3>{project.title}</h3></div><button className="round-arrow" type="button" onClick={() => setSelectedProject(project)} aria-label={`Détails de ${project.title}`}><Arrow diagonal /></button></div><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div><div className="projects-note"><span className="note-star">✳</span><p><b>Découvrez les projets réalisés.</b><br/>Ouvrez une carte pour parcourir les captures d’écran et les détails de chaque application.</p></div></div></section>

      <section className="contact-section section-wrap" id="contact"><div className="contact-card"><div className="contact-left"><div className="section-index">03 / CONTACT</div><h2>Une idée en tête ?<br/><em>Construisons-la.</em></h2><p>Vous avez un projet, une collaboration ou simplement envie d’échanger ? Écrivez-moi.</p><a className="button button-light" href="mailto:randriamanana25@gmail.com">Envoyer un message <Arrow diagonal /></a></div><div className="contact-right"><span className="contact-caption">UN MOT SUFFIT POUR COMMENCER</span><a href="mailto:randriamanana25@gmail.com" className="email-link">randriamanana25@gmail.com</a><button type="button" className="copy-button" onClick={copyEmail}>{copied ? 'Adresse copiée ✓' : 'Copier l’adresse'} <span>↗</span></button><div className="contact-socials"><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a></div></div><span className="contact-decoration">A<span>.</span></span></div></section>
    </main>

    <footer className="site-footer section-wrap" id="footer"><a className="footer-brand" href="#accueil">A<span>.</span></a><span>© {CURRENT_YEAR} RANDRIAMANANA Vinciance Aurelien · Développeur</span><a href="#accueil" className="back-top">Retour en haut ↑</a></footer>

    {selectedProject && <div className="modal-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setSelectedProject(null) }}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button type="button" className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Fermer">×</button><span className="section-index">PROJET {selectedProject.mark} / {selectedProject.year}</span><h2 id="modal-title">{selectedProject.title}</h2><p>{selectedProject.description}</p><div className="modal-tags">{selectedProject.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{selectedProject.screenshots && <div className="modal-gallery">{selectedProject.screenshots.map(image => <figure key={image.src}><img src={image.src} alt={image.label} /><figcaption>{image.label}</figcaption></figure>)}</div>}<button type="button" className="button button-dark" onClick={() => setSelectedProject(null)}>Continuer à explorer <Arrow /></button></section></div>}
  </>
}

export default App
