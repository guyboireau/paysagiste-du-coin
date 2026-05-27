// ═════════════════════════════════════════════════════════════════════════════
//  SITE CONFIG — fichier unique à modifier par client
//  Structure :
//    siteConfig.business  → infos de l'entreprise
//    siteConfig.branding  → couleurs, polices, logo
//    siteConfig.seo       → titre, description, mots-clés
//    siteConfig.design    → variantes de mise en page A/B/C par section
//    siteConfig.pages     → titres/descriptions des pages (multipage)
//    siteConfig.features  → activer/désactiver des modules
//    siteConfig.content   → contenus sections (hero, services, etc.)
// ═════════════════════════════════════════════════════════════════════════════

export const siteConfig = {
  // Navigation (landing 1 page)
  nav: [
    { label: 'Services',  href: '#services' },
    { label: 'À propos',  href: '#apropos' },
    { label: 'Tarifs',    href: '#tarifs' },
    { label: 'FAQ',       href: '#faq' },
    { label: 'Contact',   href: '#contact' },
  ],

  // ── 1. INFORMATIONS BUSINESS ───────────────────────────────────────────────
  business: {
    name:     'Paysagiste Du Coin',
    tagline:  'Aménagement & Création de Jardins en Guyane',
    industry: 'services',          // utilisé pour schema.org + choix de contenu IA
    icon:     'plant',            // Icône de métier (Phosphor icon name sans le préfixe ph-)
    phone:    '06 94 91 77 76',
    email:    'contact@paysagisteducoin.fr',
    address: {
      street:     '25 route Départementale 14',
      city:       'Montsinéry Tonnegrande',
      postalCode: '97356',
      country:    'FR',
    },
    openingHours: {
      monday:    '09:00-18:00',
      tuesday:   '09:00-18:00',
      wednesday: '09:00-18:00',
      thursday:  '09:00-18:00',
      friday:    '09:00-18:00',
      saturday:  null,
      sunday:    null,
    },
    socialLinks: {
      linkedin:  '',
      instagram: '',
      facebook:  '',
      twitter:   '',
    },
    siret:        '',
    availability: 'Disponible',
    urgency: {
      active:    false,
      label:     'Intervention rapide',
      phone:     '06 94 91 77 76',
    },
    serviceArea: [
      'Montsinéry Tonnegrande',
      'Matoury',
      'Cayenne',
      'Guyane',
    ],
    certifications: [
      { label: 'Respect de la biodiversité', sublabel: 'Pratiques durables',          icon: '🌿' },
      { label: 'Matériaux écologiques',                sublabel: 'Solutions naturelles', icon: '♻️' },
      { label: 'Expertise qualifiée',           sublabel: 'Travail passionné',            icon: '✅' },
    ],
    assurance: {
      name:   '',
      numero: '',
    },
  },

  // ── 2. BRANDING ────────────────────────────────────────────────────────────
  branding: {
    primaryColor:    '#4a7c59',   // Vert forêt
    primaryDark:     '#3a6347',
    primarySoft:     '#dcf0e4',
    secondaryColor:  '#2a362e',
    accentColor:     '#b8763d',   // Terre/Bois
    fontHeading:     'Outfit',
    fontBody:        'Outfit',
    fontMono:        'Geist Mono',
    logoPath:        '/assets/logo.svg',
    faviconPath:     '/favicon.svg',
  },

  // ── 3. SEO ─────────────────────────────────────────────────────────────────
  seo: {
    titleTemplate:      '%s | Paysagiste Du Coin',
    defaultTitle:       'Paysagiste Du Coin — Création et Aménagement de Jardins en Guyane',
    defaultDescription: 'Paysagiste Du Coin basé à Montsinéry Tonnegrande. Aménagement d\'espaces verts, création de jardins, terrasses et systèmes d\'arrosage en Guyane.',
    keywords: [
      'paysagiste',
      'guyane',
      'montsinery',
      'jardin',
      'terrasse',
      'arrosage'
    ],
    googleBusinessUrl:   '',
    googleAnalyticsId:   '',
    googleSearchConsole: '',
    bingWebmasterKey:    '',
    plausibleDomain:     '',
    sentryDsn:           '',
    locale:              'fr_FR',
    siteUrl:             'https://paysagiste-du-coin.vercel.app',
    ogImage:             '/assets/images/hero.png',
  },

  // ── 4. DESIGN VARIANTS ─────────────────────────────────────────────────────
  design: {
    isSketchy: false,
    variants: {
      header:       'A',
      hero:         'A',
      services:     'A',
      about:        'A',
      testimonials: 'A',
      pricing:      'A',
      faq:          'A',
      cta:          'A',
      footer:       'A',
    },
  },

  // ── 5. PAGES (multipage) ──────────────────────────────────────────────────
  pages: {
    home: {
      slug:        '/',
      title:       'Accueil',
      description: 'Bienvenue sur notre site.',
    },
    services: {
      slug:        '/services',
      title:       'Nos services',
      description: 'Découvrez nos prestations.',
    },
    about: {
      slug:        '/a-propos',
      title:       'À propos',
      description: 'En savoir plus sur notre entreprise.',
    },
    blog: {
      slug:        '/blog',
      title:       'Blog',
      description: 'Actualités et conseils.',
    },
    realisations: {
      slug:        '/realisations',
      title:       'Réalisations',
      description: 'Nos projets récents.',
    },
    contact: {
      slug:        '/contact',
      title:       'Contact',
      description: 'Contactez-nous pour toute demande.',
    },
  },

  // ── 6. FEATURES ────────────────────────────────────────────────────────────
  features: {
    blog:          false,
    booking:       false,
    multilingual:  false,
    pricing:       true,
    testimonials:  true,
    newsletter:    false,
    cookieBanner:  true,
    analytics:     false,
    plausible:     false,
    sentry:        false,
  },

  // ── 7. CONTENT ─────────────────────────────────────────────────────────────
  content: {

    hero: {
      eyebrow:  'AMÉNAGEMENT PAYSAGER EN GUYANE',
      h1:       'Créez le jardin tropical de vos rêves',
      subtitle: 'Spécialistes en aménagement d\'espaces verts, terrasses et entretien à Montsinéry Tonnegrande. Solutions naturelles, respectueuses de l\'environnement et adaptées au climat amazonien.',
      image:    '/assets/images/hero.png',
      cta1:     { label: 'Demander un devis', href: '#contact' },
      cta2:     { label: 'Nos réalisations', href: '#services' },
      trust:    ['Artisan Qualifié', 'Matériaux écologiques', 'Respect de la biodiversité'],
      badge:    { label: 'RÉALISATION', value: '100+', sub: 'jardins aménagés' },
      infoCard: { status: 'Disponible', hours: 'Lun–Ven · 9h–18h', location: 'Montsinéry Tonnegrande' },
    },

    services: {
      eyebrow:  '— Nos prestations',
      title:    'Aménagement et entretien de vos espaces verts',
      subtitle: 'Découvrez notre savoir-faire pour valoriser votre extérieur avec des solutions sur-mesure.',
      items: [
        {
          icon:  'tree-palm',
          title: 'Création de jardins',
          text:  'Conception sur-mesure de jardins tropicaux avec des plantes adaptées et un design harmonieux.',
          link:  'En savoir plus →',
          tag:   'Sur-mesure',
          features: ['Choix de plantes locales', 'Plan d\'aménagement 3D', 'Plantation soignée'],
        },
        {
          icon:  'house-line',
          title: 'Conception de terrasses',
          text:  'Installation de terrasses en bois exotique pour un espace de vie extérieur chaleureux et durable.',
          link:  'En savoir plus →',
          tag:   'Bois local',
          features: ['Bois de Guyane certifié', 'Finitions impeccables', 'Résistance climatique'],
        },
        {
          icon:  'drop',
          title: 'Systèmes d\'arrosage',
          text:  'Installation de systèmes d\'arrosage automatique optimisés pour préserver la ressource en eau.',
          link:  'En savoir plus →',
          tag:   'Écologique',
          features: ['Goutte-à-goutte', 'Programmation intelligente', 'Économie d\'eau'],
        },
      ],
    },

    about: {
      eyebrow: '— À propos',
      title:   'La passion de la nature et de la biodiversité',
      text: [
        'Basés à Montsinéry Tonnegrande, nous sommes une équipe d\'experts passionnés par l\'aménagement paysager. Notre objectif est de transformer vos extérieurs en véritables havres de paix.',
        'Nous mettons un point d\'honneur à respecter l\'environnement et à favoriser la biodiversité locale. Nos méthodes privilégient les matériaux écologiques et des pratiques durables.',
      ],
      stats: [
        { value: '15',   label: 'Années d\'expérience' },
        { value: '100+', label: 'Projets réalisés' },
        { value: '100%', label: 'Clients satisfaits' },
      ],
      cta:    { label: 'Contactez-nous', href: '#contact' },
      image:  '/assets/images/team.png',
      author: { name: 'L\'équipe', role: 'Paysagiste Du Coin', image: '/assets/images/portrait.png' },
    },

    testimonials: {
      eyebrow:   '— Témoignages',
      title:     'Ce que disent nos clients',
      ratingStr: '4.9 / 5 · 50+ avis clients',
      items: [
        {
          quote:   'Un travail exceptionnel pour l\'aménagement de notre jardin à Matoury. L\'équipe a su écouter nos besoins et utiliser des plantes magnifiques.',
          name:    'Marie L.',
          role:    'Particulier',
          initial: 'M',
        },
        {
          quote:   'La terrasse en bois est parfaite. Les finitions sont impeccables et le respect des délais a été très appréciable.',
          name:    'Jean-Marc P.',
          role:    'Particulier',
          initial: 'J',
        },
        {
          quote:   'Système d\'arrosage très efficace installé sur notre domaine. De vrais professionnels à Montsinéry.',
          name:    'Sophie T.',
          role:    'Gîte Local',
          initial: 'S',
        },
      ],
    },

    pricing: {
      eyebrow:  '— Tarifs',
      title:    'Nos formules d\'entretien',
      subtitle: 'Des contrats d\'entretien réguliers pour garder votre jardin impeccable toute l\'année.',
      plans: [
        {
          name:      'Entretien Mensuel',
          price:     'Sur devis',
          unit:      '/ mois',
          desc:      'Intervention une fois par mois pour l\'essentiel.',
          features:   ['Tonte de gazon', 'Taille des haies (légère)', 'Ramassage des déchets verts'],
          cta:        'Demander un devis',
          highlight:  false,
          stripeLink: '',
        },
        {
          name:       'Entretien Complet',
          price:      'Sur devis',
          unit:       '/ mois',
          desc:       'Le suivi complet de vos extérieurs.',
          features:   ['Tonte & Débroussaillage', 'Taille de formation', 'Contrôle de l\'arrosage', 'Engrais naturels'],
          cta:        'Demander un devis',
          highlight:  true,
          stripeLink: '',
        },
        {
          name:       'Intervention Ponctuelle',
          price:      'Sur devis',
          unit:       '/ mission',
          desc:       'Remise en état après la saison des pluies.',
          features:   ['Élagage léger', 'Nettoyage haute pression', 'Plantations'],
          cta:        'Demander un devis',
          highlight:  false,
          stripeLink: '',
        },
      ],
    },

    faq: {
      eyebrow: '— Questions fréquentes',
      title:   'Vos questions sur nos services',
      items: [
        { q: 'Intervenez-vous en dehors de Montsinéry ?', a: 'Oui, nous nous déplaçons également sur Matoury, Cayenne et ses alentours pour vos projets d\'aménagement.' },
        { q: 'Quels types de bois utilisez-vous pour les terrasses ?', a: 'Nous privilégions les bois locaux de Guyane, reconnus pour leur durabilité et leur résistance naturelle aux intempéries et insectes.' },
        { q: 'Proposez-vous des devis gratuits ?', a: 'Oui, nous réalisons une première visite sur site afin de comprendre votre projet et vous fournir un devis détaillé gratuitement.' },
        { q: 'Quelles sont vos pratiques écologiques ?', a: 'Nous utilisons des engrais naturels, sélectionnons des plantes adaptées au climat local pour réduire les besoins en eau, et installons des systèmes d\'irrigation intelligents.' },
        { q: 'Faites-vous de l\'élagage dangereux ?', a: 'Nous effectuons de l\'élagage classique. Pour les abattages très techniques, nous travaillons en partenariat avec des arboristes grimpeurs spécialisés.' },
      ],
    },

    cta: {
      eyebrow:  'VOTRE PROJET PAYSAGER',
      title:    'Prêt à sublimer votre extérieur ?',
      subtitle: 'Contactez-nous pour discuter de votre projet et obtenir un accompagnement personnalisé.',
      cta1:     { label: 'Nous appeler', href: 'tel:0694917776' },
      cta2:     { label: 'Demander un devis',  href: '#contact' },
    },

    contact: {
      eyebrow:        '— Contact',
      title:          'Parlez-nous de votre jardin',
      subtitle:       'Laissez-nous un message ou appelez-nous directement. Nous vous répondrons dans les plus brefs délais.',
      successMessage: 'Votre message a bien été envoyé. Nous vous recontactons rapidement.',
      formTypes:      ['Création de jardin', 'Pose de terrasse', 'Entretien d\'espaces verts', 'Autre'],
    },
    certifications: {
      eyebrow:  '— Nos Engagements',
      title:    'Une démarche éco-responsable',
      subtitle: 'Nous concevons des jardins durables en harmonie avec la nature.',
    },

    footer: {
      description: 'Paysagiste Du Coin : Votre expert en aménagement d\'espaces verts, conception de jardins et création de terrasses à Montsinéry Tonnegrande (Guyane).',
      links: [
        { label: 'Services',  href: '#services' },
        { label: 'À propos',  href: '#apropos' },
        { label: 'Tarifs',    href: '#tarifs' },
        { label: 'FAQ',       href: '#faq' },
        { label: 'Contact',   href: '#contact' },
      ],
      legal: [
        { label: 'Mentions légales', href: '/mentions-legales' },
        { label: 'CGV',              href: '/cgv' },
        { label: 'RGPD',             href: '/rgpd' },
      ],
      madeBy: 'Site réalisé par <a href="https://guyboireau.com" rel="noopener" target="_blank">guyboireau.com</a>',
    },
    portfolio: {
      items: [
        {
          title:       'Jardin Tropical Zen',
          category:    'Création',
          location:    'Matoury',
          year:        '2024',
          description: 'Création d\'un espace détente avec massifs de fleurs exotiques et cheminement en pierre.',
          before:      '/assets/images/hero.png',
          after:       '/assets/images/hero.png',
        },
        {
          title:       'Terrasse Carbet',
          category:    'Bois',
          location:    'Montsinéry',
          year:        '2023',
          description: 'Aménagement d\'une terrasse en bois de Guyane autour d\'un petit carbet.',
          before:      '/assets/images/hero.png',
          after:       '/assets/images/hero.png',
        },
        {
          title:       'Parc Résidentiel',
          category:    'Entretien',
          location:    'Cayenne',
          year:        '2023',
          description: 'Remise en état et entretien régulier d\'un parc résidentiel arboré.',
          before:      '/assets/images/hero.png',
          after:       '/assets/images/hero.png',
        },
      ]
    },

  }, // fin content

} as const;

