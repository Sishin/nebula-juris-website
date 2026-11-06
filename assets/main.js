(function () {
  var FIRM_EMAIL = "subi@nebulajuris.in";

  // Bar Council disclaimer: shown once per browser session
  var disclaimer = document.getElementById("disclaimer");
  var accepted = false;
  try { accepted = sessionStorage.getItem("nj-disclaimer") === "1"; } catch (e) {}
  if (!accepted) {
    disclaimer.hidden = false;
    document.body.classList.add("locked");
  }
  document.getElementById("disclaimer-accept").addEventListener("click", function () {
    try { sessionStorage.setItem("nj-disclaimer", "1"); } catch (e) {}
    disclaimer.hidden = true;
    document.body.classList.remove("locked");
  });

  // Mobile menu
  var toggle = document.getElementById("nav-toggle");
  var links = document.getElementById("nav-links");
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // Contact form opens the visitor's email app (GitHub Pages has no server)
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target;
    var body = f.message.value + "\n\n— " + f.first.value + " " + f.last.value + " (" + f.email.value + ")";
    window.location.href = "mailto:" + FIRM_EMAIL +
      "?subject=" + encodeURIComponent(f.subject.value) +
      "&body=" + encodeURIComponent(body);
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
