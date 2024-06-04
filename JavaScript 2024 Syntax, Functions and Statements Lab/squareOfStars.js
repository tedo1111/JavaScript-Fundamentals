function sqrOfStars(size = 5) {

    for (let i = 0; i < size; i++) {
        let row = "* ".repeat(size);

        console.log(row);
    }


}
sqrOfStars(1);
sqrOfStars(2);
sqrOfStars(5);