function requiredReading(numberOfPages, pagedForHour, daysNeededForReed) {


    let timeToReadABook = numberOfPages / pagedForHour;
    let res = timeToReadABook / daysNeededForReed;
    console.log(res);

}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);