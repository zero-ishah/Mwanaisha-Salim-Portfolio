const portfolioItems = [
  { src: "images/image-006.webp", title: "Ayah of the day anwaar", category: "faith" },
  { src: "images/image-007.webp", title: "Ayah of the day anwaar2", category: "faith" },
  { src: "images/image-001.webp", title: "Ayat of the day 1", category: "faith" },
  { src: "images/image-008.webp", title: "Challenge poster", category: "community" },
  { src: "images/image-010.webp", title: "Did you know", category: "social" },
  { src: "images/image-011.webp", title: "Habaib quote Ali alfijr", category: "faith" },
  { src: "images/image-002.webp", title: "Habib Abubakar", category: "faith" },
  { src: "images/image-012.webp", title: "Hadith of the day", category: "faith" },
  { src: "images/image-003.webp", title: "Hadith of the day", category: "faith" },
  { src: "images/image-004.webp", title: "Hadith of the day", category: "faith" },
  { src: "images/image-013.webp", title: "Hadith of the day1", category: "faith" },
  { src: "images/image-014.webp", title: "Jumuah mubarak", category: "faith" },
  { src: "images/image-015.webp", title: "Jumuah mubarak minar", category: "faith" },
  { src: "images/image-005.webp", title: "Q&A 2 minar", category: "social" },
  { src: "images/image-016.webp", title: "Q&A Minar", category: "social" },
  { src: "images/image-036.webp", title: "Ayah of the week", category: "faith" },
  { src: "images/image-037.webp", title: "Ayah of the week", category: "faith" },
  { src: "images/image-031.webp", title: "Challenge poster", category: "community" },
  { src: "images/image-038.webp", title: "Click and go 2", category: "social" },
  { src: "images/image-039.webp", title: "Click go coming soon", category: "social" },
  { src: "images/image-040.webp", title: "Click go wolf lubricants", category: "social" },
  { src: "images/image-041.webp", title: "Did you know Umrah Minar", category: "community" },
  { src: "images/image-042.webp", title: "Habaib quote", category: "faith" },
  { src: "images/image-043.webp", title: "Hadith of the day", category: "faith" },
  { src: "images/image-044.webp", title: "Hadith of the week", category: "faith" },
  { src: "images/image-032.webp", title: "Jumuah mubarak", category: "faith" },
  { src: "images/image-045.webp", title: "Jumuah mubarak Minar", category: "faith" },
  { src: "images/image-033.webp", title: "Jumuah mubarak", category: "faith" },
  { src: "images/image-034.webp", title: "Masjid Anwaar Sheikh Abdullahi quote", category: "faith" },
  { src: "images/image-035.webp", title: "Minar did you know safaris", category: "community" },
  { src: "images/image-046.webp", title: "Alhajun Jumuah Mubarak", category: "faith" },
  { src: "images/image-047.webp", title: "Alhajun mistakes to avoid during umrah", category: "community" },
  { src: "images/image-048.webp", title: "Hadith of the day", category: "faith" },
  { src: "images/image-049.webp", title: "Ayat of the day", category: "faith" },
  { src: "images/image-050.webp", title: "Ayat of the day", category: "faith" },
  { src: "images/image-053.webp", title: "Did you know", category: "social" },
  { src: "images/image-051.webp", title: "Habaibs words", category: "faith" },
  { src: "images/image-054.webp", title: "Hadith of the day", category: "faith" },
  { src: "images/image-052.webp", title: "Jumuah mubarak", category: "faith" },
  { src: "images/image-055.webp", title: "Sheikh Abdillahi Yusuf quote", category: "faith" },
  { src: "images/image-056.webp", title: "Zakat", category: "community" },
  { src: "images/image-017.webp", title: "Al-habib quote", category: "faith" },
  { src: "images/image-018.webp", title: "Alhajun Jumuah Mubarak", category: "faith" },
  { src: "images/image-019.webp", title: "Ayat of the day", category: "faith" },
  { src: "images/image-020.webp", title: "Ayat of the day", category: "faith" },
  { src: "images/image-026.webp", title: "Did you know", category: "social" },
  { src: "images/image-021.webp", title: "Egypt draft", category: "social" },
  { src: "images/image-027.webp", title: "Hadith of the day", category: "faith" },
  { src: "images/image-028.webp", title: "Hadith of the week", category: "faith" },
  { src: "images/image-022.webp", title: "Jumuah Mubarak", category: "faith" },
  { src: "images/image-025.webp", title: "Jumuah mubarak lamu bites", category: "faith" },
  { src: "images/image-023.webp", title: "Jumuah Mubarak Minar", category: "faith" },
  { src: "images/image-024.webp", title: "Jumuah Mubarak Nwmc", category: "faith" },
  { src: "images/image-029.webp", title: "Sheikh quote masjid anwar", category: "faith" },
  { src: "images/image-030.webp", title: "Week challenge", category: "community" },
  { src: "images/image-060.webp", title: "Abdullah Salih Quote", category: "faith" },
  { src: "images/image-061.webp", title: "Alhajun Jumuah poster", category: "faith" },
  { src: "images/image-059.webp", title: "Almawaddah Juma poster 19", category: "social" },
  { src: "images/image-058.webp", title: "Almawaddah Juma poster", category: "social" },
  { src: "images/image-062.webp", title: "Anwaaar sheikh Quote", category: "faith" },
  { src: "images/image-064.webp", title: "Anwaar foundation Habaib quote", category: "faith" },
  { src: "images/image-063.webp", title: "Anwaar Foundation quote of the week", category: "faith" },
  { src: "images/image-065.webp", title: "Jumuah Mubarak", category: "faith" },
  { src: "images/image-072.webp", title: "Ayah of the week", category: "faith" },
  { src: "images/image-066.webp", title: "Did you know 2", category: "social", reelGroup: "minar-did-you-know-template" },
  { src: "images/image-068.webp", title: "Did you know fact 1", category: "social", reelGroup: "minar-did-you-know-template" },
  { src: "images/image-067.webp", title: "Did you know Minar", category: "social", reelGroup: "minar-did-you-know-template" },
  { src: "images/image-069.webp", title: "Hadith of the week 4 anwaar foundation", category: "faith" },
  { src: "images/image-070.webp", title: "Minar Jumuah Mubarak week 4", category: "faith" },
  { src: "images/image-073.webp", title: "Nairobi west Jumuah mubarak week 4", category: "faith" },
  { src: "images/image-074.webp", title: "Nairobi west jumuah mubarak week 4", category: "faith" },
  { src: "images/image-071.webp", title: "Jumuah mubarak week 4", category: "faith" },
  { src: "images/image-075.webp", title: "Week challenge", category: "community" },
  { src: "images/image-076.webp", title: "Weekday challenge masjid taqwa", category: "community" },
  { src: "images/jienzi-africa/jienzi-leaflet-copy.webp", title: "JiEnzi Skates Club", category: "community" },
  { src: "images/jienzi-africa/jienzi-mashujaa.webp", title: "Happy Mashujaa Day", category: "social" },
  { src: "images/jienzi-africa/jienzi-mazingira-day-copy.webp", title: "Mazingira Day Campaign", category: "community" },
  { src: "images/jienzi-africa/jienzi-quote-1.webp", title: "JiEnzi Focus Quote", category: "social" },
  { src: "images/jienzi-africa/slide-2.webp", title: "Why We Exist", category: "community" },
  { src: "images/jienzi-africa/slide-3-copy.webp", title: "What We Do", category: "community" }
];

