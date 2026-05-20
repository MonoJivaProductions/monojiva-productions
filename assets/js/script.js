// =======================================================
// MonoJiva Productions - Vanilla JavaScript
// Edit data portfolio dan nomor WhatsApp di file ini.
// =======================================================

const WHATSAPP_NUMBER = '6281234567890'; // Ganti dengan nomor Bapak, format: 62xxxxxxxxxxx

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

const header = document.querySelector('#siteHeader');
const menuBtn = document.querySelector('#menuBtn');
const mobileMenu = document.querySelector('#mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const workGrid = document.querySelector('#workGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.querySelector('#workModal');
const modalContent = document.querySelector('#modalContent');
const closeModal = document.querySelector('#closeModal');
const showreelModal = document.querySelector('#showreelModal');
const playShowreel = document.querySelector('#playShowreel');
const closeShowreel = document.querySelector('#closeShowreel');
const contactForm = document.querySelector('#contactForm');

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 24) {
    header.classList.add('nav-scrolled');
  } else {
    header.classList.remove('nav-scrolled');
  }
});

// Mobile menu
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Render portfolio works
function renderWorks(filter = 'all') {
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

// Open portfolio modal
function openWorkModal(index) {
  const work = works[index];

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

// Close portfolio modal
function closeWorkModal() {
  modal.classList.add('hidden');
  modal.classList.remove('flex');

  // Ini penting supaya video YouTube berhenti saat modal ditutup
  modalContent.innerHTML = '';
}

closeModal.addEventListener('click', closeWorkModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeWorkModal();
  }
});

// Close modal with ESC key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeWorkModal();
    }

    if (!showreelModal.classList.contains('hidden')) {
      closeShowreelModal();
    }
  }
});

// Filter buttons
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    button.classList.add('active');
    renderWorks(button.dataset.filter);
  });
});

// Showreel modal
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

// Contact form to WhatsApp
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const contact = document.querySelector('#contactInput').value.trim();
  const projectType = document.querySelector('#projectType').value;
  const message = document.querySelector('#message').value.trim();

  const text = 
    `Halo MonoJiva Productions,%0A%0A` +
    `Saya ingin diskusi project.%0A%0A` +
    `Nama: ${encodeURIComponent(name)}%0A` +
    `Kontak: ${encodeURIComponent(contact)}%0A` +
    `Jenis Project: ${encodeURIComponent(projectType)}%0A` +
    `Pesan: ${encodeURIComponent(message)}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  window.open(url, '_blank');
});

// Reveal animation
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

// Footer year
document.querySelector('#year').textContent = new Date().getFullYear();

// Initial render
renderWorks();