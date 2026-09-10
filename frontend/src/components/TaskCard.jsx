import { Link } from "react-router-dom";

function TaskCard({ title, id, DeleteTask,status }) {

    return (
        <div className="task-card">

            <div className="task-content">

                <div className="task-title-row">

                    <h2>{title}</h2>

                    <span className={`status ${status}`}>
    {status}
</span>

                </div>

                <p>
                    Task #{id}
                </p>

            </div>


            <div className="task-actions">

                <Link
                    to={`/tasks/${id}`}
                    className="view-button"
                >
                    View
                </Link>


                <Link
                    to={`/tasks/${id}/edit`}
                    className="edit-button"
                >
                    Edit
                </Link>


                <button
                    className="delete-button"
                    onClick={() => DeleteTask(id)}
                >
                    Delete
                </button>

            </div>

        </div>
    );
}

export default TaskCard;