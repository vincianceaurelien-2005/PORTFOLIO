import Arrow from './Arrow.jsx'



export default function Projects({activeSection, visibleProjects, categories, activeCategory, setActiveCategory, setSelectedProject}) {

  return (

    <section className={activeSection === 'projets' ? 'projects-section' : 'view-hidden'} id="projets"><div className="section-wrap"><div className="projects-heading"><div><div className="section-index">02 / SÉLECTION DE PROJETS</div><h2>Du travail concret,<br/><em>des idées qui prennent vie.</em></h2></div><p>Des applications scolaires, de gestion et de suivi. Ouvrez un projet pour voir les écrans et les fonctionnalités réalisées.</p></div><div className="project-toolbar"><span>{String(visibleProjects.length).padStart(2, '0')} PROJETS</span><div className="filters" role="group" aria-label="Filtrer les projets">{categories.map(category => <button key={category} type="button" className={activeCategory === category ? 'filter active' : 'filter'} onClick={() => setActiveCategory(category)}>{category}</button>)}</div></div><div className="project-grid">{visibleProjects.map((project, index) => <article className="project-card" key={project.id} style={{ '--delay': `${index * 70}ms` }}><button type="button" className={`project-visual ${project.tone}`} onClick={() => setSelectedProject(project)} aria-label={`Voir ${project.title}`}><span className="project-number">{project.mark}</span><div className="project-illustration">{project.cover ? <img className="project-cover" src={project.cover} alt={`Aperçu : ${project.title}`} /> : <><span className="project-window"><span className="window-top"><i/><i/><i/></span><span className="window-body"><span className="window-sidebar"/><span className="window-main"><i/><i/><i/></span></span></span><span className="project-orb">{project.id === 1 ? 'G' : '✳'}</span></>}</div><span className="visual-open"><Arrow diagonal /></span></button><div className="project-info"><div><span className="project-category">{project.category} <i>·</i> {project.status}</span><h3>{project.title}</h3><p className="project-description">{project.description}</p></div><button className="round-arrow" type="button" onClick={() => setSelectedProject(project)} aria-label={`Détails de ${project.title}`}><Arrow diagonal /></button></div><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{project.repoUrl && <a className="project-github" href={project.repoUrl} target="_blank" rel="noreferrer">Voir le dépôt GitHub <Arrow diagonal /></a>}</article>)}</div><div className="projects-note"><span className="note-star">✳</span><p><b>Du concret, écran après écran.</b><br/>Ouvrez une carte pour parcourir les captures d’écran et les détails de chaque application.</p></div></div></section>

  )

}



