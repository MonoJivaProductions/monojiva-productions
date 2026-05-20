// =======================================================
// MonoJiva Productions - Vanilla JavaScript
// Edit data portfolio, nomor WhatsApp, email, dan PDF showreel di file ini.
// =======================================================

const WHATSAPP_NUMBER = '6282117348472'; // Format: 62xxxxxxxxxxx
const EMAIL_ADDRESS = 'kican116@gmail.com';
const SHOWREEL_PDF = 'assets/pdf/showreel.pdf';

// =======================================================
// DATA PORTFOLIO
// =======================================================

const works = [
  {
    title: 'Langit Tak Pernah Diam',
    year: '2026',
    category: 'music-video',
    categoryLabel: 'Music Video',
    mood: 'Lonely · Warm · Reflective',
    description: 'Pesan untuk terus bertahan dan berjuang bagi siapa saja yang sedang merasa rapuh dan lelah dalam menjalani ujian hidup.',
    role: 'Creative Direction',
    format: 'Music Video',
    delivery: 'FHD',
    video: 'https://www.youtube.com/embed/J4fnxKDn9Ks?rel=0',
    gradient: 'linear-gradient(135deg, rgba(214,168,92,0.22), rgba(8,10,15,0.35)), url("https://img.youtube.com/vi/J4fnxKDn9Ks/hqdefault.jpg")'
  },
  {
    title: 'Ruang yang Hilang',
    year: '2026',
    category: 'music-video',
    categoryLabel: 'Music Video',
    mood: 'Melancholic · Soft · Dreamy',
    description: 'Music video dengan permainan cahaya jendela, slow movement, dan color mood hangat.',
    role: 'Director',
    format: 'Music Video',
    delivery: '16:9 / 9:16',
    video: '',
    gradient: 'linear-gradient(135deg, rgba(214,168,92,0.35), rgba(15,35,56,0.3)), url("assets/img/poster-2.svg")'
  },
  {
    title: 'Niskala Campaign',
    year: '2025',
    category: 'campaign',
    categoryLabel: 'Visual Campaign',
    mood: 'Brand Film · Poetic · Minimal',
    description: 'Campaign visual untuk brand kreatif dengan tone personal dan narasi batin.',
    role: 'Creative Direction',
    format: 'Visual Campaign',
    delivery: 'Reels / Feed / Teaser',
    video: '',
    gradient: 'linear-gradient(135deg, rgba(15,35,56,0.65), rgba(8,10,15,0.12)), url("assets/img/poster-3.svg")'
  },
  {
    title: 'Kota Dalam Kepala',
    year: '2025',
    category: 'documentary',
    categoryLabel: 'Documentary',
    mood: 'Urban · Human · Honest',
    description: 'Dokumenter pendek tentang ruang, rutinitas, dan manusia yang menyimpan cerita sendiri.',
    role: 'Director',
    format: 'Documentary',
    delivery: 'FHD / 4K',
    video: '',
    gradient: 'linear-gradient(135deg, rgba(147,164,183,0.25), rgba(8,10,15,0.25)), url("assets/img/poster-4.svg")'
  },
  {
    title: 'Letters to Myself',
    year: '2025',
    category: 'film',
    categoryLabel: 'Short Film',
    mood: 'Intimate · Slow Cinema · Hopeful',
    description: 'Eksplorasi visual tentang surat yang tidak pernah dikirim dan harapan yang tertunda.',
    role: 'Director',
    format: 'Short Film',
    delivery: '16:9 Cinema Format',
    video: '',
    gradient: 'linear-gradient(135deg, rgba(214,168,92,0.22), rgba(184,80,66,0.22)), url("assets/img/poster-5.svg")'
  },
  {
    title: 'Inner Hour Session',
    year: '2026',
    category: 'music-video',
    categoryLabel: 'Music Video',
    mood: 'Performance · Low Light · Emotional',
    description: 'Live session dengan lighting minimal, framing dekat, dan editing bernapas.',
    role: 'Creative Direction',
    format: 'Live Session',
    delivery: 'YouTube / Instagram',
    video: '',
    gradient: 'linear-gradient(135deg, rgba(184,80,66,0.4), rgba(15,35,56,0.45)), url("assets/img/poster-6.svg")'
  }
];

// =======================================================
// ELEMENT SELECTOR
// =======================================================

