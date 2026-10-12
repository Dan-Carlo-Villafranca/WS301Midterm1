document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      toggle.textContent = isOpen ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    }));
  }
  const form = document.getElementById("contactForm");
  if (form) form.addEventListener("submit", event => {
    event.preventDefault();
    const note = document.getElementById("formNote");
    note.textContent = "Thanks — your message has been prepared in this demo. Connect a form backend to receive it.";
    note.classList.add("success");
    form.reset();
  });
});