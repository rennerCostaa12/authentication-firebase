import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../contexts/AuthContext"

export default function Home(){

    const {user, logout} = useContext(UsersContext);
    const navigate = useNavigate();

    const handleLogoutAccount = async () => {
        try {
            await logout();
            navigate('/');
            console.log('deslogado com sucesso!');
        }catch(e){
            console.log(e.message)
        }
    }

    return(
        <div>
            <h1>Home</h1>
            <h2>User email: {user && user.email}</h2>
            <button onClick={handleLogoutAccount}>Logout</button>
        </div>
    )
}