const header = document.querySelector('#siteHeader');
const menuBtn = document.querySelector('#menuBtn');
const mobileMenu = document.querySelector('#mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

const workGrid = document.querySelector('#workGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

const modal = document.querySelector('#workModal');
const modalContent = document.querySelector('#modalContent');
const closeModal = document.querySelector('#closeModal');

const playShowreel = document.querySelector('#playShowreel');

const contactForm = document.querySelector('#contactForm');
const sendWhatsapp = document.querySelector('#sendWhatsapp');
const sendEmail = document.querySelector('#sendEmail');

// =======================================================
// NAVBAR SCROLL EFFECT
// =======================================================

window.addEventListener('scroll', () => {
  if (!header) return;

  if (window.scrollY > 24) {
    header.classList.add('nav-scrolled');
  } else {
    header.classList.remove('nav-scrolled');
  }
});

// =======================================================
// MOBILE MENU
// =======================================================

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (mobileMenu) {
      mobileMenu.classList.add('hidden');
    }
  });
});

// =======================================================
// RENDER PORTFOLIO WORKS
// =======================================================

function renderWorks(filter = 'all') {
  if (!workGrid) return;

  const filteredWorks = filter === 'all'
    ? works
    : works.filter((work) => work.category === filter);

  workGrid.innerHTML = filteredWorks.map((work) => {
    const originalIndex = works.indexOf(work);

    return `
      <article class="work-card reveal show" data-index="${originalIndex}">
        <div class="work-poster" style="background-image: ${work.gradient};">
          <div class="absolute left-5 top-5 z-[1] rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-gold backdrop-blur">
            ${work.categoryLabel}
          </div>

          <div class="work-meta">
            <p class="text-xs font-bold uppercase tracking-[0.25em] text-mist/70">
              ${work.year} · ${work.mood}
            </p>

            <h3 class="mt-3 font-display text-3xl font-black text-white">
              ${work.title}
            </h3>

            <p class="mt-3 line-clamp-2 text-sm leading-7 text-mist/75">
              ${work.description}
            </p>

            <button class="open-work mt-5 rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-ink transition hover:bg-gold" data-index="${originalIndex}">
              View Detail
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  document.querySelectorAll('.open-work').forEach((button) => {
    button.addEventListener('click', () => {
      openWorkModal(Number(button.dataset.index));
    });
  });
}

// =======================================================
// PORTFOLIO MODAL
// =======================================================

function openWorkModal(index) {
  if (!modal || !modalContent) return;

  const work = works[index];
  if (!work) return;

  const mediaContent = work.video
    ? `
      <div class="aspect-video overflow-hidden rounded-[1.5rem] bg-black">
        <iframe
          class="h-full w-full"
          src="${work.video}"
          title="${work.title}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>
    `
    : `
      <div class="aspect-video overflow-hidden rounded-[1.5rem] bg-cover bg-center" style="background-image: ${work.gradient};">
        <div class="flex h-full w-full items-center justify-center bg-black/35 text-center">
          <div class="px-6">
            <p class="text-sm font-black uppercase tracking-[0.35em] text-gold">
              Preview
            </p>
            <h4 class="mt-4 font-display text-4xl font-black text-white">
              ${work.title}
            </h4>
            <p class="mx-auto mt-3 max-w-md text-sm leading-7 text-mist/80">
              Video belum ditambahkan untuk project ini.
            </p>
          </div>
        </div>
      </div>
    `;

  modalContent.innerHTML = `
    ${mediaContent}

    <div class="mt-8">
      <p class="text-xs font-black uppercase tracking-[0.28em] text-gold">
        ${work.categoryLabel} · ${work.year}
      </p>

      <h3 class="mt-4 font-display text-5xl font-black text-white">
        ${work.title}
      </h3>

      <p class="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-muted">
        ${work.mood}
      </p>

      <p class="mt-6 text-lg leading-9 text-mist/78">
        ${work.description}
      </p>

      <div class="mt-8 grid gap-4 md:grid-cols-3">
        <div class="glass-card">
          <strong>Role</strong>
          <span>${work.role}</span>
        </div>

        <div class="glass-card">
          <strong>Format</strong>
          <span>${work.format}</span>
        </div>

        <div class="glass-card">
          <strong>Delivery</strong>
          <span>${work.delivery}</span>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeWorkModal() {
  if (!modal || !modalContent) return;

  modal.classList.add('hidden');
  modal.classList.remove('flex');

  // Supaya video YouTube berhenti saat modal ditutup
  modalContent.innerHTML = '';
}

if (closeModal) {
  closeModal.addEventListener('click', closeWorkModal);
}

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeWorkModal();
    }
  });
}

