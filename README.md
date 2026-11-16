# SEO Documentation — Siddhu's Maharashtrian Thali

**Project:** Maharashtrian Thali
**GitHub:** `Maharashtrian-Thali/Maharashtrian-Thali`
**Website:** `https://maharashtrian-thali.github.io/Maharashtrian-Thali/`
**Menu:** `https://maharashtrian-thali.github.io/Maharashtrian-Thali/menu.html`

### Goal

Make the website discoverable on Google for:

```text
Maharashtrian Thali
Siddhu's Maharashtrian Thali
```

Long-term goal: improve the website toward **Google Page 1**. Ranking position cannot be guaranteed.

---

# 1. QR Code — Important

The existing QR code points to:

```text
https://maharashtrian-thali.github.io/Maharashtrian-Thali/menu.html
```

We **did not change this URL**.

SEO changes such as `<title>`, `<meta description>`, H1, `robots.txt`, and `sitemap.xml` do not affect the QR code.

**Important:** Do not change or remove `menu.html` without considering the existing QR code.

---

# 2. `menu.html` SEO

### SEO title

Changed to:

```html
<title>Siddhu's Maharashtrian Thali | Authentic Maharashtrian Thali Menu</title>
```

### Meta description

```html
<meta name="description"
      content="Siddhu's Maharashtrian Thali offers an authentic Maharashtrian Thali menu featuring traditional Maharashtrian food, Bhakari, Pithla, Bhaji, Puranpoli, Thecha, Rice and more.">
```

### Robots

```html
<meta name="robots" content="index, follow">
```

### Canonical URL

```html
<link rel="canonical"
      href="https://maharashtrian-thali.github.io/Maharashtrian-Thali/menu.html">
```

### H1

Changed from:

```html
<h1>Our Menu</h1>
```

to:

```html
<h1>Siddhu's Maharashtrian Thali</h1>
<p>Authentic Maharashtrian Thali and traditional Maharashtrian food</p>
```

### Purpose

Google can now clearly understand:

```text
Brand → Siddhu's Maharashtrian Thali
Topic → Maharashtrian Thali
Page → Maharashtrian Thali Menu
```

---

# 3. Homepage SEO

### Title

```html
<title>Siddhu's Maharashtrian Thali | Authentic Maharashtrian Food</title>
```

### Description

```html
<meta name="description"
      content="Welcome to Siddhu's Maharashtrian Thali. Explore authentic Maharashtrian Thali, traditional Maharashtrian food, delicious dishes and our complete menu.">
```

### Robots

```html
<meta name="robots" content="index, follow">
```

### Canonical

```html
<link rel="canonical"
      href="https://maharashtrian-thali.github.io/Maharashtrian-Thali/">
```

---

# 4. Homepage H1

Changed the original H1:

```html
<h1>Authentic Maharashtrian Cuisine</h1>
```

to:

```html
<h1 class="display-4 fw-bold mb-3 hero-title">
    Siddhu's Maharashtrian Thali
</h1>

<p class="lead mb-4 hero-lead">
    Experience authentic Maharashtrian Thali and traditional Maharashtrian
    cuisine with delicious recipes and flavours from Maharashtra.
</p>

<a href="menu.html" class="btn btn-primary btn-lg px-4 hero-cta">
    View Our Maharashtrian Thali Menu
</a>
```

**Important:** `href="menu.html"` was not changed, so the existing menu navigation and QR URL remain safe.

---

# 5. `robots.txt`

Created at the **root** of the GitHub repository.

### File:

```text
robots.txt
```

### Content:

```text
User-agent: *
Allow: /

Sitemap: https://maharashtrian-thali.github.io/Maharashtrian-Thali/sitemap.xml
```

### Purpose

Allows search engines to crawl the website and tells Google where the sitemap is.

---

# 6. `sitemap.xml`

Created at the repository root.

### Important URLs included:

```text
https://maharashtrian-thali.github.io/Maharashtrian-Thali/

https://maharashtrian-thali.github.io/Maharashtrian-Thali/menu.html

https://maharashtrian-thali.github.io/Maharashtrian-Thali/about.html

https://maharashtrian-thali.github.io/Maharashtrian-Thali/gallery.html

https://maharashtrian-thali.github.io/Maharashtrian-Thali/contact.html
```

### XML structure

```xml
<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    <url>
        <loc>https://maharashtrian-thali.github.io/Maharashtrian-Thali/</loc>
    </url>

    <url>
        <loc>https://maharashtrian-thali.github.io/Maharashtrian-Thali/menu.html</loc>
    </url>

    <url>
        <loc>https://maharashtrian-thali.github.io/Maharashtrian-Thali/about.html</loc>
    </url>

    <url>
        <loc>https://maharashtrian-thali.github.io/Maharashtrian-Thali/gallery.html</loc>
    </url>

    <url>
        <loc>https://maharashtrian-thali.github.io/Maharashtrian-Thali/contact.html</loc>
    </url>

</urlset>
```

---

