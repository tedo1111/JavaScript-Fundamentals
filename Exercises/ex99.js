function ex99(input) {

    let half = input.length / 2;

    let firstHalf = input.slice(0, half).split("").reverse().join("");
    let secHalf = input.slice(half).split("").reverse().join("");

    console.log(firstHalf);
    console.log(secHalf);

}
ex99('tluciffiDsIsihTgnizamAoSsIsihT');