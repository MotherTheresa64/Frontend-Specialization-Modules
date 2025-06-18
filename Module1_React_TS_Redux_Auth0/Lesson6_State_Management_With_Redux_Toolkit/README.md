# Lesson 6: State Management with Redux Toolkit

## 🧠 Overview

In this lesson, we explored the power of Redux Toolkit to manage application-wide state in a scalable and predictable way. We set up a Redux store, created slices for modular state management, and used actions, reducers, and asynchronous thunks to update our state across React components. We also practiced using `useSelector` and `useDispatch` to interact with Redux from our UI.

## 🔑 Key Concepts

- Redux store configuration using `configureStore`
- State slices with `createSlice`
- Dispatching actions with `useDispatch`
- Selecting state using `useSelector`
- Type safety using `RootState` and `AppDispatch`
- Async data fetching using `createAsyncThunk`
- Managing loading and error states
- Triggering updates from the UI

## 📁 Included Files

| File                         | Purpose                                                                 |
|------------------------------|-------------------------------------------------------------------------|
| `src/redux/store.ts`         | Sets up the Redux store and exports RootState and AppDispatch types     |
| `src/redux/counterSlice.ts`  | Defines state, reducers, and async logic for the counter slice          |
| `src/redux/asyncActions.ts`  | Contains a mock async thunk (`fetchCounter`) using `setTimeout`         |
| `src/Counter.tsx`            | React component for displaying and updating counter state               |
| `src/App.tsx`                | Renders the `Counter` component                                         |
| `src/main.tsx`               | Entry point wrapping the app in Redux `<Provider>`                      |
| `src/index.css`              | Basic styling                                                           |

## 🎯 Learning Outcomes

By the end of this lesson, we were able to:

- Understand how Redux centralizes application state
- Build Redux slices with `createSlice` and type-safe reducers
- Trigger state updates from the UI using dispatch
- Access store state using selector hooks
- Implement and test async logic using `createAsyncThunk`
- Handle error and loading states elegantly in the UI
- Understand the value of predictable, centralized state in scalable apps
