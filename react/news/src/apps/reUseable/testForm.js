import { useState } from 'react';
import IsLet from './isLet';
function Testform() {
    const [name, setName] = useState("");
    function validation(event) {
        const IsLetName = IsLet(name);
        if (IsLetName.is) {
            alert(`input: ${name}`);
        }
        else {
            event.preventDefault();
            alert(` error: ${IsLetName.errIn}`);
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
