/**
 * WanderHums - Master Interactive Controller
 * Handles Trip Filtering, Itinerary Previews, Booking Modal,
 * Callback Requests, Wishlist, and Social Proof Notifications
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initTripsRendering();
  initHeroSearch();
  initFaqAccordion();
  initModals();
  initWishlist();
  initSocialProofToasts();
  initMobileMenu();
});

/* ---------------------------------------------------------
   Navbar Scroll Effect
   --------------------------------------------------------- */
function initNavbarScroll() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ---------------------------------------------------------
   Trips Rendering & Filtering
   --------------------------------------------------------- */
let currentCategoryFilter = 'all';
let currentSearchQuery = '';

function initTripsRendering() {
  renderTrips();

  // Tab buttons
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategoryFilter = btn.dataset.category || 'all';
      renderTrips();
    });
  });

  // Circular category items
  const catCards = document.querySelectorAll('.category-card');
  catCards.forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.dataset.category;
      if (cat) {
        currentCategoryFilter = cat;
        // Update tab buttons
        tabButtons.forEach(b => {
          b.classList.toggle('active', b.dataset.category === cat);
        });
        // Scroll smoothly to trips section
        document.getElementById('trending-trips')?.scrollIntoView({ behavior: 'smooth' });
        renderTrips();
      }
    });
  });
}

function renderTrips() {
  const container = document.getElementById('trips-container');
  if (!container) return;

  // Filter trips
  const filtered = TRIPS_DATA.filter(trip => {
    const matchesCat = currentCategoryFilter === 'all' || trip.category === currentCategoryFilter;
    const matchesQuery = !currentSearchQuery || 
      trip.title.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
      trip.destination.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
      trip.region.toLowerCase().includes(currentSearchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 16px; border: 1px dashed #CBD5E1;">
        <i class="fa-solid fa-compass" style="font-size: 3rem; color: #CBD5E1; margin-bottom: 16px;"></i>
        <h3 style="font-size: 1.3rem; font-weight: 800; color: #1E293B;">No Trips Found</h3>
        <p style="color: #64748B; margin-top: 6px;">Try adjusting your destination keyword or browsing other categories.</p>
        <button class="btn btn-primary btn-sm" style="margin-top: 18px;" onclick="resetFilters()">View All Trips</button>
      </div>
    `;
    return;
  }

  const wishlist = getWishlist();

  container.innerHTML = filtered.map(trip => {
    const isWishlisted = wishlist.includes(trip.id);
    const firstBatches = trip.upcomingBatches.slice(0, 3).map(b => b.date.split(' - ')[0]).join(' • ');

    return `
      <div class="trip-card" data-id="${trip.id}">
        <div class="card-media">
          <img src="${trip.image}" alt="${trip.title}" loading="lazy" />
          <div class="card-gradient-overlay"></div>
          
          <span class="card-badge ${trip.badgeClass}">${trip.badge}</span>
          
          <button class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist('${trip.id}', event)" 
                  title="Save to Wishlist">
            <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
          
          <div class="card-img-bottom">
            <span class="duration-chip"><i class="fa-regular fa-clock"></i> ${trip.duration}</span>
            <span class="pickup-chip"><i class="fa-solid fa-location-dot"></i> ${trip.pickup}</span>
          </div>
        </div>

        <div class="card-body">
          <div class="card-category-rating">
            <span class="card-category-name">${trip.categoryLabel}</span>
            <span class="card-rating">
              <i class="fa-solid fa-star"></i> ${trip.rating}
              <small>(${trip.reviewsCount})</small>
            </span>
          </div>

          <a href="trip-detail.html?id=${trip.id}" class="card-title">${trip.title}</a>

          <div class="card-tags">
            ${trip.highlights.slice(0, 3).map(h => `<span class="mini-tag">${h.split(' - ')[0].slice(0, 28)}</span>`).join('')}
          </div>

          <div class="batches-strip">
            <i class="fa-regular fa-calendar-check"></i>
            <span><strong>Upcoming:</strong> ${firstBatches}</span>
          </div>

          <div class="card-footer">
            <div class="pricing-row">
              <div class="price-block">
                <span class="price-from">Starts from</span>
                <div class="price-values">
                  <span class="price-current">₹${trip.price.toLocaleString('en-IN')}</span>
                  <span class="price-original">₹${trip.originalPrice.toLocaleString('en-IN')}</span>
                </div>
              </div>
              <span class="emi-badge">EMI: ${trip.emiStarts}</span>
            </div>

            <div class="card-actions-grid">
              <button class="btn btn-secondary btn-sm" onclick="openItineraryModal('${trip.id}')">
                <i class="fa-regular fa-eye"></i> View Plan
              </button>
              <button class="btn btn-primary btn-sm" onclick="openBookingModal('${trip.id}')">
                <i class="fa-solid fa-bolt"></i> Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.resetFilters = function() {
  currentCategoryFilter = 'all';
  currentSearchQuery = '';
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.category === 'all'));
  const input = document.getElementById('search-dest-input');
  if (input) input.value = '';
  renderTrips();
};

/* ---------------------------------------------------------
   Hero Search Widget
   --------------------------------------------------------- */
function initHeroSearch() {
  const form = document.getElementById('hero-search-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const destInput = document.getElementById('search-dest-input');
    const typeSelect = document.getElementById('search-type-select');

    currentSearchQuery = destInput ? destInput.value.trim() : '';
    if (typeSelect && typeSelect.value) {
      currentCategoryFilter = typeSelect.value;
      // sync tabs
      document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.category === currentCategoryFilter);
      });
    }

    renderTrips();
    document.getElementById('trending-trips')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Quick tag clicks
  window.searchByTag = function(keyword) {
    const destInput = document.getElementById('search-dest-input');
    if (destInput) destInput.value = keyword;
    currentSearchQuery = keyword;
    renderTrips();
    document.getElementById('trending-trips')?.scrollIntoView({ behavior: 'smooth' });
  };
}

