function stringLength(str1, str2, str3) {

    let sum = 0;
    let avg = 0;

    sum += Number(str1.length);
    sum += Number(str2.length);
    sum += Number(str3.length);

    avg = sum / 3;
    console.log(sum);
    console.log(Math.floor(avg));

}
stringLength('chocolate', 'ice cream', 'cake');