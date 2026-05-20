// =======================================================
// MonoJiva Productions - Vanilla JavaScript
// File: assets/js/script.js
// Edit data portfolio, nomor WhatsApp, email, dan PDF showreel di file ini.
// =======================================================

'use strict';

// =======================================================
// BASIC CONFIG
// =======================================================

const WHATSAPP_NUMBER = '6282117348472'; // Format: 62xxxxxxxxxxx
const EMAIL_ADDRESS = 'kican116@gmail.com';

// Sesuaikan dengan nama file PDF di folder assets/pdf
// Berdasarkan HTML Bapak: assets/pdf/MonoJiva_Showreel.pdf
const SHOWREEL_PDF = 'assets/pdf/MonoJiva_Showreel.pdf';

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
// HELPER FUNCTIONS
// =======================================================

function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return document.querySelectorAll(selector);
}

function safeText(value) {
  return String(value ?? '');
}

// =======================================================
// MAIN APP
// =======================================================

document.addEventListener('DOMContentLoaded', () => {
  // =======================================================
  // ELEMENT SELECTOR
  // =======================================================

  const header = qs('#siteHeader');
  const menuBtn = qs('#menuBtn');
  const mobileMenu = qs('#mobileMenu');
  const mobileLinks = qsa('.mobile-link');

  const workGrid = qs('#workGrid');
  const filterButtons = qsa('.filter-btn');

  const modal = qs('#workModal');
  const modalContent = qs('#modalContent');
  const closeModal = qs('#closeModal');

  const playShowreel = qs('#playShowreel');

  const contactForm = qs('#contactForm');
  const sendWhatsapp = qs('#sendWhatsapp');
  const sendEmail = qs('#sendEmail');

  const yearElement = qs('#year');

  // =======================================================
  // NAVBAR SCROLL EFFECT
  // =======================================================

  function handleNavbarScroll() {
    if (!header) return;

    if (window.scrollY > 24) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  }

  handleNavbarScroll();
  window.addEventListener('scroll', handleNavbarScroll);

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
  // PORTFOLIO RENDER
  // =======================================================

  function renderWorks(filter = 'all') {
    if (!workGrid) return;

    const filteredWorks = filter === 'all'
      ? works
      : works.filter((work) => work.category === filter);

    if (filteredWorks.length === 0) {
      workGrid.innerHTML = `
        <div class="col-span-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center text-muted">
          Belum ada karya untuk kategori ini.
        </div>
      `;
      return;
    }

    workGrid.innerHTML = filteredWorks.map((work) => {
      const originalIndex = works.indexOf(work);

      return `
        <article class="work-card reveal show" data-index="${originalIndex}">
          <div class="work-poster" style="background-image: ${safeText(work.gradient)};">
            <div class="absolute left-5 top-5 z-[1] rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-gold backdrop-blur">
              ${safeText(work.categoryLabel)}
            </div>

            <div class="work-meta">
              <p class="text-xs font-bold uppercase tracking-[0.25em] text-mist/70">
                ${safeText(work.year)} · ${safeText(work.mood)}
              </p>

              <h3 class="mt-3 font-display text-3xl font-black text-white">
                ${safeText(work.title)}
              </h3>

              <p class="mt-3 line-clamp-2 text-sm leading-7 text-mist/75">
                ${safeText(work.description)}
              </p>

              <button 
                class="open-work mt-5 rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-ink transition hover:bg-gold" 
                data-index="${originalIndex}"
                type="button"
              >
                View Detail
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    qsa('.open-work').forEach((button) => {
      button.addEventListener('click', () => {
        const index = Number(button.dataset.index);
        openWorkModal(index);
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
            src="${safeText(work.video)}"
            title="${safeText(work.title)}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
      `
      : `
        <div class="aspect-video overflow-hidden rounded-[1.5rem] bg-cover bg-center" style="background-image: ${safeText(work.gradient)};">
          <div class="flex h-full w-full items-center justify-center bg-black/35 text-center">
            <div class="px-6">
              <p class="text-sm font-black uppercase tracking-[0.35em] text-gold">
                Preview
              </p>

              <h4 class="mt-4 font-display text-4xl font-black text-white">
                ${safeText(work.title)}
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
          ${safeText(work.categoryLabel)} · ${safeText(work.year)}
        </p>

        <h3 class="mt-4 font-display text-5xl font-black text-white">
          ${safeText(work.title)}
        </h3>

        <p class="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-muted">
          ${safeText(work.mood)}
        </p>

        <p class="mt-6 text-lg leading-9 text-mist/78">
          ${safeText(work.description)}
        </p>

        <div class="mt-8 grid gap-4 md:grid-cols-3">
          <div class="glass-card">
            <strong>Role</strong>
            <span>${safeText(work.role)}</span>
          </div>

          <div class="glass-card">
            <strong>Format</strong>
            <span>${safeText(work.format)}</span>
          </div>

          <div class="glass-card">
            <strong>Delivery</strong>
            <span>${safeText(work.delivery)}</span>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  }

  function closeWorkModal() {
    if (!modal || !modalContent) return;

    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');

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
      renderWorks(button.dataset.filter || 'all');
    });
  });

  // =======================================================
  // SHOWREEL PDF
  // =======================================================
  // Aman untuk dua kondisi:
  // 1. Kalau HTML punya <a href="assets/pdf/MonoJiva_Showreel.pdf">, link tetap jalan.
  // 2. Kalau HTML punya id="playShowreel", JavaScript akan buka PDF dari config.
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
    const nameInput = qs('#name');
    const contactInput = qs('#contactInput');
    const projectTypeInput = qs('#projectType');
    const messageInput = qs('#message');

    return {
      name: nameInput ? nameInput.value.trim() : '',
      contact: contactInput ? contactInput.value.trim() : '',
      projectType: projectTypeInput ? projectTypeInput.value : '',
      message: messageInput ? messageInput.value.trim() : ''
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

    window.open(url, '_blank', 'noopener,noreferrer');
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

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      openWhatsapp();
    });
  }

  if (sendWhatsapp) {
    sendWhatsapp.addEventListener('click', (event) => {
      event.preventDefault();
      openWhatsapp();
    });
  }

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
    if (event.key !== 'Escape') return;

    if (modal && !modal.classList.contains('hidden')) {
      closeWorkModal();
    }
  });

  // =======================================================
  // REVEAL ANIMATION
  // =======================================================
  // Perbaikan penting:
  // Kalau IntersectionObserver gagal / JavaScript telat jalan di GitHub,
  // elemen .reveal tetap dipaksa muncul agar halaman tidak kosong.
  // =======================================================

  function showAllRevealElements() {
    qsa('.reveal').forEach((element) => {
      element.classList.add('show');
    });
  }

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    qsa('.reveal').forEach((element) => {
      revealObserver.observe(element);
    });

    // Fallback supaya tidak blank di GitHub Pages
    setTimeout(showAllRevealElements, 900);
  } else {
    showAllRevealElements();
  }

  // =======================================================
  // FOOTER YEAR
  // =======================================================

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // =======================================================
  // INITIAL RENDER
  // =======================================================

  renderWorks();
});
