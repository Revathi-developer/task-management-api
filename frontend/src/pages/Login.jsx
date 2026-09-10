import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login.css";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const navigate = useNavigate();


    function LoginUser(e) {

        e.preventDefault();

        setError("");

        fetch("http://127.0.0.1:8000/api/token/", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username: username,
                password: password
            })

        })
        .then(async response => {

    const text = await response.text();

    console.log("STATUS:", response.status);
    console.log("RESPONSE:", text);

    if (!response.ok) {
        throw new Error("Login failed");
    }

    const data = JSON.parse(text);

    return data;
})
        .then(data => {

            console.log(data);

            localStorage.setItem("access", data.access);
            localStorage.setItem("refresh", data.refresh);

            navigate("/tasks");

        })
        .catch(error => {

            console.log(error);

            setError(error.message);

        });
    }


    return (
        <div className="login-page">

            <div className="login-card">

                <div className="login-header">

                    <div className="logo">
                        
                    </div>

                   

                    

                </div>


                <form onSubmit={LoginUser}>

                    <div className="form-group">

                        <label>
                            Username
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) =>
                                setUsername(e.target.value)
                            }
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label>
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                        />

                    </div>


                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}


                    <button
                        type="submit"
                        className="login-button"
                    >
                        Sign In
                    </button>

                </form>


                <div className="login-footer">
                    Task Management System
                </div>

            </div>

        </div>
    );
}

export default Login;