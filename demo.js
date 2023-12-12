function counter ()
{
    let count = 0;
    function inner ()
    {
        console.log(count++);
    }
    return inner;
}
let a = counter()
a()
a()
a()
//memorization is a technique of remembering outputs based on input like a key value pair