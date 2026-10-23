/**
 * WanderHums - Complete Trip Packages & Itineraries Data
 * Curated in authentic WanderHums travel community style
 * Incorporates all 16 WeWravel India destinations + Signature expeditions
 */

const TRIPS_DATA = [
  // 1. Manali - Rohtang - Kasol (3N/4D)
  {
    id: "manali-rohtang-kasol-4d",
    title: "Manali - Rohtang - Kasol (4D/3N)",
    slug: "manali-rohtang-kasol-4d",
    category: "backpacking",
    categoryLabel: "Backpacking Trip",
    state: "Himachal Pradesh",
    duration: "3 Nights / 4 Days",
    daysCount: 4,
    pickup: "Delhi to Delhi",
    destination: "Manali, Rohtang & Kasol, Himachal Pradesh",
    region: "Himachal Pradesh",
    price: 4999,
    originalPrice: 7999,
    emiStarts: "₹850/mo",
    rating: 4.8,
    reviewsCount: 1620,
    badge: "BESTSELLER 🔥",
    badgeClass: "badge-hot",
    seatsLeft: 5,
    altitude: "13,058 Ft (Rohtang Pass)",
    difficulty: "Easy to Moderate",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",
    sharingPrices: {
      quad: 4999,
      triple: 5499,
      dual: 5999
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      "assets/kasol.jpg"
    ],
    highlights: [
      "Scenic mountain route crossing Atal Tunnel & Sissu waterfall",
      "Visit Rohtang Pass snow point & Solang Valley adventures",
      "Explore Hadimba Devi Temple, Old Manali Cafés & Mall Road",
      "Kasol riverside campsite, Manikaran Sahib Gurudwara & hot springs",
      "Campfire, acoustic music & group community fun with WanderHums Captain"
    ],
    inclusions: [
      "Comfortable AC Tempo Traveller / Pushback Volvo (Delhi to Delhi)",
      "3 Nights stay in premium cozy hotels & riverside Swiss camps",
      "Wholesome meals: Breakfast & Dinners as per itinerary",
      "Experienced & energetic WanderHums Trip Captain (Host + Buddy)",
      "Local sightseeing of Manali, Solang Valley, Atal Tunnel, Sissu & Kasol",
      "Tolls, state taxes, driver charges & parking included"
    ],
    exclusions: [
      "Lunches & café personal food orders",
      "Adventure sports tickets (paragliding, river rafting, ziplining)",
      "Rohtang Pass permit fee (if levied by NGT)",
      "Personal expenses & anything not mentioned in inclusions"
    ],
    upcomingBatches: [
      { date: "Every Friday Departure", status: "Filling Fast", seats: 4 },
      { date: "Next Friday Departure", status: "Available", seats: 8 },
      { date: "Subsequent Friday", status: "Available", seats: 12 }
    ],
    itinerary: [
      {
        day: 0,
        title: "Delhi Departure & Overnight Journey",
        desc: "Assemble at designated pickup spot (Majnu Ka Tila / Kashmere Gate, Delhi) by 7:00 PM. Meet your friendly WanderHums Trip Captain and co-travelers. Board the pushback coach and kick off with music & icebreakers. Dinner halt on the highway (self-paid). Overnight drive towards Himachal.",
        meals: "No Meals Included"
      },
      {
        day: 1,
        title: "Manali Arrival & Local Sightseeing",
        desc: "Reach picturesque Manali in the morning. Check in to the hotel and freshen up with hot Himalayan chai. Visit ancient Hadimba Devi Temple amidst towering deodars, Tibetan Monastery, Club House, and Mall Road. Evening stroll in bohemian Old Manali cafés. Return to hotel for delicious dinner and overnight stay.",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Atal Tunnel, Sissu Waterfall & Solang Valley",
        desc: "Wake up early and have hearty breakfast. Drive through the engineering marvel of Atal Tunnel and enter the rugged Lahaul Valley. Explore breathtaking Sissu waterfall and snow points. Later visit Solang Valley for adventure sports (skiing, zorbing, zipline). Return to hotel by evening for bonfire, music, dinner and games.",
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 3,
        title: "Kullu Rafting & Kasol Parvati Valley Campsite",
        desc: "After breakfast, check out and drive towards Kasol. Stop at Kullu for exhilarating river rafting & paragliding (optional). Arrive in Kasol by afternoon, explore vibrant local flea markets and Israeli bakeries. Check into riverside camp with Parvati river flowing alongside. Evening campfire jams and dinner under the stars.",
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 4,
        title: "Manikaran Sahib Gurudwara, Chalal Village & Return Journey",
        desc: "Wake up to misty river views and breakfast. Visit holy Manikaran Sahib Gurudwara and dip in natural therapeutic hot water springs. Enjoy a scenic 20-minute riverside nature walk to Chalal village. In the evening, board our traveller for overnight return journey to Delhi, reaching by Day 5 morning.",
        meals: "Breakfast Included"
      }
    ]
  },

  // 2. Manali - Rohtang - Kasol (2N/3D - Weekend Special)
  {
    id: "manali-rohtang-kasol-3d",
    title: "Manali - Rohtang - Kasol (Weekend Special 3D/2N)",
    slug: "manali-rohtang-kasol-3d",
    category: "weekend",
    categoryLabel: "Weekend Getaway",
    state: "Himachal Pradesh",
    duration: "2 Nights / 3 Days",
    daysCount: 3,
    pickup: "Delhi to Delhi",
    destination: "Manali, Sissu & Kasol, Himachal Pradesh",
    region: "Himachal Pradesh",
    price: 4499,
    originalPrice: 6999,
    emiStarts: "₹750/mo",
    rating: 4.7,
    reviewsCount: 1140,
    badge: "WEEKEND HIT ⚡",
    badgeClass: "badge-deal",
    seatsLeft: 6,
    altitude: "10,000 Ft",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1600&q=80",
    sharingPrices: {
      quad: 4499,
      triple: 4999,
      dual: 5499
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Crisp weekend express escape designed for working professionals",
      "Drive through Atal Tunnel & visit Lahaul Sissu waterfall",
      "Kasol Parvati River camp with stargazing & bonfire",
      "Old Manali cafés & Manikaran Sahib hot springs"
    ],
    inclusions: [
      "Transportation in AC pushback traveller (Delhi to Delhi)",
      "2 Nights stay (1 Night Manali Hotel + 1 Night Kasol Camp)",
      "4 Meals: 2 Breakfasts and 2 Dinners",
      "Certified WanderHums Trip Leader & host",
      "All toll taxes, fuel, driver allowances & parking fees"
    ],
    exclusions: ["Lunches & self activities", "Entry fees & adventure passes"],
    upcomingBatches: [
      { date: "Every Friday Night Departure", status: "Filling Fast", seats: 6 }
    ],
    itinerary: [
      {
        day: 0,
        title: "Friday Night Departure from Delhi",
        desc: "Meet at Kashmere Gate Metro at 8:00 PM. Overnight journey to Manali with travel games and music.",
        meals: "No Meals"
      },
      {
        day: 1,
        title: "Manali Arrival, Atal Tunnel & Sissu",
        desc: "Morning arrival in Manali. Check in, breakfast, drive through Atal Tunnel to Sissu waterfall. Evening bonfire in Manali.",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Kasol Parvati Valley & Campsite Jams",
        desc: "Check out after breakfast, head to Kasol via Kullu. Explore Kasol market, check in to river camp, campfire night.",
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 3,
        title: "Manikaran Sahib & Return to Delhi",
        desc: "Visit Manikaran hot springs and Gurudwara. Evening departure back to Delhi, reaching by Monday 7 AM.",
        meals: "Breakfast Included"
      }
    ]
  },

  // 3. Jibhi - Tirthan Valley (2N/3D)
  {
    id: "jibhi-tirthan-valley",
    title: "Jibhi - Tirthan Valley (3D/2N)",
    slug: "jibhi-tirthan-valley",
    category: "weekend",
    categoryLabel: "Hidden Gem",
    state: "Himachal Pradesh",
    duration: "2 Nights / 3 Days",
    daysCount: 3,
    pickup: "Delhi to Delhi",
    destination: "Jibhi & Tirthan Valley, Himachal Pradesh",
    region: "Himachal Pradesh",
    price: 5499,
    originalPrice: 8499,
    emiStarts: "₹920/mo",
    rating: 4.9,
    reviewsCount: 980,
    badge: "NATURE RETREAT 🌲",
    badgeClass: "badge-hot",
    seatsLeft: 4,
    altitude: "10,800 Ft (Jalori Pass)",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    sharingPrices: {
      quad: 5499,
      triple: 5999,
      dual: 6499
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Trek to mystical Serolsar Lake through dense oak forests",
      "Cross iconic Jalori Pass at 10,800 ft with 360-degree Himalayan vistas",
      "Visit magical Jibhi Wooden Waterfalls & traditional stone cottages",
      "Trout fishing & pebble-hopping by pristine Tirthan River",
      "Acoustic jam session and warm bonfire under starry night sky"
    ],
    inclusions: [
      "AC Tempo Traveller transfer from Delhi to Delhi",
      "2 Nights stay in handpicked riverside wooden cottages / Swiss tents",
      "4 Meals: 2 Breakfasts and 2 Wholesome Dinners",
      "Guided trek to Serolsar Lake & Jalori Pass with Trip Leader",
      "Bonfire nights & group activities",
      "All tolls, driver charges & parking fees"
    ],
    exclusions: ["Lunches and café orders", "Trout fishing permits (optional)"],
    upcomingBatches: [
      { date: "Every Friday Departure", status: "Filling Fast", seats: 4 }
    ],
    itinerary: [
      {
        day: 0,
        title: "Delhi to Aut / Jibhi Overnight Journey",
        desc: "Meet at Kashmere Gate Metro at 7:30 PM. Overnight journey across Punjab and into the lush Mandi/Banjar valley.",
        meals: "No Meals"
      },
      {
        day: 1,
        title: "Jibhi Arrival & Waterfall Exploration",
        desc: "Arrive in serene Jibhi. Check in to wooden alpine cottages. Walk to Jibhi Waterfall and explore traditional Himachali architecture. Evening bonfire and dinner.",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Jalori Pass & Serolsar Lake Trek",
        desc: "Drive up to windy Jalori Pass (10,800 ft). Embark on a breathtaking 5 km trek to holy Serolsar Lake & Budhi Nagin Temple. Evening campfire jams and hot dinner.",
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 3,
        title: "Choi Waterfall & Tirthan Valley - Return to Delhi",
        desc: "Morning hike to Choi Waterfall in Great Himalayan National Park ecozone. Chill by Tirthan river. Evening drive back to Delhi, arriving Monday 6 AM.",
        meals: "Breakfast Included"
      }
    ]
  },

  // 4. Chopta - Tungnath - Chandrashila (2N/3D)
  {
    id: "chopta-tungnath-chandrashila",
    title: "Chopta - Tungnath - Chandrashila (3D/2N)",
    slug: "chopta-tungnath-chandrashila",
    category: "backpacking",
    categoryLabel: "Mountain Trek",
    state: "Uttarakhand",
    duration: "2 Nights / 3 Days",
    daysCount: 3,
    pickup: "Delhi to Delhi / Rishikesh",
    destination: "Chopta & Tungnath, Uttarakhand",
    region: "Uttarakhand",
    price: 4999,
    originalPrice: 7999,
    emiStarts: "₹850/mo",
    rating: 4.9,
    reviewsCount: 1350,
    badge: "HIGHEST SHIVA TEMPLE 🕉️",
    badgeClass: "badge-hot",
    seatsLeft: 3,
    altitude: "13,123 Ft (Chandrashila Peak)",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
    sharingPrices: {
      quad: 4999,
      triple: 5499,
      dual: 5999
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Summit Chandrashila Peak at 13,123 ft with 360° views of Nanda Devi & Trishul",
      "Seek blessings at Tungnath - World's Highest Shiva Temple (12,073 ft)",
      "Explore the emerald reflection of holy Deoria Tal lake",
      "Witness mesmerizing sunrise over the Garhwal Himalayan peaks",
      "Alpine meadow (Bugyal) camping with stargazing and warm bonfire"
    ],
    inclusions: [
      "Delhi to Delhi transportation in AC pushback Tempo Traveller",
      "2 Nights stay in Swiss alpine tents at Chopta meadow",
      "4 Meals: 2 Breakfasts and 2 Delicious Dinners",
      "Certified Mountain Guide & WanderHums Trip Captain",
      "Trek permits, forest entry fees & bonfire sessions"
    ],
    exclusions: ["Personal mule charges", "Lunches on the trail"],
    upcomingBatches: [
      { date: "Every Friday Departure", status: "Filling Fast", seats: 3 }
    ],
    itinerary: [
      {
        day: 0,
        title: "Delhi to Rishikesh & Chopta Overnight Journey",
        desc: "Assemble at Akshardham Metro / Kashmere Gate at 9:00 PM. Drive along the sacred Ganga and Alaknanda valleys.",
        meals: "No Meals"
      },
      {
        day: 1,
        title: "Sari Village & Deoria Tal Trek",
        desc: "Reach Sari village. Trek 2.5 km to serene Deoria Tal lake with reflection of Chaukhamba peaks. Drive to Chopta campsite. Evening bonfire.",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Summit Day: Tungnath Temple & Chandrashila Peak",
        desc: "Early morning start for the 4.5 km climb to Tungnath (highest Shiva temple). Push forward to Chandrashila summit (13,123 ft) for sunrise. Return to camp for dinner.",
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 3,
        title: "Devprayag Sangam & Return to Delhi",
        desc: "Check out, stop at holy Devprayag (confluence of Bhagirathi and Alaknanda creating Ganga). Evening return to Delhi by late night.",
        meals: "Breakfast Included"
      }
    ]
  },

  // 5. Mcleodganj - Triund Trek (2N/3D)
  {
    id: "mcleodganj-triund-trek",
    title: "Mcleodganj - Triund Trek (3D/2N)",
    slug: "mcleodganj-triund-trek",
    category: "backpacking",
    categoryLabel: "Weekend Trek",
    state: "Himachal Pradesh",
    duration: "2 Nights / 3 Days",
    daysCount: 3,
    pickup: "Delhi to Delhi",
    destination: "Mcleodganj, Dharamshala & Triund, Himachal Pradesh",
    region: "Himachal Pradesh",
    price: 5499,
    originalPrice: 8499,
    emiStarts: "₹920/mo",
    rating: 4.8,
    reviewsCount: 1220,
    badge: "SCENIC TREK 🏔️",
    badgeClass: "badge-hot",
    seatsLeft: 7,
    altitude: "9,350 Ft (Triund Ridge)",
    difficulty: "Easy to Moderate",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    sharingPrices: {
      quad: 5499,
      triple: 5999,
      dual: 6499
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Trek to Triund Ridge with breathtaking close-up views of Dhauladhar snow walls",
      "Camp under millions of stars overlooking glittering lights of Kangra Valley",
      "Visit Dalai Lama Temple, Namgyal Monastery & Bhagsu Waterfall",
      "Café hopping in bohemian Dharamkot and Tibetan handicraft markets",
      "Warm campfire with mountain stew and soulful community jam session"
    ],
    inclusions: [
      "Delhi to Delhi transportation in AC Tempo Traveller",
      "1 Night Hotel Stay in Mcleodganj + 1 Night Camping at Triund / Mana",
      "4 Meals: 2 Breakfasts and 2 Dinners",
      "Certified Trek Leader, sleeping bags, mats & tents",
      "All tolls, parking & driver charges"
    ],
    exclusions: ["Lunches and café bills", "Personal porter charges"],
    upcomingBatches: [
      { date: "Every Friday Departure", status: "Filling Fast", seats: 5 }
    ],
    itinerary: [
      {
        day: 0,
        title: "Delhi to Mcleodganj Overnight Drive",
        desc: "Meet at Majnu Ka Tila at 7:00 PM. Board AC traveller and enjoy overnight journey into Himachal.",
        meals: "No Meals"
      },
      {
        day: 1,
        title: "Mcleodganj Sightseeing & Dharamkot",
        desc: "Check in to hotel, visit Dalai Lama Temple, Bhagsu waterfall and Shiva Café. Explore vibrant Dharamkot lanes. Evening dinner and rest.",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Trek to Triund Top & Ridge Camping",
        desc: "After breakfast, begin the 9 km trek to Triund. Pass Magic View café. Reach the ridge by afternoon. Witness sunset over Dhauladhars, bonfire & tent stay.",
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 3,
        title: "Descent & Return to Delhi",
        desc: "Catch sunrise over the valley, descend back to Mcleodganj. Free time for shopping and Tibetan momos. Evening departure to Delhi.",
        meals: "Breakfast Included"
      }
    ]
  },

  // 6. Kasol - Kheerganga Trek (2N/3D)
  {
    id: "kasol-kheerganga-trek",
    title: "Kasol - Kheerganga Trek (3D/2N)",
    slug: "kasol-kheerganga-trek",
    category: "backpacking",
    categoryLabel: "Parvati Valley",
    state: "Himachal Pradesh",
    duration: "2 Nights / 3 Days",
    daysCount: 3,
    pickup: "Delhi to Delhi",
    destination: "Kasol, Barshaini & Kheerganga, Himachal Pradesh",
    region: "Himachal Pradesh",
    price: 4999,
    originalPrice: 7999,
    emiStarts: "₹850/mo",
    rating: 4.8,
    reviewsCount: 1490,
    badge: "HOT SPRINGS ♨️",
    badgeClass: "badge-hot",
    seatsLeft: 4,
    altitude: "9,711 Ft (Kheerganga Top)",
    difficulty: "Moderate",
    image: "assets/kasol.jpg",
    bannerImage: "assets/kasol.jpg",
    sharingPrices: {
      quad: 4999,
      triple: 5499,
      dual: 5999
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "assets/kasol.jpg",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Dip into natural sulfur hot water pool at Kheerganga under open alpine sky",
      "Scenic trek through apple orchards, pine trails & roaring Rudranag waterfalls",
      "Stargaze at 10,000 ft with 360-degree views of snow-capped Parvati range",
      "Explore bohemian Kasol flea markets, Chalal trail & German bakeries",
      "Riverside bonfire & music jam session with fellow wanderers"
    ],
    inclusions: [
      "AC Tempo Traveller from Delhi to Kasol and back",
      "1 Night riverside camp/hotel in Kasol + 1 Night alpine camp at Kheerganga",
      "4 Meals: 2 Breakfasts and 2 Dinners",
      "Experienced Trek Captain & guide",
      "Campfire, music & group games"
    ],
    exclusions: ["Personal meals during trek", "Porter or locker charges"],
    upcomingBatches: [
      { date: "Every Friday Departure", status: "Filling Fast", seats: 4 }
    ],
    itinerary: [
      {
        day: 0,
        title: "Delhi to Kasol Overnight Journey",
        desc: "Meet at Kashmere Gate at 7:00 PM. Icebreakers and overnight drive through Bilaspur and Mandi.",
        meals: "No Meals"
      },
      {
        day: 1,
        title: "Kasol Arrival & Chalal Nature Walk",
        desc: "Check in to Kasol campsite. Walk along Parvati river to rustic Chalal village. Evening chill by Israeli cafés and bonfire.",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Trek to Kheerganga via Rudranag",
        desc: "Drive to Barshaini and trek 12 km to Kheerganga. Pass Rudranag temple and wooden bridges. Take a warm dip in hot spring bath. Night camp under Milky Way.",
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 3,
        title: "Descent to Barshaini & Manikaran - Return",
        desc: "Descend to Barshaini. Visit Manikaran Sahib Gurudwara. Evening departure back to Delhi.",
        meals: "Breakfast Included"
      }
    ]
  },

  // 7. Kasol - Tosh - Kutla (2N/3D)
  {
    id: "kasol-tosh-kutla",
    title: "Kasol - Tosh - Kutla (3D/2N)",
    slug: "kasol-tosh-kutla",
    category: "backpacking",
    categoryLabel: "Folk Village",
    state: "Himachal Pradesh",
    duration: "2 Nights / 3 Days",
    daysCount: 3,
    pickup: "Delhi to Delhi",
    destination: "Kasol, Tosh & Kutla, Himachal Pradesh",
    region: "Himachal Pradesh",
    price: 5499,
    originalPrice: 8499,
    emiStarts: "₹920/mo",
    rating: 4.8,
    reviewsCount: 890,
    badge: "FAIRY MEADOW 🌸",
    badgeClass: "badge-hot",
    seatsLeft: 5,
    altitude: "9,200 Ft (Kutla)",
    difficulty: "Easy to Moderate",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1600&q=80",
    sharingPrices: {
      quad: 5499,
      triple: 5999,
      dual: 6499
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Hike to the fairytale meadow of Kutla tucked above Tosh village",
      "Stay in scenic mountain homestays overlooking Parvati Glacier peaks",
      "Explore hippie cafés, wood-carved traditional houses & local culture",
      "Riverside bonfire jam and warm community vibes"
    ],
    inclusions: [
      "Delhi to Delhi AC Tempo Traveller",
      "1 Night stay in Kasol + 1 Night cozy wooden homestay in Tosh",
      "4 Meals: 2 Breakfasts and 2 Dinners",
      "Guided Kutla hike and village tour with Trip Captain"
    ],
    exclusions: ["Personal expenses", "Lunches on travel"],
    upcomingBatches: [
      { date: "Every Friday Departure", status: "Filling Fast", seats: 5 }
    ],
    itinerary: [
      {
        day: 0,
        title: "Departure from Delhi",
        desc: "Overnight drive from Delhi to Parvati Valley.",
        meals: "No Meals"
      },
      {
        day: 1,
        title: "Kasol & Chalal Exploration",
        desc: "Explore Kasol market, Chalal trail, overnight camp.",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Tosh Village & Kutla Meadow Hike",
        desc: "Drive to Tosh, hike 3 km to tranquil Kutla meadow. Evening bonfire in Tosh overlooking snow peaks.",
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 3,
        title: "Manikaran & Departure",
        desc: "Morning chai, visit Manikaran Sahib, return drive to Delhi.",
        meals: "Breakfast Included"
      }
    ]
  },

  // 8. Chakrata - Tigerfalls (1N/2D)
  {
    id: "chakrata-tigerfalls",
    title: "Chakrata - Tigerfalls Weekend (2D/1N)",
    slug: "chakrata-tigerfalls",
    category: "weekend",
    categoryLabel: "Offbeat Uttarakhand",
    state: "Uttarakhand",
    duration: "1 Night / 2 Days",
    daysCount: 2,
    pickup: "Delhi to Delhi",
    destination: "Chakrata & Tiger Falls, Uttarakhand",
    region: "Uttarakhand",
    price: 4999,
    originalPrice: 7499,
    emiStarts: "₹850/mo",
    rating: 4.7,
    reviewsCount: 710,
    badge: "OFFBEAT WATERFALL 🌊",
    badgeClass: "badge-deal",
    seatsLeft: 6,
    altitude: "7,000 Ft",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    sharingPrices: {
      quad: 4999,
      triple: 5499,
      dual: 5999
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Swim in the pristine plunge pool of 312-ft Tiger Falls",
      "Stunning sunset views from Chilmiri Neck overlooking Himalayan ranges",
      "Explore tranquil deodar forests away from crowded hill stations",
      "Cottage stay with evening barbecue and campfire"
    ],
    inclusions: [
      "Delhi to Delhi transfer in AC Tempo Traveller",
      "1 Night stay in comfortable resort / camp",
      "2 Meals: 1 Breakfast and 1 Dinner",
      "Sightseeing of Tiger Falls, Chilmiri Neck & Budher caves"
    ],
    exclusions: ["Lunches and adventure activities"],
    upcomingBatches: [
      { date: "Every Friday Night Departure", status: "Available", seats: 6 }
    ],
    itinerary: [
      {
        day: 0,
        title: "Delhi to Chakrata Overnight Journey",
        desc: "Night drive from Delhi via Meerut and Dehradun.",
        meals: "No Meals"
      },
      {
        day: 1,
        title: "Tiger Falls Hike & Chilmiri Sunset",
        desc: "Reach Chakrata, hike to majestic Tiger Falls. Sunset at Chilmiri Neck. Evening bonfire and music.",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Budher Caves & Return to Delhi",
        desc: "Visit Moila Top and ancient Budher limestone caves. Return drive to Delhi reaching by Sunday night.",
        meals: "Breakfast Included"
      }
    ]
  },

  // 9. Kanatal - Tehri Lake (3N/4D)
  {
    id: "kanatal-tehri-lake",
    title: "Kanatal - Tehri Lake & Dhanaulti (4D/3N)",
    slug: "kanatal-tehri-lake",
    category: "weekend",
    categoryLabel: "Lakes & Hills",
    state: "Uttarakhand",
    duration: "3 Nights / 4 Days",
    daysCount: 4,
    pickup: "Delhi to Delhi",
    destination: "Kanatal, Tehri Dam & Dhanaulti, Uttarakhand",
    region: "Uttarakhand",
    price: 5499,
    originalPrice: 8499,
    emiStarts: "₹920/mo",
    rating: 4.8,
    reviewsCount: 820,
    badge: "WATER SPORTS 🚤",
    badgeClass: "badge-hot",
    seatsLeft: 5,
    altitude: "8,500 Ft (Surkanda Devi)",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    sharingPrices: {
      quad: 5499,
      triple: 5999,
      dual: 6499
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Jet skiing, banana boat rides & speed boating on turquoise Tehri Lake",
      "Panoramic views of Bandarpoonch peaks from Surkanda Devi Temple",
      "Stroll through fragrant cedar trails of Dhanaulti Eco Park",
      "Campfire, barbecue snacks and stargazing at luxury Kanatal campsite"
    ],
    inclusions: [
      "Delhi to Delhi AC pushback vehicle",
      "3 Nights stay in luxury Swiss camps with attached washrooms",
      "Wholesome Breakfasts & Dinners as per itinerary",
      "Visit to Tehri Lake, Surkanda Devi, Dhanaulti and Mussoorie viewpoints",
      "Campfire nights and WanderHums Trip Captain"
    ],
    exclusions: ["Water sports tickets at Tehri (self-paid)"],
    upcomingBatches: [
      { date: "Every Friday Departure", status: "Filling Fast", seats: 5 }
    ],
    itinerary: [
      {
        day: 0,
        title: "Departure from Delhi",
        desc: "Overnight drive from Delhi towards Rishikesh and Chamba.",
        meals: "No Meals"
      },
      {
        day: 1,
        title: "Kanatal Arrival & Camp Leisure",
        desc: "Check in to hillside camps, nature walk, campfire and dinner.",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Surkanda Devi Ropeway & Dhanaulti",
        desc: "Visit Surkanda Devi Temple atop 8,500 ft peak. Explore Dhanaulti Eco Park deodars. Evening bonfire.",
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 3,
        title: "Tehri Lake Water Sports & Dam View",
        desc: "Full day at Tehri Lake enjoying water sports, floating huts & boat cruise. Return to camp for final celebration dinner.",
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 4,
        title: "Return to Delhi via Rishikesh",
        desc: "Check out, stop by Rishikesh Ram Jhula, arrive in Delhi by late night.",
        meals: "Breakfast Included"
      }
    ]
  },

  // 10. Udaipur - Mount Abu (4N/5D)
  {
    id: "udaipur-mount-abu",
    title: "Udaipur - Mount Abu Royal Tour (5D/4N)",
    slug: "udaipur-mount-abu",
    category: "backpacking",
    categoryLabel: "Royal Heritage",
    state: "Rajasthan",
    duration: "4 Nights / 5 Days",
    daysCount: 5,
    pickup: "Delhi to Delhi / Udaipur",
    destination: "Udaipur & Mount Abu, Rajasthan",
    region: "Rajasthan",
    price: 6499,
    originalPrice: 9999,
    emiStarts: "₹1,090/mo",
    rating: 4.8,
    reviewsCount: 940,
    badge: "ROYAL HERITAGE 👑",
    badgeClass: "badge-hot",
    seatsLeft: 7,
    altitude: "4,000 Ft (Guru Shikhar)",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1600&q=80",
    sharingPrices: {
      quad: 6499,
      triple: 6999,
      dual: 7499
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Sunset boat ride on picturesque Lake Pichola overlooking City Palace",
      "Marvel at 1000-year-old intricate marble carvings of Dilwara Temples",
      "Stand at Guru Shikhar - Highest peak of the Aravalli Range (5,650 ft)",
      "Explore Fateh Sagar Lake, Saheliyon Ki Bari & Bagore Ki Haveli folk dance",
      "Boating at Nakki Lake and romantic sunset at Toad Rock"
    ],
    inclusions: [
      "AC Vehicle transportation throughout the tour",
      "4 Nights stay in 3-star heritage hotels (2N Udaipur + 2N Mount Abu)",
      "Wholesome daily Breakfasts and Dinners",
      "All major sightseeing with trip captain & local guide",
      "Tolls, state road taxes & parking charges"
    ],
    exclusions: ["Monument entrance tickets", "Lake boat rides"],
    upcomingBatches: [
      { date: "Every Thursday Departure", status: "Available", seats: 7 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Udaipur Arrival & Lake Pichola Sunset",
        desc: "Arrive in City of Lakes. Check in to heritage hotel. Evening sunset walk by Lake Pichola and Ghats.",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "City Palace, Saheliyon Ki Bari & Bagore Haveli",
        desc: "Explore grandiose City Palace, Jagdish Temple, Saheliyon Ki Bari and Dharohar cultural dance show.",
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 3,
        title: "Drive to Mount Abu & Nakki Lake",
        desc: "Scenic drive up the Aravalli hills to Mount Abu. Boating on Nakki Lake and sunset from Toad Rock.",
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 4,
        title: "Dilwara Temples & Guru Shikhar Summit",
        desc: "Visit world-famous Dilwara marble temples and conquer Guru Shikhar summit. Evening market stroll.",
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 5,
        title: "Return Journey to Delhi",
        desc: "Breakfast and departure back to Delhi.",
        meals: "Breakfast Included"
      }
    ]
  },

  // 11. Jaisalmer - Longewala (4N/5D)
  {
    id: "jaisalmer-longewala",
    title: "Jaisalmer - Sam Dunes & Longewala Border (5D/4N)",
    slug: "jaisalmer-longewala",
    category: "backpacking",
    categoryLabel: "Thar Desert",
    state: "Rajasthan",
    duration: "4 Nights / 5 Days",
    daysCount: 5,
    pickup: "Delhi to Delhi / Jaisalmer",
    destination: "Jaisalmer, Sam Sand Dunes & Longewala, Rajasthan",
    region: "Rajasthan",
    price: 6999,
    originalPrice: 10999,
    emiStarts: "₹1,170/mo",
    rating: 4.9,
    reviewsCount: 1110,
    badge: "DESERT SAFARI 🐪",
    badgeClass: "badge-hot",
    seatsLeft: 5,
    altitude: "Desert Terrain",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
    sharingPrices: {
      quad: 6999,
      triple: 7499,
      dual: 7999
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Thar Desert luxury Swiss camp stay with traditional Kalbelia folk dance & campfire",
      "Adrenaline-pumping 4x4 Jeep dune bashing & camel safari during golden hour",
      "Pay homage at historic Longewala War Memorial & Tanot Mata Temple",
      "Walk the living golden fort of Sonar Qella (Jaisalmer Fort) & Patwon Ki Haveli",
      "Visit haunted ruins of abandoned Kuldhara village"
    ],
    inclusions: [
      "AC transportation throughout Delhi to Delhi",
      "2 Nights Hotel in Jaisalmer + 2 Nights Luxury Desert Camp at Sam Dunes",
      "Daily Breakfast & Authentic Rajasthani Dinners",
      "Jeep Safari & Camel Ride in sand dunes",
      "Traditional welcome with Aarti, Tikka, Dhol, Cultural dance & Bonfire"
    ],
    exclusions: ["Personal monument tickets & camera fees"],
    upcomingBatches: [
      { date: "Every Thursday Departure", status: "Filling Fast", seats: 5 }
    ],
    itinerary: [
      {
        day: 0,
        title: "Delhi to Jaisalmer Overnight Drive",
        desc: "Overnight drive into the heart of Rajasthan.",
        meals: "No Meals"
      },
      {
        day: 1,
        title: "Golden City Arrival & Gadisar Lake",
        desc: "Check in, visit serene Gadisar Lake and local markets.",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Sonar Qella Fort & Kuldhara to Sam Dunes",
        desc: "Tour living Golden Fort and Patwon Ki Haveli. Stop by haunted Kuldhara. Reach Sam Sand Dunes for camel ride, folk music & bonfire.",
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 3,
        title: "Longewala Border Post & Tanot Mata Temple",
        desc: "Drive to India-Pakistan border, inspect captured tanks at Longewala War Memorial and visit Tanot Mata temple.",
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 4,
        title: "Jeep Dune Bashing & Desert Sunrise - Return",
        desc: "Morning desert sunrise, thrilling Jeep safari across sand dunes, check out and return drive to Delhi.",
        meals: "Breakfast Included"
      }
    ]
  },

  // 12. Kedarkantha Trek (6N/7D)
  {
    id: "kedarkantha-trek",
    title: "Kedarkantha Winter Snow Trek (7D/6N)",
    slug: "kedarkantha-trek",
    category: "backpacking",
    categoryLabel: "Snow Trek",
    state: "Uttarakhand",
    duration: "6 Nights / 7 Days",
    daysCount: 7,
    pickup: "Dehradun / Delhi to Delhi",
    destination: "Sankri, Juda Ka Talab & Kedarkantha Peak, Uttarakhand",
    region: "Uttarakhand",
    price: 5499,
    originalPrice: 9499,
    emiStarts: "₹920/mo",
    rating: 4.9,
    reviewsCount: 1720,
    badge: "CLASSIC WINTER TREK ❄️",
    badgeClass: "badge-hot",
    seatsLeft: 4,
    altitude: "12,500 Ft (Kedarkantha Peak)",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
    sharingPrices: {
      quad: 5499,
      triple: 5999,
      dual: 6499
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Conquer Kedarkantha Peak at 12,500 ft for jaw-dropping 360° Himalayan sunrise",
      "Camp on snow by the frozen emerald lake of Juda Ka Talab",
      "Trek through ancient deodar forests coated in knee-deep winter snow",
      "Certified mountaineering guides, microspikes, gaiters & high-altitude support"
    ],
    inclusions: [
      "Dehradun to Sankri and return transport in shared vehicle",
      "All accommodation: Homestay in Sankri + Alpine dome tents on trek",
      "All nutritious meals (Breakfast, Lunch, Evening Snacks & Dinner) during trek",
      "Trek equipment: Tents, zero-degree sleeping bags, crampons, gaiters",
      "Forest permits, safety kits and oxygen cylinder backup"
    ],
    exclusions: ["Offloading of personal backpack (optional)"],
    upcomingBatches: [
      { date: "Every Saturday Departure", status: "Filling Fast", seats: 4 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Dehradun to Sankri Basecamp Drive",
        desc: "210 km scenic mountain drive through Mussoorie, Mori and along the Tons River to rustic Sankri village.",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Sankri to Juda Ka Talab Camp (9,100 ft)",
        desc: "4 km trek through maple and pine forests. Pitch tents near mystical frozen lake Juda Ka Talab.",
        meals: "Breakfast, Lunch & Dinner Included"
      },
      {
        day: 3,
        title: "Juda Ka Talab to Kedarkantha Basecamp (11,250 ft)",
        desc: "Climb through oak ridges to open snow meadow basecamp with direct views of the summit.",
        meals: "Breakfast, Lunch & Dinner Included"
      },
      {
        day: 4,
        title: "Summit Day: 12,500 Ft Sunrise & Descend to Hargaon",
        desc: "Midnight push to the peak. Reach Shiva shrine at summit for majestic sunrise over Swargarohini & Bandarpoonch. Descend to Hargaon.",
        meals: "Breakfast, Lunch & Dinner Included"
      },
      {
        day: 5,
        title: "Hargaon to Sankri Village",
        desc: "Descend 6 km back to Sankri. Hot showers and celebration dinner with local Garhwali folk.",
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 6,
        title: "Sankri to Dehradun & Return",
        desc: "Drive back to Dehradun, catching evening trains/buses back to Delhi.",
        meals: "Breakfast Included"
      }
    ]
  },

  // 13. Badrinath Yatra (3N/4D)
  {
    id: "badrinath-yatra",
    title: "Badrinath Yatra & Mana Village (4D/3N)",
    slug: "badrinath-yatra",
    category: "backpacking",
    categoryLabel: "Spiritual Yatra",
    state: "Uttarakhand",
    duration: "3 Nights / 4 Days",
    daysCount: 4,
    pickup: "Haridwar / Rishikesh / Delhi",
    destination: "Badrinath, Joshimath & Mana, Uttarakhand",
    region: "Uttarakhand",
    price: 6999,
    originalPrice: 10499,
    emiStarts: "₹1,170/mo",
    rating: 4.9,
    reviewsCount: 1540,
    badge: "SACRED DHAM 🕉️",
    badgeClass: "badge-hot",
    seatsLeft: 6,
    altitude: "10,279 Ft (Badrinath)",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
    sharingPrices: {
      quad: 6999,
      triple: 7499,
      dual: 7999
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "VIP Darshan at holy Badrinath Temple nestled between Nar and Narayan peaks",
      "Dip in Tapt Kund natural hot sulfur spring before prayers",
      "Visit Mana - The Last Indian Village on Indo-China border",
      "Explore Vyas Gufa, Ganesh Gufa & roaring Saraswati River at Bhim Pul",
      "Panoramic views of Neelkanth Peak & Alaknanda riverbed"
    ],
    inclusions: [
      "AC pushback Tempo Traveller from Haridwar/Rishikesh",
      "3 Nights hotel accommodation (Joshimath / Pipalkoti & Badrinath)",
      "Daily wholesome vegetarian Breakfasts and Dinners",
      "Yatra registration assistance & experienced pilgrimage coordinator",
      "All tolls, driver charges & state permits"
    ],
    exclusions: ["Personal puja / special VIP priority slips", "Lunches"],
    upcomingBatches: [
      { date: "Every Tuesday & Friday Departure", status: "Filling Fast", seats: 6 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Haridwar/Rishikesh to Joshimath via Devprayag & Rudraprayag",
        desc: "Early morning start. Witness holy sangams at Devprayag, Rudraprayag, and Karnaprayag. Arrive in Joshimath for dinner.",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Joshimath to Badrinath & Evening Aarti",
        desc: "Drive to Badrinath Dham. Take bath in Tapt Kund, attend sacred evening Maha Aarti of Lord Badri Vishal. Overnight stay in Badrinath.",
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 3,
        title: "Morning Darshan & Mana Village Exploration",
        desc: "Morning temple darshan. Visit Mana Village, Vyas Gufa, and Saraswati River gorge at Bhim Pul. Drive back to Joshimath/Pipalkoti.",
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 4,
        title: "Return Drive to Rishikesh & Haridwar",
        desc: "Return drive with stops for Ganga Aarti in Rishikesh. Drop off at railway station/bus terminal.",
        meals: "Breakfast Included"
      }
    ]
  },

  // 14. Kedarnath Yatra (2N/3D)
  {
    id: "kedarnath-yatra",
    title: "Kedarnath Yatra Special (3D/2N)",
    slug: "kedarnath-yatra",
    category: "backpacking",
    categoryLabel: "Sacred Jyotirlinga",
    state: "Uttarakhand",
    duration: "2 Nights / 3 Days",
    daysCount: 3,
    pickup: "Haridwar / Rishikesh / Delhi",
    destination: "Sonprayag, Gaurikund & Kedarnath Dham, Uttarakhand",
    region: "Uttarakhand",
    price: 6999,
    originalPrice: 10999,
    emiStarts: "₹1,170/mo",
    rating: 4.9,
    reviewsCount: 2180,
    badge: "HOLY JYOTIRLINGA 🕉️",
    badgeClass: "badge-hot",
    seatsLeft: 3,
    altitude: "11,755 Ft (Kedarnath Temple)",
    difficulty: "Challenging",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
    sharingPrices: {
      quad: 6999,
      triple: 7499,
      dual: 7999
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Emotional Darshan at ancient Kedarnath Temple under the majestic Kedar Dome peak",
      "Attend the soul-stirring evening Sandhya Aarti with hundreds of devotees",
      "Scenic trek alongside roaring Mandakini river via Jungle Chatti & Lincholi",
      "Visit sacred Bhairavnath Temple overlooking entire Kedarnath valley",
      "Complete medical clearance support, oxygen canister assistance & guide"
    ],
    inclusions: [
      "Haridwar/Rishikesh to Sonprayag and back in comfortable traveller",
      "1 Night stay at Guptkashi/Sonprayag + 1 Night stay at Kedarnath Base (GMVN/Guest House)",
      "Daily nutritious vegetarian Breakfasts and Dinners",
      "Uttarakhand Yatra registration support & experienced Trek Lead",
      "All parking, tolls and driver allowances"
    ],
    exclusions: ["Helicopter or horse/pony/palki charges", "Lunches on trek"],
    upcomingBatches: [
      { date: "Every Monday & Friday Departure", status: "Filling Fast", seats: 3 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Haridwar to Guptkashi / Sonprayag",
        desc: "Scenic drive through Devprayag and along Mandakini river. Reach Guptkashi, check in and rest before trek.",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Gaurikund to Kedarnath Dham Trek (16 km)",
        desc: "Early morning shuttle to Gaurikund. Trek uphill alongside Mandakini river. Reach Kedarnath by afternoon. Attend magical Sandhya Aarti and overnight stay in Kedarnath.",
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 3,
        title: "Morning Darshan, Descend & Return",
        desc: "Early morning Abhishek and temple parikrama. Trek downhill to Gaurikund. Board vehicle and return to Haridwar/Rishikesh by late night.",
        meals: "Breakfast Included"
      }
    ]
  },

  // 15. Do Dham Yatra (6N/7D)
  {
    id: "do-dham-yatra",
    title: "Do Dham Yatra (Kedarnath & Badrinath) (7D/6N)",
    slug: "do-dham-yatra",
    category: "backpacking",
    categoryLabel: "Sacred Circuit",
    state: "Uttarakhand",
    duration: "6 Nights / 7 Days",
    daysCount: 7,
    pickup: "Haridwar / Rishikesh",
    destination: "Kedarnath & Badrinath, Uttarakhand",
    region: "Uttarakhand",
    price: 10999,
    originalPrice: 15999,
    emiStarts: "₹1,840/mo",
    rating: 4.9,
    reviewsCount: 1840,
    badge: "MOST REVERED 🕉️",
    badgeClass: "badge-hot",
    seatsLeft: 4,
    altitude: "11,755 Ft",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
    sharingPrices: {
      quad: 10999,
      triple: 11999,
      dual: 12999
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Complete pilgrimage to both sacred shrines of Kedarnath & Badrinath",
      "Visit Mana Village, Saraswati river origin, Bhim Pul & Vyas Gufa",
      "Attend both morning and evening Aartis with divine spiritual energy",
      "Full logistics coordination, verified clean stays & vegetarian sattvic meals"
    ],
    inclusions: [
      "Haridwar to Haridwar AC Tempo Traveller transport",
      "6 Nights clean hotel & guest house stays across circuit",
      "Pure vegetarian daily Breakfasts and Dinners",
      "Experienced pilgrimage guide and registration support",
      "All driver charges, toll taxes and interstate permits"
    ],
    exclusions: ["Helicopter tickets, mule/palki charges", "Lunches"],
    upcomingBatches: [
      { date: "Every Wednesday Departure", status: "Filling Fast", seats: 4 }
    ],
    itinerary: [
      { day: 1, title: "Haridwar to Guptkashi", desc: "Drive along Mandakini river.", meals: "Dinner Included" },
      { day: 2, title: "Guptkashi to Kedarnath Trek", desc: "Ascend to Kedarnath temple, attend Aarti.", meals: "Breakfast & Dinner" },
      { day: 3, title: "Kedarnath to Guptkashi Descent", desc: "Morning darshan and descent to base.", meals: "Breakfast & Dinner" },
      { day: 4, title: "Guptkashi to Pipalkoti / Joshimath", desc: "Scenic mountain crossing.", meals: "Breakfast & Dinner" },
      { day: 5, title: "Badrinath Darshan & Mana Village", desc: "Temple darshan and Mana border village.", meals: "Breakfast & Dinner" },
      { day: 6, title: "Joshimath to Rudraprayag / Srinagar", desc: "Visit Shankaracharya Math, drive to Srinagar.", meals: "Breakfast & Dinner" },
      { day: 7, title: "Rishikesh & Haridwar Drop", desc: "Return drop with Ganga Aarti in Rishikesh.", meals: "Breakfast Included" }
    ]
  },

  // 16. Char Dham Yatra (11N/12D)
  {
    id: "char-dham-yatra",
    title: "Complete Char Dham Yatra (12D/11N)",
    slug: "char-dham-yatra",
    category: "backpacking",
    categoryLabel: "Ultimate Pilgrimage",
    state: "Uttarakhand",
    duration: "11 Nights / 12 Days",
    daysCount: 12,
    pickup: "Haridwar / Delhi",
    destination: "Yamunotri, Gangotri, Kedarnath & Badrinath",
    region: "Uttarakhand",
    price: 29999,
    originalPrice: 42999,
    emiStarts: "₹3,450/mo",
    rating: 5.0,
    reviewsCount: 1250,
    badge: "MOKSHA CIRCUIT 🕉️",
    badgeClass: "badge-hot",
    seatsLeft: 5,
    altitude: "11,755 Ft",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
    sharingPrices: {
      quad: 29999,
      triple: 32999,
      dual: 35999
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Complete sacred circumnavigation of Yamunotri, Gangotri, Kedarnath & Badrinath",
      "Dip in Surya Kund & cook rice prasad at Yamunotri",
      "Holy Bhagirathi Aarti at picturesque Gangotri Temple",
      "Darshan at high-altitude Kedarnath Jyotirlinga & Badri Vishal",
      "Dedicated medical assistance, seasoned pilgrimage coordinators & premium buses"
    ],
    inclusions: [
      "Deluxe pushback bus / Tempo Traveller throughout 12 days",
      "11 Nights accommodation in verified hotels and guest houses",
      "All pure vegetarian daily Breakfasts and Dinners",
      "Char Dham biometric registration & priest liaison assistance",
      "Tolls, permits, driver costs & parking included"
    ],
    exclusions: ["Helicopter passes & mule charges", "Lunches on road"],
    upcomingBatches: [
      { date: "Every Sunday & Wednesday Departure", status: "Available", seats: 5 }
    ],
    itinerary: [
      { day: 1, title: "Haridwar to Barkot", desc: "Drive via Mussoorie & Kempty Falls.", meals: "Dinner Included" },
      { day: 2, title: "Yamunotri Dham Darshan", desc: "Trek to Yamunotri, Surya Kund dip, return to Barkot.", meals: "Breakfast & Dinner" },
      { day: 3, title: "Barkot to Uttarkashi", desc: "Visit Kashi Vishwanath temple in Uttarkashi.", meals: "Breakfast & Dinner" },
      { day: 4, title: "Gangotri Dham Darshan", desc: "Drive along Bhagirathi to Gangotri Temple.", meals: "Breakfast & Dinner" },
      { day: 5, title: "Uttarkashi to Guptkashi", desc: "Scenic mountain transfer to Kedarnath base.", meals: "Breakfast & Dinner" },
      { day: 6, title: "Guptkashi to Kedarnath Trek", desc: "Ascend to Kedarnath and attend evening Aarti.", meals: "Breakfast & Dinner" },
      { day: 7, title: "Kedarnath Darshan & Descent", desc: "Morning prayers, descend to Sonprayag/Guptkashi.", meals: "Breakfast & Dinner" },
      { day: 8, title: "Guptkashi to Pipalkoti", desc: "Drive through Chopta and Mandal valleys.", meals: "Breakfast & Dinner" },
      { day: 9, title: "Badrinath Dham & Mana Village", desc: "Visit Badri Vishal and Last Village of India.", meals: "Breakfast & Dinner" },
      { day: 10, title: "Badrinath to Rudraprayag", desc: "Witness holy river confluences on return.", meals: "Breakfast & Dinner" },
      { day: 11, title: "Rudraprayag to Rishikesh", desc: "Relax by the Ganga and attend Triveni Ghat Aarti.", meals: "Breakfast & Dinner" },
      { day: 12, title: "Rishikesh to Haridwar Drop", desc: "Tour concludes with blessings and drop at railway station.", meals: "Breakfast Included" }
    ]
  },

  // 17. Spiti Valley Circuit (Signature Expedition)
  {
    id: "spiti-valley-circuit",
    title: "Spiti Valley Road Trip - The Middle Land Odyssey",
    slug: "spiti-valley-circuit",
    category: "backpacking",
    categoryLabel: "High-Altitude Road Trip",
    state: "Himachal Pradesh",
    duration: "9 Days / 8 Nights",
    daysCount: 9,
    pickup: "Delhi to Delhi",
    destination: "Spiti Valley, Himachal Pradesh",
    region: "Himachal Pradesh",
    price: 18499,
    originalPrice: 24999,
    emiStarts: "₹1,540/mo",
    rating: 4.9,
    reviewsCount: 1420,
    badge: "BESTSELLER 🔥",
    badgeClass: "badge-hot",
    seatsLeft: 4,
    altitude: "14,931 Ft (Kunzum Pass)",
    difficulty: "Moderate",
    image: "assets/spiti.jpg",
    bannerImage: "assets/spiti.jpg",
    sharingPrices: {
      quad: 18499,
      triple: 19999,
      dual: 21999
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
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
      { date: "02 May - 10 May 2026", status: "Available", seats: 9 }
    ],
    itinerary: [
      { day: 1, title: "Delhi to Shimla / Narkanda", desc: "Overnight drive to Himachal gateway.", meals: "No Meals" },
      { day: 2, title: "Narkanda to Sangla / Chitkul", desc: "Visit Chitkul, last village on Indo-Tibet border.", meals: "Breakfast & Dinner" },
      { day: 3, title: "Sangla to Kalpa", desc: "Roghi Suicide Point and Kinner Kailash view.", meals: "Breakfast & Dinner" },
      { day: 4, title: "Kalpa to Kaza via Tabo", desc: "Cross Nako Lake and 1000-year Tabo Monastery.", meals: "Breakfast & Dinner" },
      { day: 5, title: "Kaza - Hikkim, Komic, Langza & Key", desc: "Highest post office and Key Monastery.", meals: "Breakfast & Dinner" },
      { day: 6, title: "Kaza to Chandratal via Kunzum Pass", desc: "Conquer Kunzum La (14,931 ft) & camp at Moon Lake.", meals: "Breakfast & Dinner" },
      { day: 7, title: "Chandratal to Manali via Atal Tunnel", desc: "Drive through Atal Tunnel into Manali.", meals: "Breakfast & Dinner" },
      { day: 8, title: "Manali Leisure & Return to Delhi", desc: "Old Manali cafés and evening return drive.", meals: "Breakfast Included" },
      { day: 9, title: "Arrival in Delhi", desc: "Morning arrival with bags full of memories.", meals: "Trip Ends" }
    ]
  },

  // 18. Ladakh Bike & SUV Expedition
  {
    id: "ladakh-bike-expedition",
    title: "Ladakh Bike & SUV Expedition - The High Altitude Crusade",
    slug: "ladakh-bike-expedition",
    category: "bike",
    categoryLabel: "Motorbike Expedition",
    state: "Ladakh",
    duration: "10 Days / 9 Nights",
    daysCount: 10,
    pickup: "Delhi / Manali to Leh",
    destination: "Leh, Nubra Valley, Pangong Tso & Hanle, Ladakh",
    region: "Ladakh",
    price: 32999,
    originalPrice: 44999,
    emiStarts: "₹2,750/mo",
    rating: 4.9,
    reviewsCount: 1210,
    badge: "BUCKET LIST 🏍️",
    badgeClass: "badge-hot",
    seatsLeft: 3,
    altitude: "17,582 Ft (Khardung La)",
    difficulty: "Moderate to Challenging",
    image: "assets/ladakh.jpg",
    bannerImage: "assets/ladakh.jpg",
    sharingPrices: {
      quad: 32999,
      triple: 34999,
      dual: 37999
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "assets/ladakh.jpg",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Ride Royal Enfield Himalayan across the iconic Khardung La & Chang La",
      "Stargaze at Pangong Tso lake as the turquoise waters change color",
      "Ride double-humped Bactrian camels in cold white dunes of Hunder, Nubra Valley",
      "Visit Magnetic Hill, Pathar Sahib Gurudwara & Sangam of Indus & Zanskar",
      "Backup mechanic, lead rider, backup luggage vehicle & oxygen support"
    ],
    inclusions: [
      "Royal Enfield Himalayan 411cc / 450cc with fuel / SUV seat option",
      "9 Nights stay in handpicked hotels & luxury Swiss camps with attached baths",
      "Daily wholesome buffet Breakfasts and Dinners",
      "Inner Line Permits & Ladakh Ecology Fees",
      "Marshal pilot rider, professional mechanic & backup vehicle"
    ],
    exclusions: ["Personal riding gear (available on rent)", "Lunches"],
    upcomingBatches: [
      { date: "Batches Open from June 2026", status: "Filling Fast", seats: 3 }
    ],
    itinerary: [
      { day: 1, title: "Manali to Jispa", desc: "Cross Atal Tunnel into Lahaul.", meals: "Dinner Included" },
      { day: 2, title: "Jispa to Leh via Baralacha La & Tanglang La", desc: "Epic mountain pass crossing.", meals: "Breakfast & Dinner" },
      { day: 3, title: "Leh Acclimatization & Local Sights", desc: "Shanti Stupa, Leh Palace, Hall of Fame.", meals: "Breakfast & Dinner" },
      { day: 4, title: "Leh to Nubra Valley via Khardung La (17,582 ft)", desc: "World famous pass and Hunder sand dunes.", meals: "Breakfast & Dinner" },
      { day: 5, title: "Turtuk Village Excursion", desc: "Visit Balti village on Indo-Pak border.", meals: "Breakfast & Dinner" },
      { day: 6, title: "Nubra to Pangong Tso via Shyok River", desc: "Offroading to azure Pangong lake.", meals: "Breakfast & Dinner" },
      { day: 7, title: "Pangong to Leh via Chang La", desc: "Sunrise by the lake and ride to Leh.", meals: "Breakfast & Dinner" },
      { day: 8, title: "Leh to Sarchu / Jispa", desc: "Return journey through More Plains.", meals: "Breakfast & Dinner" },
      { day: 9, title: "Jispa to Manali & Delhi", desc: "Drive back to Manali, overnight bus to Delhi.", meals: "Breakfast Included" },
      { day: 10, title: "Arrival in Delhi", desc: "Tour concludes with life-long memories.", meals: "Trip Ends" }
    ]
  },

  // 19. Meghalaya Backpacking
  {
    id: "meghalaya-backpacking",
    title: "Meghalaya Backpacking - Abode of Clouds & Living Roots",
    slug: "meghalaya-backpacking",
    category: "backpacking",
    categoryLabel: "Backpacking Trip",
    state: "Meghalaya",
    duration: "6 Nights / 7 Days",
    daysCount: 7,
    pickup: "Guwahati to Guwahati",
    destination: "Shillong, Cherrapunji, Mawlynnong & Dawki, Meghalaya",
    region: "Northeast India",
    price: 19999,
    originalPrice: 26999,
    emiStarts: "₹1,670/mo",
    rating: 4.9,
    reviewsCount: 880,
    badge: "COMMUNITY FAVORITE 🌿",
    badgeClass: "badge-hot",
    seatsLeft: 5,
    altitude: "4,800 Ft",
    difficulty: "Moderate",
    image: "assets/meghalaya.jpg",
    bannerImage: "assets/meghalaya.jpg",
    sharingPrices: {
      quad: 19999,
      triple: 21499,
      dual: 23499
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "assets/meghalaya.jpg",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Trek 3,500 stone steps down to the UNESCO Double Decker Living Root Bridge",
      "Cliff jump and swim in the emerald crystal waters of Wei Sawdong & Krang Shuri",
      "Boat ride on the transparent Umngot River at Dawki where boats appear floating in air",
      "Walk the clean bamboo bridges of Mawlynnong (Asia's cleanest village)",
      "Explore mystical limestone caverns at Mawsmai & Arwah Caves"
    ],
    inclusions: [
      "Guwahati to Guwahati transfer in comfortable Tempo Traveller",
      "6 Nights stay in boutique homestays and riverside tents",
      "Breakfasts & Dinners as per itinerary",
      "Trek guides for Double Decker bridge & Rainbow falls",
      "Entry fees to all waterfalls, caves & viewpoints"
    ],
    exclusions: ["Boating at Dawki / river activities", "Lunches"],
    upcomingBatches: [
      { date: "Every Saturday Departure", status: "Filling Fast", seats: 5 }
    ],
    itinerary: [
      { day: 1, title: "Guwahati to Shillong via Umiam Lake", desc: "Scenic drive into Scotland of East.", meals: "Dinner Included" },
      { day: 2, title: "Shillong to Cherrapunji (Sohra) via Waterfalls", desc: "Wei Sawdong & Nohkalikai Falls.", meals: "Breakfast & Dinner" },
      { day: 3, title: "Double Decker Living Root Bridge & Rainbow Falls Trek", desc: "Climb through tropical Khasi jungle.", meals: "Breakfast & Dinner" },
      { day: 4, title: "Mawsmai Caves & Mawlynnong Cleanest Village", desc: "Living root bridge of Riwai.", meals: "Breakfast & Dinner" },
      { day: 5, title: "Dawki Glass River & Shnongpdeng Camping", desc: "Riverside camp by Umngot river.", meals: "Breakfast & Dinner" },
      { day: 6, title: "Krang Shuri Waterfall & Return to Shillong", desc: "Turquoise lagoon dip.", meals: "Breakfast & Dinner" },
      { day: 7, title: "Shillong to Guwahati Airport Drop", desc: "Drop at airport with fond memories.", meals: "Breakfast Included" }
    ]
  },

  // 20. Kashmir Backpacking
  {
    id: "kashmir-paradise-circuit",
    title: "Kashmir Backpacking - Gulmarg, Pahalgam & Doodhpathri",
    slug: "kashmir-paradise-circuit",
    category: "backpacking",
    categoryLabel: "Paradise on Earth",
    state: "Jammu & Kashmir",
    duration: "7 Days / 6 Nights",
    daysCount: 7,
    pickup: "Srinagar to Srinagar",
    destination: "Srinagar, Gulmarg, Pahalgam & Doodhpathri, Kashmir",
    region: "Kashmir",
    price: 17999,
    originalPrice: 24999,
    emiStarts: "₹1,500/mo",
    rating: 4.9,
    reviewsCount: 1640,
    badge: "HEAVEN ON EARTH 🏔️",
    badgeClass: "badge-hot",
    seatsLeft: 6,
    altitude: "13,780 Ft (Apharwat Peak)",
    difficulty: "Easy to Moderate",
    image: "assets/kashmir.jpg",
    bannerImage: "assets/kashmir.jpg",
    sharingPrices: {
      quad: 17999,
      triple: 19499,
      dual: 21499
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "assets/kashmir.jpg",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Stay in a traditional carved cedar wooden Houseboat on Dal Lake",
      "Ride the world's 2nd highest Gondola Cable Car in Gulmarg to Apharwat Peak",
      "Shikara ride at golden sunset amidst floating lotus gardens",
      "Explore the untouched alpine meadows of Doodhpathri (Valley of Milk)",
      "Pahalgam riverside walk along crystal Lidder River and Betaab Valley"
    ],
    inclusions: [
      "Srinagar to Srinagar dedicated transport in comfortable Tempo Traveller",
      "5 Nights 3-star boutique hotel + 1 Night luxury Dal Lake Houseboat",
      "6 Breakfasts and 6 Wholesome Kashmiri Dinners",
      "1 Hour Shikara ride on Dal Lake",
      "Experienced WanderHums Trip Captain"
    ],
    exclusions: ["Gulmarg Gondola phase 1 & 2 tickets", "Union taxi in Pahalgam (Aru/Betaab)"],
    upcomingBatches: [
      { date: "Every Sunday Departure", status: "Filling Fast", seats: 6 }
    ],
    itinerary: [
      { day: 1, title: "Srinagar Arrival & Dal Lake Shikara Ride", desc: "Houseboat check in, Shikara ride.", meals: "Dinner Included" },
      { day: 2, title: "Srinagar to Gulmarg Day Trip", desc: "Gondola ride to snow summit.", meals: "Breakfast & Dinner" },
      { day: 3, title: "Srinagar to Doodhpathri Hidden Valley", desc: "Valley of Milk meadows.", meals: "Breakfast & Dinner" },
      { day: 4, title: "Srinagar to Pahalgam Valley of Shepherds", desc: "Saffron fields and Lidder river.", meals: "Breakfast & Dinner" },
      { day: 5, title: "Pahalgam Betaab, Aru & Chandanwari", desc: "Pine forests and waterfalls.", meals: "Breakfast & Dinner" },
      { day: 6, title: "Pahalgam to Srinagar Mughal Gardens", desc: "Nishat & Shalimar Bagh.", meals: "Breakfast & Dinner" },
      { day: 7, title: "Srinagar Airport Drop", desc: "Airport transfer with sweet memories.", meals: "Breakfast Included" }
    ]
  },

  // 21. Bali & Nusa Penida
  {
    id: "bali-island-explorer",
    title: "Bali & Nusa Penida Group Tour - The Tropical Odyssey",
    slug: "bali-island-explorer",
    category: "international",
    categoryLabel: "International Escape",
    state: "International",
    duration: "7 Days / 6 Nights",
    daysCount: 7,
    pickup: "Denpasar (Bali) Airport",
    destination: "Ubud, Nusa Penida, Seminyak & Canggu, Bali",
    region: "International",
    price: 36999,
    originalPrice: 48999,
    emiStarts: "₹3,080/mo",
    rating: 4.9,
    reviewsCount: 960,
    badge: "INTERNATIONAL HIT 🌴",
    badgeClass: "badge-hot",
    seatsLeft: 4,
    altitude: "Sea Level",
    difficulty: "Easy",
    image: "assets/bali.jpg",
    bannerImage: "assets/bali.jpg",
    sharingPrices: {
      quad: 36999,
      triple: 38999,
      dual: 41999
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "assets/bali.jpg",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Iconic T-Rex shaped Kelingking Beach cliff viewpoint on Nusa Penida island",
      "Swing high over lush jungle canopies on the famous Aloha Bali Swings",
      "Snorkel with giant Manta Rays in crystal-clear turquoise lagoons",
      "Catch fiery Kecak fire dance against Indian Ocean sunset at Uluwatu Temple",
      "Stay in boutique pool villas in Ubud and trendy coastal resorts in Seminyak"
    ],
    inclusions: [
      "All airport transfers and private AC vehicle transportation across Bali",
      "6 Nights stay in handpicked 4-star boutique resorts & pool villas",
      "Daily international buffet Breakfasts and curated Dinners",
      "Speedboat ferry tickets to and from Nusa Penida island",
      "English-speaking Indonesian guide + WanderHums Indian Tour Leader"
    ],
    exclusions: ["International flights from India", "Indonesian Visa on Arrival (approx $35)"],
    upcomingBatches: [
      { date: "Every Alternate Saturday", status: "Filling Fast", seats: 4 }
    ],
    itinerary: [
      { day: 1, title: "Arrive at Denpasar Airport & Ubud Transfer", desc: "Welcome to Bali villa.", meals: "Dinner Included" },
      { day: 2, title: "Ubud Bali Swings, Tegalalang Rice Terraces & Waterfall", desc: "Tropical jungle day.", meals: "Breakfast & Dinner" },
      { day: 3, title: "Nusa Penida Island Tour (Kelingking & Broken Beach)", desc: "Speedboat to island.", meals: "Breakfast & Dinner" },
      { day: 4, title: "Snorkeling with Manta Rays & Angel's Billabong", desc: "Lagoon snorkeling.", meals: "Breakfast & Dinner" },
      { day: 5, title: "Transfer to Seminyak & Beach Clubs", desc: "Sunset beach clubs.", meals: "Breakfast & Dinner" },
      { day: 6, title: "Uluwatu Temple & Sunset Kecak Fire Dance", desc: "Dramatic cliff sunset.", meals: "Breakfast & Dinner" },
      { day: 7, title: "Souvenir Shopping & Denpasar Airport Drop", desc: "Flight back to India.", meals: "Breakfast Included" }
    ]
  },

  // 22. Vietnam Highlights
  {
    id: "vietnam-cross-country",
    title: "Vietnam Highlights - Hanoi, Ha Long Bay & Da Nang",
    slug: "vietnam-cross-country",
    category: "international",
    categoryLabel: "International Escape",
    state: "International",
    duration: "8 Days / 7 Nights",
    daysCount: 8,
    pickup: "Hanoi (Noi Bai) Airport",
    destination: "Hanoi, Ha Long Bay, Da Nang & Hoi An, Vietnam",
    region: "International",
    price: 44999,
    originalPrice: 58999,
    emiStarts: "₹3,750/mo",
    rating: 4.9,
    reviewsCount: 780,
    badge: "GLOBAL ADVENTURE 🐉",
    badgeClass: "badge-hot",
    seatsLeft: 5,
    altitude: "Sea Level",
    difficulty: "Easy",
    image: "assets/vietnam.jpg",
    bannerImage: "assets/vietnam.jpg",
    sharingPrices: {
      quad: 44999,
      triple: 46999,
      dual: 49999
    },
    peakSeasonNote: "Above mentioned prices are not applicable between 1st May – 30th June and 20th Dec – 5th Jan.",
    gallery: [
      "assets/vietnam.jpg",
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Overnight luxury cruise across thousands of limestone karsts in UNESCO Ha Long Bay",
      "Walk the world-famous Golden Bridge held by giant stone hands at Ba Na Hills",
      "Kayak through mysterious glowing sea caves and hidden lagoons",
      "Lantern boat ride in the UNESCO ancient heritage town of Hoi An",
      "Sample authentic egg coffee & street food in historic Hanoi Old Quarter"
    ],
    inclusions: [
      "7 Nights 4-star boutique hotel stays + 1 Night luxury Ha Long Bay Cruise cabin",
      "Daily buffet Breakfasts and special Vietnamese/Indian Dinners",
      "All domestic inter-city transfers in AC private vehicles",
      "Ha Long Bay cruise tickets with kayaking and cave excursions",
      "Ba Na Hills cable car pass & Golden Bridge entry ticket",
      "Dedicated WanderHums Trip Captain + local English-speaking guide"
    ],
    exclusions: ["International flights from India", "Vietnam E-visa fee ($25)"],
    upcomingBatches: [
      { date: "Every 2nd & 4th Saturday", status: "Filling Fast", seats: 5 }
    ],
    itinerary: [
      { day: 1, title: "Hanoi Arrival & Old Quarter Street Food Walk", desc: "Welcome to Hanoi.", meals: "Dinner Included" },
      { day: 2, title: "Hanoi to Ha Long Bay Luxury Overnight Cruise", desc: "Limestone karsts & kayaking.", meals: "Breakfast, Lunch & Dinner" },
      { day: 3, title: "Ha Long Bay Sunrise & Flight to Da Nang", desc: "Fly to coastal Da Nang.", meals: "Breakfast & Dinner" },
      { day: 4, title: "Ba Na Hills & Iconic Golden Bridge Hands", desc: "Cable car up mountain.", meals: "Breakfast & Dinner" },
      { day: 5, title: "Hoi An Ancient Lantern Town Walking Tour", desc: "Canal boat and lanterns.", meals: "Breakfast & Dinner" },
      { day: 6, title: "Cam Thanh Coconut Basket Boat Experience", desc: "Spinning basket boats.", meals: "Breakfast & Dinner" },
      { day: 7, title: "Marble Mountains & My Khe Beach", desc: "Coastal relaxation.", meals: "Breakfast & Dinner" },
      { day: 8, title: "Da Nang Airport Drop - Tour Concludes", desc: "Fly back to India.", meals: "Breakfast Included" }
    ]
  }
];

// Helper to look up trip by slug or ID
function getTripById(idOrSlug) {
  if (!idOrSlug) return null;
  return TRIPS_DATA.find(t => t.id === idOrSlug || t.slug === idOrSlug) || null;
}

// Make available in window/global
if (typeof window !== "undefined") {
  window.TRIPS_DATA = TRIPS_DATA;
  window.getTripById = getTripById;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { TRIPS_DATA, getTripById };
}
