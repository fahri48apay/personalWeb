// Elemen inti
const menuButton = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const contactForm = document.querySelector('#contact-form');

/* ---------- Menu mobile ---------- */
function closeMenu() {
    navbar.classList.remove('active');
    menuButton.classList.remove('bx-x');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Buka menu navigasi');
}

menuButton.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('active');
    menuButton.classList.toggle('bx-x', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
});

// Tutup menu saat tautan diklik, ESC ditekan, atau klik di luar
navLinks.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
});

/* ---------- Scroll spy: tandai tautan aktif ---------- */
function updateActiveLink() {
    let currentId = null;
    const scrollPos = window.scrollY;

    sections.forEach(sec => {
        const top = sec.offsetTop - 160;
        const bottom = top + sec.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
            currentId = sec.id;
        }
    });

    if (!currentId) return;

    navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === '#' + currentId;
        link.classList.toggle('active', isActive);
    });
}
window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();

/* ---------- Form kontak: kirim pesan ke WhatsApp (tanpa backend) ---------- */
contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const data = new FormData(contactForm);
    const pesan = [
        `Halo, saya ${data.get('nama')}.`,
        `Email: ${data.get('email')}`,
        `No. HP: ${data.get('telepon') || '-'}`,
        `Subjek: ${data.get('subjek') || '-'}`,
        '',
        data.get('pesan'),
    ].join('\n');

    const url = `https://wa.me/6285179944894?text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank', 'noopener');
});