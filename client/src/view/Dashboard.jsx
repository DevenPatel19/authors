import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [authorList, setAuthorList] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((response) => setAuthorList(response.data))
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = (deleteId) => {
        axios
            .delete(`http://localhost:8000/api/authors/${deleteId}`)
            .then(() => {
                removeFromDom(deleteId);
                console.log("deleted!");
            })
            .catch((err) => console.log(err));
    };

    const removeFromDom = (deletedId) => {
        const filterdList = authorList.filter(
            (eachAuthor, idx) => eachAuthor._id !== deletedId
        );
        setAuthorList(filterdList);
    };

    return (
        <>
            <Link to={`/authors/new`}>Add an author</Link>
            <p>We have quotes by:</p>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
                {authorList.map((oneAuthor, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{oneAuthor.name}</td>
                            <td>
                                <Link to={`/authors/${oneAuthor._id}/edit`}>
                                    <button>Edit</button>
                                </Link>
                                <Link to={`/authors/`}>
                                    <button
                                        onClick={() =>
                                            handleDelete(oneAuthor._id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </>
    );
};

export default Dashboard;
