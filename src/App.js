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
					<Route path="/" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route
						path="/account"
						element={
							<ProtectedRoute>
								<Account />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</AuthContextProvider>
		</div>
	)
}

export default App
