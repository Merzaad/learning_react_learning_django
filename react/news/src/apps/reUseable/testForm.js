import { useState } from 'react';
import IsChar from './isChar';
function Testform() {
    const [name, setName] = useState("");
    function validation(event) {
        const isCharName = IsChar(name);
        if (isCharName.is) {
            alert(`Name: ${name}`);
        }
        else {
            event.preventDefault();
            alert(`name error: ${isCharName.errIn}`);
        }
    }
    return (
        <form onSubmit={validation} target="_self">
            <label>
                <span>Input: </span>
                <input
                    type='text'
                    placeholder="test"
                    input={name}
                    onChange={(x) => setName(x.target.value)} />
            </label>
            <input type="submit" value="Submit"/>
        </form>
        );
};        
export default Testform
