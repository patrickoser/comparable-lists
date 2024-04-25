import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
    }

    return (
        <main>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <section>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </section>
                <section>
                    <button type="submit">Login</button>
                    <Link to="/signup"><button>Signup</button></Link>
                </section>
            </form>
        </main>
    )
}

export default Login
