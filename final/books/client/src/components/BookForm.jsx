import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookForm = ({ submitProp, updateData = null }) => {
    const navigate = useNavigate();
    const initialData = {
        title: "",
        author: "",
        pages: 0,
        isAvailable: false,
    };

    const initialErrors = {
        title: "",
        author: "",
        pages: "",
    };

    useEffect(() => {
        if (updateData !== null) {
            setBookData((prevBookData) => updateData);
        }
    }, []);

    const [bookData, setBookData] = useState(initialData);
    const [errorData, setErrorData] = useState(initialErrors);

    const handleSubmit = (e) => {
        e.preventDefault();
        submitProp(bookData, setErrorData);
    };

    const handleChange = (e) => {
        setBookData({ ...bookData, [e.target.name]: e.target.value });
    };

    const handleCheck = (e) => {
        setBookData({ ...bookData, isAvailable: !bookData.isAvailable });
    };
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className=" m-3 col-md-4 d-flex flex-column justify-content-evenly bg-dark text-light p-5"
            >
                <div className="columns d-flex justify-content-evenly">
                    <div className="labels d-flex flex-column justify-content-around align-items-center gap-3">
                        <label htmlFor="title">Title</label>
                        <label htmlFor="author">Author</label>
                        <label htmlFor="pages">Pages</label>
                    </div>
                    <div className="inputs d-flex flex-column justify-content-around align-items-center gap-3">
                        <input
                            onChange={handleChange}
                            type="text"
                            name="title"
                            value={bookData.title}
                        />
                        <input
                            onChange={handleChange}
                            type="text"
                            name="author"
                            value={bookData.author}
                        />
                        <input
                            onChange={handleChange}
                            type="number"
                            name="pages"
                            value={bookData.pages}
                        />
                    </div>
                    <div className="errors d-flex flex-column justify-content-around align-items-center gap-3">
                        <span className="text-danger">
                            {errorData.title.message}
                        </span>
                        <span className="text-danger">
                            {errorData.author.message}
                        </span>
                        <span className="text-danger">
                            {errorData.pages.message}
                        </span>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-3 m-2 p-3">
                    <label htmlFor="isAvailable">Is it available?</label>
                    <input
                        className="mr-2"
                        onChange={handleCheck}
                        type="checkbox"
                        name="isAvailable"
                        checked={bookData.isAvailable}
                    />
                </div>
                <div className="form-group m-3 text-right">
                    <button className="btn btn-primary w-100">
                        {updateData === null ? "Create" : "Update"}
                    </button>
                </div>
            </form>
        </>
    );
};

export default BookForm;
