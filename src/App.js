import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//pages and components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/Navbar";


function App() {
const {authIsReady, user} = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={!user && <Navigate to='/login'/> || (user && <Home />)} />
            <Route path="/login" element={(user && <Navigate to='/'/>) || (!user && <Login />)} />
            <Route path="/register" element={(user && <Navigate to='/'/>) || (!user && <Register />)} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
