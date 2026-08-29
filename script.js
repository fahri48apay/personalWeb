/* Non-JS fallback: hanya sembunyikan elemen reveal jika JS benar-benar berjalan */
document.documentElement.classList.add('js');

// Elemen inti
const menuButton = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const contactForm = document.querySelector('#contact-form');
const timelineFill = document.querySelector('.timeline-fill');
const educationSection = document.querySelector('.education');
const scrollTopBtn = document.querySelector('.scroll-top');
const body = document.body;

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Scroll reveal (IntersectionObserver) ---------- */
const revealEls = document.querySelectorAll('[data-reveal]');

function showAll() {
    revealEls.forEach(el => el.classList.add('in-view'));
}

if (reduceMotion || !('IntersectionObserver' in window)) {
    showAll();
} else {
    // Stagger delay menurut posisi elemen
    revealEls.forEach((el, i) => {
        el.style.setProperty('--delay', `${Math.min(i * 70, 420)}ms`);
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    revealEls.forEach(el => observer.observe(el));
}

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

/* ---------- Loop scroll terpadu (satu requestAnimationFrame) ---------- */
let ticking = false;

function updateScrollFx() {
    ticking = false;

    const scrollY = window.scrollY;

    // Header menyusut
    header.classList.toggle('scrolled', scrollY > 40);

    // Tombol kembali ke atas
    scrollTopBtn.classList.toggle('show', scrollY > 400);

    // Timeline fill — hanya jika motion diizinkan (reduced motion dikecualikan)
    if (!reduceMotion && timelineFill && educationSection) {
        const rect = educationSection.getBoundingClientRect();
        const progress = (window.innerHeight * 0.55 - rect.top) / rect.height;
        const clamped = Math.max(0, Math.min(1, progress));
        timelineFill.style.height = `${(clamped * 100).toFixed(2)}%`;
    }

    updateActiveLink();
}

function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateScrollFx);
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll, { passive: true });
updateScrollFx();

/* ---------- Tombol kembali ke atas ---------- */
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
});

/* ---------- Hero entrance: lepas kelas preload setelah muat ---------- */
window.addEventListener('load', () => {
    requestAnimationFrame(() => requestAnimationFrame(() => body.classList.remove('preload')));
});

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
