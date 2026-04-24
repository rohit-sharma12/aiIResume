import React from 'react'
import { useNavigate, Link } from "react-router";

const Register = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="min-h-screen flex items-center justify-center primary text-white">
            <div className="flex w-[900px] primary rounded-lg shadow-lg overflow-hidden">

                <div className="w-1/2 p-10 ">
                    <h2 className="text-2xl font-semibold text-white mb-6">
                        Register
                    </h2>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="text-sm text-gray-200 font-bold">User Name</label>
                            <input
                                type="username"
                                placeholder="Enter User Name"
                                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-200 font-bold">Email</label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-200 font-bold">Password</label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-800 text-gray-200 font-bold py-2 rounded-full mt-4 hover:bg-blue-700 transition"
                        >
                            Register
                        </button>
                    </form>

                    <p className="text-sm text-gray-200 font-bold mt-4">
                        Do you have an account?{" "}
                        <Link to={'/login'} className="text-blue-300 cursor-pointer">
                            Login
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
    )
}

export default Register
