import React, { useState } from "react";
import {
  ArrowRight,
  Clock,
  Rocket,
  MessageSquare,
  TrendingUp,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  Quote,
  Star,
  Check,
  Menu,
  X,
  Laptop,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { courses, testimonials } from "./catalog.js";
import "./IaPratiquePro.css";

const benefits = [
  {
    icon: Clock,
    title: "Gagner du temps",
    text: "Automatisez vos tâches répétitives et libérez plusieurs heures chaque semaine.",
  },
  {
    icon: Rocket,
    title: "Créer plus vite",
    text: "Produisez contenus, visuels et documents professionnels en quelques minutes.",
  },
  {
    icon: MessageSquare,
    title: "Mieux communiquer",
    text: "Des messages clairs et réguliers pour être visible auprès de vos clients.",
  },
  {
    icon: TrendingUp,
    title: "Développer ses projets",
    text: "Une méthode d'action concrète pour faire avancer votre activité chaque semaine.",
  },
];

export default function IaPratiquePro() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const heroImage =
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1280&q=80";

  return (
    <div className="ia-pro-wrapper">
      {/* HEADER / NAVIGATION */}
      <header className="ia-pro-header">
        <div className="ia-pro-container header-inner">
          <div className="logo-area">
            <span className="logo-badge">
              <Sparkles className="icon-sm" />
            </span>
            <span className="logo-text">IA PRATIQUE PRO</span>
          </div>

          <nav className={`main-nav ${mobileMenuOpen ? "open" : ""}`}>
            <a href="#benefices" onClick={() => setMobileMenuOpen(false)}>Bénéfices</a>
            <a href="#parcours" onClick={() => setMobileMenuOpen(false)}>Parcours</a>
            <a href="#formations" onClick={() => setMobileMenuOpen(false)}>Formations</a>
            <a href="#temoignages" onClick={() => setMobileMenuOpen(false)}>Témoignages</a>
            <a href="#tarifs" className="nav-btn-mobile" onClick={() => setMobileMenuOpen(false)}>
              Démarrer
            </a>
          </nav>

          <div className="header-actions">
            <a href="#tarifs" className="btn btn-primary btn-sm">
              Commencer <ArrowRight className="icon-xs" />
            </a>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="ia-pro-hero">
        <div className="ia-pro-container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles className="icon-xs text-brand" />
              <span>Formations pratiques — 100 % actionnables</span>
            </div>

            <h1 className="hero-title">
              Passez à l'action avec le numérique et l'intelligence artificielle.
            </h1>

            <p className="hero-subtitle">
              Développez vos projets, gagnez du temps, créez plus vite et vendez
              mieux grâce à des formations simples et immédiatement applicables.
            </p>

            <div className="hero-buttons">
              <a href="#tarifs" className="btn btn-primary btn-xl">
                Commencer ma formation
                <ArrowRight className="icon-sm" />
              </a>
              <a href="#formations" className="btn btn-outline btn-xl">
                Découvrir les formations
              </a>
            </div>

            <dl className="hero-stats">
              <div>
                <dt>+2 400</dt>
                <dd>apprenants formés</dd>
              </div>
              <div>
                <dt>6</dt>
                <dd>parcours sur mesure</dd>
              </div>
              <div>
                <dt>4,9/5</dt>
                <dd>taux de satisfaction</dd>
              </div>
            </dl>
          </div>

          <div className="hero-visual">
            <div className="hero-card-frame">
              <img
                src={heroImage}
                alt="Entrepreneur se formant au numérique et à l'intelligence artificielle"
                className="hero-img"
              />
              <div className="hero-floating-badge">
                <ShieldCheck className="icon-sm text-green" />
                <span>Certification & Méthode validée</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BÉNÉFICES */}
      <section id="benefices" className="section-padding bg-darker">
        <div className="ia-pro-container">
          <div className="section-header">
            <span className="section-tag">Valeur concrète</span>
            <h2>Ce que vous gagnez concrètement</h2>
            <p>
              Chaque module se termine par une action à appliquer immédiatement
              dans votre projet.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((b) => (
              <div key={b.title} className="card benefit-card">
                <div className="icon-bubble">
                  <b.icon className="icon-md" />
                </div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARCOURS CLAIR */}
      <section id="parcours" className="section-padding">
        <div className="ia-pro-container">
          <div className="section-header">
            <span className="section-tag">Progression</span>
            <h2>Deux parcours, une progression claire</h2>
            <p>
              Commencez par les fondations, puis passez à l'IA appliquée à vos
              projets.
            </p>
          </div>

          <div className="parcours-grid">
            <div className="card parcours-card">
              <div className="parcours-header">
                <div className="icon-bubble accent-bubble">
                  <GraduationCap className="icon-md" />
                </div>
                <span className="step-tag">Parcours 1</span>
              </div>
              <h3>Bases du numérique</h3>
              <p className="parcours-desc">
                Prenez en main les outils essentiels : organisation,
                collaboration, présence en ligne et sécurité numérique.
              </p>
              <ul className="points-list">
                <li>
                  <CheckCircle2 className="icon-xs text-green" /> Aucun prérequis
                  technique
                </li>
                <li>
                  <CheckCircle2 className="icon-xs text-green" /> Modules courts de 20
                  à 40 min
                </li>
                <li>
                  <CheckCircle2 className="icon-xs text-green" /> Fiches pratiques &
                  check-lists incluses
                </li>
              </ul>
              <a href="#formations" className="btn btn-outline btn-full mt-6">
                Voir le parcours <ChevronRight className="icon-xs" />
              </a>
            </div>

            <div className="card parcours-card featured">
              <div className="parcours-header">
                <div className="icon-bubble brand-bubble">
                  <Sparkles className="icon-md" />
                </div>
                <span className="step-tag brand">Parcours 2 (Recommandé)</span>
              </div>
              <h3>IA pratique pour les projets</h3>
              <p className="parcours-desc">
                Utilisez l'IA comme un coéquipier au quotidien : rédaction,
                création de visuels, analyse de marché et automatisations simples.
              </p>
              <ul className="points-list">
                <li>
                  <CheckCircle2 className="icon-xs text-green" /> 50 prompts testés &
                  prêts à l'emploi
                </li>
                <li>
                  <CheckCircle2 className="icon-xs text-green" /> Études de cas
                  concrètes étape par étape
                </li>
                <li>
                  <CheckCircle2 className="icon-xs text-green" /> Plan d'action
                  personnalisé sur 30 jours
                </li>
              </ul>
              <a href="#tarifs" className="btn btn-primary btn-full mt-6">
                Rejoindre ce parcours <ArrowRight className="icon-xs" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* APERÇU DES FORMATIONS */}
      <section id="formations" className="section-padding bg-darker">
        <div className="ia-pro-container">
          <div className="split-header">
            <div>
              <span className="section-tag">Catalogue</span>
              <h2>Aperçu des formations</h2>
              <p>Des formats immersifs, spécialement pensés pour les entrepreneurs.</p>
            </div>
            <a href="#tarifs" className="btn btn-outline">
              Découvrir les offres
            </a>
          </div>

          <div className="courses-grid">
            {courses.map((c) => (
              <div key={c.slug} className="card course-card">
                <div className="course-thumb">
                  <img src={c.image} alt={c.title} loading="lazy" />
                  <span className="badge-level">{c.level}</span>
                  <span className="badge-duration">{c.duration}</span>
                </div>
                <div className="course-content">
                  <h3>{c.title}</h3>
                  <p>{c.short}</p>
                  <button
                    onClick={() => setActiveModal(c)}
                    className="btn-link"
                  >
                    Voir le programme complet <ArrowRight className="icon-xs" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section id="temoignages" className="section-padding">
        <div className="ia-pro-container">
          <div className="section-header">
            <span className="section-tag">Avis clients</span>
            <h2>Ils sont passés à l'action</h2>
            <p>Retours d'expérience d'indépendants et d'entrepreneurs.</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.name} className="card testimonial-card">
                <Quote className="quote-icon" />
                <p className="testimonial-text">"{t.text}"</p>
                <div className="stars-row" aria-label="5 étoiles sur 5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star-icon" />
                  ))}
                </div>
                <div className="author-info">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION PRIX / TARIFS */}
      <section id="tarifs" className="section-padding bg-darker">
        <div className="ia-pro-container">
          <div className="section-header">
            <span className="section-tag">Tarifs clairs</span>
            <h2>Investissez dans vos compétences</h2>
            <p>Accès illimité à vie ou accompagnement individuel.</p>
          </div>

          <div className="pricing-grid">
            <div className="card price-card">
              <h3>Autonomie</h3>
              <p className="price-desc">Idéal pour progresser à votre propre rythme.</p>
              <div className="price-amount">
                <span className="currency">€</span>
                <span className="number">149</span>
                <span className="period">/accès à vie</span>
              </div>
              <ul className="points-list">
                <li><Check className="icon-xs text-green" /> Accès à l'ensemble des modules</li>
                <li><Check className="icon-xs text-green" /> Bibliothèque des 50+ prompts IA</li>
                <li><Check className="icon-xs text-green" /> Mises à jour gratuites à vie</li>
                <li><Check className="icon-xs text-green" /> Support par communauté privée</li>
              </ul>
              <button
                className="btn btn-outline btn-full mt-6"
                onClick={() => alert("Redirection vers la passerelle de paiement sécurisée...")}
              >
                Choisir la formule Autonomie
              </button>
            </div>

            <div className="card price-card highlight">
              <span className="popular-badge">Le plus populaire</span>
              <h3>Pro & Mentorat</h3>
              <p className="price-desc">Pour obtenir des résultats garantis en 30 jours.</p>
              <div className="price-amount">
                <span className="currency">€</span>
                <span className="number">349</span>
                <span className="period">/accès complet</span>
              </div>
              <ul className="points-list">
                <li><Check className="icon-xs text-green" /> Tout ce qui est inclus dans Autonomie</li>
                <li><Check className="icon-xs text-green" /> 2 sessions de coaching individuel (1h)</li>
                <li><Check className="icon-xs text-green" /> Audit personnalisé de vos prompts & projets</li>
                <li><Check className="icon-xs text-green" /> Support prioritaire WhatsApp / Email 7j/7</li>
              </ul>
              <button
                className="btn btn-primary btn-full mt-6"
                onClick={() => alert("Redirection vers la passerelle de paiement sécurisée...")}
              >
                Rejoindre le Mentorat Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BANNIÈRE FINALE CTA */}
      <section className="section-padding">
        <div className="ia-pro-container">
          <div className="cta-banner">
            <h2>Prêt à passer à l'action avec l'IA ?</h2>
            <p>
              Rejoignez plus de 2 400 professionnels qui gagnent des heures chaque
              semaine et transforment leur manière de travailler.
            </p>
            <div className="hero-buttons center">
              <a href="#tarifs" className="btn btn-primary btn-xl">
                Rejoindre la formation immédiatement
              </a>
              <a href="#formations" className="btn btn-outline btn-xl">
                Consulter les modules
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ia-pro-footer">
        <div className="ia-pro-container footer-inner">
          <div className="footer-brand">
            <strong>IA PRATIQUE PRO</strong>
            <p>© {new Date().getFullYear()} — Tous droits réservés.</p>
          </div>
          <div className="footer-links">
            <a href="#benefices">Bénéfices</a>
            <a href="#parcours">Parcours</a>
            <a href="#formations">Formations</a>
            <a href="#tarifs">Tarifs</a>
          </div>
        </div>
      </footer>

      {/* MODAL PROGRAMME SI DÉTAIL DEMANDÉ */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModal(null)}>
              <X />
            </button>
            <span className="section-tag">{activeModal.level} • {activeModal.duration}</span>
            <h3>{activeModal.title}</h3>
            <p className="modal-desc">{activeModal.short}</p>
            <div className="modal-body">
              <h4>Au programme :</h4>
              <ul>
                <li>Introduction et prise en main des outils</li>
                <li>Exercices pratiques en temps réel</li>
                <li>Mise en application directe sur votre activité</li>
                <li>Téléchargement des ressources et modèles</li>
              </ul>
            </div>
            <a href="#tarifs" className="btn btn-primary btn-full" onClick={() => setActiveModal(null)}>
              S'inscrire à cette formation
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

