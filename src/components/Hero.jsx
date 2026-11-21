import Arrow from './Arrow.jsx'

export default function Hero({activeSection, profilePhoto}) {
  return (
    <section className={activeSection === 'accueil' ? 'hero section-wrap' : 'view-hidden'} id="accueil">
        <div className="hero-copy"><div className="availability"><span/> EN RECHERCHE D’UN POSTE</div><p className="hero-overline">D&Eacute;VELOPPEUR FULL STACK &middot; FRONT-END &amp; BACK-END</p><h1>D&eacute;veloppeur full stack,<br/>je con&ccedil;ois des applications<br/><em>web utiles.</em></h1><p className="hero-intro">&Eacute;tudiant en informatique &agrave; l'ENI de l'Universit&eacute; de Fianarantsoa, je d&eacute;veloppe des applications web compl&egrave;tes, de l'interface au back-end, avec React, Django, PHP et MySQL. Je transforme les besoins en outils clairs, structur&eacute;s et utiles.</p><div className="hero-actions"><a className="button button-dark" href="#projets">Découvrir mes projets <Arrow diagonal /></a><a className="text-link" href="#contact">Me contacter <Arrow /></a></div><div className="hero-meta"><span><b>01</b> Interface</span><span><b>02</b> Fonctionnalités</span><span><b>03</b> Données</span></div></div>
        <div className="hero-art" aria-label="Portrait du d?veloppeur" role="img"><div className="art-grid"/><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="floating-label label-top"><span className="label-dot"/> Idée en mouvement</div><div className="portrait-card"><img className="hero-portrait" src={profilePhoto} alt="Portrait du d?veloppeur" /></div><div className="floating-label label-bottom"><span className="sparkle">✳</span> Design + code</div><div className="hero-stamp">MADE<br/>WITH<br/><b>CARE</b></div></div>
        <a className="scroll-cue" href="#apropos"><span className="scroll-line"/>Défiler pour découvrir</a>
      </section>
  )
}
