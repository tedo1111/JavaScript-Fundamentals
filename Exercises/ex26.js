function ex26(radius, height) {

    let resV = Math.PI * (radius * radius) * (height / 3);
    let resA = Math.PI * radius * (radius + Math.sqrt((radius * radius) + height * height));

    console.log('volume = '+resV.toFixed(4));
    console.log(`area = `+resA.toFixed(4));

}
ex26(3, 5);
ex26(3.3, 7.8);
