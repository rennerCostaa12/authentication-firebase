import { Navigate } from "react-router-dom"
import { useContext } from "react"
import { UsersContext } from "../contexts/AuthContext"

export default function ProtectedRoutes({ children }) {

    const { user } = useContext(UsersContext);

    if (!user) {
        return <Navigate to="/" />
    }

    return children
}