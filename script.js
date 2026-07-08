    (function() {
            // Cargar fuentes desde CONFIG
            let sources = [...CONFIG.sources];
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
