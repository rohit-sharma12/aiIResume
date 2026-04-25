import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
    const navigate = useNavigate()

    const { loading, handleLogin } = useAuth()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleLogin({ email, password });
        navigate('/')
    }

    if (loading) {
        return (<main>Loading...</main>)
    }

    return (
        <div className="min-h-screen flex items-center justify-center primary">
            <div className="flex w-[900px] primary rounded-lg shadow-lg overflow-hidden">

                <div className="w-1/2 p-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Login Form
                    </h2>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="text-sm  text-gray-200 font-bold">Email</label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                onChange={(e) => { setEmail(e.target.value) }}
                                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                            />
                        </div>

                        <div>
                            <label className="text-sm  text-gray-200 font-bold">Password</label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                onChange={(e) => { setPassword(e.target.value) }}
                                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-full mt-4 hover:bg-blue-700 transition"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-sm text-gray-200 font-bold mt-4">
                        Don't have an account?{" "}
                        <Link to={'/register'} className="text-blue-300 font-bold cursor-pointer">
                            Register
                        </Link>
                    </p>
                </div>

                {/* RIGHT SIDE (IMAGE) */}
                <div className="w-1/2 flex items-center justify-center">
                    <img
                        src="https://miro.medium.com/1*B892PRRe8ai5hiVwA6LcMA.jpeg"
                        alt="rocket"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;