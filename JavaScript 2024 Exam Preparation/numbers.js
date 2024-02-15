function topNumbers(arr) {
    let list = arr.split(" ").map(Number);

    let sum = list.reduce((a, b) => a + b, 0);
    let avg = sum / list.length;

    let newArr = list.filter(el => el > avg).sort((a, b) => b - a);

    console.log(newArr.slice(0, Math.min(newArr.length, 5)).join(" "));
}

topNumbers('10 20 30 40 50');
topNumbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
topNumbers('-1 -2 -3 -4 -5 -6');
topNumbers('1');