/* ---------------------------------------------------------
   Itinerary Modal Preview
   --------------------------------------------------------- */
window.openItineraryModal = function(tripId) {
  const trip = TRIPS_DATA.find(t => t.id === tripId);
  if (!trip) return;

  const modal = document.getElementById('itinerary-modal');
  const body = document.getElementById('itinerary-modal-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="modal-header-hero" style="background-image: url('${trip.bannerImage || trip.image}')">
      <div class="modal-header-content">
        <span class="card-badge ${trip.badgeClass}" style="position: static; margin-bottom: 8px; display: inline-block;">${trip.badge}</span>
        <h3>${trip.title}</h3>
        <p style="font-size: 0.88rem; color: #E2E8F0; margin-top: 4px;">
          <i class="fa-regular fa-clock"></i> ${trip.duration} &nbsp;|&nbsp; 
          <i class="fa-solid fa-location-dot"></i> ${trip.pickup} &nbsp;|&nbsp; 
          <i class="fa-solid fa-star" style="color: #F59E0B;"></i> ${trip.rating} (${trip.reviewsCount} reviews)
        </p>
      </div>
    </div>

    <div class="modal-content-pad">
      <!-- Highlights -->
      <h4 style="font-size: 1.1rem; font-weight: 800; color: #0F172A; margin-bottom: 12px;">🌟 Trip Highlights</h4>
      <div style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 24px;">
        ${trip.highlights.map(h => `
          <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.88rem; color: #334155;">
            <i class="fa-solid fa-circle-check" style="color: #10B981; margin-top: 4px;"></i>
            <span>${h}</span>
          </div>
        `).join('')}
      </div>

      <!-- Day by Day Plan -->
      <h4 style="font-size: 1.1rem; font-weight: 800; color: #0F172A; margin-bottom: 12px;">🗺️ Day-Wise Itinerary</h4>
      <div class="itinerary-timeline">
        ${trip.itinerary.map(item => `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-day">Day ${item.day}</div>
            <div class="timeline-title">${item.title}</div>
            <div class="timeline-desc">${item.desc}</div>
          </div>
        `).join('')}
      </div>

      <!-- Inclusions & Exclusions -->
      <div style="background: #F8FAFC; border-radius: 16px; padding: 18px; margin: 24px 0; border: 1px solid #E2E8F0;">
        <h5 style="font-weight: 800; font-size: 0.95rem; margin-bottom: 10px; color: #0F172A;">✅ What's Included:</h5>
        <ul style="list-style: none; padding: 0; margin-bottom: 16px; font-size: 0.85rem; color: #475569; display: grid; gap: 6px;">
          ${trip.inclusions.map(inc => `<li><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i>${inc}</li>`).join('')}
        </ul>

        <h5 style="font-weight: 800; font-size: 0.95rem; margin-bottom: 10px; color: #0F172A;">❌ What's Excluded:</h5>
        <ul style="list-style: none; padding: 0; font-size: 0.85rem; color: #475569; display: grid; gap: 6px;">
          ${trip.exclusions.map(exc => `<li><i class="fa-solid fa-xmark" style="color: #EF4444; margin-right: 8px;"></i>${exc}</li>`).join('')}
        </ul>
      </div>

      <!-- Modal Footer Action -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; padding-top: 16px; border-top: 1px solid #E2E8F0;">
        <div>
          <span style="font-size: 0.78rem; color: #64748B;">Starting From</span>
          <div style="font-size: 1.4rem; font-weight: 800; color: #0F172A;">₹${trip.price.toLocaleString('en-IN')} <small style="font-size: 0.85rem; color: #94A3B8; text-decoration: line-through;">₹${trip.originalPrice.toLocaleString('en-IN')}</small></div>
        </div>
        <div style="display: flex; gap: 10px;">
          <a href="trip-detail.html?id=${trip.id}" class="btn btn-secondary btn-sm">Full Trip Page</a>
          <button class="btn btn-primary btn-sm" onclick="closeModal('itinerary-modal'); openBookingModal('${trip.id}');">Book This Trip</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
};

/* ---------------------------------------------------------
   Booking Modal & Dynamic Pricing Calculation
   --------------------------------------------------------- */
let currentBookingTrip = null;
let bookingPassengers = 1;
let couponApplied = false;

window.openBookingModal = function(tripId) {
  const trip = TRIPS_DATA.find(t => t.id === tripId);
  if (!trip) return;

  currentBookingTrip = trip;
  bookingPassengers = 1;
  couponApplied = false;

  const modal = document.getElementById('booking-modal');
  const tripTitleEl = document.getElementById('book-trip-title');
  const batchSelect = document.getElementById('book-batch-select');
  
  if (tripTitleEl) tripTitleEl.textContent = trip.title;

  if (batchSelect) {
    batchSelect.innerHTML = trip.upcomingBatches.map(b => `
      <option value="${b.date}">${b.date} (${b.status} - ${b.seats} seats left)</option>
    `).join('');
  }

  updateBookingPriceUI();
  modal.classList.add('open');
};

window.changePassengerCount = function(delta) {
  bookingPassengers = Math.max(1, Math.min(10, bookingPassengers + delta));
  const countEl = document.getElementById('passenger-count-display');
  if (countEl) countEl.textContent = bookingPassengers;
  updateBookingPriceUI();
};

window.applyPromoCode = function() {
  const input = document.getElementById('promo-input');
  const msgEl = document.getElementById('promo-msg');
  if (!input || !msgEl) return;

  if (input.value.trim().toUpperCase() === 'WANDERHUMS2026') {
    couponApplied = true;
    msgEl.innerHTML = `<span style="color: #10B981; font-weight: 700;">🎉 WANDERHUMS2026 Applied! Flat ₹2,000 Discount</span>`;
  } else {
    couponApplied = false;
    msgEl.innerHTML = `<span style="color: #EF4444; font-weight: 600;">Invalid code. Use <strong>WANDERHUMS2026</strong></span>`;
  }
  updateBookingPriceUI();
};

function updateBookingPriceUI() {
  if (!currentBookingTrip) return;

  const basePrice = currentBookingTrip.price * bookingPassengers;
  const discount = couponApplied ? 2000 : 0;
  const finalPrice = Math.max(0, basePrice - discount);
  const tokenAdvance = Math.min(finalPrice, 2000 * bookingPassengers);

  const basePriceEl = document.getElementById('book-base-price');
  const discountEl = document.getElementById('book-discount-price');
  const totalEl = document.getElementById('book-total-price');
  const advanceEl = document.getElementById('book-advance-token');

  if (basePriceEl) basePriceEl.textContent = `₹${basePrice.toLocaleString('en-IN')}`;
  if (discountEl) discountEl.textContent = discount > 0 ? `-₹${discount.toLocaleString('en-IN')}` : '₹0';
  if (totalEl) totalEl.textContent = `₹${finalPrice.toLocaleString('en-IN')}`;
  if (advanceEl) advanceEl.textContent = `₹${tokenAdvance.toLocaleString('en-IN')}`;
}

window.handleBookingSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('book-name').value;
  const phone = document.getElementById('book-phone').value;
  const email = document.getElementById('book-email').value;
  const batch = document.getElementById('book-batch-select').value;

  closeModal('booking-modal');

  // Success Notification
  showToast({
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    title: "Slot Reserved Successfully! 🎒",
    text: `Thanks ${name}! Your slot for ${currentBookingTrip.title} (${batch}) has been provisionally reserved. Our trip leader will call you on ${phone}.`
  });
};

