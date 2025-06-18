# Lesson 5: Authentication in React with TypeScript

Welcome to our fifth lesson in the Frontend Specialization module, where we successfully integrated **Auth0 authentication** into a Vite + React + TypeScript application. This lesson focused on securing routes, managing login/logout flows, and handling callback redirects using industry-standard practices.

---

## 📘 Overview

In this lesson, we explored how to integrate **Auth0** into a React + TypeScript app using the `@auth0/auth0-react` SDK. We implemented login, logout, and profile functionality, and securely handled access tokens through `.env` variables. We also added a custom loading and error handler via a `CallbackPage` component to manage redirect states after login.

---

## 🔑 Key Concepts

- **Auth0 Authentication**: Used Auth0’s SPA configuration with environment variables
- **Protected Routes**: Created profile route that only renders when authenticated
- **Callback Handling**: Created a styled callback screen with error & loading states
- **Environment Variables**: Secured domain/clientId in `.env` and excluded via `.gitignore`
- **Reusable Layout Components**: Built shared navigation and layout components
- **React Router**: Used `react-router-dom` to control navigation and protect routes

---

## 📁 Included Files

| File Path                            | Purpose                                  |
|-------------------------------------|------------------------------------------|
| `src/auth/authProvider.tsx`         | Wraps app with Auth0 context             |
| `src/components/NavBar.tsx`         | Navigation bar with dynamic links        |
| `src/components/Home.tsx`           | Public homepage                          |
| `src/components/Profile.tsx`        | Protected profile page showing user data |
| `src/components/CallbackPage.tsx`   | Redirect handler with error/loading UI   |
| `src/components/PageLayout.tsx`     | Reusable layout wrapper for pages        |
| `src/types/User.ts`                 | TypeScript type for Auth0 user object    |
| `.env`                              | Contains sensitive Auth0 credentials     |
| `.gitignore`                        | Ignores `.env`, build folders, logs etc  |

---

## 🎯 Learning Outcomes

By the end of this lesson, we were able to:

- Authenticate users using **Auth0** in a TypeScript-based React app
- Restrict access to routes based on login state
- Securely manage environment variables using Vite
- Improve user experience with loading and error handling during redirects
- Build modular, reusable components for navigation and layout
- Understand how to avoid committing sensitive data to version control

---

## 🧪 To Run Locally

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
