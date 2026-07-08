// config.js - Configuración centralizada
const CONFIG = {
    // Título del sitio
    siteTitle: "AcadēmIA",
    siteSubtitle: "revistas & sitios",
    
    // Metadata
    version: "1.0.0",
    lastUpdated: "2026-01-15",
    
    // Configuración de verificación de enlaces
    linkVerification: {
        enabled: true,
        timeout: 5000,
        retryAttempts: 2
    },
    
    // Configuración de paginación
    pagination: {
        itemsPerPage: 12,
        enabled: false
    },
    
    // Categorías disponibles
    categories: {
        fields: {
            sistemas: { label: "Ing. Sistemas", icon: "code", color: "blue" },
            informatica: { label: "Informática", icon: "laptop-code", color: "green" },
            computacion: { label: "Computación", icon: "microchip", color: "purple" }
        },
        types: {
            revista: { label: "Revista", icon: "book", color: "orange" },
            sitio: { label: "Sitio web", icon: "globe", color: "blue" }
        }
    },
    
    // LISTA DE FUENTES ACADÉMICAS (fácil de editar)
    // ---------- REVISTAS Y SITIOS ACADÉMICOS (ingeniería) ----------
    sources: [

        { 
            id: 1, 
            title: "Revista Cientifica de Sistemas e Informática", 
            authors: "Universidad Nacional de San Martín", 
            abstract: "Revista Científica de Sistemas e Informática ( e-ISSN: 2709-992X ), fundada en 2021, es una revista científica de acceso abierto editada por el Fondo Editorial de la Universidad Nacional de San Martín en colaboración con la Facultad de Ingeniería de Sistemas e Informática. Factor de impacto: 8.7", 
            year: 2021, 
            field: "sistemas", 
            type: "revista", 
            link: "https://revistas.unsm.edu.pe/index.php/rcsi" 
        },
      
        {
            id: 2,
            title: "IEEE Transactions on Systems, Man, and Cybernetics",
            authors: "IEEE SMC",
            abstract: "Publicación líder en sistemas, cibernética e inteligencia artificial aplicada. Factor de impacto: 8.7",
            year: 1971,
            field: "sistemas",
            type: "revista",
            link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6221021"
        },
        {
            id: 3,
            title: "Journal of Systems and Software",
            authors: "Elsevier",
            abstract: "Investigación en metodologías de desarrollo, arquitecturas de software y sistemas de información.",
            year: 1979,
            field: "sistemas",
            type: "revista",
            link: "https://www.sciencedirect.com/journal/journal-of-systems-and-software"
        },
        {
            id: 4,
            title: "ACM Computing Surveys",
            authors: "ACM",
            abstract: "Revisiones exhaustivas sobre tendencias en computación, algoritmos y sistemas. Factor de impacto: 16.2",
            year: 1969,
            field: "computacion",
            type: "revista",
            link: "https://dl.acm.org/journal/csur"
        },
        {
            id: 5,
            title: "IEEE Transactions on Computers",
            authors: "IEEE Computer Society",
            abstract: "Arquitecturas de computadores, sistemas digitales, y computación de alto rendimiento.",
            year: 1952,
            field: "computacion",
            type: "revista",
            link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=12"
        },
        {
            id: 6,
            title: "Information and Software Technology",
            authors: "Elsevier",
            abstract: "Ingeniería de software, métodos formales, y gestión de proyectos de TI.",
            year: 1984,
            field: "informatica",
            type: "revista",
            link: "https://www.sciencedirect.com/journal/information-and-software-technology"
        },
        {
            id: 7,
            title: "IEEE Transactions on Software Engineering",
            authors: "IEEE",
            abstract: "Una de las revistas más prestigiosas en ingeniería de software, con artículos sobre métodos, herramientas y métricas.",
            year: 1975,
            field: "informatica",
            type: "revista",
            link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=32"
        },
        {
            id: 8,
            title: "Journal of Systems Engineering and Electronics",
            authors: "Springer",
            abstract: "Sistemas de ingeniería, electrónica y aplicaciones de control.",
            year: 1990,
            field: "sistemas",
            type: "revista",
            link: "https://link.springer.com/journal/11518"
        },
        {
            id: 9,
            title: "Computers & Industrial Engineering",
            authors: "Elsevier",
            abstract: "Aplicaciones de la computación en procesos industriales, optimización y logística.",
            year: 1976,
            field: "computacion",
            type: "revista",
            link: "https://www.sciencedirect.com/journal/computers-and-industrial-engineering"
        },
        {
            id: 10,
            title: "Revista Latinoamericana de Ingeniería de Software",
            authors: "RELIS",
            abstract: "Difusión de investigaciones en ingeniería de software en América Latina.",
            year: 2013,
            field: "informatica",
            type: "revista",
            link: "https://relis.epis.org/index.php/relis"
        },
        {
            id: 11,
            title: "Portal ACM Digital Library",
            authors: "ACM",
            abstract: "Repositorio digital con miles de artículos, conferencias y libros de computación e informática.",
            year: 1997,
            field: "computacion",
            type: "sitio",
            link: "https://dl.acm.org/"
        },
        {
            id: 12,
            title: "IEEE Xplore Digital Library",
            authors: "IEEE",
            abstract: "Base de datos con publicaciones técnicas de ingeniería eléctrica, electrónica y computación.",
            year: 1990,
            field: "sistemas",
            type: "sitio",
            link: "https://ieeexplore.ieee.org/"
        },
        {
            id: 13,
            title: "arXiv.org (Computer Science)",
            authors: "Cornell University",
            abstract: "Repositorio de preimpresiones en ciencias de la computación, inteligencia artificial y sistemas.",
            year: 1991,
            field: "computacion",
            type: "sitio",
            link: "https://arxiv.org/list/cs/recent"
        },
        {
            id: 14,
            title: "ScienceDirect - Computer Science",
            authors: "Elsevier",
            abstract: "Acceso a revistas y libros de ciencias de la computación e ingeniería de sistemas.",
            year: 1997,
            field: "sistemas",
            type: "sitio",
            link: "https://www.sciencedirect.com/computer-science"
        },
        {
            id: 15,
            title: "SpringerLink - Engineering",
            authors: "Springer",
            abstract: "Colección de revistas y conferencias en todas las áreas de ingeniería, incluyendo computación.",
            year: 1996,
            field: "informatica",
            type: "sitio",
            link: "https://link.springer.com/engineering"
        },
        {
            id: 16,
            title: "ResearchGate",
            authors: "ResearchGate GmbH",
            abstract: "Red social para investigadores, con acceso a publicaciones de ingeniería y ciencias.",
            year: 2008,
            field: "informatica",
            type: "sitio",
            link: "https://www.researchgate.net/"
        },
        {
            id: 17,
            title: "Google Scholar",
            authors: "Google",
            abstract: "Buscador académico que indexa revistas, conferencias y patentes de todas las disciplinas.",
            year: 2004,
            field: "sistemas",
            type: "sitio",
            link: "https://scholar.google.com/"
        },
        {
            id: 18,
            title: "MDPI - Computers",
            authors: "MDPI",
            abstract: "Revista de acceso abierto sobre arquitectura de computadores, sistemas embebidos y redes.",
            year: 2012,
            field: "computacion",
            type: "revista",
            link: "https://www.mdpi.com/journal/computers"
        },
        {
            id: 19,
            title: "Revista Ingeniería de Sistemas",
            authors: "Universidad de Chile",
            abstract: "Publicación chilena con enfoque en sistemas de información y modelado.",
            year: 1985,
            field: "sistemas",
            type: "revista",
            link: "https://revistas.uchile.cl/index.php/ris"
        },
        {
            id: 20,
            title: "Journal of Computer Science and Technology",
            authors: "Springer",
            abstract: "Investigación en teoría de la computación, algoritmos y lenguajes de programación.",
            year: 1986,
            field: "computacion",
            type: "revista",
            link: "https://link.springer.com/journal/11390"
        },
        {
            id: 21,
            title: "Programming and Computer Software",
            authors: "Springer",
            abstract: "Revista sobre lenguajes de programación, compiladores e ingeniería de software.",
            year: 1975,
            field: "informatica",
            type: "revista",
            link: "https://link.springer.com/journal/11086"
        }
    ]
};
