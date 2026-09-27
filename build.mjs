/*
 * build.mjs — Gera o app.html (arquivo único) inlinando styles.css e script.js.
 *
 * É a alternativa OFFLINE ao comando usado no CI:
 *   npx html-inline-external --src index.html --dest app.html
 *
 * Não depende de nenhum pacote npm (roda com o Node já instalado).
 * Uso:
 *   node build.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";

const css = readFileSync("styles.css", "utf8");
const js = readFileSync("script.js", "utf8");

let html = readFileSync("index.html", "utf8");

html = html.replace(
  '<link rel="stylesheet" href="styles.css">',
  `<style>\n${css}\n</style>`
);

html = html.replace(
  '<script src="script.js"></script>',
  `<script>\n${js}\n</script>`
);

writeFileSync("app.html", html);
console.log("✅ app.html gerado com sucesso.");
