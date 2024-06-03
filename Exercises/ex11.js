function ex11(year, month, day) {

    let curDate = new Date(year, month - 1, day);

    curDate.setDate(curDate.getDate() + 1);

    let nextY = curDate.getFullYear();
    let nextM = curDate.getMonth() + 1;
    let nextD = curDate.getDate();

    console.log(`${nextY}-${nextM}-${nextD}`);

}
ex11(2016, 9, 30);
ex11(2020, 3, 24);
