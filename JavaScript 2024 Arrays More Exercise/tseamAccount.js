function tseamAccount(arr) {
    let myGames = arr[0].split(' ');

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === 'Play!') break;

        let [command, game] = arr[i].split(' ');

        if (command === 'Install') {
            if (!myGames.includes(game)) {
                myGames.push(game);
            }
        } else if (command === 'Uninstall') {
            let index = myGames.indexOf(game);
            if (index !== -1) {
                myGames.splice(index, 1);
            }
        } else if (command === 'Update') {
            let index = myGames.indexOf(game);
            if (index !== -1) {
                myGames.splice(index, 1);
                myGames.push(game);
            }
        } else if (command === 'Expansion') {
            let [firstPart, secPart] = game.split('-');
            let index = myGames.indexOf(firstPart);
            if (index !== -1) {
                myGames.splice(index + 1, 0, `${firstPart}:${secPart}`);
            }
        }
    }

    console.log(myGames.join(' '));
}

tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);
