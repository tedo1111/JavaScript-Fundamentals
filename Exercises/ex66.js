function ex66(arr, commands) {

    const [takeCount, deleteCount, searchNumber] = commands;

    let resultArray = arr.slice(0, takeCount);

    resultArray.splice(0, deleteCount);

    let count = resultArray.reduce((acc, num) => {
        return num === searchNumber ? acc + 1 : acc;
    }, 0);

    console.log(`Number ${searchNumber} occurs ${count} times.`);

}
ex66([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);