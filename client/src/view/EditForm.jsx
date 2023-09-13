import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditForm = () => {
    const [name, setName] = useState("");
    const { id } = useParams();
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                const oneAuthor = res.data;
                setName(oneAuthor.name);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const submitHandler = (e) => {
        e.preventDefault();

        axios
            .put(`http://localhost:8000/api/authors/${id}/edit`, {
                name,
            })
            .then((res) => {
				// const updateAuthorID = res.data._id;
				navigate("/");
			})
            .catch((err) => {
                const errResponse = err.response.data.errors;
				const errorArr = [];
				for (const key in errResponse){
					errorArr.push(errResponse[key].message)
				}
				setErrors(errorArr)
            });
    };

    return (
        <div>
            <Link to={`/authors`}>Home</Link>
            <p>Edit this Author:</p>
            <form onSubmit={submitHandler}>
			<div>
                    <label>Name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <Link to="/authors"><button>Cancel</button></Link>
                    <button type="submit">Submit</button>
                </div>
            </form>
            {errors.map((err, index) => (
                <p key={index}>{err}</p>
            ))}
        </div>
    );
};

export default EditForm;
