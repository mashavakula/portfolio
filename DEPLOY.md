# Publishing the site on GitHub Pages + connecting mmashawakula.com

Follow these once. After that, updating the site is just editing/uploading files
on github.com (see "Updating later" at the end). No coding tools needed —
everything is done in the browser.

---

## 1. Put the site on GitHub

1. Go to https://github.com/new
2. Repository name: `portfolio` (or anything). Set it **Public**. Click
   **Create repository**.
3. On the new repo page, click the link **"uploading an existing file"**.
4. Open your `website` folder on your computer. Select **everything inside it**:
   - `index.html`
   - `about.html`
   - `style.css`
   - `script.js`
   - `favicon.png`
   - the `images/` folder
   - the `projects/` folder
   - the `files/` folder
   Drag them all into the browser upload area.
   IMPORTANT: upload the *contents* of `website`, so that `index.html` ends up at
   the top level of the repo — NOT inside a `website/` subfolder.
5. You have a lot of images, so let the upload finish (a minute or two).
   Then click **Commit changes**.

---

## 2. Turn on GitHub Pages

1. In the repo, go to **Settings → Pages** (left menu).
2. Under *Build and deployment → Source*, choose **Deploy from a branch**.
3. Branch: **main**. Folder: **/(root)**. Click **Save**.
4. Wait ~1 minute. GitHub shows a URL like
   `https://YOURNAME.github.io/portfolio/`. Open it — the site should load.
   (Fix anything now before connecting the domain.)

---

## 3. Tell GitHub your domain

1. Still in **Settings → Pages → Custom domain**, type:
   ```
   mmashawakula.com
   ```
   and click **Save**.
2. This automatically adds a file named `CNAME` to your repo. Leave it there.

---

## 4. Point the WordPress.com domain at GitHub

Your domain is managed at WordPress.com, so the DNS records live there.

1. Log in to WordPress.com.
2. Go to **Upgrades → Domains** (or **Settings → Domains**), click
   **mmashawakula.com**.
3. Open **DNS records** (may be under "Name servers and DNS").
4. Make the apex domain (shown as `@`) point to GitHub with FOUR **A** records:

   ```
   Type   Name   Value
   A      @      185.199.108.153
   A      @      185.199.109.153
   A      @      185.199.110.153
   A      @      185.199.111.153
   ```

   Remove any existing A records on `@` that point to WordPress's own servers.

5. Add ONE **CNAME** record for the www version:

   ```
   Type    Name   Value
   CNAME   www    YOURNAME.github.io
   ```

   Replace `YOURNAME` with your GitHub username (the `.github.io` part, not the
   full project URL).

If WordPress.com won't let you edit the apex `A` records directly, look for an
option like "Use a different service / point elsewhere," or contact WordPress.com
support and give them the four A records and the CNAME above.

---

## 5. Turn on HTTPS

1. DNS changes take anywhere from a few minutes to a few hours to take effect.
2. Go back to **Settings → Pages**. Once GitHub says the domain is verified,
   tick **Enforce HTTPS** (gives you the padlock / https://).

---

## Important notes

- **Your old WordPress site stays up until the DNS switch takes effect.** The
  moment the new A records propagate, `mmashawakula.com` starts serving the
  GitHub site instead. Nothing is deleted — you're only changing where the
  domain points. You can set everything up and only do Step 4 when you're happy.
- **Filenames are case-sensitive on GitHub Pages.** `Photo.JPG` and `photo.jpg`
  are different files. The site references every image exactly as named, so don't
  rename image files after uploading.
- **Caching.** After an update, browsers may show the old version for a bit. Do a
  hard refresh (Cmd/Ctrl + Shift + R) or open a private window to see changes.

---

## Updating later (no re-upload of everything)

- **Edit text on a page:** open the file on github.com, click the pencil ✏️
  (top-right of the file), edit, then **Commit changes**. Live within ~1 min.
- **Add images or a PDF:** open the `images/` (or `files/`) folder on github.com,
  click **Add file → Upload files**, drag the new files in, **Commit changes**.
- **Replace the CV / portfolio PDF:** upload a file with the same name
  (`masha-vakula-cv.pdf` / `masha-vakula-portfolio.pdf`) into `files/` — it
  overwrites the old one.
- **Delete a file:** open it, click the trash 🗑 icon, **Commit changes**.
