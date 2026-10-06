/**
 * WanderHums - Complete Trip Packages & Itineraries Data
 * Curated in the authentic WanderOn travel community style
 */

const TRIPS_DATA = [
  {
    id: "spiti-valley-circuit",
    title: "Spiti Valley Road Trip - The Middle Land Odyssey",
    slug: "spiti-valley-circuit",
    category: "backpacking",
    categoryLabel: "Backpacking Trip",
    duration: "9 Days / 8 Nights",
    daysCount: 9,
    pickup: "Delhi to Delhi",
    destination: "Spiti Valley, Himachal Pradesh",
    region: "Himalayas",
    price: 18499,
    originalPrice: 24999,
    emiStarts: "₹1,540/mo",
    rating: 4.9,
    reviewsCount: 1420,
    badge: "BESTSELLER 🔥",
    badgeClass: "badge-hot",
    seatsLeft: 4,
    altitude: "14,931 Ft",
    difficulty: "Moderate",
    image: "assets/spiti.jpg",
    bannerImage: "assets/spiti.jpg",
    gallery: [
      "assets/spiti.jpg",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Visit Hikkim - World's Highest Post Office (Send postcards home!)",
      "Stargaze at Chandratal Lake (Moon Lake) at 14,000 ft",
      "Drive across the iconic Kunzum Pass & Atal Tunnel",
      "Explore 1000-year-old Tabo & Key Monasteries",
      "Visit Chitkul - Last inhabited village of India near Indo-Tibet border",
      "Boutique homestays & evening bonfire jam sessions"
    ],
    inclusions: [
      "Transportation in comfortable Tempo Traveller / SUV (Delhi to Delhi)",
      "7 Nights handpicked accommodation (Hotels, Cozy Homestays & Swiss Tents)",
      "14 Meals: 7 Breakfasts & 7 Dinners (Wholesome hygienic meals)",
      "Experienced & energetic WanderHums Trip Captain (Host + Buddy)",
      "Inner Line Permits & Green Tax for Spiti region",
      "Oxygen cylinder & standard first-aid kit for emergency altitude support",
      "Curated bonfire nights, music & community icebreakers"
    ],
    exclusions: [
      "Lunches & personal café expenses",
      "Monument & monastery entrance tickets",
      "Any unexpected delays caused by landslides or roadblocks",
      "Personal travel insurance & medical expenses",
      "GST (5%) as applicable"
    ],
    upcomingBatches: [
      { date: "18 Apr - 26 Apr 2026", status: "Filling Fast", seats: 3 },
      { date: "25 Apr - 03 May 2026", status: "Available", seats: 7 },
      { date: "02 May - 10 May 2026", status: "Available", seats: 9 },
      { date: "09 May - 17 May 2026", status: "Selling Fast", seats: 4 },
      { date: "16 May - 24 May 2026", status: "Available", seats: 11 },
      { date: "23 May - 31 May 2026", status: "Available", seats: 8 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Shimla / Narkanda | Overnight Journey",
        desc: "Assemble at Majnu Ka Tila / Kashmere Gate at 7:00 PM. Meet your friendly WanderHums Trip Captain and fellow travelers. Kick off with an icebreaker session, music, and embark on an exciting overnight drive towards the gateway of Himachal."
      },
      {
        day: 2,
        title: "Narkanda to Sangla / Chitkul | The Last Village of India",
        desc: "Wake up to misty pines. Drive through the Hindustan-Tibet Highway witnessing dramatic gorges of the Sutlej river. Enter the enchanting Kinnaur Valley. Reach Chitkul, the last inhabited village on the Indo-Tibetan border. Enjoy chai by the crystal-clear Baspa River. Overnight stay in Chitkul/Sangla."
      },
      {
        day: 3,
        title: "Sangla to Kalpa | Roghi Suicide Point & Golden Kinner Kailash",
        desc: "Start your day with village strolls. Drive up to the serene village of Kalpa, famous for Apple orchards and the majestic view of the sacred Kinner Kailash peak. Visit Roghi village and the breathtaking Suicide Point cliff. Sunset chai overlooking the Himalayan panorama."
      },
      {
        day: 4,
        title: "Kalpa to Kaza via Nako Lake, Chango & Tabo Monastery",
        desc: "Cross over the dramatic landscape transition from green mountains to cold barren desert. Stop by the holy Nako Lake and see the 500-year-old Mummy of Sangha Tenzin at Gue village. Visit the UNESCO-celebrated Tabo Monastery, known as the Ajanta of the Himalayas. Arrive in Kaza by evening."
      },
      {
        day: 5,
        title: "Kaza - Hikkim, Komic, Langza & Key Monastery",
        desc: "A day of high-altitude world records! Post a physical letter from Hikkim (World’s Highest Post Office at 14,567 ft). Visit Komic (World’s highest motorable village) and the giant Buddha statue watching over Langza village. Later, visit Key Monastery perched majestically atop a conical hill. Group photo session in traditional attire."
      },
      {
        day: 6,
        title: "Kaza to Chandratal Lake via Kunzum La (14,931 ft)",
        desc: "Drive towards the crown jewel of Spiti - Chandratal Lake. Conquer the windy Kunzum Pass and seek blessings at Kunzum Mata Temple. Hike down to the crescent-shaped turquoise Chandratal Lake. Check in to cozy Swiss tents. Stargazing at millions of stars and Milky Way galaxy under zero light pollution."
      },
      {
        day: 7,
        title: "Chandratal to Manali via Batal & Atal Tunnel",
        desc: "Bumpy, adventurous ride crossing icy water crossings (Chhatru & Batal). Cross the engineering marvel - Atal Tunnel into the lush green Kullu Valley. Check in at our boutique Manali hotel. Celebratory group dinner and party."
      },
      {
        day: 8,
        title: "Manali Café Hopping & Overnight Bus to Delhi",
        desc: "Leisure morning to explore Old Manali's bohemian cafes (Dylan's, Café 1947), shop for souvenirs on Mall Road, or relax by the Beas river. Evening board the Volvo/Tempo back to Delhi with a camera full of memories and a heart full of lifelong friends."
      },
      {
        day: 9,
        title: "Reach Delhi | Bid Adieu to Fellow Backpackers",
        desc: "Arrive in Delhi by 8:00 AM. Heartfelt hugs, photo exchanges, and promising to meet again on the next WanderHums reunion trip!"
      }
    ],
    featured: true
  },
  {
    id: "meghalaya-backpacking",
    title: "Meghalaya Backpacking - Abode of Clouds & Living Roots",
    slug: "meghalaya-backpacking",
    category: "backpacking",
    categoryLabel: "Backpacking Trip",
    duration: "6 Days / 5 Nights",
    daysCount: 6,
    pickup: "Guwahati to Guwahati",
    destination: "Shillong, Cherrapunji & Dawki",
    region: "North East",
    price: 19999,
    originalPrice: 26500,
    emiStarts: "₹1,660/mo",
    rating: 4.9,
    reviewsCount: 980,
    badge: "TRENDING 🔥",
    badgeClass: "badge-hot",
    seatsLeft: 5,
    altitude: "6,400 Ft",
    difficulty: "Easy to Moderate",
    image: "assets/meghalaya.jpg",
    bannerImage: "assets/meghalaya.jpg",
    gallery: [
      "assets/meghalaya.jpg",
      "https://images.unsplash.com/photo-1608037521255-a4f6cf9cfaf3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1627993079634-1191a3297a7e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Trek to the Double Decker Living Root Bridge in Nongriat",
      "Swim in the pristine natural turquoise pools of Rainbow Falls",
      "Boat on the crystal-clear Umngot River at Dawki (Boats seem floating in air)",
      "Camp under the stars near the Indo-Bangladesh border in Shnongpdeng",
      "Explore mystical Arwah & Mawsmai limestone caves",
      "Walk through Mawlynnong - Asia's Cleanest Village"
    ],
    inclusions: [
      "All transfers & sightseeing in Tempo Traveller / SUV from Guwahati",
      "5 Nights stay in handpicked resorts, homestays & riverside camps",
      "10 Wholesome Meals: 5 Breakfasts & 5 Dinners",
      "Certified WanderHums Trip Captain & local Khasi guides",
      "Cliff jumping, boating & life jackets at Dawki / Shnongpdeng",
      "All entry permits, cave entries & forest conservation fees"
    ],
    exclusions: [
      "Flight tickets to/from Guwahati",
      "Personal water sports (scuba/kayaking add-ons)",
      "Lunches & café bills",
      "5% GST"
    ],
    upcomingBatches: [
      { date: "11 Apr - 16 Apr 2026", status: "Filling Fast", seats: 2 },
      { date: "18 Apr - 23 Apr 2026", status: "Available", seats: 6 },
      { date: "25 Apr - 30 Apr 2026", status: "Available", seats: 9 },
      { date: "02 May - 07 May 2026", status: "Available", seats: 7 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Guwahati to Shillong | Scotland of the East",
        desc: "Meet the squad at Guwahati Airport by 12:00 PM. Stop by the majestic Umiam Lake (Barapani) for watersports and chill vibes. Arrive in Shillong, check in, and spend the evening wandering through the bustling Police Bazar, tasting local momos and listening to indie live music."
      },
      {
        day: 2,
        title: "Shillong to Cherrapunji (Sohra) | Chasing Waterfalls & Caves",
        desc: "Drive to Cherrapunji, one of the wettest places on earth. Marvel at the roaring Nohkalikai Falls (India's tallest plunge waterfall) and Seven Sisters Falls. Head deep inside Arwah Caves to see prehistoric marine fossils embedded in limestone walls. Cozy bonfire night in Sohra."
      },
      {
        day: 3,
        title: "The Nongriat Trek | Double Decker Living Root Bridge & Rainbow Falls",
        desc: "Descend 3,500 stone steps through lush rainforest into Tyrna. Cross surreal bio-engineering wonders created by Khasi ancestors: the Double Decker Living Root Bridge. Continue hiking to Rainbow Falls and take a refreshing dip in the azure natural lagoon."
      },
      {
        day: 4,
        title: "Sohra to Dawki & Shnongpdeng | The Glass River",
        desc: "Drive down to Shnongpdeng along the Umngot River. Experience boat rides where the water is so crystal clear that boats appear to float in mid-air. Try cliff jumping and zip-lining. Spend the night in riverside luxury tents around a bonfire with barbecue and guitar sessions."
      },
      {
        day: 5,
        title: "Mawlynnong Cleanest Village & Return to Shillong",
        desc: "Visit Mawlynnong, recognized as Asia's Cleanest Village. Climb the bamboo treehouses for panoramic views across the Bangladesh plains. Drive back to Shillong for our farewell gala dinner with the crew."
      },
      {
        day: 6,
        title: "Shillong to Guwahati | Departure with Heartfelt Memories",
        desc: "Post breakfast, drive back to Guwahati Airport. Drop-off by 3:00 PM. Bid farewell to your newfound travel family until the next epic adventure!"
      }
    ],
    featured: true
  },
  {
    id: "kasol-kheerganga-weekend",
    title: "Kasol & Kheerganga Trek - Parvati Valley Magic",
    slug: "kasol-kheerganga-weekend",
    category: "weekend",
    categoryLabel: "Weekend Getaway",
    duration: "3 Days / 2 Nights",
    daysCount: 3,
    pickup: "Delhi to Delhi",
    destination: "Kasol, Tosh & Kheerganga, HP",
    region: "Himachal",
    price: 6499,
    originalPrice: 8999,
    emiStarts: "₹650/mo",
    rating: 4.8,
    reviewsCount: 2210,
    badge: "WEEKEND SPECIAL ⚡",
    badgeClass: "badge-special",
    seatsLeft: 6,
    altitude: "9,700 Ft",
    difficulty: "Easy to Moderate",
    image: "assets/kasol.jpg",
    bannerImage: "assets/kasol.jpg",
    gallery: [
      "assets/kasol.jpg",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Trek to Kheerganga & take a dip in natural hot water sulfur springs",
      "Stargaze at high-altitude alpine meadows and snow-dusted peaks",
      "Café hopping in Kasol (Falafel, Shakshuka, Nutella pancakes)",
      "Explore the rustic fairy-tale village of Tosh / Chalal",
      "Campfire, acoustic guitar & mountain stories with fellow travelers"
    ],
    inclusions: [
      "AC Pushback Volvo / Tempo Traveller from Delhi to Kasol and back",
      "1 Night stay in Kasol riverside camp/hotel + 1 Night in Kheerganga meadow camps",
      "4 Meals: 2 Breakfasts & 2 Dinners",
      "Experienced trek leaders and local trail guides",
      "Bonfire and music night",
      "First aid support"
    ],
    exclusions: [
      "Lunches and café bills",
      "Porter / mule charges for personal baggage",
      "5% GST"
    ],
    upcomingBatches: [
      { date: "Every Friday Departure", status: "Filling Fast", seats: 6 },
      { date: "10 Apr - 13 Apr 2026", status: "Available", seats: 8 },
      { date: "17 Apr - 20 Apr 2026", status: "Available", seats: 5 },
      { date: "24 Apr - 27 Apr 2026", status: "Available", seats: 9 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Kasol | Friday Night Journey",
        desc: "Meet at Majnu Ka Tila at 6:30 PM. Board luxury AC bus to Kasol with exciting playlist and friendly icebreakers."
      },
      {
        day: 2,
        title: "Kasol Arrival & Chalal Forest Walk | Riverside Vibes",
        desc: "Arrive in Kasol by 10 AM. Check in to our riverside campsite by the gushing Parvati River. Walk through the scenic deodar trails to Chalal village. Cafe hopping in the afternoon, followed by a cozy bonfire, music, and delicious dinner."
      },
      {
        day: 3,
        title: "Trek to Kheerganga | Natural Hot Springs & Camping",
        desc: "Drive to Barshaini and commence the scenic 12km trek to Kheerganga passing gushing waterfalls and wooden bridges. Arrive at the top and soak into the natural hot water sulfur spring surrounded by snow-capped peaks. Overnight alpine camping under the stars."
      },
      {
        day: 4,
        title: "Descent to Barshaini, Tosh Stroll & Depart for Delhi",
        desc: "Morning sunrise over the Parvati range. Trek back down to Barshaini. Visit the rustic village of Tosh for afternoon lunch. Evening board the bus back to Delhi with unforgettable memories. Arrive in Delhi Monday morning 7 AM."
      }
    ],
    featured: true
  },
  {
    id: "bali-island-explorer",
    title: "Bali & Nusa Penida Group Tour - The Tropical Odyssey",
    slug: "bali-island-explorer",
    category: "international",
    categoryLabel: "International Tour",
    duration: "7 Days / 6 Nights",
    daysCount: 7,
    pickup: "Denpasar to Denpasar",
    destination: "Bali & Nusa Penida, Indonesia",
    region: "Southeast Asia",
    price: 36999,
    originalPrice: 47999,
    emiStarts: "₹3,080/mo",
    rating: 4.9,
    reviewsCount: 840,
    badge: "INTERNATIONAL HIT 🌴",
    badgeClass: "badge-hot",
    seatsLeft: 3,
    altitude: "Sea Level",
    difficulty: "Easy",
    image: "assets/bali.jpg",
    bannerImage: "assets/bali.jpg",
    gallery: [
      "assets/bali.jpg",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Speedboat cruise to Nusa Penida: Kelingking T-Rex Beach & Angel's Billabong",
      "Iconic Bali Swing & cascading Tegalalang Rice Terraces in Ubud",
      "Sunset at Uluwatu Cliff Temple & traditional Kecak Fire Dance",
      "Snorkeling with Manta Rays at Crystal Bay",
      "Party nights at Canggu & Seminyak beach clubs (Finns Beach Club)",
      "Traditional Balinese massage & floating breakfast experience"
    ],
    inclusions: [
      "6 Nights 4-Star Boutique Resort & Villa accommodations with swimming pool",
      "Daily international buffet breakfasts",
      "Full private AC transport across Bali with English-speaking drivers",
      "Return fast boat tickets to Nusa Penida Island",
      "All island entrance fees, parking & monument charges",
      "Dedicated WanderHums Trip Host throughout the trip"
    ],
    exclusions: [
      "International flights (Our team helps you find the cheapest flights!)",
      "Indonesian Visa on arrival (approx $35)",
      "Lunches and dinners not specified",
      "Personal watersports"
    ],
    upcomingBatches: [
      { date: "15 Apr - 21 Apr 2026", status: "Filling Fast", seats: 3 },
      { date: "29 Apr - 05 May 2026", status: "Available", seats: 6 },
      { date: "13 May - 19 May 2026", status: "Available", seats: 8 },
      { date: "27 May - 02 Jun 2026", status: "Available", seats: 10 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Bali! | Arrival in Kuta / Seminyak",
        desc: "Arrive at Ngurah Rai International Airport (Denpasar). Our team greets you with Balinese flower garlands. Check into our chic resort. Unwind by the pool and join the sunset welcome drinks by the beach."
      },
      {
        day: 2,
        title: "South Bali - Watersports, Uluwatu Temple & Kecak Dance",
        desc: "Head to Tanjung Benoa for adrenaline water adventures (banana boat, parasailing). In the evening, visit the dramatic 70-meter cliffside Uluwatu Temple and witness the mesmerizing Kecak Fire Dance during sunset. Night party in Seminyak."
      },
      {
        day: 3,
        title: "Speedboat to Nusa Penida | Kelingking T-Rex & Broken Beach",
        desc: "Take an exhilarating fast boat to Nusa Penida. Visit the jaw-dropping Kelingking 'T-Rex' viewpoint, Angel's Billabong infinity pool, and Broken Beach. Relax with fresh coconut at Crystal Bay."
      },
      {
        day: 4,
        title: "Ubud Cultural Heartland - Sacred Monkey Forest & Ubud Market",
        desc: "Travel to Ubud, the cultural sanctuary. Stroll through the lush Sacred Monkey Forest. Explore Ubud Art Market and royal palace. Evening cafe hopping and shopping artisanal organic keepsakes."
      },
      {
        day: 5,
        title: "Tegalalang Rice Terraces, Bali Swing & Coffee Plantation",
        desc: "Fly high over emerald jungle valleys on the world-famous Bali Swing! Walk amidst the centuries-old Tegalalang Rice Terraces. Sample exotic Luwak coffee at a traditional plantation. Refreshing dip at Tegenungan Waterfall."
      },
      {
        day: 6,
        title: "Canggu Chill, Beach Clubs & Farewell Sunset Dinner",
        desc: "Head over to the trendy surfers' haven of Canggu. Chill at renowned beach clubs like Finns or Atlas Beach Club. Enjoy music, infinity pools, and a glamorous sunset farewell dinner with the WanderHums squad."
      },
      {
        day: 7,
        title: "Departure | Sampai Jumpa Bali!",
        desc: "Enjoy a leisurely floating breakfast. Souvenir shopping for Balinese coffee and woodwork. Airport transfer with cherished memories of an unforgettable tropical escape."
      }
    ],
    featured: true
  },
  {
    id: "vietnam-cross-country",
    title: "Vietnam Highlights - Hanoi, Ha Long Bay & Da Nang",
    slug: "vietnam-cross-country",
    category: "international",
    categoryLabel: "International Tour",
    duration: "8 Days / 7 Nights",
    daysCount: 8,
    pickup: "Hanoi to Da Nang",
    destination: "Hanoi, Ha Long Bay, Hoi An & Da Nang",
    region: "Southeast Asia",
    price: 44999,
    originalPrice: 58000,
    emiStarts: "₹3,750/mo",
    rating: 4.9,
    reviewsCount: 650,
    badge: "BUCKET LIST ⭐",
    badgeClass: "badge-special",
    seatsLeft: 5,
    altitude: "Sea Level",
    difficulty: "Easy",
    image: "assets/vietnam.jpg",
    bannerImage: "assets/vietnam.jpg",
    gallery: [
      "assets/vietnam.jpg",
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Overnight luxury cruise across UNESCO Ha Long Bay limestone karsts",
      "Walk the Golden Giant Hand Bridge in Ba Na Hills, Da Nang",
      "Lantern boat cruise on the canal in ancient UNESCO town of Hoi An",
      "Explore Hanoi Train Street and try famous Vietnamese Egg Coffee",
      "Kayaking inside Sung Sot (Surprise) Cave & Ti Top Island summit",
      "Coconut basket boat ride in Cam Thanh water coconut forest"
    ],
    inclusions: [
      "7 Nights stays in 4-Star boutique hotels & 1 Night 5-Star Ha Long cruise cabin",
      "Domestic flight from Hanoi to Da Nang included",
      "All breakfasts, cruise buffet lunch & cruise sunset dinner",
      "Private AC coach transfers with English guide and WanderHums Captain",
      "Ba Na Hills cable car ticket & entry to Golden Bridge",
      "Ha Long Bay kayaking, cave exploration & squid fishing"
    ],
    exclusions: [
      "International flights (India-Hanoi / Da Nang-India)",
      "Vietnam E-Visa fee ($25)",
      "Tips & personal shopping"
    ],
    upcomingBatches: [
      { date: "20 Apr - 27 Apr 2026", status: "Available", seats: 5 },
      { date: "04 May - 11 May 2026", status: "Available", seats: 7 },
      { date: "18 May - 25 May 2026", status: "Available", seats: 9 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Xin Chào Hanoi! | The Cultural Capital",
        desc: "Arrive at Noi Bai International Airport in Hanoi. Transfer to hotel in the vibrant Old Quarter. Walk around the historic Hoan Kiem Lake, witness the thrilling Hanoi Train Street, and sip creamy Egg Coffee at Cafe Giang."
      },
      {
        day: 2,
        title: "Hanoi to Ha Long Bay | 5-Star Cruise & Sunset Kayaking",
        desc: "Board the luxury cruise ship into Ha Long Bay. Sail through emerald waters surrounded by thousands of towering limestone karsts. Kayak through hidden lagoons, swim at Ti Top Beach, and enjoy sunset cocktails on the top sundeck."
      },
      {
        day: 3,
        title: "Ha Long Bay to Hanoi & Flight to Da Nang",
        desc: "Start your morning with Tai Chi on the deck. Explore the monumental Sung Sot Cave. Disembark cruise and transfer to airport for an evening flight to Da Nang. Check into our beachfront hotel."
      },
      {
        day: 4,
        title: "Ba Na Hills & The Legendary Golden Hand Bridge",
        desc: "Take the world's longest single-cable car to the cloud-shrouded Ba Na Hills. Walk across the world-famous Golden Bridge held up by colossal stone hands. Visit the French Village and Fantasy Park."
      },
      {
        day: 5,
        title: "Cam Thanh Coconut Forest & UNESCO Hoi An Ancient Town",
        desc: "Spin around in traditional bamboo basket boats through coconut waterways with entertaining local boatmen. Afternoon walk in fairy-tale Hoi An. Float glowing paper lanterns down the Thu Bon river."
      },
      {
        day: 6,
        title: "Hoi An Beach Chill & Tailor Shopping",
        desc: "Free morning to relax at An Bang Beach, get custom bespoke suits/dresses tailored within 24 hours, or cycle through scenic organic vegetable farms. Evening street food tour tasting Banh Mi and Cao Lau."
      },
      {
        day: 7,
        title: "Da Nang Highlights - Marble Mountains & Dragon Bridge Fire Show",
        desc: "Visit the sacred caves of Marble Mountains and the giant Lady Buddha statue. Evening witness the spectacular Dragon Bridge breathe fire and water over the Han River."
      },
      {
        day: 8,
        title: "Departure from Da Nang | Farewell Vietnam",
        desc: "Post breakfast, head to Da Nang International Airport for your return flight home. An unforgettable Southeast Asian journey concludes!"
      }
    ],
    featured: true
  },
  {
    id: "ladakh-bike-expedition",
    title: "Ladakh Bike & SUV Expedition - The High Altitude Crusade",
    slug: "ladakh-bike-expedition",
    category: "bike",
    categoryLabel: "Bike Expedition",
    duration: "10 Days / 9 Nights",
    daysCount: 10,
    pickup: "Delhi to Leh to Delhi",
    destination: "Leh, Nubra Valley, Pangong Tso & Hanle",
    region: "Himalayas",
    price: 32999,
    originalPrice: 42000,
    emiStarts: "₹2,750/mo",
    rating: 4.9,
    reviewsCount: 1890,
    badge: "ROAD TRIP LEGEND 🏍️",
    badgeClass: "badge-special",
    seatsLeft: 4,
    altitude: "18,380 Ft",
    difficulty: "Challenging",
    image: "assets/ladakh.jpg",
    bannerImage: "assets/ladakh.jpg",
    gallery: [
      "assets/ladakh.jpg",
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Conquer Khardung La Pass (17,582 ft) - One of the highest motorable roads",
      "Ride Royal Enfield Himalayan 411cc / 450cc with backup vehicle & mechanic",
      "Camp beside the color-changing blue waters of Pangong Tso Lake",
      "Ride double-humped Bactrian camels on Hunder Sand Dunes in Nubra Valley",
      "Visit Turtuk - India's northernmost Balti village bordering Pakistan",
      "Magnetic Hill anti-gravity illusion & Pathar Sahib Gurudwara"
    ],
    inclusions: [
      "Royal Enfield Himalayan (with fuel/without fuel options available) OR SUV seat",
      "Helmets, riding gear essentials & spare parts backup",
      "Support truck carrying all luggage + professional Enfield mechanic",
      "9 Nights accommodation (Hotels in Leh + Deluxe Swiss camps in Nubra & Pangong)",
      "18 Meals: Daily wholesome Breakfasts & Dinners",
      "WanderHums Road Captain leading the convoy",
      "Inner Line Permits & Wildlife environmental fees"
    ],
    exclusions: [
      "Flights to/from Leh",
      "Riding gear security deposit",
      "Personal medical and personal expenses",
      "5% GST"
    ],
    upcomingBatches: [
      { date: "10 May - 19 May 2026", status: "Filling Fast", seats: 4 },
      { date: "24 May - 02 Jun 2026", status: "Available", seats: 8 },
      { date: "07 Jun - 16 Jun 2026", status: "Available", seats: 12 },
      { date: "21 Jun - 30 Jun 2026", status: "Available", seats: 9 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Leh | Acclimatization & Shanti Stupa",
        desc: "Arrive at Kushok Bakula Rimpochee Airport. Rest full day for vital high-altitude acclimatization. Evening walk up to Shanti Stupa for sunset over Leh valley."
      },
      {
        day: 2,
        title: "Sham Valley Tour | Magnetic Hill & Confluence",
        desc: "Test ride your machine! Visit Hall of Fame, Kali Mata Temple, the mysterious Magnetic Hill, and the scenic confluence of Indus and Zanskar rivers (Sangam)."
      },
      {
        day: 3,
        title: "Leh to Nubra Valley via Khardung La (17,582 Ft)",
        desc: "The big milestone! Ride across the legendary Khardung La pass. Descend into Nubra Valley. Ride through the white sand dunes of Hunder on double-humped camels."
      },
      {
        day: 4,
        title: "Excursion to Turtuk - The Balti Borderland",
        desc: "Ride along the Shyok River to Turtuk, a picturesque village annexed in the 1971 war. Taste fresh apricots, meet friendly locals, and experience unique Balti culture."
      },
      {
        day: 5,
        title: "Nubra Valley to Pangong Tso via Shyok River",
        desc: "Adrenaline ride through the rugged riverbeds of Shyok. Reach the world-renowned Pangong Lake at 14,270 ft. Camp along the turquoise shore and stargaze."
      },
      {
        day: 6,
        title: "Pangong Tso to Leh via Chang La (17,590 Ft)",
        desc: "Sunrise over Pangong. Ride through Chang La pass, the 3rd highest motorable pass. Stop by Thiksey Monastery and Shey Palace before entering Leh."
      },
      {
        day: 7,
        title: "Leh - Rest & Café Hopping on Changspa Road",
        desc: "Chill day in Leh. Enjoy German bakeries, shop for pashmina shawls, prayer wheels, and silver jewelry. Evening campfire and celebration dinner."
      },
      {
        day: 8,
        title: "Fly Out from Leh | Julley Ladakh!",
        desc: "Morning airport drop with memories of lifetime brotherhood and high mountain passes conquered!"
      }
    ],
    featured: true
  },
  {
    id: "jibhi-tirthan-weekend",
    title: "Jibhi & Tirthan Valley - The Hidden Pine Sanctuary",
    slug: "jibhi-tirthan-weekend",
    category: "weekend",
    categoryLabel: "Weekend Getaway",
    duration: "3 Days / 2 Nights",
    daysCount: 3,
    pickup: "Delhi to Delhi",
    destination: "Jibhi, Jalori Pass & Serolsar Lake, HP",
    region: "Himachal",
    price: 6999,
    originalPrice: 9499,
    emiStarts: "₹700/mo",
    rating: 4.8,
    reviewsCount: 1120,
    badge: "PEACEFUL ESCAPE 🌲",
    badgeClass: "badge-special",
    seatsLeft: 7,
    altitude: "10,800 Ft",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    bannerImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Trek to the holy Serolsar Lake through oak forests of Jalori Pass",
      "Visit the wooden architectural wonder - Chehni Kothi Tower (1500 yrs old)",
      "Cozy boutique treehouses & stone cottages beside Jibhi waterfall",
      "Trout fishing & riverside walks in UNESCO Great Himalayan National Park",
      "Acoustic campfire jams under sparkling Himachal skies"
    ],
    inclusions: [
      "Delhi to Delhi AC transport in Tempo Traveller",
      "2 Nights stay in authentic wooden riverside cottage/homestay in Jibhi",
      "4 Wholesome Meals (2 Breakfasts, 2 Dinners)",
      "Guided trek to Serolsar Lake & Jalori Pass",
      "WanderHums Trip Captain & bonfire evening"
    ],
    exclusions: [
      "Lunches and café orders",
      "Chehni Kothi 4x4 local taxi if required",
      "5% GST"
    ],
    upcomingBatches: [
      { date: "Every Friday Departure", status: "Filling Fast", seats: 7 },
      { date: "10 Apr - 13 Apr 2026", status: "Available", seats: 5 },
      { date: "17 Apr - 20 Apr 2026", status: "Available", seats: 9 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Jibhi | Friday Overnight Drive",
        desc: "Board our comfortable tempo traveler at Majnu Ka Tila at 7 PM. Enjoy mountain playlist and travel trivia."
      },
      {
        day: 2,
        title: "Arrive in Jibhi | Jibhi Waterfall & Chehni Kothi",
        desc: "Check in to wooden cottages surrounded by apple trees. Visit Jibhi waterfall and hike to Chehni Kothi, the highest standing timber structure in Western Himalayas. Bonfire & dinner."
      },
      {
        day: 3,
        title: "Jalori Pass & Serolsar Lake Trek",
        desc: "Drive to Jalori Pass (10,800 ft). Embark on a breathtaking 5km forest trek to the sacred Serolsar Lake, dedicated to Budhi Nagin. Return to Jibhi for evening cafe chilling."
      },
      {
        day: 4,
        title: "Choi Waterfall / Tirthan River Walk & Return to Delhi",
        desc: "Morning walk along the pristine Tirthan River. Board return coach to Delhi. Reach Delhi Monday morning 6:30 AM."
      }
    ],
    featured: false
  },
  {
    id: "kashmir-paradise-circuit",
    title: "Kashmir Backpacking - Gulmarg, Pahalgam & Doodhpathri",
    slug: "kashmir-paradise-circuit",
    category: "backpacking",
    categoryLabel: "Backpacking Trip",
    duration: "6 Days / 5 Nights",
    daysCount: 6,
    pickup: "Srinagar to Srinagar",
    destination: "Srinagar, Gulmarg, Pahalgam & Sonamarg",
    region: "Kashmir",
    price: 17999,
    originalPrice: 23999,
    emiStarts: "₹1,500/mo",
    rating: 4.9,
    reviewsCount: 1350,
    badge: "BESTSELLER 🔥",
    badgeClass: "badge-hot",
    seatsLeft: 5,
    altitude: "8,825 Ft",
    difficulty: "Easy",
    image: "assets/kashmir.jpg",
    bannerImage: "assets/kashmir.jpg",
    gallery: [
      "assets/kashmir.jpg",
      "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Stay in an ornate handcrafted wooden Houseboat on Dal Lake",
      "Shikara ride at golden sunset with floating markets & Kahwa tea",
      "World's highest operating Gondola Cable Car Ride in Gulmarg (Phase 1 & 2)",
      "Pahalgam Betaab Valley, Aru Valley & Chandanwari",
      "Offbeat pristine meadows of Doodhpathri (Valley of Milk)",
      "Traditional Kashmiri Wazwan food tasting"
    ],
    inclusions: [
      "1 Night Deluxe Dal Lake Houseboat + 4 Nights 3/4-Star Hotels",
      "Srinagar to Srinagar complete transport in private vehicle",
      "10 Meals: 5 Breakfasts & 5 Kashmiri Dinners",
      "1-Hour Sunset Shikara Ride on Dal Lake",
      "WanderHums Trip Leader assistance & local permits"
    ],
    exclusions: [
      "Flights to/from Srinagar",
      "Gulmarg Gondola tickets (Phase 1 & 2)",
      "Aru/Betaab Valley local union cab / pony ride",
      "5% GST"
    ],
    upcomingBatches: [
      { date: "12 Apr - 17 Apr 2026", status: "Filling Fast", seats: 3 },
      { date: "19 Apr - 24 Apr 2026", status: "Available", seats: 7 },
      { date: "26 Apr - 01 May 2026", status: "Available", seats: 8 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Srinagar | Dal Lake Houseboat Experience",
        desc: "Pickup from Srinagar Airport. Check in to our royal wooden Houseboat. Evening sunset Shikara ride across floating lotus gardens and char chinar. Traditional welcome with hot saffron Kahwa."
      },
      {
        day: 2,
        title: "Srinagar to Gulmarg | Meadow of Flowers & Gondola Ride",
        desc: "Drive to Gulmarg. Take the world-famous Gondola ride up to Apharwat peak for panoramic snow-covered Himalayan peaks. Snow sledging and ski lessons. Overnight hotel stay in Gulmarg/Tangmarg."
      },
      {
        day: 3,
        title: "Gulmarg to Pahalgam | Valley of Shepherds",
        desc: "Drive along saffron fields of Pampore and willow bat factories to Pahalgam. Stroll along the roaring Lidder River. Visit Betaab Valley and Aru Valley. Overnight stay in Pahalgam."
      },
      {
        day: 4,
        title: "Pahalgam to Doodhpathri | Valley of Milk",
        desc: "Head to the offbeat gem of Kashmir - Doodhpathri. Lush green rolling meadows where fresh streams foam white like milk. Relax with mountain chai and music."
      },
      {
        day: 5,
        title: "Srinagar Heritage & Mughal Gardens",
        desc: "Return to Srinagar. Visit Shalimar Bagh, Nishat Bagh, and Hazratbal Shrine. Shopping for walnut wood carvings, pashmina, and dry fruits in Lal Chowk."
      },
      {
        day: 6,
        title: "Departure from Srinagar",
        desc: "Breakfast overlooking the mountains and transfer to Srinagar Airport for your return flight."
      }
    ],
    featured: false
  },
  {
    id: "chopta-chandrashila-trek",
    title: "Chopta Tungnath & Chandrashila - Highest Shiva Temple",
    slug: "chopta-chandrashila-trek",
    category: "weekend",
    categoryLabel: "Weekend Getaway",
    duration: "3 Days / 2 Nights",
    daysCount: 3,
    pickup: "Delhi to Delhi",
    destination: "Chopta, Tungnath & Deoriatal, UK",
    region: "Uttarakhand",
    price: 6799,
    originalPrice: 9199,
    emiStarts: "₹680/mo",
    rating: 4.9,
    reviewsCount: 1540,
    badge: "MOST POPULAR TREK 🏔️",
    badgeClass: "badge-hot",
    seatsLeft: 5,
    altitude: "13,123 Ft",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    bannerImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Pay homage at Tungnath (12,073 ft) - The highest Shiva temple on earth",
      "Summit Chandrashila Peak (13,123 ft) for 360-degree views of Chaukhamba & Nanda Devi",
      "Emerald Deoria Tal lake with crystal reflections of snowy peaks",
      "Camp in alpine meadows of Chopta - Mini Switzerland of India",
      "Drive along holy Sangams (Devprayag & Rudraprayag)"
    ],
    inclusions: [
      "AC Tempo Traveller from Delhi to Chopta and back",
      "2 Nights Swiss tent stay in Chopta with alpine views",
      "4 Meals: 2 Breakfasts and 2 Dinners",
      "Experienced mountaineering trek guides & permits",
      "Bonfire nights and first aid"
    ],
    exclusions: [
      "Lunches and trail snacks",
      "5% GST"
    ],
    upcomingBatches: [
      { date: "Every Friday Departure", status: "Filling Fast", seats: 5 },
      { date: "10 Apr - 13 Apr 2026", status: "Available", seats: 7 },
      { date: "17 Apr - 20 Apr 2026", status: "Available", seats: 11 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Chopta via Devprayag | Friday Night Departure",
        desc: "Meet at Akshardham Metro Station at 10 PM. Drive through Rishikesh and witness the holy confluence of Bhagirathi and Alaknanda at Devprayag."
      },
      {
        day: 2,
        title: "Deoria Tal Trek & Camp at Chopta",
        desc: "Hike 2.5km to the mirror lake Deoria Tal. Marvel at Chaukhamba peaks reflecting in the water. Drive to Chopta meadows, check into tents, enjoy sunset tea and bonfire."
      },
      {
        day: 3,
        title: "Summit Day: Tungnath & Chandrashila Peak (13,123 Ft)",
        desc: "Early 4 AM start. Ascend stone-paved trail through rhododendron trees to Tungnath temple. Continue 1.5km to Chandrashila peak for an epic sunrise over Greater Himalayas. Descend to Chopta."
      },
      {
        day: 4,
        title: "Rishikesh Café Stop & Arrive in Delhi",
        desc: "Drive down via Rishikesh. Stop for lunch at Beatles Cafe or Little Buddha. Return to Delhi Monday morning 6 AM."
      }
    ],
    featured: false
  }
];

