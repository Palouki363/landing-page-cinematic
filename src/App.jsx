import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  HandHeart,
  HeartHandshake,
  Leaf,
  Mail,
  Phone,
  ShieldCheck,
  X,
} from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const navItems = [
  { label: 'Mission', href: '#mission' },
  { label: 'Nos actions', href: '#actions' },
  { label: 'Programmes', href: '#programmes' },
  { label: 'Parrainage', href: '#parrainage' },
  { label: 'Contact', href: '#contact' },
]

const values = [
  'Non-discrimination',
  'Laïcité',
  'Neutralité',
  'Confidentialité',
  'Autonomie',
  'Dialogue interculturel',
  'Accueil',
  'Écoute',
]

const actions = [
  {
    title: 'Accueil et orientation',
    description: 'L’association organise des permanences d’accueil, d’écoute, d’information et d’orientation.',
    items: [
      'Comprendre leur situation',
      'Identifier leurs besoins',
      'Trouver les structures compétentes',
      'Être orientées vers les bons interlocuteurs',
      'Gagner en autonomie dans leurs démarches',
    ],
    note: 'L’association ne garantit pas l’obtention d’un droit, d’un document, d’une aide ou d’une décision administrative favorable.',
  },
  {
    title: 'Accompagnement administratif',
    description: 'L’association accompagne les bénéficiaires dans des démarches administratives simples, notamment pour :',
    items: [
      'Comprendre un courrier',
      'Remplir un formulaire',
      'Créer un compte en ligne',
      'Préparer une liste de pièces justificatives',
      'Prendre un rendez-vous',
      'Utiliser une plateforme administrative',
      'Scanner, enregistrer ou envoyer un document',
    ],
    note: 'L’association ne fournit pas de conseil juridique spécialisé. Pour les situations complexes, contentieuses, urgentes ou sensibles, elle oriente les personnes vers les administrations, associations spécialisées, travailleurs sociaux, avocats ou organismes compétents.',
  },
  {
    title: 'Cours de français',
    description: 'L’association organise des cours et des ateliers de français, qui peuvent porter sur :',
    items: [
      'Le français oral et écrit',
      'Le vocabulaire de la vie quotidienne',
      'Le français administratif et professionnel',
      'La préparation aux démarches courantes',
      'La compréhension de documents simples',
    ],
    note: 'Les participants s’engagent à respecter les horaires, les intervenants, les autres apprenants et le matériel mis à disposition.',
  },
  {
    title: 'Ateliers numériques',
    description: 'L’association organise des ateliers d’initiation numérique autour de :',
    items: [
      'L’utilisation d’un ordinateur et d’un smartphone',
      'La navigation sur Internet',
      'La création et l’utilisation d’une adresse e-mail',
      'La gestion des fichiers',
      'Les démarches administratives en ligne',
      'La sécurité numérique et l’usage responsable des outils',
    ],
    note: 'Les participants sont invités à pratiquer directement afin de gagner en autonomie.',
  },
  {
    title: 'Activités culturelles, artistiques et touristiques',
    description: 'L’association organise et soutient des expériences de découverte et de rencontre :',
    items: [
      'Sorties culturelles, visites de ville et sorties touristiques',
      'Rencontres artistiques, expositions et événements culturels',
      'Promotion d’artistes et d’écrivains',
      'Ateliers interculturels et découvertes du patrimoine',
    ],
    note: 'Les participants respectent les consignes de sécurité, les horaires, les lieux visités, les guides, les artistes et les autres participants. Certaines activités peuvent nécessiter une inscription préalable ou une participation financière.',
  },
  {
    title: 'Développement solidaire',
    description: 'En France, en Afrique et ailleurs, l’association peut accompagner, initier ou soutenir des projets de développement local.',
    items: [
      'Alternatives locales, formation et entrepreneuriat',
      'Autonomie économique et sociale',
      'Éducation, emploi, culture et projets de développement',
      'Programmes de parrainage éducatif et professionnel pour les enfants et les jeunes vulnérables',
      'Sélection des bénéficiaires et des parrains',
      'Utilisation et suivi des fonds de parrainage',
      'Suivi scolaire, éducatif et professionnel',
      'Transparence et comptes rendus aux parrains et donateurs',
    ],
    note: 'Les projets soutenus contribuent au développement local, à l’éducation, à la formation, à la culture, à l’emploi ou à l’entrepreneuriat.',
  },
  {
    title: 'Partenariats',
    description: 'Les partenariats doivent être compatibles avec l’objet et les valeurs de l’association. Ils peuvent réunir :',
    items: [
      'Collectivités territoriales et administrations',
      'Associations et établissements scolaires',
      'Organismes de formation et structures sociales',
      'Structures culturelles, artistes et entreprises',
      'Acteurs touristiques et organisations en France ou à l’étranger',
    ],
    note: 'Tout partenariat important doit être validé par le Bureau ou le Conseil d’administration.',
  },
]

