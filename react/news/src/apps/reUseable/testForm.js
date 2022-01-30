import { useState } from 'react';
import IsLet from './isLet';
function Testform() {
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    function validation(event) {
        const IsLetName = IsLet(name);
        const IsLetLastname = IsLet(lastname);
        if (IsLetName.is && IsLetLastname.is) {
            alert(`input: ${name +' '+ lastname}`);
        }
        else {
            event.preventDefault();
            alert(` name err: ${IsLetName.errIn} lastname err: ${IsLetLastname.errIn}`);
        };
    }
    return (
        <form onSubmit={validation} target="_self" style={{display:'flex', justifyContent:'center', gap:'5px'}}>
            <label>
                <span>Name </span>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                <span>Lastname</span>
                <input
                    type='text'
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" disabled={ false} />
            { ( name || lastname) && <span>{name + " " + lastname}</span> }
        </form>
        );
};        
export default Testform;
