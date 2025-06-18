import { useAuthProvider } from "./auth/authProvider";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { Routes, Route } from "react-router-dom";
import CallbackPage from "./components/CallbackPage";




const App = () => {
  const AuthWrapper = useAuthProvider({
    children: (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/callback" element={<CallbackPage />} />
        </Routes>
      </>
    ),
  });

  return AuthWrapper;
};

export default App;
