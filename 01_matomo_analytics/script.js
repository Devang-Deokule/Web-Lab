var _paq = window._paq = window._paq || [];

_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);

(function () {
  var analyticsHost = "https://your-matomo-domain.example/";
  _paq.push(["setTrackerUrl", analyticsHost + "matomo.php"]);
  _paq.push(["setSiteId", "1"]);

  var d = document;
  var g = d.createElement("script");
  var s = d.getElementsByTagName("script")[0];
  g.async = true;
  g.src = analyticsHost + "matomo.js";
  s.parentNode.insertBefore(g, s);
})();

document.getElementById("trackButton").addEventListener("click", function () {
  _paq.push(["trackEvent", "Experiment", "ButtonClick", "Sample Event"]);
  document.getElementById("status").textContent = "Sample Matomo event queued.";
});
