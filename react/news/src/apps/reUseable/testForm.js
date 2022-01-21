import { useState } from 'react';
import IsChar from './isChar';
function Testform() {
    const [name, setName] = useState("");
    function validation() {
        let test = IsChar(name);
        alert(`is Char:${test.is} and false data:${test.falsedata} `);
    };
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
