function radioCrystals(arr) {

    let targetThickness = arr[0];


    let cut = 0;
    let lap = 0;
    let grind = 0;
    let etch = 0;
    let xRay = 0;

    let curEl = 1;
    let index = 1;


    while (curEl < arr.length) {

        let curElOfArr = arr[index];

        console.log(`Processing chunk ${curElOfArr} microns`);

        while (targetThickness !== curElOfArr) {


            if (curElOfArr / 4 >= targetThickness) {
                curElOfArr /= 4;
                curElOfArr = Math.floor(curElOfArr);
                cut++;
            }
            else if (curElOfArr - (curElOfArr * 0.2) >= targetThickness) {
                curElOfArr = curElOfArr - (curElOfArr * 0.2);
                curElOfArr = Math.floor(curElOfArr);
                lap++;

            }
            else if (curElOfArr - 20 >= targetThickness) {
                curElOfArr = curElOfArr - 20;
                curElOfArr = Math.floor(curElOfArr);
                grind++;
            }
            else if (curElOfArr - 2 >= targetThickness) {
                curElOfArr = curElOfArr - 2;
                curElOfArr = Math.floor(curElOfArr);
                etch++;
            }
            else if (curElOfArr !== targetThickness) {
                if (xRay < 1) {
                    curElOfArr += 1;
                    xRay++;
                }
            }

            if (targetThickness === curElOfArr) {
                index++
                if (cut > 0) {
                    console.log(`Cut x${cut}\nTransporting and washing`);

                }
                if (lap > 0) {
                    console.log(`Lap x${lap}\nTransporting and washing`);
                }
                if (grind > 0) {
                    console.log(`Grind x${grind}\nTransporting and washing`);
                }
                if (etch > 0) {
                    console.log(`Etch x${etch}\nTransporting and washing`);
                }
                if (xRay > 0) {
                    console.log(`X-ray x${xRay}`);
                }


                console.log(`Finished crystal ${curElOfArr} microns`);
                break;

            }

        }
        cut = 0;
        lap = 0;
        grind = 0;
        etch = 0;
        xRay = 0;

        curEl++;
    }
}
// radioCrystals([1375, 50000]);
// radioCrystals([1000, 4000, 8100]);