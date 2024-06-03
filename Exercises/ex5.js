function ex5(year) {

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {

        console.log(`yes`);
    }
    else {
        console.log(`no`);
    }

}
ex5(1984);
ex5(2003);
ex5(4);
ex5(1900);
