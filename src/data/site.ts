// All facts come from veon/client.json (C-001…C-027, products_services). Nothing here is invented.

export const contacts = {
  phones: [
    { href: "tel:+380967770135", label: "+38 (096) 777 0135" },
    { href: "tel:+380631185617", label: "+38 (063) 118 5617" },
  ],
  viber: { href: "viber://chat?number=%2B380631185617", label: "Viber", number: "+38 (063) 118 5617" },
  telegram: { href: "https://t.me/osteopat_arsentieva", label: "Telegram", handle: "@osteopat_arsentieva" },
  address: "Харків, вул. Євгенія Єніна, 33",
  addressNote: "колишня вул. Бакуліна",
  hours: "Понеділок – субота, 9:00–18:00",
  map: "https://www.google.com/maps/search/?api=1&query=%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2%2C%20%D0%B2%D1%83%D0%BB.%20%D0%84%D0%B2%D0%B3%D0%B5%D0%BD%D1%96%D1%8F%20%D0%84%D0%BD%D1%96%D0%BD%D0%B0%2C%2033",
  socials: [
    { href: "https://www.instagram.com/zentr_osteo", label: "Instagram", icon: "instagram" },
    { href: "https://www.facebook.com/profile.php?id=61571661542761", label: "Facebook", icon: "facebook" },
    { href: "https://www.youtube.com/channel/UCowHVX8tuiEbZToOS-JoymQ", label: "YouTube", icon: "youtube" },
  ],
  legal: "ФОП «Арсентьєва В.М.»",
} as const;

/** Who accepts at a stage: "full" — whole stage, "from15" — from 15 years inside the stage, "none". */
export type Cover = "full" | "from15" | "none";

export interface Offer { who: string; detail: string; price?: string }

export interface Stage {
  id: string;
  label: string;
  arsentieva: Cover;
  tarasova: Cover;
  offers: Offer[];
  note?: string;
}

const A = "Арсентьєва В.М.";
const T = "Тарасова О.В.";

export const stages: Stage[] = [
  { id: "infants", label: "Немовлята", arsentieva: "full", tarasova: "none",
    offers: [{ who: A, detail: "прийом 45 хв", price: "2000 грн" }] },
  { id: "under7", label: "До 7 років", arsentieva: "full", tarasova: "none",
    offers: [{ who: A, detail: "прийом 45 хв", price: "2000 грн" }] },
  { id: "teen", label: "7–18 років", arsentieva: "full", tarasova: "from15",
    offers: [
      { who: A, detail: "прийом 60 хв", price: "2000 грн" },
      { who: `${T}, з 15 років`, detail: "прийом 60 хв", price: "1200 грн" },
    ] },
  { id: "pregnancy", label: "Вагітність", arsentieva: "full", tarasova: "none",
    offers: [{ who: A, detail: "приймає вагітних і після пологів" }],
    note: "Тарасова О.В. вагітних не приймає. Вартість прийому уточнюйте телефоном." },
  { id: "adults", label: "Дорослі", arsentieva: "full", tarasova: "full",
    offers: [
      { who: A, detail: "прийом 60 хв, первинна консультація 1700 грн", price: "2000 грн" },
      { who: T, detail: "прийом 60 хв, первинна консультація 800 грн", price: "1200 грн" },
    ] },
  { id: "senior", label: "Старший вік", arsentieva: "full", tarasova: "full",
    offers: [
      { who: A, detail: "прийом 60 хв, первинна консультація 1700 грн", price: "2000 грн" },
      { who: T, detail: "прийом 60 хв, первинна консультація 800 грн", price: "1200 грн" },
    ] },
];

export interface PriceRow { name: string; duration?: string; price: string }
export interface PriceGroup { id: string; title: string; line?: "strong" | "thin"; rows: PriceRow[] }

export const prices: PriceGroup[] = [
  { id: "p-arsentieva", title: "Арсентьєва В.М., магістр остеопатії", line: "strong", rows: [
    { name: "Первинна консультація", duration: "60 хв", price: "1700 грн" },
    { name: "Діти до 7 років", duration: "45 хв", price: "2000 грн" },
    { name: "Діти від 7 до 18 років", duration: "60 хв", price: "2000 грн" },
    { name: "Дорослі, старше 18 років", duration: "60 хв", price: "2000 грн" },
    { name: "Остеопатична косметологія (лікувальний прийом)", duration: "60 хв", price: "2000 грн" },
  ] },
  { id: "p-tarasova", title: "Тарасова О.В., остеопат", line: "thin", rows: [
    { name: "Первинна консультація", duration: "60 хв", price: "800 грн" },
    { name: "Прийом: діти з 15 років, дорослі", duration: "60 хв", price: "1200 грн" },
  ] },
  { id: "p-online", title: "Онлайн", rows: [
    { name: "Первинна консультація", price: "800 грн" },
    { name: "Пакет «6 сеансів за ціною 5»", price: "7000 грн" },
    { name: "Пакет «Сімейний», 3 людини", price: "19 500 грн" },
  ] },
  { id: "p-insoles", title: "Устілки FormTotics", rows: [
    { name: "Індивідуальні ортопедичні устілки", price: "6000 грн" },
    { name: "Первинний прийом і устілки разом", price: "6500 грн" },
    { name: "Корекція через 1 місяць", price: "600 грн" },
  ] },
];

export const steps = [
  { title: "Первинна консультація", text: "Остеопат знайомиться з вами, проводить діагностику, дізнається історію хвороби і складає індивідуальний план лікування." },
  { title: "Підготовка", text: "Візьміть із собою лікарські висновки, аналізи та рентгенівський знімок, звичайний або 3D." },
  { title: "Лікування", text: "Лікар проводить сеанс, призначає вправи з остеопатичним підходом і контролює правильність їх виконання." },
  { title: "Відновлення", text: "Під час курсу організм відновлюється. У цей час важливо відпочивати й уникати надмірних навантажень." },
];

export const nav = [
  { href: "#napriamky", label: "Напрямки" },
  { href: "#fakhivtsi", label: "Фахівці" },
  { href: "#pryiom", label: "Прийом" },
  { href: "#tsiny", label: "Ціни" },
  { href: "#zapys", label: "Контакти" },
];

export const FUTURE = "Розділ у розробці";
