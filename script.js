const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");
const requestForm = document.querySelector("[data-request-form]");
const formStatus = document.querySelector("[data-form-status]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

const updateHeader = () => {
  header?.classList.toggle("scrolled", window.scrollY > 20);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const closeMenu = () => {
  if (!menu || !menuButton) return;
  menu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
  menuButton.querySelector(".sr-only").textContent = "Open navigation";
};

menuButton?.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menu?.classList.toggle("open", willOpen);
  menuButton.setAttribute("aria-expanded", String(willOpen));
  document.body.classList.toggle("menu-open", willOpen);
  menuButton.querySelector(".sr-only").textContent = willOpen
    ? "Close navigation"
    : "Open navigation";
});

menu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

requestForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!requestForm.checkValidity()) {
    requestForm.reportValidity();
    return;
  }

  const formData = new FormData(requestForm);
  const name = formData.get("name");
  const departure = formData.get("departure");
  const destination = formData.get("destination");

  formStatus.textContent = `${name}, your ${departure} to ${destination} request is filled out. This draft has not sent or stored it yet.`;
  formStatus.classList.add("success");
  formStatus.scrollIntoView({ behavior: "smooth", block: "center" });
});