window.bookViaWhatsApp = function() {
  if (!currentBookingTrip) return;
  const name = document.getElementById('book-name')?.value || 'Traveler';
  const phone = document.getElementById('book-phone')?.value || '';
  const batch = document.getElementById('book-batch-select')?.value || 'Upcoming';

  const text = `Hi WanderHums Team! 🏔️%0A%0AI want to book the *${encodeURIComponent(currentBookingTrip.title)}*%0A- Batch: ${encodeURIComponent(batch)}%0A- Passengers: ${bookingPassengers}%0A- Name: ${encodeURIComponent(name)}%0A- Contact: ${encodeURIComponent(phone)}%0A%0APlease share payment details for the token advance!`;
  
  window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
};

/* ---------------------------------------------------------
   Callback Modal & Form
   --------------------------------------------------------- */
window.openCallbackModal = function() {
  const modal = document.getElementById('callback-modal');
  if (modal) modal.classList.add('open');
};

window.handleCallbackSubmit = function(e) {
  e.preventDefault();
  const phone = e.target.querySelector('input[type="tel"]')?.value || 'your number';
  closeModal('callback-modal');
  showToast({
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    title: "Callback Scheduled! 📞",
    text: `A WanderHums travel expert will call you on ${phone} within 15 minutes.`
  });
};

