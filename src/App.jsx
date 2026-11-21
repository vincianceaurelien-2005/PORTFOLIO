import { useMemo, useState } from 'react'

import './App.css'

import './dark-theme.css'

import profilePhoto from './assets/profi/profile-crop.png'

import projects, { categories } from './data/projects.js'

import Hero from './components/Hero.jsx'

import About from './components/About.jsx'

import Projects from './components/Projects.jsx'

import Contact from './components/Contact.jsx'

import Arrow from './components/Arrow.jsx'

const CURRENT_YEAR = new Date().getFullYear()







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

      <a className="brand" href="#accueil" onClick={closeMenu} aria-label="Accueil"><span className="brand-mark">A<span>.</span></span><span className="brand-name">RANDRIAMANANA<span>VINCIANCE AURELIEN &middot; D&Eacute;VELOPPEUR FULL STACK</span></span></a>

      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i/><i/></button>

      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navigation principale">

        <a href="#accueil" className={activeSection === 'accueil' ? 'nav-active' : undefined} aria-current={activeSection === 'accueil' ? 'page' : undefined} onClick={closeMenu}>Accueil</a><a href="#apropos" className={activeSection === 'apropos' ? 'nav-active' : undefined} aria-current={activeSection === 'apropos' ? 'page' : undefined} onClick={closeMenu}>&#192; propos</a><a href="#projets" className={activeSection === 'projets' ? 'nav-active' : undefined} aria-current={activeSection === 'projets' ? 'page' : undefined} onClick={closeMenu}>Projets</a><a href="#contact" className={activeSection === 'contact' ? 'nav-active' : undefined} aria-current={activeSection === 'contact' ? 'page' : undefined} onClick={closeMenu}>Contact</a>

        <a className="nav-cta" href="#contact" onClick={closeMenu}>Parlons de votre projet <Arrow diagonal /></a>

      </nav>

    </header>



    <main className="page-views" onClickCapture={handleSectionLink}>

      <Hero activeSection={activeSection} profilePhoto={profilePhoto} />



      <About activeSection={activeSection} />



      <Projects activeSection={activeSection} visibleProjects={visibleProjects} categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} setSelectedProject={setSelectedProject} />



      <Contact activeSection={activeSection} copied={copied} copyEmail={copyEmail} sendContactMessage={sendContactMessage} />

    </main>



    <footer className="site-footer section-wrap" id="footer"><a className="footer-brand" href="#accueil">A<span>.</span></a><span>&copy; {CURRENT_YEAR} &middot; D&eacute;veloppeur full stack</span><a href="#accueil" className="back-top">Retour en haut ↑</a></footer>



    {selectedScreenshot && <div className="image-lightbox" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setSelectedScreenshot(null) }}><button type="button" className="lightbox-close" onClick={() => setSelectedScreenshot(null)} aria-label="Quitter">&#215;</button><img src={selectedScreenshot.src} alt={selectedScreenshot.label} /><p>{selectedScreenshot.label}</p><div className="lightbox-controls"><button type="button" onClick={() => { const images = selectedProject.screenshots; const index = images.findIndex(image => image.src === selectedScreenshot.src); setSelectedScreenshot(images[(index - 1 + images.length) % images.length]) }}>Pr&#233;c&#233;dent</button><button type="button" onClick={() => { const images = selectedProject.screenshots; const index = images.findIndex(image => image.src === selectedScreenshot.src); setSelectedScreenshot(images[(index + 1) % images.length]) }}>Suivant</button><button type="button" className="lightbox-quit" onClick={() => setSelectedScreenshot(null)}>Quitter</button></div></div>}

    {selectedProject && <div className="modal-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setSelectedProject(null) }}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button type="button" className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Fermer">×</button><span className="section-index">PROJET {selectedProject.mark} / {selectedProject.year}</span><h2 id="modal-title">{selectedProject.title}</h2><p>{selectedProject.description}</p>{selectedProject.problem && <p><b>Probl?me :</b> {selectedProject.problem}</p>}{selectedProject.role && <p><b>Mon r?le :</b> {selectedProject.role}</p>}{selectedProject.result && <p><b>R?sultat :</b> {selectedProject.result}</p>}{selectedProject.repoUrl && <div className="hero-actions"><a className="button button-dark" href={selectedProject.repoUrl} target="_blank" rel="noreferrer">Voir sur GitHub <Arrow diagonal /></a></div>}<div className="modal-tags">{selectedProject.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{selectedProject.screenshots && <div className="modal-gallery">{selectedProject.screenshots.map(image => <figure key={image.src}><button type="button" className="gallery-image-button" onClick={() => setSelectedScreenshot(image)} aria-label={`Agrandir : ${image.label}`}><img src={image.src} alt={image.label} /></button><figcaption>{image.label}</figcaption></figure>)}</div>}<button type="button" className="button button-dark" onClick={() => setSelectedProject(null)}>Continuer à explorer <Arrow /></button></section></div>}

  </>

}



export default App




