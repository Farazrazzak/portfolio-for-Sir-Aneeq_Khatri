(function () {
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", open ? "false" : "true");
      navToggle.setAttribute("aria-expanded", open ? "false" : "true");
    });
  }

  var form = document.querySelector("[data-form]");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var status = document.querySelector("[data-form-status]");
      var honeypot = form.querySelector("[data-honeypot]");

      if (honeypot && honeypot.value !== "") {
        if (status) {
          status.textContent = "Sorry, your message could not be sent. Please try again.";
          status.hidden = false;
        }
        return;
      }

      var fields = ["name", "email", "message"];
      var valid = true;
      fields.forEach(function (id) {
        var field = form.querySelector("#" + id);
        if (field && !field.value.trim()) {
          valid = false;
        }
      });

      if (!valid) {
        if (status) {
          status.textContent = "Please fill in all required fields.";
          status.hidden = false;
        }
        return;
      }

      if (status) {
        status.textContent = "Thanks, your message was received. We will reply soon.";
        status.hidden = false;
      }
      form.reset();
    });
  }

  var year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
