import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateForm = () => {
    const [name, setName] = useState("");

	const [errors, setErrors] = useState([])

	const navigate = useNavigate();


    const submitHandler = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/api/authors", {
                name,
            })
            .then(() => {
				
				navigate('/authors');
			})
            .catch((err) => {
				const errResponse = err.response.data.errors;
				const errorArr = [];
				for (const key in errResponse){
					errorArr.push(errResponse[key].message)
				}
				setErrors(errorArr)
	})
    };

    return (
        <div>
            <Link to={`/authors`}>Home</Link>
            <p>Add a new Author:</p>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <Link to="/authors"><button>Cancel</button></Link>
                    <input
                        type="submit"
                        value="Submit"
                    />
                </div>
            </form>
			{errors.map((err, index) => <p key={index}>{err}</p>)}
        </div>
    );
};

export default CreateForm;
