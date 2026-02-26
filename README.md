# 🛒 Dynamic Promo Bar & Cart Simulation

A responsive storefront demo featuring a **sticky Free-Shipping Promo Bar** that dynamically updates based on cart value. Built using pure **HTML, CSS, and JavaScript** — no frameworks.

This project simulates functionality commonly used in e-commerce platforms like Shopify and WordPress stores.

---

## 📸 Project Screenshots

### 🔝 Promo Bar & Store Layout

![Promo Bar Screenshot](images/screenshot1.png)

---

### 🛍️ Free Shipping Unlocked State

![Free Shipping Screenshot](images/screenshot2.png)

---

## 🌐 Live Demo

👉 **Live URL:** [Add your deployed link here]  
(Hosted on Vercel / Netlify / GitHub Pages)

---

## 📂 Repository

👉 **GitHub Repo:** [Add your repo link here]

---

## ✨ Features

### 🔝 Sticky Promo Bar

- Fixed at the top of the page  
- Black background with white text  
- Fully responsive  
- Displays real-time free shipping progress  

---

### 🛍️ Dummy Storefront

- 3 sample products displayed using Flexbox/Grid  
- Each product includes:  
  - Title  
  - Price ($30, $50, $80)  
  - Add to Cart button  
- Clear Cart button to reset the cart  

---

### ⚙️ Dynamic Cart Logic

- Cart starts at **$0**  
- Clicking “Add to Cart” adds product price to total  
- Promo message updates automatically  

#### 📊 Promo Bar Rules

| Cart Total | Message |
|------------|----------|
| Less than $100 | You are $X away from Free Shipping |
| $100 or more | Congratulations! You've unlocked Free Shipping! |

---

### ❌ Close Button with Persistence (Bonus)

- Promo bar includes an **X button**  
- Clicking hides the bar instantly  
- Closed state saved in **localStorage**  
- Bar remains hidden after page refresh  

---

## 🧠 How It Works

1. A `cartTotal` variable tracks total price  
2. Each Add to Cart button passes its product price  
3. Promo bar text updates dynamically  
4. localStorage stores whether the bar is closed  

---

## 🛠️ Tech Stack

- HTML5  
- CSS3 (Flexbox / Grid)  
- Vanilla JavaScript (ES6)  
- localStorage API  

---

## 📱 Responsiveness

- Works on desktop, tablet, and mobile  
- Layout adapts using modern CSS techniques  

---

## ▶️ Getting Started (Run Locally)

```bash
git clone <your-repo-link>
cd <project-folder>
open index.html
