// ============================================
// REDIRECT CONFIGURATION
// Neeche apni redirect link paste karein
// Ya settings page se bhi change kar sakte hain
// ============================================

var redirectURL = "https://www.effectivegatecpm.com/bjcqj83y?key=f58a94d8f4d54d587c28d2b7fffa4830"; // <-- Yahan apni link daalein, e.g. "https://google.com"

// ============================================
// REDIRECT LOGIC — Isko change karne ki zaroorat nahi
// ============================================
(function () {
  if (redirectURL && redirectURL.trim() !== "") {
    window.location.href = redirectURL.trim();
  }
})();
