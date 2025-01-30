document.addEventListener('DOMContentLoaded', () => {
    const contentScroller = document.querySelector('.content-scroller');
    const navLinks = document.querySelectorAll('.nav-link');

    function loadSection(sectionId) {
        const sectionData = contentData[sectionId];
        contentScroller.innerHTML = `
            <section class="section">
                <h2 class="section-header">${sectionData.title}</h2>
                ${sectionData.content}
            </section>
        `;
    }

    function setActiveLink(activeLink) {
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            loadSection(sectionId);
            setActiveLink(link);
        });
    });

    // Load initial section
    loadSection('summary');
    setActiveLink(document.querySelector('[href="#summary"]'));
});