// ============================================
// REDIRECT CONFIGURATION
// Neeche apni redirect link paste karein
// Ya settings page se bhi change kar sakte hain
// ============================================

var redirectURL = "https://www.effectivegatecpm.com/y14atyqzh?key=89c5a88c2e8ddf5bba6577937482cff5"; // <-- Yahan apni link daalein, e.g. "https://google.com"

// ============================================
// REDIRECT LOGIC — Isko change karne ki zaroorat nahi
// ============================================
(function () {
  if (redirectURL && redirectURL.trim() !== "") {
    window.location.href = redirectURL.trim();
  }
})();
