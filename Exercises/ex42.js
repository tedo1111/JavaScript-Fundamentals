function ex42(arr) {
    let games = arr[0].split(" ");

    let names = arr.shift();
    let curEl = arr.shift();



    while (curEl !== `Play!`) {

        let [command, gameName] = curEl.split(" ");


        if (command === "Install") {
            if (!(games.includes(gameName))) {
                games.push(gameName);
            }
        }
        else if (command === `Uninstall`) {

            if (games.includes(gameName)) {
                let searched = games.indexOf(gameName);
                games.splice(searched, 1);
            }
        }
        else if (command === `Update`) {

            if ((games.includes(gameName))) {
                let searched = games.indexOf(gameName);
                games.splice(searched, 1);
                games.push(gameName);
            }

        }
        else if (command === `Expansion`) {

            let [fistHalf, secondHalf] = gameName.split("-");

            if (games.includes(fistHalf)) {
                let searched = games.indexOf(fistHalf);
                let newName = `${fistHalf}:${secondHalf}`;

                games.splice(searched + 1, 0, newName);
            }


        }


        curEl = arr.shift();
    }

    console.log(games.join(" "));

}
ex42(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
);
// ex42(['CS WoW Diablo',
//     'Uninstall XCOM',
//     'Update PeshoGame',
//     'Update WoW',
//     'Expansion Civ-V',
//     'Play!']
// );
