// Makes dist/ work from any folder (file://, GitHub Pages subpath): /_astro/… → ./_astro/… in HTML, url(/_astro/…) → url(./…) in CSS.
import fs from "node:fs";
import path from "node:path";
const dist = path.resolve(process.argv[2] || "dist");
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
for (const f of walk(dist)) {
  if (f.endsWith(".html")) {
    const s = fs.readFileSync(f, "utf8");
    const prefix = path.relative(path.dirname(f), dist).split(path.sep).join("/") || ".";
    fs.writeFileSync(f, s.replace(/(["'(\s,])\/_astro\//g, `$1${prefix}/_astro/`));
  } else if (f.endsWith(".css")) {
    const s = fs.readFileSync(f, "utf8");
    fs.writeFileSync(f, s.replace(/url\((["']?)\/_astro\//g, "url($1./"));
  }
}
console.log("relative paths: done");
