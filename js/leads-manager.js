/**
 * WanderHums Central Lead Management & Security Engine
 * Handles lead capture, encrypted admin authentication, session guarding,
 * and high-fidelity Excel (.xlsx / .csv) export.
 */

(function(window) {
  'use strict';

  const STORAGE_KEY_LEADS = 'wanderhums_leads_db';
  const STORAGE_KEY_AUTH = 'wanderhums_admin_auth_cfg';
  const SESSION_KEY_TOKEN = 'wanderhums_admin_session_token';
  const STORAGE_KEY_LOCKOUT = 'wanderhums_admin_lockout';

  // Default SHA-256 hash for master password: 'WanderHums@2026!'
  const DEFAULT_HASH = '97897352091c7cc3c226b8a84dfd693f692d8b9ff026d771cd20d7a28a9fc698';
  const VALID_USERNAMES = ['admin@wanderhums.com', 'wanderadmin', 'admin'];

  // Seed sample leads if first time opening the database
  const SEED_LEADS = [
    {
      id: 'WH-9821',
      name: 'Rohan Malhotra',
      phone: '+91 98112 23344',
      email: 'rohan.m@gmail.com',
      destination: 'Spiti Valley Circuit',
      batch: '15 Nov 2026',
      passengers: '4 Backpackers',
      source: 'Trip Detail Page Form',
      message: 'Looking for 4 slots for 15th Nov departure with Delhi pickup. Need info on tempo traveler seating.',
      date: '02 Nov 2026, 09:40 AM',
      timestamp: Date.now() - 3600000 * 2,
      status: 'New'
    },
    {
      id: 'WH-9820',
      name: 'Ananya Sharma',
      phone: '+91 98991 12233',
      email: 'ananya.s@outlook.com',
      destination: 'Meghalaya Backpacking',
      batch: '22 Nov 2026',
      passengers: '2 Backpackers',
      source: 'Contact Us Form',
      message: 'Need info on double sharing room in Cherrapunji and Guwahati airport pickup timings.',
      date: '01 Nov 2026, 04:15 PM',
      timestamp: Date.now() - 3600000 * 18,
      status: 'Contacted'
    },
    {
      id: 'WH-9819',
      name: 'Vikramaditya Rao',
      phone: '+91 97115 54433',
      email: 'vikram.rao@yahoo.com',
      destination: 'Ladakh Bike Expedition',
      batch: 'Summer 2027 Pre-booking',
      passengers: 'Solo Rider',
      source: 'Quick Callback Request',
      message: 'Interested in Himalayan bike package with fuel and backup vehicle included.',
      date: '01 Nov 2026, 11:30 AM',
      timestamp: Date.now() - 3600000 * 24,
      status: 'Follow-up'
    },
    {
      id: 'WH-9818',
      name: 'Sneha & Karan Verma',
      phone: '+91 98710 02299',
      email: 'sneha.verma@gmail.com',
      destination: 'Bali & Nusa Penida',
      batch: '05 Dec 2026',
      passengers: '2 Pax Couple',
      source: 'Direct Booking Modal',
      message: 'Token advance of ₹10,000 paid. Uploaded flight tickets to Denpasar Bali.',
      date: '28 Oct 2026, 02:10 PM',
      timestamp: Date.now() - 3600000 * 120,
      status: 'Converted'
    },
    {
      id: 'WH-9817',
      name: 'Priyanshu Negi',
      phone: '+91 70114 48822',
      email: 'priyanshu.n@gmail.com',
      destination: 'Kasol & Kheerganga Trek',
      batch: 'Weekend Getaway',
      passengers: '3 Friends',
      source: 'Home Page Quick Quote',
      message: 'Need Friday evening departure from Majnu Ka Tila, Delhi.',
      date: '27 Oct 2026, 06:45 PM',
      timestamp: Date.now() - 3600000 * 144,
      status: 'Contacted'
    }
  ];

  /* ------------------------------------------------------------------
     Cryptographic SHA-256 Hashing
     ------------------------------------------------------------------ */
  async function computeSHA256(message) {
    if (window.crypto && window.crypto.subtle) {
      try {
        const msgBuffer = new TextEncoder().encode(message);
        const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      } catch (err) {
        console.warn('SubtleCrypto error, falling back to soft hash', err);
      }
    }
    // Lightweight JS fallback hash if crypto.subtle is blocked
    return jsSha256(message);
  }

  // Pure JS SHA-256 fallback implementation
  function jsSha256(ascii) {
    function rightRotate(value, amount) {
      return (value >>> amount) | (value << (32 - amount));
    }
    const mathPow = Math.pow;
    const maxWord = mathPow(2, 32);
    let i, j;
    const result = '';
    const words = [];
    const asciiBitLength = ascii.length * 8;
    let hash = [];
    const k = [];
    let primeCounter = 0;
    const isComposite = {};
    for (let candidate = 2; primeCounter < 64; candidate++) {
      if (!isComposite[candidate]) {
        for (i = 0; i < 300; i += candidate) isComposite[i] = true;
        hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
        k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
      }
    }
    hash = hash.slice(0, 8);
    ascii += '\x80';
    while ((ascii.length % 64) - 56) ascii += '\x00';
    for (i = 0; i < ascii.length; i++) {
      j = ascii.charCodeAt(i);
      if (j >> 8) return;
      words[i >> 2] |= j << (((3 - i) % 4) * 8);
    }
    words[words.length] = (asciiBitLength / maxWord) | 0;
    words[words.length] = asciiBitLength;
    for (j = 0; j < words.length; ) {
      const w = words.slice(j, (j += 16));
      const oldHash = hash;
      hash = hash.slice(0, 8);
      for (i = 0; i < 64; i++) {
        const w15 = w[i - 15], w2 = w[i - 2];
        const s0 = rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3);
        const s1 = rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10);
        const ch = (hash[4] & hash[5]) ^ (~hash[4] & hash[6]);
        const maj = (hash[0] & hash[1]) ^ (hash[0] & hash[2]) ^ (hash[1] & hash[2]);
        const temp1 = hash[7] + (rightRotate(hash[4], 6) ^ rightRotate(hash[4], 11) ^ rightRotate(hash[4], 25)) + ch + k[i] + (w[i] = (i < 16) ? w[i] : (w[i - 16] + s0 + w[i - 7] + s1) | 0);
        const temp2 = (rightRotate(hash[0], 2) ^ rightRotate(hash[0], 13) ^ rightRotate(hash[0], 22)) + maj;
        hash = [(temp1 + temp2) | 0].concat(hash);
        hash[4] = (hash[4] + temp1) | 0;
      }
      for (i = 0; i < 8; i++) hash[i] = (hash[i] + oldHash[i]) | 0;
    }
    let hex = '';
    for (i = 0; i < 8; i++) {
      for (j = 3; j >= 0; j--) {
        const b = (hash[i] >> (8 * j)) & 255;
        hex += (b < 16 ? '0' : '') + b.toString(16);
      }
    }
    return hex;
  }

  /* ------------------------------------------------------------------
     Lead Database Operations
     ------------------------------------------------------------------ */
  function getRawLeads() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_LEADS);
      if (!data) {
        localStorage.setItem(STORAGE_KEY_LEADS, JSON.stringify(SEED_LEADS));
        return [...SEED_LEADS];
      }
      return JSON.parse(data);
    } catch (e) {
      console.error('Error reading leads from storage:', e);
      return [...SEED_LEADS];
    }
  }

  function setRawLeads(leads) {
    try {
      localStorage.setItem(STORAGE_KEY_LEADS, JSON.stringify(leads));
      // Notify any open admin tab in real time
      window.dispatchEvent(new CustomEvent('wanderhums_leads_updated', { detail: { count: leads.length } }));
    } catch (e) {
      console.error('Error saving leads to storage:', e);
    }
  }

  function formatDateTime(d = new Date()) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = String(d.getDate()).padStart(2, '0');
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    let hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${day} ${month} ${year}, ${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
  }

  /* ------------------------------------------------------------------
     Admin Security & Authentication System
     ------------------------------------------------------------------ */
  function getLockoutState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_LOCKOUT);
      if (!raw) return { attempts: 0, lockedUntil: 0 };
      const parsed = JSON.parse(raw);
      if (Date.now() > parsed.lockedUntil) {
        return { attempts: 0, lockedUntil: 0 };
      }
      return parsed;
    } catch {
      return { attempts: 0, lockedUntil: 0 };
    }
  }

  function recordFailedLogin() {
    const state = getLockoutState();
    state.attempts = (state.attempts || 0) + 1;
    if (state.attempts >= 5) {
      state.lockedUntil = Date.now() + 5 * 60 * 1000; // 5 mins lockout
    }
    localStorage.setItem(STORAGE_KEY_LOCKOUT, JSON.stringify(state));
    return state;
  }

  function resetLockout() {
    localStorage.removeItem(STORAGE_KEY_LOCKOUT);
  }

  function getStoredPasswordHash() {
    try {
      const customCfg = localStorage.getItem(STORAGE_KEY_AUTH);
      if (customCfg) {
        const parsed = JSON.parse(customCfg);
        if (parsed.passwordHash) return parsed.passwordHash;
      }
    } catch (e) {
      console.warn(e);
    }
    return DEFAULT_HASH;
  }

  /* ------------------------------------------------------------------
     Public API
     ------------------------------------------------------------------ */
  const WanderLeads = {
    /**
     * Captures a new lead from any form across the website
     */
    saveLead: function({
      name,
      phone,
      email = '',
      destination = 'General Travel Query',
      batch = 'Flexible',
      passengers = '1 Backpacker',
      source = 'Website Form',
      message = ''
    }) {
      const leads = getRawLeads();
      const uniqueNum = Math.floor(1000 + Math.random() * 9000);
      const newLead = {
        id: `WH-${uniqueNum}`,
        name: (name || 'Traveler').trim(),
        phone: (phone || '').trim(),
        email: (email || '').trim(),
        destination: (destination || 'All Trips').trim(),
        batch: (batch || 'Upcoming').trim(),
        passengers: (passengers || '1 Backpacker').trim(),
        source: (source || 'Website Lead').trim(),
        message: (message || 'Interested in booking upcoming departure.').trim(),
        date: formatDateTime(),
        timestamp: Date.now(),
        status: 'New'
      };

      leads.unshift(newLead);
      setRawLeads(leads);

      console.log('✅ [WanderHums Lead Captured]:', newLead.id, newLead.name, newLead.phone);
      return newLead;
    },

    /**
     * Returns all leads sorted newest first
     */
    getLeads: function() {
      return getRawLeads().sort((a, b) => b.timestamp - a.timestamp);
    },

    /**
     * Updates status of an existing lead
     */
    updateStatus: function(id, newStatus) {
      const leads = getRawLeads();
      const target = leads.find(l => l.id === id);
      if (target) {
        target.status = newStatus;
        setRawLeads(leads);
        return true;
      }
      return false;
    },

    /**
     * Deletes a lead
     */
    deleteLead: function(id) {
      let leads = getRawLeads();
      const initialCount = leads.length;
      leads = leads.filter(l => l.id !== id);
      if (leads.length !== initialCount) {
        setRawLeads(leads);
        return true;
      }
      return false;
    },

    /**
     * Returns dashboard analytics
     */
    getStats: function() {
      const leads = getRawLeads();
      const total = leads.length;
      const newLeads = leads.filter(l => l.status === 'New').length;
      const contacted = leads.filter(l => l.status === 'Contacted' || l.status === 'Follow-up').length;
      const converted = leads.filter(l => l.status === 'Converted').length;

      // Today's leads
      const now = new Date();
      const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
      const todayCount = leads.filter(l => l.timestamp >= startOfDay).length;

      return { total, newLeads, contacted, converted, todayCount };
    },

    /**
     * Secure Login Authentication
     */
    login: async function(username, password) {
      const lockout = getLockoutState();
      if (lockout.lockedUntil > Date.now()) {
        const remainingSec = Math.ceil((lockout.lockedUntil - Date.now()) / 1000);
        return {
          success: false,
          locked: true,
          message: `Too many failed attempts! Panel locked for security. Please try again in ${remainingSec} seconds.`
        };
      }

      const cleanUser = (username || '').trim().toLowerCase();
      const isValidUser = VALID_USERNAMES.includes(cleanUser);
      const computedHash = await computeSHA256(password || '');
      const storedHash = getStoredPasswordHash();

      if (isValidUser && computedHash === storedHash) {
        resetLockout();
        // Generate random session token
        const token = 'wh_sess_' + Math.random().toString(36).substring(2) + Date.now();
        sessionStorage.setItem(SESSION_KEY_TOKEN, JSON.stringify({
          token,
          user: cleanUser,
          loginTime: Date.now(),
          expiresAt: Date.now() + 8 * 3600 * 1000 // 8 hours session
        }));
        return { success: true, token };
      } else {
        const state = recordFailedLogin();
        const left = 5 - state.attempts;
        return {
          success: false,
          message: left > 0
            ? `Invalid Admin ID or Password! ${left} attempt(s) remaining.`
            : `Too many failed attempts! Account temporarily locked for 5 minutes.`
        };
      }
    },

    /**
     * Session Authentication Check
     */
    isAuthenticated: function() {
      try {
        const sessionRaw = sessionStorage.getItem(SESSION_KEY_TOKEN);
        if (!sessionRaw) return false;
        const session = JSON.parse(sessionRaw);
        if (session.expiresAt && Date.now() > session.expiresAt) {
          sessionStorage.removeItem(SESSION_KEY_TOKEN);
          return false;
        }
        return !!session.token;
      } catch {
        return false;
      }
    },

    /**
     * Admin Logout
     */
    logout: function() {
      sessionStorage.removeItem(SESSION_KEY_TOKEN);
      return true;
    },

    /**
     * Master Password Change
     */
    changePassword: async function(oldPassword, newPassword) {
      const oldHash = await computeSHA256(oldPassword);
      const currentStoredHash = getStoredPasswordHash();

      if (oldHash !== currentStoredHash) {
        return { success: false, message: 'Current password does not match!' };
      }

      if (!newPassword || newPassword.length < 6) {
        return { success: false, message: 'New password must be at least 6 characters long!' };
      }

      const newHash = await computeSHA256(newPassword);
      localStorage.setItem(STORAGE_KEY_AUTH, JSON.stringify({
        passwordHash: newHash,
        updatedAt: formatDateTime()
      }));

      return { success: true, message: 'Admin Password successfully updated!' };
    },

    /**
     * Export Leads to Native Excel (.xlsx) or Excel-compatible CSV (.csv)
     */
    exportToExcel: function(customLeads = null) {
      const leads = customLeads || this.getLeads();
      if (!leads || leads.length === 0) {
        alert('No leads available to export!');
        return;
      }

      const fileName = `WanderHums_Travel_Leads_${new Date().toISOString().slice(0, 10)}`;

      // 1. Check if SheetJS (XLSX) is loaded
      if (typeof window.XLSX !== 'undefined') {
        try {
          const exportRows = leads.map((lead, index) => ({
            'S.No': index + 1,
            'Lead ID': lead.id,
            'Date & Time': lead.date,
            'Traveler Name': lead.name,
            'Mobile / Phone': lead.phone,
            'Email': lead.email || 'N/A',
            'Trip / Destination': lead.destination,
            'Batch / Departure': lead.batch,
            'Group Size / Pax': lead.passengers,
            'Status': lead.status,
            'Inquiry Source': lead.source,
            'Traveler Message / Notes': lead.message
          }));

          const worksheet = window.XLSX.utils.json_to_sheet(exportRows);
          
          // Set attractive column widths
          worksheet['!cols'] = [
            { wch: 6 },  // S.No
            { wch: 12 }, // Lead ID
            { wch: 22 }, // Date
            { wch: 20 }, // Name
            { wch: 16 }, // Phone
            { wch: 24 }, // Email
            { wch: 26 }, // Destination
            { wch: 18 }, // Batch
            { wch: 18 }, // Pax
            { wch: 14 }, // Status
            { wch: 22 }, // Source
            { wch: 45 }  // Message
          ];

          const workbook = window.XLSX.utils.book_new();
          window.XLSX.utils.book_append_sheet(workbook, worksheet, 'WanderHums Leads');
          window.XLSX.writeFile(workbook, `${fileName}.xlsx`);
          return;
        } catch (err) {
          console.warn('XLSX export error, falling back to Excel CSV:', err);
        }
      }

      // 2. High-Fidelity CSV fallback with UTF-8 BOM (\uFEFF) for Microsoft Excel
      const headers = ['S.No', 'Lead ID', 'Date & Time', 'Traveler Name', 'Mobile / Phone', 'Email', 'Trip / Destination', 'Batch', 'Group Size', 'Status', 'Inquiry Source', 'Traveler Message / Notes'];
      
      const csvRows = [];
      csvRows.push(headers.map(h => `"${h.replace(/"/g, '""')}"`).join(','));

      leads.forEach((l, idx) => {
        const row = [
          idx + 1,
          l.id,
          l.date,
          l.name,
          l.phone,
          l.email || 'N/A',
          l.destination,
          l.batch,
          l.passengers,
          l.status,
          l.source,
          l.message
        ];
        csvRows.push(row.map(cell => `"${String(cell || '').replace(/"/g, '""')}"`).join(','));
      });

      const csvContent = '\uFEFF' + csvRows.join('\r\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `${fileName}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  // Expose globally
  window.WanderLeads = WanderLeads;

})(window);