/* ---------------------------------------------------------
   Modals Common
   --------------------------------------------------------- */
function initModals() {
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  });
}

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('open');
};

/* ---------------------------------------------------------
   Wishlist Handling (Local Storage)
   --------------------------------------------------------- */
function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem('wanderhums_wishlist') || '[]');
  } catch {
    return [];
  }
}

function updateWishlistBadge() {
  const list = getWishlist();
  const badges = document.querySelectorAll('.wishlist-counter');
  badges.forEach(b => b.textContent = list.length);
}

window.toggleWishlist = function(tripId, e) {
  if (e) e.stopPropagation();
  let list = getWishlist();
  const index = list.indexOf(tripId);
  let added = false;

  if (index > -1) {
    list.splice(index, 1);
  } else {
    list.push(tripId);
    added = true;
  }

  localStorage.setItem('wanderhums_wishlist', JSON.stringify(list));
  updateWishlistBadge();
  renderTrips();

  const trip = TRIPS_DATA.find(t => t.id === tripId);
  showToast({
    avatar: trip ? trip.image : '',
    title: added ? "Added to Wishlist ❤️" : "Removed from Wishlist",
    text: trip ? trip.title : ''
  });
};

function initWishlist() {
  updateWishlistBadge();
}

/* ---------------------------------------------------------
   FAQs Accordion
   --------------------------------------------------------- */
