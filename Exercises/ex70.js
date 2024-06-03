function ex70(matrixStrings, commands) {
    let matrix = matrixStrings.map(row => row.split(' ').map(Number));

    for (let command of commands) {
        let parts = command.split(' ');
        let action = parts[0];
        let value = Number(parts[1]);

        if (action === 'breeze') {
            let row = value;
            for (let col = 0; col < 5; col++) {
                matrix[row][col] = Math.max(0, matrix[row][col] - 15);
            }
        } else if (action === 'gale') {
            let col = value;
            for (let row = 0; row < 5; row++) {
                matrix[row][col] = Math.max(0, matrix[row][col] - 20);
            }
        } else if (action === 'smog') {
            let increment = value;
            for (let row = 0; row < 5; row++) {
                for (let col = 0; col < 5; col++) {
                    matrix[row][col] += increment;
                }
            }
        }
    }

    let pollutedBlocks = [];
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (matrix[row][col] >= 50) {
                pollutedBlocks.push(`[${row}-${col}]`);
            }
        }
    }

    if (pollutedBlocks.length > 0) {
        console.log(`Polluted areas: ${pollutedBlocks.join(', ')}`);
    } else {
        console.log("No polluted areas");
    }
}

ex70(
    ['5 7 72 14 4', '41 35 37 27 33', '23 16 27 42 12', '2 20 28 39 14', '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']
);