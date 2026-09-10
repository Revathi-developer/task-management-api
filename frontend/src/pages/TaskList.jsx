import TaskCard from "../components/TaskCard";
import { useState, useEffect } from "react";
import Nav from "../components/Navbar";
import "../task.css";

function TaskList() {

    const [tasks, setTasks] = useState([]);

    const [newTitle, setNewTitle] = useState("");

    const [newDescription, setNewDescription] = useState("");

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("");

    const [nextPage, setNextPage] = useState(null);

    const [previousPage, setPreviousPage] = useState(null);


    // GET TASKS

    useEffect(() => {

        const token = localStorage.getItem("access");

        fetch(
            `http://127.0.0.1:8000/api/taskapi/?search=${search}&status=${status}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        .then(response => response.json())
        .then(data => {

            console.log(data);

            setTasks(data.results);

            setNextPage(data.next);

            setPreviousPage(data.previous);

        })
        .catch(error => {
            console.log(error);
        });

    }, [search, status]);


    // ADD TASK

    function AddTask() {

        const token = localStorage.getItem("access");


        if (newTitle.trim() === "") {
        alert("Please enter a task title");
        return;
    }

        fetch("http://127.0.0.1:8000/api/taskapi/", {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify({
                title: newTitle,
                description: newDescription,
                category: "work",
                status: "pending"
            })

        })
        .then(response => {
        console.log("Status:", response.status);

        return response.json();
    })
    .then(data => {
        console.log("Django response:", data);

        if (data.id) {
            setTasks([...tasks, data]);
            setNewTitle("");
            setNewDescription("");
        }
    })
    .catch(error => {
        console.log("Error:", error);
    });
            
    }


    // DELETE TASK

    function DeleteTask(id) {

        const token = localStorage.getItem("access");

        fetch(
            `http://127.0.0.1:8000/api/taskapi/${id}/`,
            {
                method: "DELETE",

                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        .then(() => {

            setTasks(
                tasks.filter(task => task.id !== id)
            );

        })
        .catch(error => {
            console.log(error);
        });
    }


    // PAGINATION

    function GoToPage(url) {

        const token = localStorage.getItem("access");

        fetch(url, {

            headers: {
                Authorization: `Bearer ${token}`
            }

        })
        .then(response => response.json())
        .then(data => {

            console.log(data);

            setTasks(data.results);

            setNextPage(data.next);

            setPreviousPage(data.previous);

        })
        .catch(error => {
            console.log(error);
        });
    }


    return (
    <div className="tasks-page">

        <Nav />

        <div className="tasks-container">

            {/* PAGE HEADER */}

            <div className="tasks-header">

                <div>
                    <h1>My Tasks</h1>

                    <p>
                        Manage and track your tasks
                    </p>
                </div>

            </div>


            {/* SEARCH + STATUS */}

            <div className="task-tools">

                <div className="search-box">

                    <input
                        type="text"
                        placeholder="Search tasks..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>


                <div className="status-filter">

                    <label>
                        Status
                    </label>

                    <select
                        value={status}
                        onChange={(e) =>
                            setStatus(e.target.value)
                        }
                    >

                        <option value="">
                            All
                        </option>

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

                </div>

            </div>


            {/* ADD TASK */}

            <div className="add-task-section">

                <input
                    type="text"
                    placeholder="Enter new task title"
                    value={newTitle}
                    onChange={(e) =>
                        setNewTitle(e.target.value)
                    }
                />
                <textarea
        placeholder="Enter task description"
        value={newDescription}
        onChange={(e) =>
            setNewDescription(e.target.value)
        }
    />



                <button
                    className="add-task-button"
                    onClick={AddTask}
                >
                    + Add Task
                </button>

            </div>


            {/* TASK LIST */}

            <div className="task-list">

                {
                    tasks.map(task => (

                        <TaskCard
                            key={task.id}
                            title={task.title}
                            id={task.id}
                            status={task.status}
                            DeleteTask={DeleteTask}
                        />

                    ))
                }

            </div>


            {/* PAGINATION */}

            <div className="pagination">

                <button
                    disabled={!previousPage}
                    onClick={() =>
                        GoToPage(previousPage)
                    }
                >
                    ← Previous
                </button>


                <button
                    disabled={!nextPage}
                    onClick={() =>
                        GoToPage(nextPage)
                    }
                >
                    Next →
                </button>

            </div>

        </div>

    </div>
);
}
export default TaskList;