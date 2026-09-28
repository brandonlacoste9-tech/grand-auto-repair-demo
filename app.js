// Grand Auto Repair demo — EN only, mobile nav toggle
(function () {
  var menuBtn = document.getElementById("menuBtn");
  var mainNav = document.getElementById("mainNav");
  if (menuBtn && mainNav) {
    menuBtn.addEventListener("click", function () {
      mainNav.classList.toggle("open");
    });
    mainNav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") mainNav.classList.remove("open");
    });
  }
})();
