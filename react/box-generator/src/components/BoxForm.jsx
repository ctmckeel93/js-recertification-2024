import { useState } from "react";

const BoxForm = (props) => {
    const {setBoxes} = props;
    const [color, setColor] = useState("");

    const addBox = (e) => {
        e.preventDefault();
        setBoxes(prevState => [...prevState, {color}]);
    }

    return (
        <form onSubmit={addBox}>
            <label htmlFor="color">Color</label>
            <input value={color} onChange={e => setColor(e.target.value)} type="text" />
            <button>Create</button>
        </form>
    );
};

export default BoxForm;
