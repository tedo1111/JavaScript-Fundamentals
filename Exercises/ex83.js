function ex83(input) {


    let searchedWords = input.split(" ");


    let toLowerCase = searchedWords.map(e => e.toLowerCase());

    let obj = {};

    let res = " ";

    for (let word of toLowerCase) {
        obj[word] = 0;
    }

    for (let word of toLowerCase) {

        if (word in obj) {
            obj[word]++;
        }
    }

    let enetries = Object.entries(obj);

    for (let [word, occurrencesCount] of enetries) {
        if (occurrencesCount % 2 !== 0) {
            res += `${word} `;
        }
    }
    console.log(res);

}
ex83('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');