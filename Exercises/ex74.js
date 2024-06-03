function ex74(input) {


    let movieCollection = [];


    for (let command of input) {

        if (command.startsWith('addMovie ')) {
            let movieName = command.replace('addMovie ', '');
            movieCollection.push({ name: movieName });
        } else if (command.includes(' directedBy ')) {
            let [movieName, director] = command.split(' directedBy ');
            let movie = movieCollection.find(m => m.name === movieName);
            if (movie) {
                movie.director = director;
            }
        } else if (command.includes(' onDate ')) {
            let [movieName, date] = command.split(' onDate ');
            let movie = movieCollection.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }

    movieCollection
        .filter(movie => movie.name && movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)));


}
ex74([
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