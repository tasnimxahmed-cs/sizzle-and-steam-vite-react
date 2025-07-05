# Sizzle & Steam — Vite + React Web App

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)  
[![Vite](https://img.shields.io/badge/Vite-4.3.9-brightgreen?logo=vite)](https://vitejs.dev/)  
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.0.0-skyblue?logo=tailwindcss)](https://tailwindcss.com/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

A modern, mobile-friendly React website for **Sizzle & Steam**, a vibrant street food brand showcasing their menu, gallery, story, and contact info — built with Vite, React, TailwindCSS (v4), and React Router.

Designed with clean architecture, accessibility, and smooth user experience in mind.

---

## 🚀 Features

- **Responsive Design:** Fully mobile-optimized with TailwindCSS v4 using custom theme variables (`@theme`) for consistent colors and fonts.
- **React Router:** Client-side routing for smooth navigation across pages (`Home`, `Menu`, `Gallery`, `About`, `Contact`).
- **Modular Components:** Reusable components including `Navbar`, `Footer`, `MenuCard`, `CartModal`, etc.
- **Dynamic Cart System:**  
  - Add items with quantity controls.  
  - Cart modal slides in from the right with blur background.  
  - Toast notifications on cart actions.
- **Gallery Carousel:** Image slider powered by SwiperJS with pagination and navigation arrows.
- **Google Maps Integration:** Contact page includes embedded map centered on Hunter College.
- **Accessibility:** Semantic HTML and ARIA labels for navigation and controls.
- **Animations & Transitions:** Smooth UI transitions for menus, modals, and hover states.

---

## 🛠 Tech Stack

- **React 18** (with Vite build tool)
- **TailwindCSS v4** (with custom theming using `@theme`)
- **React Router v6**
- **React Context API** (for cart state management)
- **SwiperJS** (carousel/slider)
- **React-Toastify** (toast notifications)
- **FontAwesome** (icons)

---

## 📁 Project Structure

src/
├── assets/ # Images, fonts, and other static assets
├── components/ # Reusable React components (Navbar, Footer, CartModal, MenuCard, etc.)
├── context/ # React Context for Cart state management
├── pages/ # Page components (Home, Menu, Gallery, About, Contact)
├── App.jsx # React Router setup and main app component
├── main.jsx # Vite entry point, imports global styles
public/
├── favicon.ico # Favicon asset
├── images/ # Public images
tailwind.css # TailwindCSS base styles and custom theme

---

## ⚙️ Getting Started

### Clone the repo

```bash
git clone https://github.com/tasnimxahmed-cs/sizzle-and-steam.git
cd sizzle-and-steam
```

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

---

## 🧩 Key Implementation Details

**Navbar & Navigation**
- Responsive with hamburger menu for mobile.
- Cart icon with item count badge and modal.
- Accessible with keyboard and aria labels.

**Menu Page & Cart**
- Responsive cards with add-to-cart buttons.
- Cart modal with slide-in animation and blur backdrop.
- Quantity management and remove item functionality.
- Toast notifications for cart actions.

**Gallery**
- Responsive image carousel with SwiperJS.
- Pagination and navigation arrows styled for brand colors.

**About & Contact Pages**
- Vertically centered content between header and footer.
- Contact page form matched in width to embedded Google Map.

**Styling**
- TailwindCSS v4 with @theme for consistent brand colors and fonts.
- Smooth transitions and animations for UI elements.

---

## 🎯 Future Enhancements

- Backend integration for contact form and orders.
- Persist cart state in localStorage or database.
- User authentication and order history.
- Expanded gallery with video support.
- Additional animations and UI polish.

---

## 🙌 Credits

Built by Tasnim Ahmed. Inspired by vibrant street food culture and modern web design principles.

---

## 📄 License
This project is licensed under the MIT License.

---

Thank you for checking out Sizzle & Steam!
If you have any questions or want to contribute, feel free to open issues or pull requests.
