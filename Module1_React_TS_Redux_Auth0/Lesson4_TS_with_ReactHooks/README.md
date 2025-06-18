# Lesson 4: TypeScript + React Hooks

## Overview

In this lesson, we explored the integration of TypeScript with various React hooks and design patterns. We built a multi-featured application showcasing:

- `useState` (with and without type assertion)
- `useReducer` for managing complex state
- `useContext` to globally manage and toggle theme
- Callback function patterns between parent and child components
- Practice exercises using real-world patterns (shopping cart, counter, etc.)

We wrapped everything together in a single clean layout with working Bootstrap styling and a visual light/dark theme switch.

---

## Key Concepts

- Typing `useState` with generics and assertions
- Conditional rendering using optional chaining
- Using `useReducer` with custom action types and state models
- Creating and consuming React Context with TypeScript
- Managing callbacks safely and clearly with typed props
- Real-world patterns: cart, counters, form data
- Applying theme switching across an entire application

---

## Included Files

| File/Folder                        | Description |
|-----------------------------------|-------------|
| `src/components/StateCounter.tsx` | Demonstrates `useState` (with and without type assertions) |
| `src/components/Item.ts`          | Type definition for a generic item |
| `src/components/ItemState.ts`     | State interface for reducer items array |
| `src/components/ItemComponentActions.ts` | Union type for reducer actions |
| `src/components/ItemReducer.ts`   | Reducer function to handle item list logic |
| `src/components/ItemComponent.tsx`| Uses `useReducer` to manage dynamic item list |
| `src/components/ThemeContext.ts`  | Context definition and custom hook for theme |
| `src/components/ThemeConsumer.tsx`| Consumes theme context with toggle button |
| `src/components/CounterCallbackComponent.tsx` | Demonstrates callbacks using props |
| `src/components/Exercise1.tsx`    | Bonus practice: Multiply counter logic |
| `src/components/ShoppingCart.tsx` | useReducer-based exercise with item add/remove |
| `src/components/ShoppingCartReducer.ts` | Reducer logic for shopping cart |
| `src/App.tsx`                     | Renders all components and manages `theme` globally |
| `src/App.css`                     | Defines dark/light theme styles, spacing, and visual layout |

---

## Learning Outcomes

By completing this lesson, we can now:

- Manage component-level state with strong typing
- Reuse complex state logic with `useReducer`
- Avoid prop drilling via `useContext`
- Toggle application-wide themes
- Connect parent and child components with typed callbacks
- Apply all major React state hooks using TypeScript

---

## Setup & Run Instructions

```bash
# From the lesson folder
npx create-vite typed-hooks --template react-ts
cd typed-hooks
npm install
npm install react-bootstrap bootstrap
npm run dev


Folder Structure
Lesson4_TS_React_Hooks/
└── typed-hooks/
    ├── public/
    │   └── vite.svg
    ├── src/
    │   ├── App.tsx
    │   ├── App.css
    │   ├── index.css
    │   ├── main.tsx
    │   ├── components/
    │   │   ├── StateCounter.tsx
    │   │   ├── Item.ts
    │   │   ├── ItemState.ts
    │   │   ├── ItemComponentActions.ts
    │   │   ├── ItemReducer.ts
    │   │   ├── ItemComponent.tsx
    │   │   ├── ThemeContext.ts
    │   │   ├── ThemeConsumer.tsx
    │   │   ├── CounterCallbackComponent.tsx
    │   │   ├── Exercise1.tsx
    │   │   ├── ShoppingCart.tsx
    │   │   ├── ShoppingCartReducer.ts
    ├── index.html
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    ├── README.md
