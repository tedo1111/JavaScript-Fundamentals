function emojiDetector(input) {
    let text = input.shift();
    let digPattern = /[0-9]/;
    let cool = 1;
    text.split('').forEach(ch => {
        if (ch.match(digPattern) !== null) {
            cool *= Number(ch.match(digPattern)[0]);
        }
    });
    console.log(`Cool threshold: ${cool}`);
    let count = 0;
    let result = [];
    let pattern = /(\:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let validList = text.matchAll(pattern);
    for (const match of validList) {
        count++;
        let coolness = (match.groups.emoji)
            .split('')
            .map(x => x.charCodeAt(0))
            .reduce((a, b) => a + b);
        if (coolness > cool) {
            result.push(match[0]);
        }
    }
    console.log(`${count} emojis found in the text. The cool ones are:`);
    result.forEach(emoji => console.log(emoji));
}


emojiDetector((["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]));

// emojiDetector((["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]));