// ============================================
// REDIRECT CONFIGURATION
// Neeche apni redirect link paste karein
// Ya settings page se bhi change kar sakte hain
// ============================================

var redirectURL = "https://www.effectivegatecpm.com/paciwfjc?key=287a4d6896e933decd35d99d4413bd7a"; // <-- Yahan apni link daalein, e.g. "https://google.com"

// ============================================
// REDIRECT LOGIC — Isko change karne ki zaroorat nahi
// ============================================
(function () {
  if (redirectURL && redirectURL.trim() !== "") {
    window.location.href = redirectURL.trim();
  }
})();
