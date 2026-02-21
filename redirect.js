// ============================================
// REDIRECT CONFIGURATION
// Neeche apni redirect link paste karein
// Ya settings page se bhi change kar sakte hain
// ============================================

var redirectURL = ""; // <-- Yahan apni link daalein, e.g. "https://google.com"

// ============================================
// REDIRECT LOGIC — Isko change karne ki zaroorat nahi
// Settings page se ya code se — dono kaam karein ge
// ============================================
(function () {
  try {
    var saved = localStorage.getItem('siteSettings');
    if (saved) {
      var s = JSON.parse(saved);
      if (s.redirectEnabled && s.redirectUrl && s.redirectUrl.trim() !== "") {
        window.location.href = s.redirectUrl.trim();
        return;
      }
      if (!s.redirectEnabled) return;
    }
  } catch (e) { }

  // Fallback: code mein likhi hui link
  if (redirectURL && redirectURL.trim() !== "") {
    window.location.href = redirectURL.trim();
  }
})();
