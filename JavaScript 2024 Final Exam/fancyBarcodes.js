

function fancyBarcodes(input) {
    let n = Number(input.shift());

    let regex = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/;

    let digitsPattern = /[0-9]/g;

    for (let i = 0; i < n; i++) {

        let curBar = input[i];

        if (regex.test(curBar)) {

            let digits = curBar.match(digitsPattern);

            if (digits) {
                let prodGroup = digits.join("");
                console.log(`Product group: ${prodGroup}`);
            }
            else {
                console.log(`Product group: 00`);
            }


        }
        else {
            console.log("Invalid barcode");
        }
    }

}

// fancyBarcodes((["3",
//     "@#FreshFisH@#",
//     "@###Brea0D@###",
//     "@##Che4s6E@##"])
// );
fancyBarcodes((["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
);
