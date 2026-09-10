import { Link, useNavigate } from "react-router-dom";

function Nav() {

    const navigate = useNavigate();

    function LogoutUser() {

        localStorage.removeItem("access");
        localStorage.removeItem("refresh");

        navigate("/login");
    }

    return (
        <>
            <Link to="/home">Home</Link>
            {" | "}

            <Link to="/profile">Profile</Link>
            {" | "}

            <Link to="/tasks">Tasks</Link>
            {" | "}

            <Link to="/change-password">
                Change Password
            </Link>
            {" | "}

            <button onClick={LogoutUser}>
                Logout
            </button>
        </>
    );
}

export default Nav;