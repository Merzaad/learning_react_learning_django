import { useState } from 'react';

function Testform(e) {
    const [name, setName] = useState("");
    const letters = /^[A-Za-z]+$/;
    function isChar(...a) {
        let x = [false, 'nothing']
        for (let i of a) {
            if (i.match(letters)) {
                x[0] = true;
            }
            else {
                x[0] = false;
                x[1] = name;
                break;
            };
        }
        return x
    };
    function validation() {
        let test = isChar(name);
        alert(`is character:${test[0]} and false data:${test[1]} `);
    };
    return (
        <form onSubmit={validation}>
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
