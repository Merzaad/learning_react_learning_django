function IsLet(a) {
    const letters = /^[A-Za-z]+$/;
    const x = { is: false, errIn: 'nothing' };
    if (a.match(letters)) {
        x.does = true;
    }
    else {
        x.errIn = `must be letters`
    };
    return x
};
export default IsLet