const programs = [
  {
    title: 'Accueil et orientation',
    objective: 'Aider chaque personne à clarifier sa situation, à identifier ses besoins et à repérer les interlocuteurs compétents.',
    actions: [
      'Mettre en place des permanences d’accueil et d’écoute, sur rendez-vous ou selon les disponibilités.',
      'Présenter les services et dispositifs de droit commun à partir d’informations fiables.',
      'Identifier les besoins prioritaires et proposer une orientation adaptée.',
      'Assurer un suivi minimal des orientations, avec l’accord de la personne.',
    ],
    indicators: [
      'Nombre de permanences réalisées',
      'Nombre de personnes accueillies',
      'Nombre et types d’orientations effectuées',
      'Retours des bénéficiaires sur la clarté de l’accompagnement',
    ],
  },
  {
    title: 'Accompagnement administratif',
    objective: 'Faciliter la compréhension et l’accomplissement de démarches administratives courantes.',
    actions: [
      'Aider à comprendre un courrier et à repérer les étapes suivantes.',
      'Aider à remplir des formulaires simples et à préparer une liste de justificatifs.',
      'Accompagner la création d’un compte, la prise de rendez-vous ou l’utilisation d’une plateforme.',
      'Aider à scanner, enregistrer, classer ou transmettre des documents.',
    ],
    indicators: [
      'Nombre de séances d’accompagnement',
      'Nombre de démarches préparées',
      'Part des personnes déclarant mieux comprendre leur démarche',
    ],
  },
  {
    title: 'Cours de français',
    objective: 'Développer les compétences linguistiques nécessaires à la vie quotidienne, administrative et professionnelle.',
    actions: [
      'Organiser des ateliers de français oral et écrit adaptés aux niveaux des participants.',
      'Travailler le vocabulaire de la vie courante et la compréhension de documents simples.',
      'Proposer des mises en situation : rendez-vous, transports, échanges avec une école ou un employeur.',
      'Aborder le français administratif et professionnel selon les besoins identifiés.',
    ],
    indicators: [
      'Nombre de séances organisées',
      'Nombre d’inscriptions et de participants réguliers',
      'Assiduité',
      'Auto-évaluation des progrès en début et fin de parcours',
    ],
  },
  {
    title: 'Initiation et autonomie numériques',
    objective: 'Renforcer la capacité des bénéficiaires à utiliser les outils numériques de façon pratique et sécurisée.',
    actions: [
      'Découvrir l’ordinateur, le smartphone et les fonctions essentielles.',
      'Créer et utiliser une adresse e-mail, gérer les pièces jointes et les fichiers.',
      'S’exercer à rechercher une information et à réaliser des démarches en ligne.',
      'Sensibiliser aux mots de passe, aux données personnelles, aux arnaques et aux usages responsables.',
    ],
    indicators: [
      'Nombre d’ateliers et de participants',
      'Nombre de personnes capables d’effectuer seules des tâches ciblées',
      'Progression observée à l’aide d’une grille simple',
    ],
  },
  {
    title: 'Culture, arts, patrimoine et tourisme de proximité',
    objective: 'Favoriser les échanges, la découverte du territoire et la participation à la vie culturelle locale.',
    actions: [
      'Organiser des visites de ville, du patrimoine, de musées ou d’expositions.',
      'Proposer des rencontres avec des artistes, écrivains ou acteurs culturels.',
      'Mettre en place des ateliers interculturels et des temps de partage.',
      'Informer les participants en amont des conditions d’inscription, de transport et de participation financière éventuelle.',
    ],
    indicators: [
      'Nombre d’activités réalisées',
      'Nombre de participants',
      'Diversité des partenaires culturels',
      'Retours des participants',
    ],
  },
  {
    title: 'Développement solidaire et projets éducatifs ou professionnels',
    objective: 'Faire émerger des initiatives contribuant à l’éducation, à la formation, à l’emploi et à l’autonomie économique et sociale.',
    actions: [
      'Recenser les besoins et les initiatives locales, en priorité sur le territoire d’intervention.',
      'Organiser des temps d’information sur la formation, l’entrepreneuriat et les ressources disponibles.',
      'Étudier la faisabilité de projets solidaires en France et, dans un second temps, à l’international.',
      'Avant tout programme de parrainage, définir les critères de sélection, le suivi des bénéficiaires, la traçabilité des fonds, la protection des mineurs et le compte rendu aux parrains et donateurs.',
    ],
    indicators: [
      'Nombre de projets étudiés',
      'Nombre de partenaires mobilisés',
      'Fiches-projets et budgets élaborés',
      'Existence de règles écrites de suivi et de transparence pour tout dispositif de parrainage',
    ],
  },
  {
    title: 'Partenariats, communication et structuration associative',
    objective: 'Consolider les moyens humains, matériels et financiers nécessaires au développement progressif des activités.',
    actions: [
      'Créer un répertoire de partenaires et présenter le projet associatif.',
      'Solliciter les collectivités, structures sociales, organismes de formation, associations, acteurs culturels et entreprises.',
      'Formaliser les coopérations importantes par écrit et faire valider les engagements selon les règles statutaires.',
      'Mettre en place des outils simples de suivi des activités, de gestion des inscriptions et de communication.',
    ],
    indicators: [
      'Nombre de partenaires contactés et actifs',
      'Nombre de réunions ou conventions',
      'Nombre de bénévoles mobilisés',
      'Outils de suivi mis en place',
    ],
  },
]

const programObjectives = [
  'Faciliter l’accès à l’information et aux services par l’accueil, l’écoute et l’orientation.',
  'Renforcer l’autonomie administrative dans les démarches simples et l’usage des services en ligne.',
  'Favoriser l’apprentissage du français dans la vie quotidienne, les démarches et le parcours professionnel.',
  'Réduire la fracture numérique par une pratique accompagnée et une sensibilisation à la sécurité en ligne.',
  'Favoriser la participation culturelle et citoyenne selon les moyens disponibles.',
  'Développer des initiatives solidaires éducatives, professionnelles ou économiques, d’abord localement.',
  'Structurer un réseau de partenaires durable sur le territoire.',
]

const programCalendar = [
  {
    period: 'Septembre–octobre 2027',
    priority: 'Lancement et structuration',
    actions: 'Valider les priorités, mobiliser les bénévoles, repérer les lieux et ressources, contacter les partenaires et ouvrir les premières permanences.',
    outcome: 'Programme de démarrage validé; répertoire initial des partenaires.',
  },
  {
    period: 'Novembre–décembre 2027',
    priority: 'Premières activités et diagnostic',
    actions: 'Démarrer l’accueil-orientation, recueillir les besoins et lancer des ateliers pilotes de français et de numérique selon les moyens disponibles.',
    outcome: 'Premiers bénéficiaires accueillis; bilan de lancement.',
  },
  {
    period: 'Janvier–mars 2028',
    priority: 'Consolidation des ateliers',
    actions: 'Poursuivre les permanences, stabiliser les groupes, mettre en place les outils de suivi et réaliser une première activité culturelle.',
    outcome: 'Activités régulières; tableau de suivi opérationnel.',
  },
  {
    period: 'Avril–juin 2028',
    priority: 'Ouverture partenariale',
    actions: 'Développer les liens avec les structures sociales et culturelles, organiser une rencontre partenariale et des sorties de proximité.',
    outcome: 'Partenariats engagés; bilan intermédiaire.',
  },
  {
    period: 'Juillet–août 2028',
    priority: 'Maintien du lien et préparation',
    actions: 'Adapter le rythme aux disponibilités estivales, maintenir l’information et préparer la reprise de septembre.',
    outcome: 'Calendrier de reprise préparé.',
  },
  {
    period: 'Septembre–octobre 2028',
    priority: 'Évaluation et projection',
    actions: 'Évaluer les résultats, recueillir les retours, établir les bilans d’activité et financier, définir les priorités suivantes.',
    outcome: 'Rapport annuel; programme et budget prévisionnels suivants.',
  },
]

