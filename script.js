    (function() {
            // Cargar fuentes desde CONFIG
            let sources = [...CONFIG.sources];
            let currentFilter = 'all';
            let currentSearch = '';
        
        const initialSources = [
            { id: 1, title: "Revista Cientifica de Sistemas e Informática", authors: "Universidad Nacional de San Martín", abstract: "Revista Científica de Sistemas e Informática ( e-ISSN: 2709-992X ), fundada en 2021, es una revista científica de acceso abierto editada por el Fondo Editorial de la Universidad Nacional de San Martín en colaboración con la Facultad de Ingeniería de Sistemas e Informática. Factor de impacto: 8.7", year: 2021, field: "sistemas", type: "revista", link: "https://revistas.unsm.edu.pe/index.php/rcsi" },
            { id: 2, title: "IEEE Transactions on Systems, Man, and Cybernetics", authors: "IEEE SMC", abstract: "Publicación líder en sistemas, cibernética e inteligencia artificial aplicada. Factor de impacto: 8.7", year: 1971, field: "sistemas", type: "revista", link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6221021" },
            { id: 3, title: "Journal of Systems and Software", authors: "Elsevier", abstract: "Investigación en metodologías de desarrollo, arquitecturas de software y sistemas de información.", year: 1979, field: "sistemas", type: "revista", link: "https://www.sciencedirect.com/journal/journal-of-systems-and-software" },
            { id: 4, title: "ACM Computing Surveys", authors: "ACM", abstract: "Revisiones exhaustivas sobre tendencias en computación, algoritmos y sistemas. Factor de impacto: 16.2", year: 1969, field: "computacion", type: "revista", link: "https://dl.acm.org/journal/csur" },
            { id: 5, title: "IEEE Transactions on Computers", authors: "IEEE Computer Society", abstract: "Arquitecturas de computadores, sistemas digitales, y computación de alto rendimiento.", year: 1952, field: "computacion", type: "revista", link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=12" },
            { id: 6, title: "Information and Software Technology", authors: "Elsevier", abstract: "Ingeniería de software, métodos formales, y gestión de proyectos de TI.", year: 1984, field: "informatica", type: "revista", link: "https://www.sciencedirect.com/journal/information-and-software-technology" },
            { id: 7, title: "IEEE Transactions on Software Engineering", authors: "IEEE", abstract: "Una de las revistas más prestigiosas en ingeniería de software, con artículos sobre métodos, herramientas y métricas.", year: 1975, field: "informatica", type: "revista", link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=32" },
            { id: 8, title: "Journal of Systems Engineering and Electronics", authors: "Springer", abstract: "Sistemas de ingeniería, electrónica y aplicaciones de control.", year: 1990, field: "sistemas", type: "revista", link: "https://link.springer.com/journal/11518" },
            { id: 9, title: "Computers & Industrial Engineering", authors: "Elsevier", abstract: "Aplicaciones de la computación en procesos industriales, optimización y logística.", year: 1976, field: "computacion", type: "revista", link: "https://www.sciencedirect.com/journal/computers-and-industrial-engineering" },
            { id: 10, title: "Revista Latinoamericana de Ingeniería de Software", authors: "RELIS", abstract: "Difusión de investigaciones en ingeniería de software en América Latina.", year: 2013, field: "informatica", type: "revista", link: "https://relis.epis.org/index.php/relis" },
            { id: 11, title: "Portal ACM Digital Library", authors: "ACM", abstract: "Repositorio digital con miles de artículos, conferencias y libros de computación e informática.", year: 1997, field: "computacion", type: "sitio", link: "https://dl.acm.org/" },
            { id: 12, title: "IEEE Xplore Digital Library", authors: "IEEE", abstract: "Base de datos con publicaciones técnicas de ingeniería eléctrica, electrónica y computación.", year: 1990, field: "sistemas", type: "sitio", link: "https://ieeexplore.ieee.org/" },
            { id: 13, title: "arXiv.org (Computer Science)", authors: "Cornell University", abstract: "Repositorio de preimpresiones en ciencias de la computación, inteligencia artificial y sistemas.", year: 1991, field: "computacion", type: "sitio", link: "https://arxiv.org/list/cs/recent" },
            { id: 14, title: "ScienceDirect - Computer Science", authors: "Elsevier", abstract: "Acceso a revistas y libros de ciencias de la computación e ingeniería de sistemas.", year: 1997, field: "sistemas", type: "sitio", link: "https://www.sciencedirect.com/computer-science" },
            { id: 15, title: "SpringerLink - Engineering", authors: "Springer", abstract: "Colección de revistas y conferencias en todas las áreas de ingeniería, incluyendo computación.", year: 1996, field: "informatica", type: "sitio", link: "https://link.springer.com/engineering" },
            { id: 16, title: "ResearchGate", authors: "ResearchGate GmbH", abstract: "Red social para investigadores, con acceso a publicaciones de ingeniería y ciencias.", year: 2008, field: "informatica", type: "sitio", link: "https://www.researchgate.net/" },
            { id: 17, title: "Google Scholar", authors: "Google", abstract: "Buscador académico que indexa revistas, conferencias y patentes de todas las disciplinas.", year: 2004, field: "sistemas", type: "sitio", link: "https://scholar.google.com/" },
            { id: 18, title: "MDPI - Computers", authors: "MDPI", abstract: "Revista de acceso abierto sobre arquitectura de computadores, sistemas embebidos y redes.", year: 2012, field: "computacion", type: "revista", link: "https://www.mdpi.com/journal/computers" },
            { id: 19, title: "Revista Ingeniería de Sistemas", authors: "Universidad de Chile", abstract: "Publicación chilena con enfoque en sistemas de información y modelado.", year: 1985, field: "sistemas", type: "revista", link: "https://revistas.uchile.cl/index.php/ris" },
            { id: 20, title: "Journal of Computer Science and Technology", authors: "Springer", abstract: "Investigación en teoría de la computación, algoritmos y lenguajes de programación.", year: 1986, field: "computacion", type: "revista", link: "https://link.springer.com/journal/11390" },
            { id: 21, title: "Programming and Computer Software", authors: "Springer", abstract: "Revista sobre lenguajes de programación, compiladores e ingeniería de software.", year: 1975, field: "informatica", type: "revista", link: "https://link.springer.com/journal/11086" },
        ];

        // Estado
        let sources = [...initialSources];
        let currentFilter = 'all';
        let currentSearch = '';

        // DOM refs
        const container = document.getElementById('publicationsContainer');
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const resetLink = document.getElementById('resetLink');
        const chips = document.querySelectorAll('.chip');
        const toast = document.getElementById('toast');
        const toastMsg = document.getElementById('toastMsg');
        const pubCountSpan = document.getElementById('pubCount');

        // helpers
        function showToast(msg, isError = false) {
            toastMsg.textContent = msg;
            toast.className = 'toast show';
            if (isError) toast.classList.add('error');
            else toast.classList.remove('error');
            clearTimeout(toast._timer);
            toast._timer = setTimeout(() => toast.classList.remove('show'), 3500);
        }

        async function verifyLink(url) {
            try {
                const controller = new AbortController();
                const timeout = setTimeout(() => controller.abort(), 5000);
                const res = await fetch(url, { method: 'HEAD', mode: 'no-cors', signal: controller.signal });
                clearTimeout(timeout);
                return true;
            } catch (e) {
                return false;
            }
        }

        // renderizar
        async function renderPublications() {
            let filtered = [...sources];

            // filtro por tipo (revista/sitio) o disciplina
            if (currentFilter !== 'all') {
                if (currentFilter === 'revista' || currentFilter === 'sitio') {
                    filtered = filtered.filter(s => s.type === currentFilter);
                } else {
                    filtered = filtered.filter(s => s.field === currentFilter);
                }
            }

            if (currentSearch.trim() !== '') {
                const term = currentSearch.trim().toLowerCase();
                filtered = filtered.filter(s =>
                    s.title.toLowerCase().includes(term) ||
                    s.authors.toLowerCase().includes(term) ||
                    (s.abstract && s.abstract.toLowerCase().includes(term))
                );
            }

            pubCountSpan.textContent = filtered.length;

            if (filtered.length === 0) {
                container.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: rgba(255,255,255,0.3); border-radius: 60px; backdrop-filter: blur(4px);">
                        <i class="fas fa-search" style="font-size: 2.5rem; color: #1b6bff40; margin-bottom: 0.8rem;"></i>
                        <p style="font-size: 1.2rem; font-weight: 500; color: #1f3d5a;">No se encontraron fuentes</p>
                        <p style="color: #4a6f92;">Prueba con otros filtros o términos de búsqueda</p>
                    </div>
                `;
                return;
            }

            let html = '';
            for (const src of filtered) {
                const fieldMap = {
                    'sistemas': 'Ing. Sistemas',
                    'informatica': 'Informática',
                    'computacion': 'Computación'
                };
                let badgeClass = 'badge';
                if (src.field === 'sistemas') badgeClass += ' blue';
                else if (src.field === 'informatica') badgeClass += ' green';
                else if (src.field === 'computacion') badgeClass += ' purple';

                const typeLabel = src.type === 'revista' ? '📰 Revista' : '🌐 Sitio web';
                const typeBadge = src.type === 'revista' ? 'orange' : 'blue';

                html += `
                    <div class="card" data-id="${src.id}" data-link="${src.link}">
                        <div class="badge-link-status" id="status-${src.id}">
                            <i class="fas fa-spinner fa-spin"></i> verificando
                        </div>
                        <div class="card-badge">
                            <span class="badge ${typeBadge}"><i class="fas fa-${src.type === 'revista' ? 'book' : 'globe'}"></i> ${typeLabel}</span>
                            <span class="${badgeClass}"><i class="fas fa-tag"></i> ${fieldMap[src.field] || src.field}</span>
                            ${src.year ? `<span class="badge" style="background: #eef3fa; color: #1f4b7a;"><i class="far fa-calendar-alt"></i> ${src.year}</span>` : ''}
                        </div>
                        <div class="card-title">${src.title}</div>
                        <div class="card-authors"><i class="fas fa-building"></i> ${src.authors}</div>
                        <div class="card-abstract">${src.abstract || 'Sin descripción disponible.'}</div>
                        <div class="card-meta">
                            <span class="year"><i class="fas fa-${src.type === 'revista' ? 'file-alt' : 'link'}"></i> ${src.type === 'revista' ? 'ISSN' : 'Acceso'}</span>
                            <div style="display: flex; gap: 0.5rem; align-items: center;">
                                <a href="${src.link}" target="_blank" class="card-link" rel="noopener noreferrer">
                                    <i class="fas fa-arrow-up-right-from-square"></i> Visitar
                                </a>
                            </div>
                        </div>
                    </div>
                `;
            }
            container.innerHTML = html;

            // Verificar enlaces
            for (const src of filtered) {
                const statusEl = document.getElementById(`status-${src.id}`);
                if (!statusEl) continue;
                try {
                    const valid = await verifyLink(src.link);
                    statusEl.className = `badge-link-status ${valid ? 'valid' : 'invalid'}`;
                    statusEl.innerHTML = valid
                        ? `<i class="fas fa-check-circle"></i> enlace válido`
                        : `<i class="fas fa-exclamation-circle"></i> no accesible`;
                } catch (e) {
                    statusEl.className = 'badge-link-status invalid';
                    statusEl.innerHTML = `<i class="fas fa-exclamation-circle"></i> error de verificación`;
                }
            }
        }

        // Eventos de filtros y búsqueda
        chips.forEach(chip => {
            chip.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                currentFilter = filter;
                chips.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                renderPublications();
            });
        });

        searchBtn.addEventListener('click', () => {
            currentSearch = searchInput.value;
            renderPublications();
        });
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                currentSearch = searchInput.value;
                renderPublications();
            }
        });

        resetLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentFilter = 'all';
            currentSearch = '';
            searchInput.value = '';
            chips.forEach(c => c.classList.remove('active'));
            document.querySelector('.chip[data-filter="all"]').classList.add('active');
            renderPublications();
        });

        // Inicializar
        renderPublications();
    })();
