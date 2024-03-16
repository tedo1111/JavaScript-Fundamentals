function modernTimesOfHashTag(input) {

    let str = input.split(" ");



    let hashtags = str.filter(word => word.startsWith("#") && word.length > 1);


    for (let el of hashtags) {
        let res = el.slice(1);
        let pattern = /\b[A-Za-z]+\b/;


        if (pattern.test(res)) {
            console.log(res);
        }
    }


}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
// modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');