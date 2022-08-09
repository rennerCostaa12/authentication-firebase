import { useState } from "react";
import '../style/login.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signInUser} = useContext(UsersContext)

    const navigate = useNavigate();

    const onSubmitLogin = async (e) => {
        e.preventDefault();
        try{
            await signInUser(email, password);
            setEmail('');
            setPassword('');
            navigate('/home');
            console.log('Você está logado!');
        }catch(e){
            console.log(e.message);
        }
       
    }

    return (
        <div className="container-form-login">
            <form onSubmit={onSubmitLogin}>
                <h1>Login</h1>
                <label htmlFor="email">Email</label>
                <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>Login</button>

                <p>Don't have an account? <Link to="/signup">SignUp</Link></p>
            </form>
        </div>
    )
}