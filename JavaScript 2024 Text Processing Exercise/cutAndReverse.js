function cutAndReverse(input) {

    let half = input.length / 2;

    let firstHalf = input.slice(0, half).split("").reverse().join("");
    let secHalf = input.slice(half).split("").reverse().join("");

    console.log(firstHalf);
    console.log(secHalf);

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
// cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');