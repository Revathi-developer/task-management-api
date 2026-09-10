import Login from "./pages/Login";
import TaskList from "./pages/TaskList";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import TaskDetails from "./pages/TaskDetails";
import EditTask from "./pages/EditTask";

import ProtectedRoute from "./components/ProtectedRoute";

import { Routes, Route } from "react-router-dom";

function App() {

    return (
        <Routes>

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/home"
                element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/change-password"
                element={
                    <ProtectedRoute>
                        <ChangePassword />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/tasks"
                element={
                    <ProtectedRoute>
                        <TaskList />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/tasks/:id"
                element={
                    <ProtectedRoute>
                        <TaskDetails />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/tasks/:id/edit"
                element={
                    <ProtectedRoute>
                        <EditTask />
                    </ProtectedRoute>
                }
            />

        </Routes>
    );
}

export default App;