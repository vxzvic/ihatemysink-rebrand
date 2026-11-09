# Rebranding ihatemysink.com in Webflow: a beginner's guide

This guide applies the new I Hate My Sink! brand to the client's **existing Webflow site**.
The domain, pages, blog, forms and Google rankings all stay as they are. You change the look, not the structure.

You don't need to know how to code. Most steps are clicking and pasting. Budget **2–4 hours** the first time.

Everything you'll upload or paste is in the `brand-kit/` folder of this repo.

---

## Before you start (15 min)

### 1. Get access
Ask the client to invite you to their Webflow site with **Designer** (or "Full site") access. You'll get an email invite.
Log in at **webflow.com** and you'll see the site on your Dashboard.

> Without Designer access you can only edit text, not colors and styles. Ask for the right role up front.

### 2. Make a backup, your safety net
1. On the Webflow Dashboard, hover the site, click the **⋯** menu → **Settings**.
2. Open the **Backups** tab and click **Create backup**. Name it `Before rebrand`.

If anything goes wrong, you can restore this backup and the site is exactly as it was.

### 3. Download the brand kit
From this GitHub repo, click the green **Code** button → **Download ZIP**, then unzip it. You'll use:

| File | What it's for |
|---|---|
| `brand-kit/logo-horizontal-blue.svg` | Logo for the top navigation bar |
| `brand-kit/logo-stacked-white.svg` | Logo for the dark footer |
| `brand-kit/favicon-32.png` | The small icon in the browser tab |
| `brand-kit/webclip-256.png` | Icon when someone saves the site to their phone |
| `brand-kit/webflow-head-code.html` | The code snippet you'll paste (fonts, colors, buttons) |
| `brand-kit/recolored-icons/` | The site's own icons, recolored from teal to blue |
| `brand-kit/drain-mark-*.svg` | The drain symbol, for decoration if you want it |

---

## Step 1: Change the color Variables (15 min)

The site keeps its colors in **Variables**. Change a Variable once and every element that uses it updates.

1. From the Dashboard, open the site in the **Designer**.
2. In the left toolbar, open the **Variables** panel.
3. Click each variable below and replace its value with the new hex code:

| Variable name | Old (teal brand) | **New value** | New brand name |
|---|---|---|---|
| `primary` | #497174 | **#1818BE** | Signal Blue |
| `btn-light` | #447C80 | **#1818BE** | Signal Blue |
| `teal-light` | #7BA5A5 | **#73C3D5** | Mineral Blue |
| `bg-light` | #DEE7E7 | **#FCFAF7** | Porcelain |
| `bg-light-white` | #F1F1F1 | **#FCFAF7** | Porcelain |
| `light-black` | #0C2728 | **#08082E** | Midnight Blue |
| `text-black` | #2E3138 | **#08082E** | Midnight Blue |
| `black` | #000000 | **#08082E** | Midnight Blue |

4. While you're in the Variables panel, click **+ New** → **Color** and add `signal-orange` = **#F05A32**, for later use.

✅ The canvas should already look blue instead of teal.

---

## Step 2: Paste the brand code snippet (10 min)

This handles the things that are tedious to click through one by one:
- switches every font to **Inter Tight**
- turns the headings into the new bold, sentence-case style
- makes the buttons orange pills
- fixes about 30 styles where someone had typed the old teal color directly instead of using a Variable

I tested it against the client's live homepage and Our Process page.

1. Go to Dashboard → site **⋯** → **Settings** → **Custom code** tab.
2. Open `brand-kit/webflow-head-code.html` in any text editor (Notepad or TextEdit). Select all and copy.
3. Paste it at the **end** of the **Head code** box. Keep anything already in the box, such as tracking or analytics code.
4. Click **Save changes**.

> ⚠️ **Important:** custom code only shows on the **published** site, not in the Designer canvas.
> So in the Designer the fonts will still look old. That's expected. You'll see the result in Step 6.

---

## Step 3: Swap the logo (10 min)

1. In the Designer, go to the **Home** page and click the old logo at the top left. It's usually inside the **Navbar**.
2. In the right-hand panel, click the **gear icon** (Element settings), then **Replace image**. Upload `logo-horizontal-blue.svg`.
3. If it looks too small or too big: open the **Style** panel (paintbrush icon) and set **Width** to about `220px` and **Height** to `Auto`.
4. Scroll to the **footer** and repeat with `logo-stacked-white.svg`, at a width of about `180px`.
5. In the right panel, set the image's **Alt text** to `I Hate My Sink!`.

