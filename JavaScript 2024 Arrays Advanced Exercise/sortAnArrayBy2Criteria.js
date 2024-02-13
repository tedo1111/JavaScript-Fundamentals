function sortAnArrayBy2Criteria(arr) {

    let sorted = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))

    console.log(sorted.join(`\n`));
}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
