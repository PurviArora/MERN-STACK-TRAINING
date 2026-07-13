import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()

    const logout = () => {
        if (window.confirm("Are you sure?")) {
            localStorage.removeItem("fullName");
            navigate("/")
        }
    }

    return (
        <>
            <div
                className="container-fluid d-flex justify-content-center align-items-center"
                style={{
                    minHeight: "100vh",
                    background: "linear-gradient(135deg, #0F172A, #1E293B, #334155)"
                }}
            >
                <div
                    className="text-center border border-5 border-success p-5 rounded-3 text-white"
                    style={{
                        background: "rgba(255,255,255,0.06)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)"
                    }}
                >
                    <h1 className="mb-4">
                        Welcome {localStorage.getItem("fullName")}
                    </h1>

                    <button
                        className="btn btn-success fw-bold px-4"
                        onClick={logout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </>
    )
}

export default Dashboard;