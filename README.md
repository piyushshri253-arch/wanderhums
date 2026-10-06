# 🎒 WanderHums - Experiential Travel Community Website

> **WanderHums** (Inspired by [WanderOn.in](https://wanderon.in/)) - India's Coolest Travel Community platform for Backpacking Road Trips, Weekend Escapes, International Group Tours, and Motorbike Expeditions.

---

## 🌟 Key Features & Design Highlights

1. **Exact WanderOn Visual Identity & Aesthetics**:
   - Signature **Vivid Orange & Midnight Slate** high-contrast color scheme (`#FF6B00`, `#0F172A`).
   - Sticky Glassmorphism Header with dropdown menus for Backpacking, Weekend, and International trips.
   - Top announcement strip with active early bird promo code (`WANDERHUMS2026`) and Google 4.9★ rating.

2. **Hero Section & Search Widget**:
   - Hero banner with headline: *"Don't Just Travel. Create Stories That Last A Lifetime."*
   - Interactive search bar: Destination auto-filter, Trip Category selector, Departure Month picker.
   - Quick search hashtag pills (`#SpitiValley`, `#Meghalaya`, `#KasolWeekend`, `#BaliNusaPenida`, etc.).

3. **Curated Trip Cards & Live Filtering**:
   - Filter pills (*All Packages, Backpacking, Weekend Getaways, International Tours, Bike Expeditions*).
   - High-resolution imagery, hover zoom, and dynamic status badges (`BESTSELLER 🔥`, `TRENDING 🔥`, `WEEKEND SPECIAL ⚡`).
   - Route & Pickup details (`Delhi to Delhi`, `Guwahati to Guwahati`, etc.).
   - Key highlights chips, next departure batch dates strip, and strikethrough discounted pricing.
   - Wishlist Heart Toggle with localStorage persistence.

4. **Interactive Modals & Booking System**:
   - **Quick Itinerary Preview Modal**: View highlights, day-by-day plan, inclusions/exclusions without leaving the homepage.
   - **Instant Reservation Modal**:
     - Dynamic passenger counter (+ / -) with live price recalculation.
     - Early bird coupon box (applies `WANDERHUMS2026` for ₹2,000 instant discount).
     - Token advance calculation (pay only ₹2,000 to lock seat).
     - **Book via WhatsApp** integration with pre-filled message generator.
   - **Request a Callback Modal**: 15-minute response promise form.

5. **Dedicated Trip Detail Page (`trip-detail.html`)**:
   - Comprehensive day-by-day expandable itinerary accordion.
   - Photo gallery grid.
   - Full inclusions vs. exclusions checklist.
   - Backpacker packing guide and trip leader info.
   - Sticky desktop booking card & sticky mobile checkout bar.

6. **All Destinations Catalog & Filter (`destinations.html`)**:
   - Sidebar filters: Keyword search, Category checkboxes, Price slider (₹5,000 to ₹50,000), Duration filter.
   - Sorting options: Price (Low to High, High to Low), Duration, Popularity.
   - Dedicated Wishlist View (`destinations.html?view=wishlist`).

7. **Community & Culture Page (`community.html`)**:
   - Solo traveler culture & safety assurances for female solo backpackers.
   - Meet the Trip Captains profiles.
   - Campfire moments and #WanderHumsOfInstagram photo wall.

8. **Live Social Proof & Urgency Widgets**:
   - Floating real-time notification toasts (*"Aman from Delhi just booked Spiti Valley 2 mins ago!"*).
   - Floating pulsing WhatsApp chat button.
   - Sticky bottom navigation bar for mobile users.

---

## 🚀 How to Run the Website

### Option 1: Direct Browser Launch
Simply double click or open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Firefox, Brave).

### Option 2: Run with Local Web Server
Open terminal / command prompt in this directory:
```bash
npx serve -l 3000 .
```
Then visit: `http://localhost:3000`

---

## 📁 Project Structure

```
wanderhums/
├── index.html              # Homepage with hero search, trending trips, reviews & FAQs
├── trip-detail.html        # Detailed day-by-day itinerary page with sticky booking widget
├── destinations.html       # Full tour catalog with budget slider, category & duration filters
├── community.html          # Community page (Solo travelers, Trip captains & photo wall)
├── css/
│   └── style.css           # Complete responsive stylesheet matching WanderOn design
├── js/
│   ├── trips-data.js       # Complete database of tours, itineraries, batches, and reviews
│   └── main.js             # Interactive search, filters, modals, wishlist & booking logic
├── package.json            # NPM project config
└── README.md               # Documentation & setup guide
```
