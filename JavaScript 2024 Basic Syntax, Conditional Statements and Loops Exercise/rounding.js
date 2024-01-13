function rounding(num, toBeRounded) {

    if (toBeRounded > 15) {
        toBeRounded = 15;
    }

    console.log(`${(parseFloat(num.toFixed(toBeRounded)))}`);

}
rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);