import Arrow from './Arrow.jsx'

export default function About({activeSection}) {
  return (
    <section className={activeSection === 'apropos' ? 'about-section section-wrap' : 'view-hidden'} id="apropos"><div className="section-index">01 / À PROPOS</div><div className="about-layout"><h2>Mon parcours.<br/><em>Mes projets. Mon objectif.</em></h2><div className="about-copy"><p>&Eacute;tudiant &agrave; l'&Eacute;cole Nationale d'Informatique (ENI) de l'Universit&eacute; de Fianarantsoa, je me forme au d&eacute;veloppement d'applications web, du front-end au back-end.</p><p>Originaire de <a href="https://www.google.com/maps/search/?api=1&amp;query=Vondrozo%2C%20Atsimo-Atsinanana%2C%20Madagascar" target="_blank" rel="noreferrer">Vondrozo, dans la r&eacute;gion Atsimo-Atsinanana</a>, je m’int&eacute;resse au d&eacute;veloppement d’applications web utiles. Je cherche une opportunit&eacute; pour participer &agrave; des projets concrets, apprendre au sein d’une &eacute;quipe et y apporter mon s&eacute;rieux.</p><a href="#contact" className="underlined-link">Faisons connaissance <Arrow /></a></div></div><div className="skill-row"><span className="skill-label">CE QUE J’APPORTE</span><div className="skill-pills"><span>React</span><span>Django</span><span>JavaScript</span><span>PHP & MySQL</span><span>HTML & CSS</span><span>Excel</span></div></div></section>
  )
}
