import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../contexts/AuthContext";

import '../style/signup.css';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { createUser } = useContext(UsersContext);

    const navigate = useNavigate();

    const onSubmitLogin = async (e) => {
        e.preventDefault();
        try{
            await createUser(email, password)
            setEmail('');
            setPassword('');
            navigate('/home')
        }catch(e){
            console.log(e);
        }   
    }


    return (
        <div className="container-form-signup">
            <form onSubmit={onSubmitLogin}>
                <h1>Sign Up</h1>
                <label htmlFor="email">Email</label>
                <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>Sign Up</button>

                <p>Have an account? <Link to="/">SignIn</Link></p>
            </form>
        </div>
    )
}