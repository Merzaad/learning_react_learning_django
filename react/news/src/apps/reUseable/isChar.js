function IsChar(...a) {
    const letters = /^[A-Za-z]+$/;
    const x = {
        is: false,
        falsedata: 'nothing',
    };
    for (let i of a) {
        if (i.match(letters)) {
            x.is = true;
        }
        else {
            x.is = false;
            x.falsedata = i;
            break;
        };
    };
    return x;
};
export default IsChar