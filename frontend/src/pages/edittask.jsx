import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditTask() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");

    const [category, setCategory] = useState("");

    const [status, setStatus] = useState("");


    // GET ONE TASK

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

            setTitle(data.title);

            setDescription(data.description);

            setCategory(data.category);

            setStatus(data.status);

        })
        .catch(error => {
            console.log(error);
        });

    }, [id]);


    // UPDATE TASK

    function SaveChanges() {

        const token = localStorage.getItem("access");

        fetch(
            `http://127.0.0.1:8000/api/taskapi/${id}/`,
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json",

                    Authorization: `Bearer ${token}`
                },

                body: JSON.stringify({

                    title: title,

                    description: description,

                    category: category,

                    status: status

                })
            }
        )
        .then(response => response.json())
        .then(data => {

            console.log(data);

            console.log("Task updated successfully.");

            navigate("/tasks");

        })
        .catch(error => {
            console.log(error);
        });
    }


    return (
        <>
            <h1>Edit Task</h1>


            <label>
                Title:

                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

            </label>


            <br />
            <br />


            <label>
                Description:

                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

            </label>


            <br />
            <br />


            <label>
                Category:

                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

            </label>


            <br />
            <br />


            <label>
                Status:

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >

                    <option value="pending">
                        Pending
                    </option>

                    <option value="in_progress">
                        In Progress
                    </option>

                    <option value="completed">
                        Completed
                    </option>

                </select>

            </label>


            <br />
            <br />


            <button onClick={SaveChanges}>
                Save Changes
            </button>

        </>
    );
}

export default EditTask;