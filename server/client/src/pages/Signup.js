import React, {useState} from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signup, error, isLoading} = useSignup;

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(username, email, password);
    }

    return (
        <form className="signup" onSubmit={(e) => handleSubmit(e)}>
            <h3>Регистрация</h3>

            <label>Имя пользователя:</label>
            <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />

            <label>E-mail:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label>Пароль:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <label>Повторите пароль:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button disabled={isLoading}>Зарегистрироваться</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup;