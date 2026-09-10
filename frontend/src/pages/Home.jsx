
import Nav from "../components/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../home.css";

function Home() {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [totalTasks, setTotalTasks] = useState(0);
    const [pendingTasks,setPendingTasks] = useState(0);
    const [progressTasks, setProgressTasks] = useState(0);
    const [completedTasks, setCompletedTasks] = useState(0);

    
    




    useEffect(() => {

    const token = localStorage.getItem("access");

    fetch("http://127.0.0.1:8000/api/taskapi/", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
    console.log(data);

    setTasks(data.results);

    setProgressTasks(
    data.results.filter(task => task.status === "in_progress").length
);

    setPendingTasks(
    data.results.filter(task => task.status === "pending").length

    
);

    setCompletedTasks(
    data.results.filter(task => task.status === "completed").length
);

    setTotalTasks(data.count);
})
    .catch(error => {
        console.log(error);
    });

}, []);

    return (
        <div className="home-page">

            <Nav />

            <div className="home-container">

                <div className="welcome-section">
                    <h1>Welcome to Task Management System</h1>

                    <p>
                        Manage your tasks, track your progress,
                        and stay organized.
                    </p>
                </div>


                <div className="dashboard-cards">

                    <div className="dashboard-card total-card">
                        <div className="card-icon">📋</div>

                        <div>
                            <h3>Total Tasks</h3>
                            <p>{totalTasks}</p>
                        </div>
                    </div>


                    <div className="dashboard-card pending-card">
                        <div className="card-icon">⏳</div>

                        <div>
                            <h3>Pending</h3>
                            <p>{pendingTasks}</p>
                        </div>
                    </div>


                    <div className="dashboard-card progress-card">
                        <div className="card-icon">🔄</div>

                        <div>
                            <h3>In Progress</h3>
                            <p>{progressTasks}</p>
                        </div>
                    </div>


                    <div className="dashboard-card completed-card">
                        <div className="card-icon">✅</div>

                        <div>
                            <h3>Completed</h3>
                            <p>{completedTasks}</p>
                        </div>
                    </div>

                </div>


                <div className="home-info">

                    <h2>Manage Your Tasks</h2>

                    <p>
                        Create new tasks, update existing tasks,
                        and keep track of your work from one place.
                    </p>

                    <button onClick={() => navigate("/tasks")}>
    View Tasks
</button>

                </div>

            </div>

        </div>
    );
}

export default Home;