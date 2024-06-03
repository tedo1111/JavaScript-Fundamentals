function ex64(arr) {

    let sorted = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))

    console.log(sorted.join(`\n`));
}
ex64(['alpha', 'beta', 'gamma']);