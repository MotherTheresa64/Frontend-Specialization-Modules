# Lesson 7: React Query – Simplifying Server State Management

## 🧠 Overview

In this lesson, we explored React Query for managing server state in React applications. We used hooks like `useQuery` and `useMutation` to efficiently fetch, cache, and update data. We also implemented dependent queries, error handling, loading states, and integrated React Query DevTools for inspection. This lesson helped us manage server data predictably, reduce redundant network requests, and build highly performant UI interactions.

## 🔑 Key Concepts

- React Query setup with `QueryClient` and `QueryClientProvider`
- Fetching server data using `useQuery`
- Handling loading and error states
- Creating, updating, and deleting data with `useMutation`
- Query caching and automatic refetching
- Dependent queries (`enabled`) for conditional logic
- Invalidation strategies with `invalidateQueries`

## 📁 Included Files

| File               | Purpose                                                              |
|--------------------|----------------------------------------------------------------------|
| `src/main.tsx`     | Initializes `QueryClient` and wraps the app with `QueryClientProvider` |
| `src/App.tsx`      | Parent component rendering Posts, AddPostForm, and UserPosts sections |
| `src/Posts.tsx`    | Fetches all posts using `useQuery` and displays them                 |
| `src/AddPostForm.tsx` | Submits a new post using `useMutation`, triggers cache invalidation |
| `src/UserPosts.tsx`| Performs dependent queries for user details and their posts          |
| `src/index.css`    | Global styling                                                       |

## 🎯 Learning Outcomes

By the end of this lesson, we were able to:

- Set up and configure React Query in a TypeScript project
- Use `useQuery` to fetch and cache data
- Use `useMutation` for creating new data with success/error tracking
- Use the `enabled` flag to conditionally trigger dependent queries
- Display dynamic loading/error states in the UI
- Refresh data after mutations using `invalidateQueries`
- Understand the benefits of server state libraries like React Query for scalable frontend apps
