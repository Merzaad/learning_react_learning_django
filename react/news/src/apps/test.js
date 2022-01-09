function TestBtn() {
    function padd() {
        let a = (a, b) => {
            return a + b
        }
        document.getElementById('right').classList.add('p-5')
        //console.log(typeof a)
    }
    return (
        <button id='btn' className="btn bg-dark text-white" onClick={padd}>test</button>
    )
};

export default TestBtn
