# CSS Basic Project

This project is part of the **ALX Frontend Foundations** curriculum.  
It focuses on introducing Cascading Style Sheets (CSS) to enhance and structure HTML content.

---

## Objectives

- Understand the role of CSS in web development.
- Apply **base styling** to improve the look and feel of webpages.
- Learn how to link multiple CSS files to HTML documents.
- Prepare for more advanced topics such as positioning and layout.

---

## Task 0: Some Early Styling

- Created a new directory **`css_basic`** inside the repository **`alx_html_css`**.
- Copied the HTML files:
  - `index.html`
  - `tweets.html`
- Added two CSS files:
  - **`base.css`** → Defines global styling (body, header, footer, tables, etc.).
  - **`styles.css`** → Reserved for project-specific rules (initially empty).
  
- Linked both CSS files in each HTML file using:
  
  ```html

  <link href="base.css" rel="stylesheet">
  <link href="styles.css" rel="stylesheet">

📂 Project Structure

css_basic/
├── index.html,
├── tweets.html,
├── base.css,
├── styles.css,
└── README.md

👨‍💻 Author

Steven Nsanzabandi Gasasira
GitHub Profile


---

## ✅ Commands to add, commit, and push

```bash
cd ~/alx_html_css/css_basic
touch README.md
git add README.md
git commit -m "Add professional README.md for css_basic project"
git push origin main
