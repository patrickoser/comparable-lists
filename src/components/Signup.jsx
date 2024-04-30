import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSignup = (e) => {
        e.preventDefault()
        console.log("Signup email: ", email, "password: ", password)
    }

    return (
        <main className="flex justify-center">
            <section>
                <h2 className="text-center">Signup</h2>
                <form onSubmit={handleSignup}>
                    <input 
                        type="email"
                        placeholder="Enter email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input 
                        type="password"
                        placeholder="Enter password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input 
                        type="password"
                        placeholder="Confirm password..."
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <section className="flex justify-center">
                        <button type="submit">Signup</button>
                        <Link to="/login"><button>Login</button></Link>
                    </section>
                </form>
            </section>
        </main>
    )
}

export default Signup
