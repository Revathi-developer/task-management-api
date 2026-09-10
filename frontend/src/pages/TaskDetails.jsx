import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Navbar";
import "../task.css";

function TaskDetails() {

    const { id } = useParams();

    const [task, setTask] = useState({});


    useEffect(() => {

        const token = localStorage.getItem("access");

        fetch(
            `http://127.0.0.1:8000/api/taskapi/${id}/`,
            {
                method: "GET",

                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        .then(response => response.json())
        .then(data => {

            console.log(data);

            setTask(data);

        })
        .catch(error => {
            console.log(error);
        });

    }, [id]);


    return (
        <div className="tasks-page">

            <Nav />

            <div className="task-details">

                <h1>Task Details</h1>

                <div className="details-item">
                    <span>Task ID</span>
                    <strong>{task.id}</strong>
                </div>


                <div className="details-item">
                    <span>Title</span>
                    <strong>{task.title}</strong>
                </div>


                <div className="details-item">
                    <span>Description</span>
                    <strong>{task.description}</strong>
                </div>


                <div className="details-item">
                    <span>Status</span>

                    <span className="status pending">
                        {task.status}
                    </span>
                </div>


                <div className="details-item">
                    <span>Category</span>
                    <strong>{task.category}</strong>
                </div>

            </div>

        </div>
    );
}

export default TaskDetails;