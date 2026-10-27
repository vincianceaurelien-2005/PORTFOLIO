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
  const [activeSection, setActiveSection] = useState('accueil')
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedScreenshot, setSelectedScreenshot] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const visibleProjects = useMemo(() => activeCategory === 'Tout' ? projects : projects.filter(project => project.category === activeCategory), [activeCategory])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('randriamanana25@gmail.com, vincianceaurelien@gmail.com')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = 'mailto:randriamanana25@gmail.com,vincianceaurelien@gmail.com'
    }
  }

  const navigateToSection = section => {
    setActiveSection(section)
    setMenuOpen(false)
    document.querySelector('.page-views')?.scrollTo({ top: 0 })
  }

  const closeMenu = event => {
    const section = event?.currentTarget?.getAttribute('href')?.slice(1)
    if (['accueil', 'apropos', 'projets', 'contact'].includes(section)) navigateToSection(section)
    else setMenuOpen(false)
  }

  const handleSectionLink = event => {
    const link = event.target.closest?.('a[href^="#"]')
    if (!link) return
    const section = link.getAttribute('href').slice(1)
    const destination = section === 'footer' ? 'accueil' : section
    if (['accueil', 'apropos', 'projets', 'contact'].includes(destination)) {
      event.preventDefault()
      navigateToSection(destination)
    }
  }

  const sendContactMessage = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')
    const subject = encodeURIComponent(`Message du portfolio - ${name}`)
    const body = encodeURIComponent(`Nom : ${name}\nE-mail : ${email}\n\n${message}`)
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('randriamanana25@gmail.com,vincianceaurelien@gmail.com')}&su=${subject}&body=${body}`, '_blank', 'noopener,noreferrer')
  }

  return <>
    <header className="site-header">
      <a className="brand" href="#accueil" onClick={closeMenu} aria-label="Accueil — RANDRIAMANANA Vinciance Aurelien"><span className="brand-mark">A<span>.</span></span><span className="brand-name">RANDRIAMANANA<span>VINCIANCE AURELIEN · DÉVELOPPEUR</span></span></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i/><i/></button>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navigation principale">
        <a href="#accueil" className={activeSection === 'accueil' ? 'nav-active' : undefined} aria-current={activeSection === 'accueil' ? 'page' : undefined} onClick={closeMenu}>Accueil</a><a href="#apropos" className={activeSection === 'apropos' ? 'nav-active' : undefined} aria-current={activeSection === 'apropos' ? 'page' : undefined} onClick={closeMenu}>&#192; propos</a><a href="#projets" className={activeSection === 'projets' ? 'nav-active' : undefined} aria-current={activeSection === 'projets' ? 'page' : undefined} onClick={closeMenu}>Projets</a><a href="#contact" className={activeSection === 'contact' ? 'nav-active' : undefined} aria-current={activeSection === 'contact' ? 'page' : undefined} onClick={closeMenu}>Contact</a>
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Parlons de votre projet <Arrow diagonal /></a>
      </nav>
    </header>

    <main className="page-views" onClickCapture={handleSectionLink}>
      <section className={activeSection === 'accueil' ? 'hero section-wrap' : 'view-hidden'} id="accueil">
        <div className="hero-copy"><div className="availability"><span/> EN RECHERCHE D’UN POSTE</div><p className="hero-overline">RANDRIAMANANA VINCIANCE AURELIEN &middot; &Eacute;TUDIANT EN INFORMATIQUE</p><h1>&Eacute;tudiant en informatique,<br/>je con&ccedil;ois des applications<br/><em>web utiles.</em></h1><p className="hero-intro">&Eacute;tudiant &agrave; l’ENI de l’Universit&eacute; de Fianarantsoa, je con&ccedil;ois des applications web et des outils de gestion. Je souhaite mettre en pratique mes comp&eacute;tences au sein d’une &eacute;quipe et contribuer &agrave; des projets utiles.</p><div className="hero-actions"><a className="button button-dark" href="#projets">Découvrir mes projets <Arrow diagonal /></a><a className="text-link" href="#contact">Me contacter <Arrow /></a></div><div className="hero-meta"><span><b>01</b> Interface</span><span><b>02</b> Fonctionnalités</span><span><b>03</b> Données</span></div></div>
        <div className="hero-art" aria-label="Portrait de RANDRIAMANANA Vinciance Aurelien" role="img"><div className="art-grid"/><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="floating-label label-top"><span className="label-dot"/> Idée en mouvement</div><div className="portrait-card"><img className="hero-portrait" src={profilePhoto} alt="Portrait de RANDRIAMANANA Vinciance Aurelien" /><span className="portrait-caption">RANDRIAMANANA VINCIANCE AURELIEN</span></div><div className="floating-label label-bottom"><span className="sparkle">✳</span> Design + code</div><div className="hero-stamp">MADE<br/>WITH<br/><b>CARE</b></div></div>
        <a className="scroll-cue" href="#apropos"><span className="scroll-line"/>Défiler pour découvrir</a>
      </section>

      <section className={activeSection === 'apropos' ? 'about-section section-wrap' : 'view-hidden'} id="apropos"><div className="section-index">01 / À PROPOS</div><div className="about-layout"><h2>Mon parcours.<br/><em>Mes projets. Mon objectif.</em></h2><div className="about-copy"><p>Je m’appelle RANDRIAMANANA Vinciance Aurelien. Je suis &eacute;tudiant &agrave; l’&Eacute;cole Nationale d’Informatique (ENI), rattach&eacute;e &agrave; l’Universit&eacute; de Fianarantsoa. Je suis inscrit en mention Informatique, parcours Informatique G&eacute;n&eacute;ral.</p><p>Originaire de <a href="https://www.google.com/maps/search/?api=1&amp;query=Vondrozo%2C%20Atsimo-Atsinanana%2C%20Madagascar" target="_blank" rel="noreferrer">Vondrozo, dans la r&eacute;gion Atsimo-Atsinanana</a>, je m’int&eacute;resse au d&eacute;veloppement d’applications web utiles. Je cherche une opportunit&eacute; pour participer &agrave; des projets concrets, apprendre au sein d’une &eacute;quipe et y apporter mon s&eacute;rieux.</p><a href="#contact" className="underlined-link">Faisons connaissance <Arrow /></a></div></div><div className="skill-row"><span className="skill-label">CE QUE J’APPORTE</span><div className="skill-pills"><span>React</span><span>Django</span><span>JavaScript</span><span>PHP & MySQL</span><span>HTML & CSS</span><span>Excel</span></div></div></section>

      <section className={activeSection === 'projets' ? 'projects-section' : 'view-hidden'} id="projets"><div className="section-wrap"><div className="projects-heading"><div><div className="section-index">02 / SÉLECTION DE PROJETS</div><h2>Du travail concret,<br/><em>des idées qui prennent vie.</em></h2></div><p>Des applications scolaires, de gestion et de suivi. Ouvrez un projet pour voir les écrans et les fonctionnalités réalisées.</p></div><div className="project-toolbar"><span>{String(visibleProjects.length).padStart(2, '0')} PROJETS</span><div className="filters" role="group" aria-label="Filtrer les projets">{categories.map(category => <button key={category} type="button" className={activeCategory === category ? 'filter active' : 'filter'} onClick={() => setActiveCategory(category)}>{category}</button>)}</div></div><div className="project-grid">{visibleProjects.map((project, index) => <article className="project-card" key={project.id} style={{ '--delay': `${index * 70}ms` }}><button type="button" className={`project-visual ${project.tone}`} onClick={() => setSelectedProject(project)} aria-label={`Voir ${project.title}`}><span className="project-number">{project.mark} <i>—</i> {project.year}</span><div className="project-illustration">{project.cover ? <img className="project-cover" src={project.cover} alt={`Aperçu : ${project.title}`} /> : <><span className="project-window"><span className="window-top"><i/><i/><i/></span><span className="window-body"><span className="window-sidebar"/><span className="window-main"><i/><i/><i/></span></span></span><span className="project-orb">{project.id === 1 ? 'G' : '✳'}</span></>}</div><span className="visual-open"><Arrow diagonal /></span></button><div className="project-info"><div><span className="project-category">{project.category} <i>·</i> {project.status}</span><h3>{project.title}</h3></div><button className="round-arrow" type="button" onClick={() => setSelectedProject(project)} aria-label={`Détails de ${project.title}`}><Arrow diagonal /></button></div><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div><div className="projects-note"><span className="note-star">✳</span><p><b>Du concret, écran après écran.</b><br/>Ouvrez une carte pour parcourir les captures d’écran et les détails de chaque application.</p></div></div></section>

      <section className={activeSection === 'contact' ? 'contact-section section-wrap' : 'view-hidden'} id="contact"><div className="contact-card"><div className="contact-left"><div className="section-index">03 / CONTACT</div><h2>Vous recrutez ?<br/><em>Parlons-en.</em></h2><p>Je suis ouvert aux opportunités en développement web. Contactez-moi pour parler d’un poste, d’un stage ou d’une collaboration.</p><a className="button button-light" href="#contact-form">Me contacter <Arrow diagonal /></a></div><div className="contact-right"><span className="contact-caption">UN MOT SUFFIT POUR COMMENCER</span><a href="mailto:randriamanana25@gmail.com" className="email-link">randriamanana25@gmail.com</a><a href="mailto:vincianceaurelien@gmail.com" className="email-link email-link-secondary">vincianceaurelien@gmail.com</a><a href="tel:0384055423" className="contact-phone">0384055423</a><button type="button" className="copy-button" onClick={copyEmail}>{copied ? 'Adresses copiees' : 'Copier les adresses e-mail'} <span>&#8599;</span></button><form id="contact-form" className="contact-form" onSubmit={sendContactMessage}><label>Votre nom<input name="name" type="text" autoComplete="name" required /></label><label>Votre e-mail<input name="email" type="email" autoComplete="email" required /></label><label>Votre message<textarea name="message" rows="3" required /></label><button className="contact-send" type="submit">Envoyer via Gmail <Arrow diagonal /></button></form><div className="contact-socials"><a href="https://github.com/vincianceaurelien-2005" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a></div></div><span className="contact-decoration">A<span>.</span></span></div></section>
    </main>

    <footer className="site-footer section-wrap" id="footer"><a className="footer-brand" href="#accueil">A<span>.</span></a><span>© {CURRENT_YEAR} RANDRIAMANANA Vinciance Aurelien · Développeur</span><a href="#accueil" className="back-top">Retour en haut ↑</a></footer>

    {selectedScreenshot && <div className="image-lightbox" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setSelectedScreenshot(null) }}><button type="button" className="lightbox-close" onClick={() => setSelectedScreenshot(null)} aria-label="Quitter">&#215;</button><img src={selectedScreenshot.src} alt={selectedScreenshot.label} /><p>{selectedScreenshot.label}</p><div className="lightbox-controls"><button type="button" onClick={() => { const images = selectedProject.screenshots; const index = images.findIndex(image => image.src === selectedScreenshot.src); setSelectedScreenshot(images[(index - 1 + images.length) % images.length]) }}>Pr&#233;c&#233;dent</button><button type="button" onClick={() => { const images = selectedProject.screenshots; const index = images.findIndex(image => image.src === selectedScreenshot.src); setSelectedScreenshot(images[(index + 1) % images.length]) }}>Suivant</button><button type="button" className="lightbox-quit" onClick={() => setSelectedScreenshot(null)}>Quitter</button></div></div>}
    {selectedProject && <div className="modal-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setSelectedProject(null) }}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button type="button" className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Fermer">×</button><span className="section-index">PROJET {selectedProject.mark} / {selectedProject.year}</span><h2 id="modal-title">{selectedProject.title}</h2><p>{selectedProject.description}</p><div className="modal-tags">{selectedProject.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{selectedProject.screenshots && <div className="modal-gallery">{selectedProject.screenshots.map(image => <figure key={image.src}><button type="button" className="gallery-image-button" onClick={() => setSelectedScreenshot(image)} aria-label={`Agrandir : ${image.label}`}><img src={image.src} alt={image.label} /></button><figcaption>{image.label}</figcaption></figure>)}</div>}<button type="button" className="button button-dark" onClick={() => setSelectedProject(null)}>Continuer à explorer <Arrow /></button></section></div>}
  </>
}

export default App
