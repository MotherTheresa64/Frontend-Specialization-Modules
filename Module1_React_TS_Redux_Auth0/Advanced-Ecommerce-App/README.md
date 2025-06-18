# 🛍️ Advanced E-Commerce App (React + TypeScript)

This project is a fully functional e-commerce frontend application built with React, TypeScript, Redux Toolkit, and Tailwind CSS. It fetches real product data from the FakeStoreAPI and implements advanced concepts like global state, async queries, filtering, and session persistence.

---

## 🚀 Features

- ✅ Dynamic product catalog with filtering by category
- ✅ Uses `React Query` for efficient API fetching/caching
- ✅ Full shopping cart implementation using `Redux Toolkit`
- ✅ Cart state is persisted with `sessionStorage`
- ✅ "Checkout" clears cart state + storage
- ✅ Responsive, modern UI built with `Tailwind CSS`

---

## 🛠️ Tech Stack

- **Frontend Framework:** React + Vite + TypeScript
- **State Management:** Redux Toolkit
- **Data Fetching:** React Query (`@tanstack/react-query`)
- **Styling:** Tailwind CSS
- **API:** [FakeStoreAPI](https://fakestoreapi.com/)

---

## 📁 Folder Structure

src/
├── api/ # API request helpers
├── components/ # Reusable UI components
├── features/
│ └── cart/ # Redux slice + selectors
├── pages/ # Home + Checkout views
├── types/ # TypeScript interfaces
├── App.tsx # Routes + Layout
├── main.tsx # App entry
└── index.css # Tailwind directives


---

## 🧪 How to Run Locally

1. **Clone the repo**

```bash
git clone https://github.com/MotherTheresa64/Advanced-Ecommerce-App.git
cd Advanced-Ecommerce-App
```
## Install dependencies
npm install

## Start the dev server
npm run dev

✅ Status
✅ Complete – Fully meets the assignment requirements from Coding Temple’s Frontend Specialization Module. Technically part 1 of 2
📅 Date Submitted: June 17, 2025
🧑‍💻 Built by: @MotherTheresa64

📝 License
This project is part of a Coding Temple curriculum module and is submitted for educational use.