> The navbar and footer are usually **Symbols/Components**, shown with a green outline.
> Change them once and they update on every page. If a page still shows the old logo, it's a separate copy: repeat the swap there.

---

## Step 4: Swap the icons (20 min)

The step icons, review quote marks, contact and social icons are uploaded image files in the old teal color.
`brand-kit/recolored-icons/` has the **same files recolored blue, with the same file names**.
`brand-kit/recolored-icons-index.png` shows what each one looks like.

For each file:
1. In the Designer's left toolbar, open the **Assets** panel (the image icon).
2. Find the asset with the matching name, e.g. `Group 62 (1) (1).svg`. The search box helps.
3. Hover it, click the **gear** ⚙ → **Replace image**, and pick the recolored file.

"Replace" swaps the image **everywhere it's used**, so you don't need to hunt through pages.

---

## Step 5: Favicon and phone icon (5 min)

Dashboard → site **⋯** → **Settings** → **General** tab, in the Favicon & Webclip section:
- **Favicon**: upload `favicon-32.png`
- **Webclip**: upload `webclip-256.png`

Click **Save changes**.

---

## Step 6: Publish to the test address first (5 min)

Don't publish to the real domain yet. Publish to the Webflow test address first:

1. In the Designer, click **Publish** (top right).
2. **Untick** `ihatemysink.com` and `www.ihatemysink.com`. **Tick only** the address ending in **`.webflow.io`**.
3. Click **Publish to selected domains**.
4. Open the `.webflow.io` link. This is where you'll see the new fonts and buttons from Step 2.

Send that link to the client for approval. The real site hasn't changed.

---

## Step 7: Clean-up pass (1–2 hours, page by page)

Click through every page on the `.webflow.io` site and note anything still off. Common ones:

- **Headings typed in ALL CAPS**, e.g. "YOUR NEW KITCHEN IN 3 EASY STEPS" or "GETTING STARTED".
  The snippet removes forced capitals, but some headings were *typed* in capitals.
  In the Designer, double-click the text and retype it in sentence case: "Your new kitchen in 3 easy steps".
- **Leftover teal colors**: click the element, look at the Style panel for the teal color (#497174), and switch it to the `primary` variable.
- **Photos with the old branding baked in**: the "Replace your old sink with no money down!" video has a teal banner inside the video itself.
  That can't be recolored. Ask the client for a clean version of the video, or remove it.
- **Mobile**: check each page on your phone, or use the device icons at the top of the Designer.

After fixes, repeat **Step 6**.

---

## Step 8: Go live (2 min, after client sign-off)

1. Click **Publish**, tick **all** domains including `ihatemysink.com`, and publish.
2. Visit https://www.ihatemysink.com and hard-refresh (Ctrl+Shift+R, or Cmd+Shift+R on Mac).
3. Submit a test through the contact form to confirm leads still arrive where the client expects.

---

## If something goes wrong

- **The site looks broken after Step 2**: go to Settings → Custom code, delete the pasted snippet, Save, and republish. Everything goes back.
- **Anything else**: Settings → **Backups** → restore `Before rebrand`, then republish.
- Webflow also has **undo** (Ctrl+Z / Cmd+Z) inside the Designer.

---

## Brand reference

| Color | Hex | Use |
|---|---|---|
| Signal Blue | `#1818BE` | Primary: logo, headings, key backgrounds |
| Mineral Blue | `#73C3D5` | Calm accent: water, highlights |
| Signal Orange | `#F05A32` | Energy: main buttons, small accents. Use dark text on it, not white |
| Porcelain | `#FCFAF7` | Light backgrounds |
| Midnight Blue | `#08082E` | Body text, dark sections, footer |

**Typeface:** Inter Tight, a free Google font standing in for the guideline's typeface. Light (300) for the "I Hate My" part of the logo, Bold (700–800) for headlines.
If the client buys the licensed guideline font, upload it in Settings → Fonts and change `Inter Tight` in the snippet to its name.

The full prototype of the new homepage is in this repo: https://vxzvic.github.io/ihatemysink-rebrand/
Use it as the visual reference for spacing, section order and style.
