# 🚀 ModOn — Workshop de Engenharia de Software

> **Do clone ao site publicado:** customize um workspace de produtividade, versione com Git e veja o deploy acontecer automaticamente.

Este repositório é a base do bloco de **Desenvolvimento Web** do workshop da Engenharia de Software (UniSatc). A aplicação é um *workspace* de foco e produtividade (Pomodoro + Kanban + Spotify + temas) construído com **HTML, CSS e JavaScript**.

---

## 🎯 A atividade em uma frase

Cada dupla faz um **fork**, **clona** o projeto, cria o **próprio tema**, faz o **commit**, dá o **push** e abre um **Pull Request** — enquanto o **CI/CD** constrói e publica o site no GitHub Pages.

---

## 📁 Estrutura de arquivos

```text
.
├── index.html                     # Estrutura da página (HTML)
├── styles.css                     # Aparência / variáveis de tema (CSS)
├── script.js                      # Zona dos Alunos + motor da aplicação (JavaScript)
├── app.html                       # Versão "arquivo único" (gerada pelo build)
├── build.mjs                      # Build local sem dependências (alternativa offline)
├── .github/workflows/deploy.yml   # CI/CD: constrói e publica no GitHub Pages
└── README.md
```

---

## 🖥️ Rodar localmente

Não precisa instalar nada. Basta **abrir o `index.html` no navegador** (dois cliques).
As dependências de interface vêm de CDNs (Tailwind, FontAwesome, Tone.js, Google Fonts).

> Dica: no **VS Code**, a extensão *Live Server* recarrega a página sozinha a cada alteração.

---

## 🎨 Onde os alunos devem mexer

Os participantes editam **exclusivamente o topo do arquivo `script.js`**. O restante do código está protegido pela linha demarcatória e não precisa ser alterado.

### 1. Objeto `APP_CONFIG` — identidade principal

```javascript
const APP_CONFIG = {
  appTitle: "ModOn",
  appSubtitle: "Foco & Produtividade",
  brandIcon: "fa-cubes-stacked",          // ícone do FontAwesome

  theme: {
    primaryColor: "#8b5cf6",
    accentColor: "#ec4899",
    bgOverlay: "rgba(15, 23, 42, 0.84)",
    bgImageUrl: "https://images.pexels.com/..."
  },

  timer: { focusMinutes: 25, breakMinutes: 5 },
  focusVideoUrl: "https://www.pexels.com/...",
  spotifyPlaylistUrl: "https://open.spotify.com/playlist/...",

  authorName: "Seu Nome & Colega",
  devDate: "Setembro, 2026",

  tasks: [
    { id: "t1", text: "Criar o tema do squad", status: "todo", tag: "Design" }
  ]
};
```

### 2. Objeto `PRESETS` — temas rápidos

Cada botão de tema no cabeçalho é gerado a partir deste objeto. Altere o nome exibido (`themeName`) e o visual completo:

```javascript
const PRESETS = {
  meuTema: {
    themeName: "Meu Tema",                 // nome que aparece no botão
    appTitle: "ModOn: do meu jeito",
    appSubtitle: "Feito no workshop",
    primaryColor: "#027cfc",               // cor principal
    brandIcon: "fa-gamepad",
    bgImageUrl: "https://images.unsplash.com/...",
    bgOverlay: "rgba(6, 15, 43, 0.55)",
    focusVideoUrl: "https://www.pexels.com/...",
    spotifyPlaylistUrl: "https://open.spotify.com/playlist/..."
  }
};
```

### 3. Modo Painel (sem código)

No próprio app, o botão **"Editar no Painel"** altera título, cores, ícone, mídias e créditos sem escrever uma linha de código. Ideal para quem está começando.

---

## 🧭 Passo a passo do workshop

### 1. Fork

No GitHub, clique em **Fork** (canto superior direito) para criar a sua cópia do repositório.

### 2. Clone

```bash
git clone https://github.com/<SEU-USUARIO>/<NOME-DO-REPO>.git
cd <NOME-DO-REPO>
```

### 3. Edite

Abra `script.js`, mude o `APP_CONFIG` e crie um preset novo em `PRESETS`. Atualize o navegador (F5) e veja o resultado.

### 4. Configure sua identidade no Git (só na primeira vez)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### 5. Commit

```bash
git status
git add .
git commit -m "meu tema: <nome do squad>"
```

> **Commit = save point.** É o "Ctrl+Z" do projeto: registra um ponto seguro da história.

### 6. Push

```bash
git push origin main
```

> No push por HTTPS o GitHub pede **token (PAT)**, não senha. O caminho mais fácil é usar o **GitHub Desktop** ou o **"Sign in with GitHub" do VS Code**.

### 7. Pull Request

No GitHub, abra um **Pull Request** do seu fork para o repositório do laboratório, descrevendo o que você mudou.

---

## 🚀 Publicação automática (CI/CD)

O arquivo `.github/workflows/deploy.yml` define o pipeline:

```text
push na main
   └─ CI:  instala Node → roda `npx html-inline-external` → gera app.html (arquivo único)
   └─ CD:  publica index.html + styles.css + script.js + app.html no GitHub Pages
```

Para funcionar no repositório (ou no seu fork), habilite em
**Settings → Pages → Source: GitHub Actions**.
A URL publicada aparece no job **deploy** da aba **Actions**.

---

## 📦 Build manual (opcional)

```bash
# Opção 1 — via npx (mesma ferramenta do CI)
npx html-inline-external --src index.html --dest app.html

# Opção 2 — sem dependências (offline)
node build.mjs
```

O `app.html` gerado roda sozinho, em qualquer navegador, com dois cliques.

---

## 🆘 Problemas comuns

| Problema | Solução |
|---|---|
| A página abre "sem estilo" | Confirme que `index.html`, `styles.css` e `script.js` estão na mesma pasta |
| As imagens/ícones não carregam | A rede pode estar bloqueando as CDNs; teste outra conexão |
| `git push` pede senha e falha | Use token (PAT) ou o **GitHub Desktop** / **VS Code** |
| O deploy não roda no fork | Habilite **Actions** e **Settings → Pages → GitHub Actions** |

---

Feito com 💙 pela **Engenharia de Software UniSatc** · **LabTEC**.