// ─── Re-exports nommés (compat avec les composants existants) ──────────────
export type Variant = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export const { business, branding, seo, design, features, pages, nav, content } = siteConfig;
export const variants      = siteConfig.design.variants;
export const hero          = siteConfig.content.hero;
export const services      = siteConfig.content.services;
export const about         = siteConfig.content.about;
export const testimonials  = siteConfig.content.testimonials;
export const pricing       = siteConfig.content.pricing;
export const faq           = siteConfig.content.faq;
export const cta           = siteConfig.content.cta;
export const contact       = siteConfig.content.contact;
export const footer        = siteConfig.content.footer;
export const portfolio     = siteConfig.content.portfolio;
export const certifications = siteConfig.content.certifications;

// ─── Palettes de départ (copier-coller les valeurs dans branding) ──────────
// Plombier  → primary #1d62c8  primaryDark #1550a8  primarySoft #dbeafe  accent #f08c00
// Artisan   → primary #b8763d  primaryDark #9a6128  primarySoft #f6e7d4
// BtoB      → primary #1e3a5f  primaryDark #152b47  primarySoft #dbeafe
// Restaurant→ primary #c1440e  primaryDark #a03809  primarySoft #fde8de
// Santé     → primary #4a7c59  primaryDark #3a6347  primarySoft #dcf0e4
// ABPM      → primary #0ea5e9  primaryDark #0284c7  primarySoft #e0f2fe (Outfit)
