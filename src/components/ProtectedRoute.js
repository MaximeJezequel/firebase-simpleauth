import { Navigate, Outlet } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const { user } = UserAuth()

  if (!user) {
    return <Navigate to={redirectPath} replace />
  }

  return children ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