// Testimonials data matching WanderOn real traveler feedback
const TESTIMONIALS_DATA = [
  {
    name: "Aakash Sharma",
    city: "New Delhi",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    trip: "Spiti Valley Circuit (9D/8N)",
    rating: 5,
    date: "March 2026",
    review: "I joined WanderHums as a solo traveler and returned with 14 best friends for life! The trip captain Rohan was phenomenal — managed high altitude arrangements smoothly, kept the tempo alive with his guitar sessions at Chandratal, and made sure every single person felt like family. WanderOn style community vibe is 100% real here!"
  },
  {
    name: "Sneha Mukherjee",
    city: "Kolkata",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    trip: "Meghalaya Living Roots Backpacking",
    rating: 5,
    date: "February 2026",
    review: "Being a solo female traveler, safety was my topmost concern. WanderHums exceeded all expectations! The stays were clean, cozy, and the trip leaders were so respectful and encouraging. Jumping off the cliff at Dawki and the hike to Rainbow Falls was the best adventure of my life!"
  },
  {
    name: "Rishabh & Priya",
    city: "Mumbai",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80",
    trip: "Bali & Nusa Penida Group Tour",
    rating: 5,
    date: "January 2026",
    review: "We took the Bali group tour for our anniversary instead of a boring private package, and it was the BEST decision ever! The crew at WanderHums took care of fast boats, villas, floating breakfasts, and photography. We saved money and made lifelong friends. 10/10 recommended!"
  },
  {
    name: "Vikram Rathore",
    city: "Bengaluru",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    trip: "Ladakh Bike Expedition",
    rating: 5,
    date: "September 2025",
    review: "Riding across Khardung La with WanderHums was a dream come true. The support vehicle, Enfield mechanics, and backup oxygen were on point. When my bike got a minor clutch issue near Shyok, the mechanic fixed it in 15 minutes! Unmatched professionalism."
  }
];

