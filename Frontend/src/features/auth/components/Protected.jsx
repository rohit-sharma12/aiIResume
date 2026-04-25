import React from 'react'
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";

const Protected = ({ children }) => {
    const { loading, user } = useAuth();

    if (loading) {
        return (<main><div>Lading...</div></main>)
    }

    if (!user) {
        return <Navigate to={'/login'} />
    };

    return (
        <div>
            {children}
        </div>
    )
}

export default Protected
