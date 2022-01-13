function TestBtn() {
    function padd() {
        function co (name, lastname) {
            this.name = name;
            this.lastname = lastname;
            this.fullname = function () {
                return this.name + this.lastname
            };
        }
        const x = () => {
            let a=new co("m", "h");
            return a.fullname()
        }

        function sum(...args) {
            let a = 'HEllo'
            for (let i of args) {
                if (i.includes(a.toLowerCase())) {
                    alert('yess')
                }
                else {
                    setTimeout(function () { alert("no") }, 1000);
                };
            }
            
        };
        sum("i said hello","i said no")
    
        document.getElementById('right').classList.add('p-5')
         
    }
    return (
        <button id='btn' className="btn bg-dark text-white" onClick={padd}>console</button>
    )
};

export default TestBtn
