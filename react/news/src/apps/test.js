import { useState } from 'react';

function Testform() {
    const [name, setName] = useState("");
    const x = (e) => {
        e.preventDefault();
        alert(`${name}`)
    }
    return (
        <form onSubmit={x}>
            <label>
                <span>Input: </span>
                <input
                    type='text'
                    placeholder="test"
                    input={name}
                    onChange={(e) => setName(e.target.value)} />
            </label>
            <input type="submit" value="Submit"/>
        </form>
    );
};        

export default Testform