const gallery = document.querySelector(".gallery-grid");
const reelTrack = document.querySelector(".reel-track");
const reelBar = document.querySelector(".reel-bar");
const filterButtons = document.querySelectorAll(".filter-chip");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const lightboxClose = document.querySelector(".lightbox-close");
const motionFrames = document.querySelectorAll(".motion-frame");
const themeToggle = document.querySelector(".theme-toggle");
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const mainNav = document.querySelector(".main-nav");

const savedTheme = window.localStorage.getItem("mwanaisha-portfolio-theme");
if (savedTheme === "light" || savedTheme === "dark") document.body.dataset.theme = savedTheme;

function syncThemeControl() {
  const isDark = document.body.dataset.theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
  themeToggle.title = `Switch to ${isDark ? "light" : "dark"} theme`;
}

syncThemeControl();

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  document.body.dataset.theme = nextTheme;
  window.localStorage.setItem("mwanaisha-portfolio-theme", nextTheme);
  syncThemeControl();
});

mobileNavToggle.addEventListener("click", () => {
  const isOpen = mobileNavToggle.getAttribute("aria-expanded") === "true";
  mobileNavToggle.setAttribute("aria-expanded", String(!isOpen));
  mobileNavToggle.setAttribute("aria-label", `${isOpen ? "Open" : "Close"} navigation menu`);
  mainNav.classList.toggle("is-open", !isOpen);
});

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    mobileNavToggle.setAttribute("aria-expanded", "false");
    mobileNavToggle.setAttribute("aria-label", "Open navigation menu");
    mainNav.classList.remove("is-open");
  }
});

