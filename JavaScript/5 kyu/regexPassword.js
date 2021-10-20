// You need to write regex that will validate a password to make sure it meets the following criteria:

//     At least six characters long
//     contains a lowercase letter
//     contains an uppercase letter
//     contains a number

// Valid passwords will only be alphanumeric characters.
function validate(password) {
    //>= 6 length is /{6,}/
    //>= 1 lowercase /[a-z]/
    //>= 1 uppercase /[A-Z]/
    //>= 1 int /\d/
    //?=.* is a positive lookahead that basically says if this and that and that are this, but in any order
    //^ is an anchor to match the beginning of the word. 
    //$ matches the end of the word which we're using to check for non-alphanumeric char
    return /^(?=\w{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]*$/g.test(password);
};

console.log(validate('djI38D55'), 'djI38D55 - Expected true');
console.log(validate('a2.d412'), 'a2.d412 - Expected false');
console.log(validate('JHD5FJ53'), 'JHD5FJ53 - Expected false');
console.log(validate('!fdjn345'), '!fdjn345 - Expected false');
console.log(validate('jfkdfj3j'), 'jfkdfj3j - Expected false');
console.log(validate('123'), '123 - Expected false');
console.log(validate('abc'), 'abc - Expected false');
console.log(validate('Password123'), 'Password123 - Expected true');