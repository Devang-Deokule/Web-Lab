var trackButton = document.getElementById("trackButton");

if (trackButton) {
  trackButton.addEventListener("click", function () {
    var paq = (window._paq = window._paq || []);
    paq.push(["trackEvent", "Experiment", "ButtonClick", "Sample Event"]);

    var status = document.getElementById("status");
    if (status) {
      status.textContent = "Sample Matomo event queued.";
    }
  });
}