const programTargets = [
  { domain: 'Accueil et orientation', target: '30 à 50 personnes accueillies ou orientées' },
  { domain: 'Accompagnement administratif', target: '20 à 40 séances ou accompagnements, selon les besoins' },
  { domain: 'Français', target: '1 atelier hebdomadaire pilote si l’équipe et les locaux le permettent' },
  { domain: 'Numérique', target: '1 atelier toutes les deux semaines au démarrage, avec évolution selon la demande' },
  { domain: 'Culture', target: '2 à 4 sorties ou rencontres sur la période' },
  { domain: 'Partenariats', target: '5 à 10 structures contactées; objectif de 2 à 5 coopérations actives' },
  { domain: 'Évaluation', target: '1 bilan intermédiaire et 1 rapport annuel d’activité' },
]

const programOrganization = [
  { role: 'Bureau', responsibility: 'Coordination générale, suivi du programme, validation des orientations et préparation des décisions.' },
  { role: 'Conseil d’administration', responsibility: 'Examen des projets structurants, partenariats importants, budget et bilans, selon les statuts.' },
  { role: 'Responsables d’activités', responsibility: 'Préparation des séances, accueil, suivi des présences et remontée des besoins.' },
  { role: 'Bénévoles et intervenants', responsibility: 'Contribution aux activités selon leurs compétences, disponibilités et règles de fonctionnement.' },
  { role: 'Partenaires', responsibility: 'Appui humain, matériel, technique ou financier défini pour chaque coopération.' },
]

const programExpenses = [
  'Frais administratifs et fonctionnement : assurance, fournitures, frais bancaires, documentation.',
  'Accueil et accompagnement : impressions, consommables, supports d’information.',
  'Français et pédagogie : matériel pédagogique, photocopies, ressources.',
  'Ateliers numériques : équipement, maintenance, connexion, accessoires.',
  'Culture et sorties : transports, entrées, intervenants, assurance complémentaire si nécessaire.',
  'Communication : flyers, affiches, site ou outils numériques.',
  'Coordination et déplacements : frais autorisés et justifiés liés aux activités.',
  'Développement de projets solidaires : études, réunions, suivi et évaluation.',
  'Imprévus et réserve : à déterminer selon les règles de gestion de l’association.',
]

const programResources = [
  'Cotisations des membres',
  'Dons de particuliers ou d’entreprises et mécénat',
  'Subventions publiques des collectivités et dispositifs adaptés',
  'Fondations et appels à projets, selon l’éligibilité',
  'Contributions aux activités, uniquement lorsque prévues et annoncées',
  'Autres ressources à préciser',
]

const programMonitoring = [
  'Suivi continu par feuilles de présence adaptées, fiches d’activité et relevé des dépenses.',
  'Bilan intermédiaire au printemps 2028 sur la participation, les besoins, les partenariats et le budget.',
  'Bilan annuel des actions, résultats observés, difficultés, dépenses et ressources.',
  'Amélioration continue à partir des retours des bénéficiaires, bénévoles et partenaires.',
]

const programEthics = [
  'L’accompagnement administratif est de premier niveau; l’association ne garantit pas l’obtention d’un droit, document, aide ou décision favorable.',
  'Aucun conseil juridique spécialisé n’est fourni. Les situations complexes, contentieuses, urgentes ou sensibles sont orientées vers les services ou professionnels compétents.',
  'Les données personnelles sont collectées uniquement si nécessaire, avec attention à la confidentialité, à la sécurité et aux règles applicables.',
  'Les activités dépendent des moyens disponibles, des compétences des intervenants, des conditions d’accueil et des exigences de sécurité.',
  'Les participations financières éventuelles sont annoncées à l’avance; recettes et dépenses sont suivies et justifiées.',
  'Tout parrainage de mineurs ou de personnes vulnérables nécessite des règles écrites de sélection, protection, suivi, transparence et traçabilité avant son lancement.',
]

function calculateBudgetTotal(amounts) {
  const enteredAmounts = amounts.filter((amount) => amount !== '').map(Number)
  if (!enteredAmounts.length) return null

  return enteredAmounts.reduce((total, amount) => total + amount, 0)
}

