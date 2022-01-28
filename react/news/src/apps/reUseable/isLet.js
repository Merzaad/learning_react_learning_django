function IsLet(a) {
    const letters = /^[A-Za-z]+$/;
    const x = { is: false, errIn: 'initial' };
    if (a.match(letters)) {
        x.is = true;
        x.errIn = 'nothing'
    }
    else {
        x.errIn = `must be letters`
    };
    return x;
};
export default IsLet;