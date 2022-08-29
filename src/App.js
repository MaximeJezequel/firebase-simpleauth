import { Route, Routes } from "react-router-dom"

import Account from "./components/Account"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import ProtectedRoute from "./components/ProtectedRoute"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import { AuthContextProvider } from "./context/AuthContext"

function App() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-3xl font-bold">
        Firebase Auth & Context
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route element={<Home />} path="/" />
            <Route element={<Account />} path="/account" />
          </Route>
          <Route element={<Signin />} path="/login" />
          <Route element={<Signup />} path="/register" />
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
