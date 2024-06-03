function ex97(input) {

    console.log(input.replace(/(.)\1+/g, '$1'));

}
ex97('aaaaabbbbbcdddeeeedssaa');