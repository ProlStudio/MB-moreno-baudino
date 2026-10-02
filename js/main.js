/* MB — Estudio Jurídico Moreno · Baudino
   1) Mobile navigation  2) Contact form → WhatsApp message
   No dependencies. Content stays usable without JS. */

(function () {
  "use strict";

  /* ---------- 1. Mobile navigation ---------- */
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;
    var label = toggle.querySelector(".visually-hidden");

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
      if (label) label.textContent = open ? "Cerrar menú" : "Abrir menú";
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });

    // Reset state when returning to desktop width.
    window.matchMedia("(min-width: 56.0625rem)").addEventListener("change", function (mq) {
      if (mq.matches) setOpen(false);
    });
  }

  /* ---------- 2. Contact form → WhatsApp ---------- */
  // Vertical rule: only Nombre, Teléfono, Motivo. No free-text case details.
  var WHATSAPP_NUMBER = "5493515501343";

  function initForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    var fields = {
      nombre: { el: form.elements.nombre, msg: "Ingresá tu nombre." },
      telefono: { el: form.elements.telefono, msg: "Ingresá un teléfono válido, con código de área." },
      motivo: { el: form.elements.motivo, msg: "Elegí el área de tu consulta." }
    };
    var status = document.getElementById("form-status");

    function isValid(key) {
      var value = fields[key].el.value.trim();
      if (key === "telefono") return value.replace(/\D/g, "").length >= 8;
      if (key === "nombre") return value.length >= 2;
      return value !== "";
    }

    function showError(key, show) {
      var f = fields[key];
      var error = document.getElementById(key + "-error");
      f.el.setAttribute("aria-invalid", show ? "true" : "false");
      if (error) error.textContent = show ? f.msg : "";
    }

    Object.keys(fields).forEach(function (key) {
      fields[key].el.addEventListener("blur", function () {
        if (fields[key].el.value.trim() !== "") showError(key, !isValid(key));
      });
      fields[key].el.addEventListener("input", function () {
        if (fields[key].el.getAttribute("aria-invalid") === "true" && isValid(key)) showError(key, false);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstInvalid = null;

      Object.keys(fields).forEach(function (key) {
        var ok = isValid(key);
        showError(key, !ok);
        if (!ok && !firstInvalid) firstInvalid = fields[key].el;
      });

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      var text =
        "Hola, quisiera coordinar una consulta.\n" +
        "Nombre: " + fields.nombre.el.value.trim() + "\n" +
        "Teléfono: " + fields.telefono.el.value.trim() + "\n" +
        "Motivo: " + fields.motivo.el.value;

      var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
      // "noopener" as a feature makes window.open() return null, so detach the opener manually.
      var win = window.open(url, "_blank");
      if (win) win.opener = null;
      else window.location.href = url; // popup blocked → same tab

      if (status) status.textContent = "Abrimos WhatsApp con tu mensaje. Solo falta que lo envíes desde allí.";
      form.reset();
    });
  }

  initNav();
  initForm();
})();
