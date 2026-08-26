const nav = document.getElementById("nav");
const menu = document.getElementById("menu");
const links = document.getElementById("links");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 12);
});

menu.addEventListener("click", () => {
  links.classList.toggle("open");
});

links.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => links.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