// =======================================================
// FILTER PORTFOLIO
// =======================================================

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    button.classList.add('active');
    renderWorks(button.dataset.filter);
  });
});

// =======================================================
// SHOWREEL PDF
// =======================================================
// Mode sekarang: klik showreel akan membuka file PDF.
// Pastikan file PDF ada di: assets/pdf/showreel.pdf
//
// Kode modal showreel lama di HTML boleh tetap disimpan,
// tetapi dijadikan komentar agar tidak aktif.
// =======================================================

if (playShowreel) {
  playShowreel.addEventListener('click', (event) => {
    event.preventDefault();
    window.open(SHOWREEL_PDF, '_blank', 'noopener,noreferrer');
  });
}

/*
SHOWREEL MODAL LAMA - DINONAKTIFKAN SEMENTARA

const showreelModal = document.querySelector('#showreelModal');
const closeShowreel = document.querySelector('#closeShowreel');

function openShowreelModal() {
  showreelModal.classList.remove('hidden');
  showreelModal.classList.add('flex');
}

function closeShowreelModal() {
  showreelModal.classList.add('hidden');
  showreelModal.classList.remove('flex');
}

playShowreel.addEventListener('click', openShowreelModal);
closeShowreel.addEventListener('click', closeShowreelModal);

showreelModal.addEventListener('click', (event) => {
  if (event.target === showreelModal) {
    closeShowreelModal();
  }
});
*/

// =======================================================
// CONTACT FORM TO WHATSAPP AND EMAIL
// =======================================================

function getContactData() {
  return {
    name: document.querySelector('#name')?.value.trim() || '',
    contact: document.querySelector('#contactInput')?.value.trim() || '',
    projectType: document.querySelector('#projectType')?.value || '',
    message: document.querySelector('#message')?.value.trim() || ''
  };
}

function validateContactData(data) {
  if (!data.name || !data.contact || !data.message) {
    alert('Mohon isi Nama, Kontak, dan Pesan terlebih dahulu.');
    return false;
  }

  return true;
}

function buildMessage(data) {
  return `Halo MonoJiva Productions,

Saya ingin diskusi project.

Nama: ${data.name}
Kontak: ${data.contact}
Jenis Project: ${data.projectType}

Pesan:
${data.message}`;
}

function openWhatsapp() {
  const data = getContactData();

  if (!validateContactData(data)) {
    return;
  }

  const text = encodeURIComponent(buildMessage(data));
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

  window.open(url, '_blank');
}

function openEmail() {
  const data = getContactData();

  if (!validateContactData(data)) {
    return;
  }

  const subject = encodeURIComponent(`Project Inquiry - ${data.projectType}`);
  const body = encodeURIComponent(buildMessage(data));
  const url = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;

  window.location.href = url;
}

// Kalau form lama masih hanya punya 1 tombol submit,
// maka submit akan diarahkan ke WhatsApp.
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    openWhatsapp();
  });
}

// Kalau Bapak menambahkan tombol khusus WhatsApp dengan id="sendWhatsapp"
if (sendWhatsapp) {
  sendWhatsapp.addEventListener('click', (event) => {
    event.preventDefault();
    openWhatsapp();
  });
}

// Kalau Bapak menambahkan tombol khusus Email dengan id="sendEmail"
if (sendEmail) {
  sendEmail.addEventListener('click', (event) => {
    event.preventDefault();
    openEmail();
  });
}

// =======================================================
// CLOSE MODAL WITH ESC KEY
// =======================================================

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (modal && !modal.classList.contains('hidden')) {
      closeWorkModal();
    }
  }
});

// =======================================================
// REVEAL ANIMATION
// =======================================================

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((element) => {
  revealObserver.observe(element);
});

// =======================================================
// FOOTER YEAR
// =======================================================

const yearElement = document.querySelector('#year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// =======================================================
// INITIAL RENDER
// =======================================================

renderWorks();
