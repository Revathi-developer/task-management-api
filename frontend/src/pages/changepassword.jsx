import { useState } from "react";
import Nav from "../components/Navbar";
import "../changepassword.css";

function ChangePassword() {

    const [password, setPassword] = useState("");


    function NewPassword() {

        const token = localStorage.getItem("access");

        fetch(
            "http://127.0.0.1:8000/api/change-password/",
            {
                method: "PUT",

                headers: {
                    Authorization: `Bearer ${token}`,

                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    password: password
                })
            }
        )
        .then(response => response.json())
        .then(data => {

            console.log(data);

            setPassword("");

            console.log("Password Updated Successfully.");

        })
        .catch(error => {
            console.log(error);
        });
    }
return (
    <div className="change-password-page">

        <Nav />

        <div className="change-password-container">

            <div className="change-password-card">

                <h1>Change Password</h1>

                <label>
                    New Password:

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </label>

                <button onClick={NewPassword}>
                    Save Password
                </button>

            </div>

        </div>

    </div>
);
}

export default ChangePassword;