# Lesson 2: Interfaces, Typed Props, and Advanced Props

## Overview

In this lesson, we deepened our understanding of TypeScript in React by working with typed data, reusable interfaces, and advanced prop configurations. Together, we created a TypeScript-based project that showcased how interfaces help shape and validate component data. We explored typed props, optional attributes, event handling, union string literals, children props, and reusable components — all in a fully functional, strongly-typed React application.

---

## Key Concepts

- Creating and exporting TypeScript interfaces (`Person`, `ProfileProps`)
- Optional properties using the `?` operator
- Enforcing prop types in functional components
- Passing props using the spread operator (`{...props}`)
- Using React.FC with generic props like `ProfileProps`, `React.ReactNode`, and event types
- Leveraging React Bootstrap to style typed components
- Creating reusable components with `children` and `event` props
- Implementing union string literals for conditional rendering

---

## Included Files

| File/Folder                | Description                                                        |
|---------------------------|--------------------------------------------------------------------|
| `Person.model.tsx`        | Interface definitions for `Person` and `ProfileProps`              |
| `PersonComponent.tsx`     | Renders a person's name, age, optional email, and message          |
| `Status.tsx`              | Uses union string literal props to render conditional messages     |
| `Header.tsx`              | Displays a header using `children` typed as string                 |
| `NestedComponent.tsx`     | Accepts and renders any nested React nodes as children             |
| `Button.tsx`              | Button component using typed event props                           |
| `App.tsx`                 | Main app integrating all components and showcasing prop types      |
| `README.md`               | Summary and notes for Lesson 2                                     |

---

## Learning Outcomes

By completing this lesson, we were able to:

- Define and reuse TypeScript interfaces to structure component data
- Pass typed props into child components with full IntelliSense and error catching
- Handle optional fields gracefully and catch incorrect prop shapes
- Work with advanced patterns like `children` and `React.ReactNode`
- Build flexible and type-safe UIs using union literals and event props
- Use React Bootstrap to create styled, production-ready layouts

---

## Commands Used

```bash
npx create-vite@latest interfaces-typed-props --template react-ts
cd interfaces-typed-props
npm install
npm install react-bootstrap bootstrap
npm run dev
