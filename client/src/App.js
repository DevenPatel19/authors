import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./view/Dashboard";
import CreateForm from "./view/CreateForm";
import EditForm from "./view/EditForm";

function App() {
    return (
        <div className="App">
            <h1>Favorite Authors</h1>
            <hr />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/authors" element={<Dashboard />} />
                <Route path="/authors/new" element={<CreateForm />} />
                <Route path="/authors/:id/edit" element={<EditForm />} />
            </Routes>
        </div>
    );
}

export default App;
