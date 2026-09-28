const gateExperience = document.getElementById("gateExperience");
const enterBtn = document.getElementById("enterBtn");
const portal = document.getElementById("portal");
const gateMessage = document.getElementById("gateMessage");

enterBtn.addEventListener("click", () => {
  if (gateExperience.classList.contains("opening")) return;

  gateExperience.classList.add("opening");
  gateMessage.querySelector("span").textContent = "THE GATE IS OPENING...";

  // Let the physical gate animation finish before revealing the portal.
  setTimeout(() => {
    gateMessage.querySelector("span").textContent = "ශ්‍රී රාහුලීය කලා මංගල්‍යය 2026";
  }, 1100);

  setTimeout(() => {
    gateExperience.style.transition = "opacity .7s ease";
    gateExperience.style.opacity = "0";

    setTimeout(() => {
      gateExperience.style.display = "none";
      portal.classList.remove("hidden");
      window.scrollTo({top: 0, behavior: "instant"});
    }, 700);
  }, 2050);
});

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, {threshold:.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const target = document.querySelector(a.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({behavior:"smooth", block:"start"});
  });
});
