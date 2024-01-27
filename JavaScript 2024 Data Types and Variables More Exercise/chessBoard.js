function chessBoard(num) {

    let size = Number(num);

    let curColor = 'black';
    let previousColour = "";


    console.log('<div class="chessboard">');

    for (let row = 1; row <= size; row++) {
        console.log('  <div>');

        for (let col = 1; col <= size; col++) {
            console.log(`    <span class="${curColor}"></span>`);


            previousColour = curColor;
            curColor = previousColour === 'black' ? 'white' : 'black';
        }
        console.log(`  </div>`);

        if (size % 2 === 0) {
            previousColour = curColor;
            curColor = previousColour === 'black' ? 'white' : 'black';
        }
    }

    console.log(`</div>`);

}
chessBoard(3);