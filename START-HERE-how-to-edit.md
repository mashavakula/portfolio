# Your website — how it works and how to edit it

You now have a small, self-contained website. No WordPress, no plugins — just
files you own. This guide assumes you've never touched HTML. Read it once,
top to bottom; it's short.

---

## 1. What each file is

```
website/
├── index.html                 ← the HOMEPAGE (mmashawakula.com)
├── style.css                  ← the LOOK of every page (colors, fonts, spacing)
├── images/                    ← every picture goes in here
│   └── READ-ME-images.txt     ← (a note; you can delete it)
├── projects/                  ← one file per project
│   ├── streets-designed-as-destinations.html   ← FULLY WRITTEN EXAMPLE — copy this
│   ├── hostynnyi-dvir-art-complex.html         ← empty shell, ready for your text
│   ├── ... (all the other projects) ...
└── START-HERE-how-to-edit.md  ← this guide
```

**The big idea:** the homepage lists your projects. Each item in the list links
to a file in the `projects/` folder. Each of those files is one project page,
where the content (text + images) lives directly on the page — no PDF needed.

---

## 2. How to edit — the only tool you need

Open any `.html` file in a plain text editor. Good free choices:
- **VS Code** (recommended, free): https://code.visualstudio.com
- On Mac: TextEdit works, but choose *Format → Make Plain Text* first.

HTML is just text wrapped in **tags**. A tag looks like `<p>` (start) and
`</p>` (end). For example:

```html
<p>This is one paragraph.</p>
<p>This is another paragraph.</p>
```

To **see your changes**, double-click the `.html` file — it opens in your web
browser. Edit, save, refresh the browser. That's the whole loop.

---

## 3. The three things you'll actually do

### A) Change text
Find the words in the file, type over them, keep the surrounding `<tags>`.
```html
<h1>old title</h1>      →   <h1>new title</h1>
```

### B) Add a project page
1. In the `projects/` folder, **make a copy** of
   `streets-designed-as-destinations.html` (it's the best model — real text and
   images, no placeholder boxes).
2. Rename the copy, e.g. `my-new-project.html` (lowercase, dashes, no spaces).
3. Open it, change the `<title>`, the `<h1>`, the paragraphs, and the images.
4. Open `index.html` and add a line to the **Selected projects** list:
   ```html
   <li><a href="projects/my-new-project.html">my new project title</a></li>
   ```
   The `href` must match the filename exactly.

The empty shell files already in `projects/` work the same way — they just have
dashed **✏️ / 🖼️ boxes** showing you where to add content. Delete each box once
you've filled that spot.

### C) Add an image
1. Drop the image file into the `images/` folder.
2. On the page, add (or edit) a figure block:
   ```html
   <figure>
     <img src="../images/my-picture.jpg" alt="short description" />
     <figcaption>Optional caption.</figcaption>
   </figure>
   ```
   Note the `../images/` — from inside a project page, `../` means "go up one
   folder to find the images folder." On the **homepage** it's just
   `images/my-picture.jpg` (no `../`).

---

## 4. Changing the overall look

Open `style.css`. The block at the very top (`:root { ... }`) has the colors and
widths with plain-English comments. Change a value, save, refresh. For example
`--accent: #b23a2e;` is the small red used for hover/underlines — swap the color
code for any other.

---

## 5. Publishing it on GitHub Pages (free) + your domain

You already have a GitHub account and a domain, so this is the natural home.

### Step 1 — put the site in a GitHub repository
1. Go to https://github.com/new and create a repository. Name it anything,
   e.g. `portfolio`. Make it **Public**. Click *Create repository*.
2. On the new repo page, click **"uploading an existing file"**.
3. Drag in **everything inside the `website/` folder** — that is `index.html`,
   `style.css`, the `images/` folder, and the `projects/` folder. (Upload the
   *contents*, not the `website` folder itself, so `index.html` sits at the top
   level of the repo.)
4. Click **Commit changes**.

### Step 2 — turn on Pages
1. In the repo, go to **Settings → Pages** (left menu).
2. Under *Build and deployment → Source*, choose **Deploy from a branch**.
3. Set branch to **main** and folder to **/(root)**, click **Save**.
4. Wait ~1 minute. GitHub gives you a live URL like
   `https://YOURNAME.github.io/portfolio/`. Open it — that's your site.

### Step 3 — point your domain at it
1. In the repo **Settings → Pages → Custom domain**, type `mmashawakula.com`
   and click **Save**. (This creates a `CNAME` file in your repo — leave it.)
2. Go to wherever you manage your domain's DNS (the registrar you bought it
   from). Add these records:

   For the plain domain `mmashawakula.com` — four **A** records pointing to:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   For `www.mmashawakula.com` — one **CNAME** record pointing to:
   ```
   YOURNAME.github.io
   ```
   (Replace YOURNAME with your GitHub username.)

3. DNS changes can take anywhere from a few minutes to a few hours. Back in
   **Settings → Pages**, once it verifies, tick **Enforce HTTPS**.

> ⚠️ Your domain currently points to WordPress. When you switch the DNS records
> above, the domain will start showing the new site instead. Your old WordPress
> site still exists until you change it — so you can set everything up and only
> flip the DNS when you're happy with the new site. Nothing is deleted
> automatically.

### Updating later
Edit files on your computer, then in the repo click **Add file → Upload files**
and drop in the changed ones (or use GitHub's pencil ✏️ to edit a file right in
the browser). Every save re-publishes within a minute.

---

## 6. Quick reference

| I want to…                    | Do this                                                        |
|-------------------------------|----------------------------------------------------------------|
| Change homepage text          | Edit `index.html`                                              |
| Change how everything looks   | Edit the top of `style.css`                                   |
| Write a project               | Edit its file in `projects/` (copy the `streets…` one)        |
| Add a project to the list     | Add one `<li>` line in `index.html`                           |
| Add a picture                 | Put file in `images/`, reference it with `../images/name.jpg` |
| Publish / update              | Upload changed files to your GitHub repo                        |

That's everything. Start by opening `index.html` in your browser to see it, then
open it in your editor and change one word to prove to yourself how it works.