function formatEuro(amount) {
  return amount.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

const pillars = [
  {
    icon: HandHeart,
    title: 'Accueil humain',
    text: 'Une première étape essentielle : accueillir sans jugement, avec respect, dignité et écoute active.',
    chip: 'écoute',
  },
  {
    icon: HeartHandshake,
    title: 'Accompagnement',
    text: 'Des parcours individualisés, des repères clairs et un soutien concret pour avancer avec sécurité.',
    chip: 'confiance',
  },
  {
    icon: Leaf,
    title: 'Éducation & avenir',
    text: 'Nous investissons dans les enfants et les jeunes pour leur offrir un avenir plus juste et plus ouvert.',
    chip: 'avenir',
  },
]

const steps = [
  {
    number: '01',
    title: 'Comprendre',
    text: 'Nous identifions les besoins réels des personnes et des familles pour proposer une aide adaptée.',
  },
  {
    number: '02',
    title: 'Accompagner',
    text: 'Nous mobilisons les bons interlocuteurs, le bon cadre et les bonnes relations pour sécuriser le parcours.',
  },
  {
    number: '03',
    title: 'Faire grandir',
    text: 'Chaque parcours devient une pierre d’orientation pour construire une inclusion durable et humaine.',
  },
]

const HELLOASSO_DONATION_URL =
  'https://www.helloasso.com/associations/passerelles-d-avenir/formulaires/1?_gl=1*1xgf3js*_gcl_aw*R0NMLjE3OTMxMzU5MTQuQ2p3S0NBandsNEhYQmhBakVpd0FIbHBXaEFoc0NQZEY0cVNrdW1Uak0zQ01HemM2am8yNjFfUy1wQmJob3UtOExrNEZqV29vYmMwTHd4b0MtejRRQXZEX0J3RQ..*_gcl_au*MTg4MjY0Nzg1Ny4xNzkzMTM1OTE0Li0uLS4xNzkzMTM2MzQ0LjE3MDU2OTA1NzEuMTc5MzEzNjM0NS4xNzkzMTM3Mjky'
const HELLOASSO_EMBED_URL =
  'https://www.helloasso.com/associations/passerelles-d-avenir/formulaires/1/widget'

const sponsorshipFormats = [
  'Scolaire individuel',
  'Scolaire collectif',
  'Formation professionnelle individuelle',
  'Formation professionnelle collective',
  'Santé et prévention',
  'Aide alimentaire individuelle',
  'Équipement individuel',
  'Projet d’autonomisation individuel',
]

const sponsorProfiles = ['Particulier', 'Famille', 'Entreprise', 'Association', 'Fondation', 'Groupe']

const sponsorshipFrequencies = ['Mensuelle', 'Trimestrielle', 'Semestrielle', 'Annuelle', 'Ponctuelle']

const sponsorshipGuarantees = [
  'Un référent clairement identifié pour chaque parrainage',
  'Une relation encadrée par l’association et la structure locale ou le référent',
  'La protection des données personnelles et des images',
  'Un suivi financier transparent et traçable',
  'Un rapport régulier sur l’utilisation de votre contribution',
  'Une procédure de signalement en cas de difficulté',
]

const sponsorshipSteps = [
  { number: '01', title: 'Prenez contact', text: 'Écrivez-nous ou appelez Passerelles d’Avenir.' },
  { number: '02', title: 'Échangeons', text: 'Parlons de vos souhaits et de vos possibilités.' },
  { number: '03', title: 'Découvrez un projet', text: 'Un bénéficiaire ou un projet vous est présenté.' },
  { number: '04', title: 'Signez ensemble', text: 'Le dossier de parrainage est complété et signé ensemble.' },
]

const sponsorshipJourney = ['Identifier', 'Écouter', 'Évaluer', 'Parrainer', 'Accompagner', 'Suivre', 'Autonomiser']

function App() {
  const rootRef = useRef(null)
  const actionsRef = useRef(null)
  const programsRef = useRef(null)
  const [actionsOpen, setActionsOpen] = useState(false)
  const [activeAction, setActiveAction] = useState(0)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [selectedSponsorshipFormats, setSelectedSponsorshipFormats] = useState([])
  const [selectedSponsorshipFrequencies, setSelectedSponsorshipFrequencies] = useState([])
  const [selectedSponsorProfiles, setSelectedSponsorProfiles] = useState([])
  const [expenseAmounts, setExpenseAmounts] = useState(() => programExpenses.map(() => ''))
  const [resourceAmounts, setResourceAmounts] = useState(() => programResources.map(() => ''))
  const totalExpenses = calculateBudgetTotal(expenseAmounts)
  const totalResources = calculateBudgetTotal(resourceAmounts)
  const forecastBalance = totalExpenses !== null && totalResources !== null
    ? totalResources - totalExpenses
    : null

  const handleActionsClick = (event) => {
    if (!actionsOpen) {
      event.preventDefault()
      setProgramsOpen(false)
      setActionsOpen(true)
    }
  }

  const handleProgramsClick = (event) => {
    if (!programsOpen) {
      event.preventDefault()
      setActionsOpen(false)
      setProgramsOpen(true)
    }
  }

  const showPreviousAction = () => {
    setActiveAction((current) => (current - 1 + actions.length) % actions.length)
  }

  const showNextAction = () => {
    setActiveAction((current) => (current + 1) % actions.length)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-kicker, .hero-title, .hero-subtitle, .hero-actions, .metrics-row', {
        y: 32,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
      })

      gsap.from('.pillar-card', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pillars',
          start: 'top 78%',
        },
      })

      gsap.from('.step-card', {
        y: 55,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.steps',
          start: 'top 76%',
        },
      })

      gsap.from('.impact-card', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.commitments',
          start: 'top 76%',
        },
      })

      gsap.to('.orb', {
        y: -18,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'sine.inOut',
      })

      gsap.to('.hero-visual', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (actionsOpen) {
      actionsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [actionsOpen])

  useEffect(() => {
    if (programsOpen) {
      programsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [programsOpen])

  useEffect(() => {
    const handleWidgetMessage = (e) => {
      if (!e.data) return
      const dataHeight = e.data.height
      const haWidgetElement = document.getElementById('haWidget')
      if (haWidgetElement && dataHeight && dataHeight > parseFloat(haWidgetElement.height || 0)) {
        haWidgetElement.height = `${dataHeight}px`
      }
    }

    window.addEventListener('message', handleWidgetMessage)
    return () => {
      window.removeEventListener('message', handleWidgetMessage)
    }
  }, [])

  return (
    <div className="page-shell" ref={rootRef}>
      <div className="noise" aria-hidden="true" />

      <header className="nav-shell">
        <nav className="nav-inner">
          <div className="brand-lockup">
            <img className="brand-logo" src="/logo-passerelles-avenir.png" alt="" />
            <span>Passerelles d’Avenir</span>
          </div>

          <div className="nav-links">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={href === '#actions' ? handleActionsClick : href === '#programmes' ? handleProgramsClick : undefined}
              >
                {label}
              </a>
            ))}
          </div>

          <a className="nav-cta" href="#rejoindre">
            Rejoindre l’association
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="mission">
          <div className="hero-visual hero-background">
            <img
              className="hero-background-image"
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2200&q=90"
              alt="Personnes réunies autour d’une table lors d’un échange collectif."
            />
            <div className="hero-background-copy">
              <p className="hero-kicker">Passerelles d’Avenir</p>
              <h1 className="hero-background-title">Accueillir aujourd’hui. Construire l’avenir ensemble.</h1>
              <p className="hero-background-subtitle">
                Accueil, orientation et autonomie pour les personnes migrantes en France, parrainage des enfants et des jeunes en situation de vulnérabilité, solidarité et coopération internationales.
              </p>
            </div>
          </div>
          <div className="hero-actions hero-visual-actions">
            <a
              className="secondary-button"
              href="#actions"
              onClick={handleActionsClick}
              aria-expanded={actionsOpen}
              aria-controls="actions"
            >
              Découvrir nos actions
            </a>
            <a className="primary-button" href="#rejoindre">
              Rejoindre l’association
              <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#parrainage">Devenir parrain ou marraine</a>
            <a className="tertiary-button" href="#engager">Faire un don</a>
          </div>
        </section>

        <section className="values-marquee" aria-label="Les valeurs de Passerelles d’Avenir">
          <div className="marquee-track">
            {[false, true].map((isDuplicate) => (
              <div className="marquee-group" aria-hidden={isDuplicate || undefined} key={String(isDuplicate)}>
                {values.map((value, index) => (
                  <span className="marquee-item" key={value}>
                    {value}
                    {index < values.length - 1 && <span className="marquee-separator" aria-hidden="true" />}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section
          className="actions-section"
          id="actions"
          ref={actionsRef}
          aria-labelledby="actions-heading"
          hidden={!actionsOpen}
        >
          <div className="actions-heading-row">
            <div>
              <p className="eyebrow">Nos engagements sur le terrain</p>
              <h2 id="actions-heading">Des actions concrètes, au plus près des besoins.</h2>
            </div>
            <button className="icon-button" type="button" onClick={() => setActionsOpen(false)} aria-label="Fermer les actions">
              <X size={20} />
            </button>
          </div>

          <div className="actions-carousel" role="region" aria-roledescription="carrousel" aria-label="Les sept actions de l’association" aria-live="polite">
            <div
              className="action-track"
              style={{
                width: `${actions.length * 100}%`,
                transform: `translateX(-${(activeAction * 100) / actions.length}%)`,
              }}
            >
              {actions.map(({ title, description, items, note }, index) => (
                <article
                  className="action-slide"
                  key={title}
                  aria-hidden={index !== activeAction}
                  aria-roledescription="diapositive"
                  aria-label={`Action ${index + 1} sur ${actions.length}`}
                >
                  <div className="action-slide-heading">
                    <span className="action-count">Action {String(index + 1).padStart(2, '0')}</span>
                    <h3>{title}</h3>
                  </div>
                  <p className="action-description">{description}</p>
                  <ul className="action-list">
                    {items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <p className="action-note">{note}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="actions-controls">
            <button className="icon-button" type="button" onClick={showPreviousAction} aria-label="Action précédente">
              <ChevronLeft size={20} />
            </button>
            <div className="action-pagination" aria-label={`Action ${activeAction + 1} sur ${actions.length}`}>
              {actions.map(({ title }, index) => (
                <button
                  className={`action-dot ${index === activeAction ? 'is-active' : ''}`}
                  key={title}
                  type="button"
                  onClick={() => setActiveAction(index)}
                  aria-label={`Afficher l’action ${index + 1} : ${title}`}
                  aria-current={index === activeAction ? 'step' : undefined}
                />
              ))}
            </div>
            <span className="action-position">{String(activeAction + 1).padStart(2, '0')} / {String(actions.length).padStart(2, '0')}</span>
            <button className="icon-button" type="button" onClick={showNextAction} aria-label="Action suivante">
              <ChevronRight size={20} />
            </button>
          </div>
        </section>

        <section
          className="actions-section program-document"
          id="programmes"
          ref={programsRef}
          aria-labelledby="programs-heading"
          hidden={!programsOpen}
        >
          <div className="program-document-heading">
            <div>
              <p className="eyebrow">Programme annuel d’activités</p>
              <h2 id="programs-heading">2027–2028</h2>
              <p className="program-document-lead">Accueillir · Orienter · Former · Accompagner vers l’autonomie</p>
            </div>
            <button className="icon-button" type="button" onClick={() => setProgramsOpen(false)} aria-label="Fermer les programmes">
              <X size={20} />
            </button>
          </div>

          <div className="program-document-meta">
            <span><strong>Territoire prioritaire</strong> Rennes et environs</span>
            <span><strong>Période</strong> 2027–2028</span>
            <span><strong>Cadre</strong> Phase de démarrage, montée en charge progressive</span>
          </div>
          <p className="program-work-note">
            Document institutionnel prévisionnel destiné aux partenaires et financeurs. Les actions et cibles seront ajustées aux moyens réellement disponibles.
          </p>

          <section className="program-chapter">
            <div className="program-section-heading">
              <span className="program-section-number">01</span>
              <h3>Présentation et mission</h3>
            </div>
            <p>
              Passerelles d’Avenir est une association loi 1901 qui agit en faveur de l’autonomie, de l’inclusion sociale et de la participation à la vie locale. Elle propose des actions d’accueil et d’orientation, d’accompagnement administratif de premier niveau, d’apprentissage du français, d’initiation numérique, d’ouverture culturelle et de développement solidaire.
            </p>
            <p>
              <strong>Mission :</strong> créer des passerelles vers l’autonomie en facilitant l’accès à l’information, aux apprentissages, aux services et à la vie culturelle, tout en encourageant les solidarités et les initiatives de développement.
            </p>
          </section>

          <section className="program-chapter">
            <div className="program-section-heading">
              <span className="program-section-number">02</span>
              <h3>Objectifs généraux</h3>
            </div>
            <ol className="program-objectives">
              {programObjectives.map((objective, index) => (
                <li key={objective}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{objective}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="program-chapter">
            <div className="program-section-heading">
              <span className="program-section-number">03</span>
              <h3>Axes d’intervention et indicateurs</h3>
            </div>
            <div className="program-axes">
              {programs.map(({ title, objective, actions: plannedActions, indicators }, index) => (
                <details className="program-axis" key={title} open={index === 0}>
                  <summary>
                    <span className="program-section-number">Axe {String(index + 1).padStart(2, '0')}</span>
                    <strong>{title}</strong>
                  </summary>
                  <div className="program-axis-content">
                    <p className="program-axis-objective"><strong>Objectif :</strong> {objective}</p>
                    <div className="program-axis-columns">
                      <div>
                        <h4>Actions prévues</h4>
                        <ul>{plannedActions.map((item) => <li key={item}>{item}</li>)}</ul>
                      </div>
                      <div>
                        <h4>Indicateurs de suivi</h4>
                        <ul>{indicators.map((item) => <li key={item}>{item}</li>)}</ul>
                      </div>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section className="program-chapter">
            <div className="program-section-heading">
              <span className="program-section-number">04</span>
              <h3>Calendrier prévisionnel</h3>
            </div>
            <p className="program-muted-note">Les dates et volumes seront confirmés après validation des ressources, des lieux d’accueil et des partenariats.</p>
            <div className="program-calendar">
              {programCalendar.map(({ period, priority, actions: plannedActions, outcome }) => (
                <article className="program-calendar-item" key={period}>
                  <p className="program-calendar-period">{period}</p>
                  <h4>{priority}</h4>
                  <p>{plannedActions}</p>
                  <p><strong>Résultat attendu :</strong> {outcome}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="program-chapter">
            <div className="program-section-heading">
              <span className="program-section-number">05</span>
              <h3>Cibles indicatives</h3>
            </div>
            <p className="program-muted-note">Hypothèses de démarrage, non contractuelles; elles seront révisées après les premiers mois d’activité.</p>
            <dl className="program-targets">
              {programTargets.map(({ domain, target }) => (
                <div key={domain}><dt>{domain}</dt><dd>{target}</dd></div>
              ))}
            </dl>
          </section>

          <section className="program-chapter">
            <div className="program-section-heading">
              <span className="program-section-number">06</span>
              <h3>Organisation et pilotage</h3>
            </div>
            <ul className="program-organization">
              {programOrganization.map(({ role, responsibility }) => (
                <li key={role}><strong>{role} :</strong> {responsibility}</li>
              ))}
            </ul>
            <p>Un tableau de bord simple suivra les activités, dates, responsables, participations, dépenses, résultats, incidents éventuels et suites à donner.</p>
          </section>

          <section className="program-chapter">
            <div className="program-section-heading">
              <span className="program-section-number">07</span>
              <h3>Budget prévisionnel à compléter</h3>
            </div>
            <p className="program-muted-note">Les montants seront renseignés après consultation des prestataires et confirmation des contributions en nature. Les dépenses doivent être cohérentes avec les ressources attendues.</p>
            <div className="program-budget-grid">
              <div>
                <h4>Dépenses prévisionnelles</h4>
                <div className="program-budget-entries">
                  {programExpenses.map((item, index) => {
                    const fieldId = `program-expense-${index}`
                    return (
                      <label className="program-budget-entry" htmlFor={fieldId} key={item}>
                        <span className="program-budget-entry-label">{item}</span>
                        <span className="program-budget-input-wrap">
                          <input
                            id={fieldId}
                            type="number"
                            min="0"
                            step="0.01"
                            inputMode="decimal"
                            placeholder="0,00"
                            value={expenseAmounts[index]}
                            aria-label={`Montant en euros : ${item}`}
                            onChange={(event) => setExpenseAmounts((amounts) => amounts.map((amount, amountIndex) => (
                              amountIndex === index ? event.target.value : amount
                            )))}
                          />
                          <span aria-hidden="true">€</span>
                        </span>
                      </label>
                    )
                  })}
                </div>
                <div className="program-budget-total">
                  <span>Total des dépenses</span>
                  <output>{totalExpenses === null ? 'À compléter' : `${formatEuro(totalExpenses)} €`}</output>
                </div>
              </div>
              <div>
                <h4>Ressources prévisionnelles</h4>
                <div className="program-budget-entries">
                  {programResources.map((item, index) => {
                    const fieldId = `program-resource-${index}`
                    return (
                      <label className="program-budget-entry" htmlFor={fieldId} key={item}>
                        <span className="program-budget-entry-label">{item}</span>
                        <span className="program-budget-input-wrap">
                          <input
                            id={fieldId}
                            type="number"
                            min="0"
                            step="0.01"
                            inputMode="decimal"
                            placeholder="0,00"
                            value={resourceAmounts[index]}
                            aria-label={`Montant en euros : ${item}`}
                            onChange={(event) => setResourceAmounts((amounts) => amounts.map((amount, amountIndex) => (
                              amountIndex === index ? event.target.value : amount
                            )))}
                          />
                          <span aria-hidden="true">€</span>
                        </span>
                      </label>
                    )
                  })}
                </div>
                <div className="program-budget-total">
                  <span>Total des ressources</span>
                  <output>{totalResources === null ? 'À compléter' : `${formatEuro(totalResources)} €`}</output>
                </div>
                <div className="program-budget-total program-budget-balance">
                  <span>Solde prévisionnel</span>
                  <output>{forecastBalance === null ? 'À compléter' : `${formatEuro(forecastBalance)} €`}</output>
                </div>
              </div>
            </div>
            <p className="program-muted-note">Toute ressource affectée sera suivie conformément à sa convention et à sa destination. Les apports en nature seront décrits séparément de la trésorerie disponible.</p>
          </section>

          <section className="program-chapter">
            <div className="program-section-heading">
              <span className="program-section-number">08</span>
              <h3>Suivi, évaluation et compte rendu</h3>
            </div>
            <ul className="program-simple-list">{programMonitoring.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <section className="program-chapter">
            <div className="program-section-heading">
              <span className="program-section-number">09</span>
              <h3>Cadre éthique et limites d’intervention</h3>
            </div>
            <ul className="program-simple-list">{programEthics.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <section className="program-chapter program-conclusion">
            <div className="program-section-heading">
              <span className="program-section-number">10</span>
              <h3>Conclusion et validation</h3>
            </div>
            <p>
              Pour sa période de démarrage 2027–2028, Passerelles d’Avenir privilégie une mise en œuvre progressive, fondée sur des actions utiles, mesurables et adaptées aux besoins repérés à Rennes et dans les environs. L’association souhaite bâtir des coopérations de confiance, rendre compte des moyens mobilisés et développer ses activités de façon responsable.
            </p>
            <div className="program-validation">
              <span>Adoption à valider par le Bureau, le Conseil d’administration ou l’Assemblée générale</span>
              <span>Date : à compléter</span>
              <span>Nom et signature du/de la représentant(e) : à compléter</span>
            </div>
          </section>
        </section>

        <section className="pillars" id="impact">
          <div className="section-heading">
            <p className="eyebrow">Pourquoi nous faire confiance</p>
            <h2>Une approche claire, humaine et structurée.</h2>
          </div>

          <div className="pillar-grid">
            {pillars.map(({ icon: Icon, title, text, chip }) => (
              <article key={title} className="pillar-card">
                <div className="pillar-icon">
                  <Icon size={22} />
                </div>
                <div className="pillar-head">
                  <h3>{title}</h3>
                  <span>{chip}</span>
                </div>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="story">
          <div className="story-photo">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
              alt="Personnes réunies autour d’une table lors d’un échange collectif."
            />
          </div>

          <div className="story-copy">
            <p className="eyebrow">Notre mission</p>
            <h2>Nous croyons que chaque parcours mérite un cadre de dignité, d’espoir et de possibilité.</h2>
            <p>
              Nous accompagnons les personnes migrantes dans leur intégration en France et soutenons les enfants et les jeunes
              dans les pays défavorisés avec une logique de solidarité durable et de transmission.
            </p>

            <div className="story-list">
              <div>
                <Check size={16} />
                <span>Accueil respectueux et digne</span>
              </div>
              <div>
                <Check size={16} />
                <span>Accompagnement concret et humain</span>
              </div>
              <div>
                <Check size={16} />
                <span>Éducation et ouverture d’avenir</span>
              </div>
            </div>
          </div>
        </section>

        <section className="steps">
          <div className="section-heading centered">
            <p className="eyebrow">Notre méthode</p>
            <h2>Une action qui part du terrain et vise l’impact durable.</h2>
          </div>

          <div className="step-grid">
            {steps.map(({ number, title, text }) => (
              <article key={number} className="step-card">
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="commitments">
          <div className="section-heading">
            <p className="eyebrow">Nos engagements</p>
            <h2>Une solidarité qui relie les parcours et les générations.</h2>
          </div>

          <div className="commitment-grid">
            <article className="impact-card">
              <span className="impact-label">En France</span>
              <h3>Accueillir et accompagner</h3>
              <p>
                Favoriser l’intégration et l’autonomie des personnes migrantes, en valorisant chaque parcours,
                chaque culture et chaque talent.
              </p>
            </article>
            <article className="impact-card">
              <span className="impact-label">À l’international</span>
              <h3>Ouvrir des perspectives</h3>
              <p>
                Agir pour l’éducation des enfants et des jeunes en situation de vulnérabilité dans les pays défavorisés.
              </p>
            </article>
          </div>
        </section>

        <section className="sponsorship" id="parrainage">
          <div className="sponsorship-hero">
            <div className="sponsorship-intro">
              <p className="eyebrow">Parrainage solidaire</p>
              <h2>Devenez parrain ou marraine</h2>
              <p className="sponsorship-lead">
                Quelque part, un enfant, un adolescent attend sa chance. Ensemble, construisons des passerelles qui donnent de l’espoir.
              </p>
              <div className="hero-actions">
                <a className="secondary-button" href="#comment-parrainer">
                  Voir comment ça marche
                </a>
              </div>
            </div>
            <aside className="sponsorship-address">
              <strong>Passerelles d’Avenir</strong>
              <span>Accueil · Intégration · Autonomie · Contribution</span>
              <a href="tel:+33777229335">+33 7 77 22 93 35</a>
              <a href="mailto:passerelleresdavenir.asso@gmail.com">passerelleresdavenir.asso@gmail.com</a>
              <span>N° RNA : W353026312 · N° SIRET : 109 770 859 00014</span>
              <span>3 rue Xavier Grall, 37500 Rennes</span>
            </aside>
          </div>

          <div className="sponsorship-section sponsorship-why">
            <div className="section-heading">
              <p className="eyebrow">Pourquoi parrainer ?</p>
              <h3>Votre engagement peut ouvrir une porte.</h3>
            </div>
            <div className="sponsorship-copy">
              <p>
                Dans certains villages, l’école est à plus d’une heure de marche. Dans certains foyers, un repas par jour n’est pas garanti.
                Pour beaucoup d’enfants et de jeunes, le talent, l’envie d’apprendre et la force de caractère sont là ; ce qui manque, ce sont
                les moyens et les passerelles pour les faire grandir.
              </p>
              <p>
                Derrière chaque dossier de parrainage, il y a un enfant qui rêve de tenir un cahier neuf, un adolescent qui veut terminer sa
                formation, une famille qui espère simplement souffler. Ce ne sont pas des chiffres : ce sont des vies, des visages, des avenirs
                en construction.
              </p>
              <p>
                Votre parrainage ne gomme pas ces difficultés d’un coup de baguette magique. Mais il ouvre une porte et dit à un enfant :
                « Tu comptes, et nous croyons en ton avenir. »
              </p>
            </div>
          </div>

          <div className="sponsorship-principle">
            <p className="eyebrow">Un engagement responsable</p>
            <h3>Parrainer, ce n’est pas seulement donner.</h3>
            <p>
              C’est contribuer dans la durée et avec responsabilité à créer les conditions permettant à un enfant ou à un jeune de grandir,
              d’apprendre, de développer ses capacités et de construire son avenir. Le parrainage soutient un parcours sans créer de dépendance
              permanente entre une personne et un donateur.
            </p>
            <ul className="sponsorship-checklist">
              <li><Check size={17} />Soutenir concrètement un enfant ou un jeune dans son parcours</li>
              <li><Check size={17} />Contribuer à une relation saine, encadrée et transparente</li>
              <li><Check size={17} />Suivre les progrès réalisés grâce à votre engagement</li>
              <li><Check size={17} />Participer à la construction d’un avenir autonome</li>
            </ul>
          </div>

          <div className="sponsorship-details-grid">
            <article className="sponsorship-detail">
              <h3>Type de parrain ou marraine</h3>
              <p className="sponsor-profile-prompt">Choisir</p>
              <fieldset className="sponsor-profile-fieldset" aria-label="Type de parrain ou marraine">
                <div className="sponsor-profile-options">
                  {sponsorProfiles.map((profile, index) => (
                    <label className="sponsor-profile-option" key={profile} htmlFor={`sponsor-profile-${index}`}>
                      <input
                        id={`sponsor-profile-${index}`}
                        type="checkbox"
                        checked={selectedSponsorProfiles.includes(profile)}
                        onChange={() => setSelectedSponsorProfiles((selected) => (
                          selected.includes(profile)
                            ? selected.filter((item) => item !== profile)
                            : [...selected, profile]
                        ))}
                      />
                      <span>{profile}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </article>
            <article className="sponsorship-detail">
              <h3>Choisissez votre fréquence</h3>
              <div className="frequency-option-grid">
                {sponsorshipFrequencies.map((frequency, index) => (
                  <label className="frequency-option" key={frequency} htmlFor={`sponsorship-frequency-${index}`}>
                    <input
                      id={`sponsorship-frequency-${index}`}
                      type="checkbox"
                      checked={selectedSponsorshipFrequencies.includes(frequency)}
                      onChange={() => setSelectedSponsorshipFrequencies((selected) => (
                        selected.includes(frequency)
                          ? selected.filter((item) => item !== frequency)
                          : [...selected, frequency]
                      ))}
                    />
                    <span>{frequency}</span>
                  </label>
                ))}
              </div>
              <p className="sponsorship-note">
                La durée dépend du parcours du bénéficiaire et de vos possibilités. Le parrainage peut être réévalué à tout moment.
              </p>
            </article>
          </div>

          <div className="sponsorship-section sponsorship-assurances">
            <div className="section-heading">
              <p className="eyebrow">Nos garanties</p>
              <h3>Un cadre clair, transparent et protecteur.</h3>
            </div>
            <ul className="guarantee-grid">
              {sponsorshipGuarantees.map((guarantee) => (
                <li key={guarantee}><ShieldCheck size={19} />{guarantee}</li>
              ))}
            </ul>
            <blockquote>
              « Le parrainage n’est pas une relation de dépendance entre celui qui donne et celui qui reçoit. C’est une passerelle solidaire
              qui permet de soutenir un parcours, de renforcer des capacités et de contribuer à la construction d’un avenir autonome. »
            </blockquote>
          </div>

          <div className="sponsorship-section" id="comment-parrainer">
            <div className="section-heading centered">
              <p className="eyebrow">Comment ça marche ?</p>
              <h3>Quatre étapes pour commencer.</h3>
            </div>
            <div className="sponsorship-step-grid">
              {sponsorshipSteps.map(({ number, title, text }) => (
                <article className="sponsorship-step" key={number}>
                  <span className="step-number">{number}</span>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <ol className="sponsorship-journey" aria-label="Étapes du suivi d’un parrainage">
              {sponsorshipJourney.map((stage, index) => (
                <li key={stage}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {stage}
                  {index < sponsorshipJourney.length - 1 && <ArrowRight size={16} aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </div>

          <div className="sponsorship-contact" id="devenir-parrain">
            <div className="sponsorship-contact-copy">
              <p className="eyebrow">Premier échange</p>
              <h3>Vous souhaitez en savoir plus ?</h3>
              <p>
                Nos équipes sont à votre disposition pour échanger sur le parrainage, répondre à vos questions et définir ensemble la forme d'accompagnement qui vous correspond.
              </p>
            </div>

            <div className="contact-direct-panel">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <Mail size={22} aria-hidden="true" />
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">Écrivez-nous par e-mail</span>
                  <a className="contact-card-link" href="mailto:passerelleresdavenir.asso@gmail.com">
                    passerelleresdavenir.asso@gmail.com
                  </a>
                  <p className="contact-card-desc">Réponse rapide de nos coordinateurs</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <Phone size={22} aria-hidden="true" />
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">Contactez-nous par téléphone</span>
                  <a className="contact-card-link" href="tel:+33777229335">
                    +33 7 77 22 93 35
                  </a>
                  <p className="contact-card-desc">Du lundi au vendredi</p>
                </div>
              </div>

              <div className="contact-direct-actions">
                <a className="primary-button" href="mailto:passerelleresdavenir.asso@gmail.com?subject=Demande%20d%E2%80%99information%20sur%20le%20parrainage">
                  Nous écrire un e-mail
                  <ArrowRight size={18} />
                </a>
                <a className="secondary-button" href="tel:+33777229335">
                  Appeler directement
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing helloasso-section" id="engager">
          <div className="section-heading centered">
            <p className="eyebrow">Soutenez Passerelles d’Avenir</p>
            <h2>Faire un don à l’association</h2>
            <p className="pricing-lead-text">
              Vos dons sont directement reversés aux actions et missions de l’association et bénéficient d’un cadre 100% sécurisé via HelloAsso.
            </p>
          </div>

          <div className="helloasso-embed-card">
            <div className="helloasso-embed-topbar">
              <div className="helloasso-embed-topbar-info">
                <span className="helloasso-secure-badge">
                  <ShieldCheck size={15} />
                  Paiement 100% sécurisé
                </span>
                <span className="helloasso-embed-title">Formulaire officiel HelloAsso</span>
              </div>
              <a
                href={HELLOASSO_DONATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="helloasso-embed-external-link"
              >
                <span>Ouvrir sur helloasso.com</span>
                <ExternalLink size={15} />
              </a>
            </div>

            <div className="helloasso-embed-frame-wrapper">
              <iframe
                id="haWidget"
                allow="payment 'self' https://paymenthub.helloassopay.com https://helloasso.com"
                allowTransparency="true"
                scrolling="auto"
                title="Formulaire de don HelloAsso - Passerelles d'Avenir"
                src="https://www.helloasso.com/associations/passerelles-d-avenir/formulaires/1/widget"
                style={{ width: '100%', height: '750px', border: 'none' }}
                onLoad={() => {
                  window.addEventListener('message', function (e) {
                    if (!e.data) return
                    const dataHeight = e.data.height
                    const haWidgetElement = document.getElementById('haWidget')
                    if (haWidgetElement && dataHeight && dataHeight > parseFloat(haWidgetElement.height || 0)) {
                      haWidgetElement.height = dataHeight + 'px'
                    }
                  })
                }}
              />
            </div>

            <div className="helloasso-embed-footer">
              <span>🔒 Transaction chiffrée SSL • Reçu fiscal émis automatiquement</span>
              <a
                href={HELLOASSO_DONATION_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Accéder directement à la page HelloAsso
              </a>
            </div>
          </div>
        </section>

        <section className="join-section" id="rejoindre" aria-labelledby="join-heading">
          <div className="join-copy">
            <p className="join-eyebrow">Passerelles d’Avenir</p>
            <h2 id="join-heading">Construisons une passerelle avec vous.</h2>
            <p>
              Devenez bénévole, adhérez ou parrainez un enfant : contactez-nous directement par téléphone ou par e-mail. Nous répondrons à vos questions avec plaisir.
            </p>
          </div>

          <div className="join-contact-panel" id="contact">
            <h3 className="join-contact-title">Contactez notre équipe</h3>
            <p className="join-contact-intro">
              Choisissez le moyen de contact qui vous convient le mieux :
            </p>

            <div className="join-cards-grid">
              <a className="join-interactive-card" href="mailto:passerelleresdavenir.asso@gmail.com">
                <div className="join-interactive-icon">
                  <Mail size={24} aria-hidden="true" />
                </div>
                <div className="join-interactive-info">
                  <span className="join-interactive-label">Par courriel</span>
                  <strong className="join-interactive-value">passerelleresdavenir.asso@gmail.com</strong>
                  <span className="join-interactive-hint">Cliquez pour envoyer un e-mail</span>
                </div>
                <ArrowRight className="join-interactive-arrow" size={18} aria-hidden="true" />
              </a>

              <a className="join-interactive-card" href="tel:+33777229335">
                <div className="join-interactive-icon">
                  <Phone size={24} aria-hidden="true" />
                </div>
                <div className="join-interactive-info">
                  <span className="join-interactive-label">Par téléphone</span>
                  <strong className="join-interactive-value">+33 7 77 22 93 35</strong>
                  <span className="join-interactive-hint">Cliquez pour composer le numéro</span>
                </div>
                <ArrowRight className="join-interactive-arrow" size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="join-contact-footer">
              <p>Permanence du lundi au vendredi • Association Passerelles d’Avenir</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <div className="brand-lockup">
            <img className="brand-logo" src="/logo-passerelles-avenir.png" alt="" />
            <span>Passerelles d’Avenir</span>
          </div>
          <p>Des parcours accompagnés, des familles accueillies, des rêves retrouvés.</p>
        </div>

        <div className="footer-links">
          <a href="#mission">Mission</a>
          <a href="#impact">Impact</a>
          <a href="#programmes" onClick={handleProgramsClick}>Programmes</a>
          <a href="#parrainage">Parrainage</a>
          <a href="#engager">Engager</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="status-block">
          <span className="footer-dot" />
          Solidarité en action
        </div>
      </footer>
    </div>
  )
}

export default App
