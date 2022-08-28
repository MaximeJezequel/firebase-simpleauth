import { Route, Routes } from "react-router-dom"

import Account from "./components/Account"
import ProtectedRoute from "./components/ProtectedRoute"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import { AuthContextProvider } from "./context/AuthContext"

function App() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        Firebase Auth & Context
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route element={<Account />} path="/account" />
          </Route>
          <Route element={<Signin />} path="/" />
          <Route element={<Signup />} path="/register" />
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