function initFaqAccordion() {
  const faqContainer = document.getElementById('faq-accordion-container');
  if (!faqContainer) return;

  faqContainer.innerHTML = FAQS_DATA.map((item, idx) => `
    <div class="faq-item ${idx === 0 ? 'active' : ''}">
      <button class="faq-question" onclick="toggleFaq(this)">
        <span>${item.q}</span>
        <i class="fa-solid fa-chevron-down"></i>
      </button>
      <div class="faq-answer">
        <p>${item.a}</p>
      </div>
    </div>
  `).join('');
}

window.toggleFaq = function(button) {
  const item = button.closest('.faq-item');
  const wasActive = item.classList.contains('active');
  
  // Close all
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
  
  if (!wasActive) {
    item.classList.add('active');
  }
};

/* ---------------------------------------------------------
   Social Proof Real-time Live Toasts
   --------------------------------------------------------- */
const SOCIAL_NOTIFICATIONS = [
  { name: "Aman V.", city: "Delhi", trip: "Spiti Valley Circuit", action: "booked 2 seats", mins: "2 mins ago" },
  { name: "Pooja S.", city: "Mumbai", trip: "Meghalaya Backpacking", action: "booked solo slot", mins: "5 mins ago" },
  { name: "Rohit K.", city: "Bengaluru", trip: "Ladakh Bike Expedition", action: "requested a callback", mins: "7 mins ago" },
  { name: "Simran M.", city: "Chandigarh", trip: "Kasol & Kheerganga", action: "booked weekend getaway", mins: "12 mins ago" },
  { name: "Ananya & Kabir", city: "Pune", trip: "Bali & Nusa Penida", action: "confirmed early bird ticket", mins: "15 mins ago" }
];

let socialToastTimer = null;

function initSocialProofToasts() {
  let index = 0;
  setInterval(() => {
    const item = SOCIAL_NOTIFICATIONS[index % SOCIAL_NOTIFICATIONS.length];
    showToast({
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      title: `${item.name} from ${item.city}`,
      text: `<span class="toast-badge">${item.action}</span> for <strong>${item.trip}</strong> • <small>${item.mins}</small>`
    });
    index++;
  }, 18000); // Trigger every 18 seconds
}

function showToast({ avatar, title, text }) {
  const toast = document.getElementById('social-toast');
  if (!toast) return;

  const avatarEl = document.getElementById('toast-avatar');
  const titleEl = document.getElementById('toast-title');
  const textEl = document.getElementById('toast-text');

  if (avatarEl && avatar) avatarEl.src = avatar;
  if (titleEl) titleEl.textContent = title;
  if (textEl) textEl.innerHTML = text;

  toast.classList.add('show');

  clearTimeout(socialToastTimer);
  socialToastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 5000);
}

/* ---------------------------------------------------------
   Mobile Drawer & Menu
   --------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-drawer-backdrop');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      openMobileDrawer();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', () => {
      closeMobileDrawer();
    });
  }

  // Close drawer on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileDrawer();
    }
  });
}

window.openMobileDrawer = function() {
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-drawer-backdrop');
  if (drawer) drawer.classList.add('active');
  if (backdrop) backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeMobileDrawer = function() {
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-drawer-backdrop');
  if (drawer) drawer.classList.remove('active');
  if (backdrop) backdrop.classList.remove('active');
  document.body.style.overflow = '';
};