# 7. Sitemap Error We Faced

Google Search Console initially showed:

> **Sitemap submitted successfully**

Later it showed:

> **Type: Unknown — Sitemap couldn't be fetched**

### We checked:

* ✅ Sitemap exists
* ✅ Correct filename: `sitemap.xml`
* ✅ Correct repository location
* ✅ Correct XML structure
* ✅ Publicly accessible
* ✅ Works in normal browser
* ✅ Works in incognito
* ✅ `robots.txt` points to correct sitemap
* ✅ URLs inside sitemap are correct

The sitemap opens successfully in the browser.

The browser message:

> "This XML file does not appear to have any style information..."

is **normal for XML** and is not an error.

### Current status

🟡 Google Search Console still needs to successfully process the sitemap.

We did **not** unnecessarily change the valid XML.

---

# 8. Google Search Console

Added property:

```text
https://maharashtrian-thali.github.io/Maharashtrian-Thali/
```

### Verification method

Used:

**HTML file verification**

Google provided a verification HTML file.

We uploaded it to the **root** of the GitHub repository.

Google successfully displayed:

> ✅ **Ownership verified**

### Important

**Do not delete Google's verification HTML file.**

---

# 9. Sitemap Submitted to Google

In:

**Search Console → Sitemaps**

we submitted:

```text
sitemap.xml
```

Google initially confirmed:

> ✅ Sitemap submitted successfully

Later:

> 🟡 Sitemap couldn't be fetched

This is still pending and will be checked again later.

---

# 10. Homepage Indexing

Inspected:

```text
https://maharashtrian-thali.github.io/Maharashtrian-Thali/
```

Google reported:

> ✅ **URL is on Google**

> ✅ **Page is indexed**

This is an important milestone.

```text
Website
   ↓
Google discovered it
   ↓
Google crawled it
   ↓
Homepage indexed
```

---

# 11. Menu Page Indexing

Inspected:

```text
https://maharashtrian-thali.github.io/Maharashtrian-Thali/menu.html
```

Google reported:

> ❌ URL is not on Google

> URL is unknown to Google

It also showed:

> No referring sitemaps detected

### Action taken

Clicked:

**Request Indexing**

Google confirmed:

> ✅ Indexing requested

> URL was added to a priority crawl queue.

### Important

Do **not** repeatedly request indexing. It will not make Google crawl it faster.

---

# 12. `robots.txt` Inspection

We inspected:

```text
https://maharashtrian-thali.github.io/Maharashtrian-Thali/robots.txt
```

Search Console said:

> URL is not on Google

This is **normal**.

`robots.txt` does not need to appear in Google search results.

The important thing is that it is publicly accessible and contains the correct instructions.

---

# 13. Google `site:` Search

We tested:

```text
site:maharashtrian-thali.github.io
```

and:

```text
site:maharashtrian-thali.github.io "Maharashtrian Thali"
```

The website did not appear yet.

This does **not** mean the homepage is not indexed because Search Console already confirmed:

> **Page is indexed**

Newly indexed pages can take time to appear in normal Google search and `site:` searches.

---

# 14. Current Status

| Task                                       | Status          |
| ------------------------------------------ | --------------- |
| GitHub website                             | ✅               |
| QR URL preserved                           | ✅               |
| `menu.html` SEO                            | ✅               |
| Homepage SEO                               | ✅               |
| Homepage H1                                | ✅               |
| `robots.txt`                               | ✅               |
| `sitemap.xml`                              | ✅               |
| Search Console property                    | ✅               |
| Ownership verified                         | ✅               |
| Sitemap submitted                          | 🟡 Fetch issue  |
| Homepage indexed                           | ✅               |
| Menu indexing requested                    | 🟡 Waiting      |
| Ranking for "Maharashtrian Thali"          | 🔄 Not done yet |
| Ranking for "Siddhu's Maharashtrian Thali" | 🔄 Not done yet |

---

# 15. Next Session

### Technical SEO

* Check sitemap status again
* Check whether `menu.html` is indexed
* Add Schema.org / structured data
* Improve internal linking
* Optimize images and `alt` text
* Optimize About, Gallery and Contact pages

### Google

* Check Search Console performance
* Check search queries
* Check impressions and clicks
* Check average position

### Ranking

Work toward:

```text
Maharashtrian Thali
```

and:

```text
Siddhu's Maharashtrian Thali
```

The progression will be:

```text
Indexed
   ↓
Visible
   ↓
Page 1
   ↓
Higher ranking
```

---

# Final Status for Today

### 🟢 Completed

* Google Search Console ownership verified
* Homepage indexed
* Menu indexing requested
* SEO title and descriptions added
* H1 optimized
* `robots.txt` created
* `sitemap.xml` created
* Sitemap submitted
* QR code URL preserved

### 🟡 Pending

* Sitemap fetch issue
* Menu page indexing
* Actual Google ranking improvement

**Most important:** The existing QR code URL has **not been changed**, so the QR-based menu remains safe.
