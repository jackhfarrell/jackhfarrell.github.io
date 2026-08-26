const navigation = document.querySelector(".topnav");
const navigationToggle = navigation?.querySelector(".nav-toggle");

navigationToggle?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  navigationToggle.setAttribute("aria-expanded", isOpen);
});