function titleCaseCategory(category) {
  return category.charAt(0).toUpperCase() + category.slice(1);
}

function renderPortfolio() {
  if (gallery) {
    gallery.innerHTML = portfolioItems.map((item) => `
      <article class="work-card" data-category="${item.category}">
        <button type="button" class="work-open" aria-label="Open ${item.title} design">
          <img src="${item.src}" alt="${item.title} design" loading="lazy" decoding="async">
        </button>
        <div>
          <span>${titleCaseCategory(item.category)}</span>
          <h3>${item.title}</h3>
        </div>
      </article>
    `).join("");
  }

  renderReel();
}

function renderReel(category = "all") {
  if (!reelTrack) return;

  const seenGroups = new Set();
  const uniqueItems = portfolioItems.filter((item) => {
    if (category !== "all" && item.category !== category) return false;
    const group = item.reelGroup || item.src;
    if (seenGroups.has(group)) return false;
    seenGroups.add(group);
    return true;
  });

  reelTrack.innerHTML = uniqueItems.map((item) => `<img src="${item.src}" alt="${item.title} poster" loading="lazy" decoding="async">`).join("");
}

renderPortfolio();

if (reelBar && reelTrack && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let previousTime = 0;
  let paused = false;
  const pixelsPerMillisecond = 0.018;

  const advanceReel = (time) => {
    if (!paused && previousTime) {
      reelBar.scrollLeft += (time - previousTime) * pixelsPerMillisecond;
      const firstItem = reelTrack.firstElementChild;
      const gap = Number.parseFloat(getComputedStyle(reelTrack).columnGap) || 0;
      const itemStride = firstItem ? firstItem.getBoundingClientRect().width + gap : 0;

      if (itemStride && reelBar.scrollLeft >= itemStride) {
        reelTrack.append(firstItem);
        reelBar.scrollLeft -= itemStride;
      }
    }

    previousTime = time;
    window.requestAnimationFrame(advanceReel);
  };

  reelBar.addEventListener("pointerenter", () => { paused = true; });
  reelBar.addEventListener("pointerleave", () => { paused = false; previousTime = 0; });
  window.requestAnimationFrame(advanceReel);
}

motionFrames.forEach((frame, frameIndex) => {
  const images = frame.querySelectorAll("img");
  let activeIndex = 0;

  window.setInterval(() => {
    images[activeIndex].classList.remove("active");
    activeIndex = (activeIndex + 1) % images.length;
    images[activeIndex].classList.add("active");
  }, frameIndex === 0 ? 7200 : 8800);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    const workCards = gallery.querySelectorAll(".work-card");

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    workCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.hidden = !shouldShow;
      card.style.removeProperty("opacity");
      card.style.removeProperty("transform");
    });
  });
});

if (gallery && lightbox && lightboxImage && lightboxClose) {
  gallery.addEventListener("click", (event) => {
    const button = event.target.closest(".work-open");

    if (button) {
      const image = button.querySelector("img");
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt;
      lightbox.showModal();
    }
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.close();
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.close();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.open) {
      lightbox.close();
    }
  });
}
