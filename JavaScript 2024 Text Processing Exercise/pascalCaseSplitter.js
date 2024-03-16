function pascalCaseSplitter(input) {

    let words = input.match(/[A-Z][a-z]*/g);

    let res = words.join(", ");

    console.log(res);

}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');