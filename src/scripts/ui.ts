// Header hairline on scroll, mobile menu (Esc, link click, focus return), bottom contact bar after the hero.
const header = document.querySelector<HTMLElement>("[data-header]");
const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const menu = document.querySelector<HTMLElement>("[data-menu]");
const openBtn = document.querySelector<HTMLButtonElement>("[data-menu-open]");
const closeBtn = document.querySelector<HTMLButtonElement>("[data-menu-close]");

function setMenu(open: boolean, returnFocus = true): void {
  if (!menu || !openBtn) return;
  menu.hidden = !open;
  menu.classList.toggle("is-open", open);
  openBtn.setAttribute("aria-expanded", String(open));
  document.documentElement.style.overflow = open ? "hidden" : "";
  if (open) closeBtn?.focus();
  else if (returnFocus) openBtn.focus();
}
openBtn?.addEventListener("click", () => setMenu(true));
closeBtn?.addEventListener("click", () => setMenu(false));
menu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false, false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu && !menu.hidden) setMenu(false);
});
window.matchMedia("(min-width: 64rem)").addEventListener("change", (e) => { if (e.matches && menu && !menu.hidden) setMenu(false, false); });

const bar = document.querySelector<HTMLElement>("[data-mbar]");
const hero = document.getElementById("hero");
const heroCta = hero?.querySelector<HTMLElement>(".hero__channels");
if (bar && heroCta && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(([entry]) => {
    const past = !entry.isIntersecting && entry.boundingClientRect.top < 0;
    bar.classList.toggle("is-shown", past);
  });
  io.observe(heroCta);
} else {
  bar?.classList.add("is-shown");
}
