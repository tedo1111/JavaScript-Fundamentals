function centuriesToMinutes(centuries) {

    let resY = centuries * 100;
    let resD = Math.trunc(resY * 365.2422);
    let resH = resD * 24;
    let resM = resH * 60;

    console.log(`${centuries} centuries = ${resY} years = ${resD} days = ${resH} hours = ${resM} minutes`);

}
centuriesToMinutes(1);
centuriesToMinutes(5);