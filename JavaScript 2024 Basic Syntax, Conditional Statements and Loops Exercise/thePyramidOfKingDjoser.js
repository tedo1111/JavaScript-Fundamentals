function thePyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let gold = 0;
    let lapis = 0;
    let step = 1;

    let height = 0;

    for (let curSize = base; curSize > 0; curSize -= 2) {

        height += increment;

        let totalAria = curSize ** 2;

        if (curSize <= 2) {
            gold = totalAria * increment;

        }
        else {
            let stoneAria = (curSize - 2) ** 2;
            stone += stoneAria * increment;

            if (step % 5 === 0) {
                let lapisAria = totalAria - stoneAria;
                lapis += lapisAria * increment;
            }
            else {
                let marbleAria = totalAria - stoneAria;
                marble += marbleAria * increment;
            }

        }

        step++;

    }



    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);

}
thePyramidOfKingDjoser(11, 1);
// thePyramidOfKingDjoser(11, 0.75);
// thePyramidOfKingDjoser(12, 1);
// thePyramidOfKingDjoser(23, 0.5);