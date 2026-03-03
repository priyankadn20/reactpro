import { useState } from "react";
function StringState() {
    const [name, setName] = useState(" ");
    const handleChange = (e) => {
        setName(e.target.value);
    }
    return (
        <div>
            <input type ="text" value ={name} onChange = {handleChange}/>
            <h1>{name}</h1>
        </div>
    );
}
export default StringState;