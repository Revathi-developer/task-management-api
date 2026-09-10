import { useEffect, useState } from "react";
import Nav from "../components/Navbar";
import "../profile.css";

function Profile() {

    const [profile, setProfile] = useState({});


    useEffect(() => {

        const token = localStorage.getItem("access");

        fetch(
            "http://127.0.0.1:8000/api/profile/",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        .then(response => response.json())
        .then(data => {

            console.log(data);

            setProfile(data);

        })
        .catch(error => {
            console.log(error);
        });

    }, []);


    return (
        
            
    <div className="profile-page">

        <Nav />

        <div className="profile-container">

            <div className="profile-card">

                <div className="profile-header">

                    <div className="profile-avatar">
                        👤
                    </div>

                    <h1>{profile.username}</h1>

                    <p>{profile.email}</p>

                </div>


                <div className="profile-details">

                    <div className="profile-item">

                        <div className="profile-label">
                            Username
                        </div>

                        <div className="profile-value">
                            {profile.username}
                        </div>

                    </div>


                    <div className="profile-item">

                        <div className="profile-label">
                            Email
                        </div>

                        <div className="profile-value">
                            {profile.email}
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
);
}

export default Profile;