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
        <main className="flex justify-center items-center h-screen">
            <section>
                <h2 className="text-center">Signup</h2>
                <form onSubmit={handleSignup} className="border rounded">
                    <section className="flex flex-col p-4 gap-2">
                        <label for="email">Email address</label>
                        <input 
                            type="email"
                            placeholder="Enter email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border"
                        />
                        <label for="password">Password</label>
                        <input 
                            type="password"
                            placeholder="Enter password..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="border"
                        />
                        <label for="password">Confirm password</label>
                        <input 
                            type="password"
                            placeholder="Confirm password..."
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="border"
                        />
                    </section>
                    <section className="flex justify-center">
                        <button type="submit" className="mr-1">Signup</button>
                        <Link to="/login"><button className="ml-1">Login</button></Link>
                    </section>
                </form>
            </section>
        </main>
    )
}

export default Signup
