function worldTour(input) {

    let stops = input.shift();

    let curEl = input.shift();

    while (curEl !== 'Travel' && curEl !== undefined) {

        let [command, index, elString] = curEl.split(":");

        if (command === `Add Stop`) {
            index = Number(index);

            if (index >= 0 && index < stops.length) {

                stops = stops.slice(0, index) + elString + stops.slice(index);

            }

        } else if (command === `Remove Stop`) {
            index = Number(index);
            let endIdx = Number(elString);

            if (index >= 0 && endIdx < stops.length) {
                stops = stops.slice(0, index) + stops.slice(endIdx + 1);
            }
        }
        else if (command === `Switch`) {
            index = String(index);

            stops = stops.replace(index, elString);

        }
        console.log(stops);

        curEl = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
);
// worldTour((["Albania:Bulgaria:Cyprus:Deuchland",
//     "Add Stop:3:Nigeria",
//     "Remove Stop:4:8",
//     "Switch:Albania: Azərbaycan",
//     "Travel"])
// );