// Instagram community photo showcase
const INSTA_GALLERY = [
  {
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
    caption: "Bonfire nights under 10,000 stars ✨ #WanderHumsOfInstagram",
    likes: "2.4k",
    tag: "@wanderhums_spiti"
  },
  {
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
    caption: "Postcards from the highest post office on Earth! 📮",
    likes: "4.1k",
    tag: "@wanderhums_hikkim"
  },
  {
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    caption: "Chasing sunsets with the squad at Kelingking Beach 🌴",
    likes: "3.8k",
    tag: "@wanderhums_bali"
  },
  {
    img: "https://images.unsplash.com/photo-1608037521255-a4f6cf9cfaf3?auto=format&fit=crop&w=600&q=80",
    caption: "Living root bridges of Meghalaya 🌿 Nature's architecture!",
    likes: "1.9k",
    tag: "@wanderhums_meghalaya"
  },
  {
    img: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80",
    caption: "High passes, roaring engines & brothers on the road 🏍️",
    likes: "5.2k",
    tag: "@wanderhums_ladakh"
  },
  {
    img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80",
    caption: "Floating along the emerald waters of Ha Long Bay 🇻🇳",
    likes: "3.1k",
    tag: "@wanderhums_vietnam"
  }
];

// FAQs Data
const FAQS_DATA = [
  {
    q: "Can I travel solo on WanderHums trips?",
    a: "Absolutely! More than 65% of our travelers join solo. WanderHums is built specifically to connect solo wanderers. From the moment you hop into our tempo or bus, our friendly trip captains facilitate fun icebreakers, games, and bonfires so strangers instantly become a tight-knit family. We also ensure comfortable same-gender room sharing."
  },
  {
    q: "Is it safe for solo female travelers?",
    a: "100% YES. Safety of female solo travelers is our highest non-negotiable priority. We assign verified trip captains, conduct background checks on drivers and hotel staff, select well-rated boutique properties with female-friendly amenities, and ensure zero tolerance for any misconduct. Our female traveler community is one of the largest in India!"
  },
  {
    q: "What is the booking process and advance payment?",
    a: "Booking is seamless! You only need to pay a nominal advance token (₹2,000 for weekend trips, ₹5,000 for backpacking trips, ₹10,000 for international trips) to lock your seat. The balance amount can be paid 7 to 10 days before departure or at the time of boarding. We accept UPI, Net Banking, Credit Cards, and even Offer No-Cost EMI plans!"
  },
  {
    q: "What kind of accommodations are provided?",
    a: "We steer clear of sterile commercial hotels! Instead, we curate unique, cozy, and atmospheric stays — including alpine Swiss tents with attached washrooms, riverside wooden cottages, apple-orchard heritage homestays, and 4-star boutique resorts with swimming pools for international trips."
  },
  {
    q: "What is WanderHums' cancellation & refund policy?",
    a: "We understand that plans can change! If you cancel 15+ days before departure, you get an 80% refund or a 100% WanderHums Travel Voucher with 1-year validity (which you can use for ANY future trip). Within 7-14 days, you receive a 50% refund. You can also transfer your slot to a friend free of charge!"
  },
  {
    q: "Who are WanderHums Trip Captains?",
    a: "Our Trip Captains are not traditional boring tour guides. They are seasoned mountain explorers, guitarists, storytellers, certified wilderness first-responders, and community builders whose only mission is to ensure you have the most exhilarating, safe, and stress-free trip of your life."
  }
];
