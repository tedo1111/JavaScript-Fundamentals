function thePianist(input) {

    let songs = Number(input.shift());

    let music = {};

    for (let i = 0; i < songs; i++) {
        let songStr = input[i];

        let [piece, pComposer, pKey] = songStr.split("|");

        music[piece] = { composer: pComposer, key: pKey };
    }

    let command = input.shift();

    while (command !== `Stop`) {

        let tokens = command.split("|");
        let action = tokens.shift();

        if (action === `Add`) {
            let [piece, pComposer, pKey] = tokens;

            if (piece in music) {
                console.log(`${piece} is already in the collection!`);
            }
            else {
                music[piece] = { composer: pComposer, key: pKey };

                console.log(`${piece} by ${pComposer} in ${pKey} added to the collection!`);
            }
        }
        else if (action === `Remove`) {
            let piece = tokens.shift();

            if (piece in music) {
                delete music[piece];

                console.log(`Successfully removed ${piece}!`);

            }
            else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            };
        }
        else if (action === `ChangeKey`) {
            let [piece, newKey] = tokens;

            if (piece in music) {
                music[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }
            else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }


        command = input.shift();
    }

    let entries = Object.entries(music);

    for (let [musicName, musicInfo] of entries) {
        console.log(`${musicName} -> Composer: ${musicInfo.composer}, Key: ${musicInfo.key}`);
    }


}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
);
// thePianist([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
// ]
// );