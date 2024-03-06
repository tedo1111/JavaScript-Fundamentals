function movies(arr) {

    let movie = [];

    for (let command of arr) {

        if (command.includes(`addMovie`)) {
            let splitedCommand = command.split(`addMovie `);
            let moveName = splitedCommand[1];

            let objMov = {
                name: moveName,
            }
            movie.push(objMov);
        }
        else if (command.includes(`directedBy`)) {
            let tokens = command.split(` directedBy `);
            let moveName = tokens[0];
            let directorN = tokens[1];

            let movieFound = movie.find(m => m.name === moveName)

            if (movieFound) {
                movieFound.director = directorN;
            }
        }
        else if (command.includes(`onDate`)) {
            let tokens = command.split(` onDate `);
            let moveName = tokens[0];
            let movieDate = tokens[1];

            let movieFound = movie.find(m => m.name === moveName)

            if (movieFound) {
                movieFound.date = movieDate;
            }
        }
    }

    let fullInfo = movie.filter(m => m.name && m.date && m.director);

    for (let full of fullInfo) {
        console.log(JSON.stringify(full));
    }

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);
// movies([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo'
// ]
// );
