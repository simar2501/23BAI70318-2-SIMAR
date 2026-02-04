# Experiment 2 – Modern UI Web Page

**Subject:** Full Stack Development  
**Experiment No.:** 2  
**Student Name:** Simar  
**UID:** 23BAI70318  

---

## 📌 Project Description

This project is a modern, single-page web application built using **React** and **Material UI (MUI)**.  
The main focus of this experiment is to design a **clean, professional, and responsive user interface** using a component-based approach.

The webpage follows real-world UI/UX practices and is inspired by modern developer portfolios and SaaS landing pages.

---

## 🎯 Objectives

- To understand component-based UI development using React  
- To learn proper folder structuring in a React project  
- To design a modern and professional user interface  
- To apply UI/UX principles such as spacing, typography, and color consistency  
- To use a UI component library (Material UI) effectively  

---

## 🛠️ Technologies Used

- **React (Vite)**
- **Material UI (MUI)**
- **JavaScript (ES6)**
- **CSS**
- **Vercel** for deployment

---

## 📁 Folder Structure

src/
│
├── components/
│ ├── Navbar.jsx
│ ├── Hero.jsx
│ ├── About.jsx
│ ├── Projects.jsx
│ └── Contact.jsx
│
├── theme/
│ └── theme.js
│
├── App.jsx
├── main.jsx
└── index.css


This structure keeps the code modular, readable, and easy to maintain.

---

## ✨ Features of the Project

### 🔹 User Interface
- Clean and minimal design
- Professional green and neutral color theme
- No random or flashy colors
- Proper spacing, alignment, and typography
- Responsive layout for different screen sizes

### 🔹 Functionality
- Sticky navigation bar for easy access
- Hero section always visible on page load
- Dynamic section switching (About, Projects, Contact)
- Smooth fade-in animation on every section change
- Single-page behavior without page reloads

### 🔹 Design Concept
- Inspired by modern portfolio and landing pages
- Oval-shaped image design in the hero section
- Focus on simplicity and readability

---

## 🧪 Working of the Website

- When the website loads, only the **Hero section** (“Hello, I’m Simar”) is visible  
- Navigation buttons allow switching between:
  - About
  - Projects
  - Contact
- On clicking a button:
  - The previous section is hidden
  - The selected section fades in smoothly
- The hero section remains visible at all times

---

## 🚀 Installation & Setup

### Step 1: Create React App using Vite
```bash
npm create vite@latest
cd experiment-2-ui
npm install
npm install @mui/material @emotion/react @emotion/styled
Step 4: Run the Application
npm run dev
🌐 Deployment

The project is deployed using Vercel following the naming convention provided in the experiment guidelines.

Deployment format:

{uid}-{experiment-part}-{name}.vercel.app
📚 Learning Outcomes

Through this experiment, I learned:

How to structure a React project properly

How to design component-based UIs

Effective use of Material UI components

Importance of UI consistency and color harmony

How to manage dynamic UI states in React

Basics of deploying a React application

✅ Conclusion

This experiment helped me gain practical experience in designing modern and professional web interfaces using React and Material UI.
The project follows real-world UI standards and demonstrates the use of component-based development effectively.

---
