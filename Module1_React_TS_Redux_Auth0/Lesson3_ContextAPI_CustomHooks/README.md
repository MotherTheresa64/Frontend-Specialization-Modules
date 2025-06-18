# Lesson 3: Context API & Custom Hooks

## Overview

In this lesson, we explored two powerful tools in React — the **Context API** and **Custom Hooks** — to create a scalable, stateful login application. We learned how to avoid prop drilling by leveraging `React.createContext()` and `useContext`, then took it further by writing our own custom hook to simulate dynamic cart item updates.

We also included an optional route to demonstrate the creation and use of another custom hook, `useBookAvailability`, showing us how reusable logic can cleanly power any component.

---

## Key Concepts

- Creating and providing context using `React.createContext()` and `.Provider`
- Accessing shared context data with `useContext`
- Managing authentication state globally
- Creating custom hooks for reusable logic
- Handling side effects inside custom hooks with `useEffect`
- Using React Router to navigate between views
- Structuring component access cleanly through routing paths
- Styling input and layout with React Bootstrap

---

## Included Files

| File/Folder                | Description                                                        |
|---------------------------|--------------------------------------------------------------------|
| `UserContext.jsx`         | Context for managing global user login state                       |
| `Login.jsx`               | Login form with username input and navigation                      |
| `HomePage.jsx`            | Displays user info and live cart item count via custom hook        |
| `useCartCount.jsx`        | Custom hook that simulates cart activity every second              |
| `useBookAvailability.jsx` | Custom hook for checking book availability (bonus exercise)        |
| `Book.jsx`                | Component to render book availability using `useBookAvailability`  |
| `App.jsx`                 | Main entry: Routes for Login, HomePage, and Book Availability      |

---

## Learning Outcomes

By the end of this lesson, we were able to:

- Share data across components without prop drilling
- Use `useContext` to easily consume global state
- Create flexible custom hooks for live data and abstraction
- Route between views using `react-router-dom`
- Style pages with Bootstrap layouts
- Reuse hooks across multiple views for logic separation and maintainability

---

## Commands Used

```bash
npx create-vite context-hooks-login --template react
cd context-hooks-login

npm install
npm install react-router-dom
npm install react-bootstrap bootstrap

mkdir -p src/context src/components src/hooks

npm run dev
