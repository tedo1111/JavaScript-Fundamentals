function flightSchedule(input) {
    let allFlights = input[0];
    let changedStatuses = input[1];
    let statusToCheck = input[2][0];

    let flights = {};

    // Populate the flights object with all flights and default status "Ready to fly"
    allFlights.forEach(flightInfo => {
        let [flightNumber, destination] = flightInfo.split(' ');
        flights[flightNumber] = {
            Destination: destination,
            Status: 'Ready to fly'
        };
    });

    // Update the statuses of the flights according to the changedStatuses array
    changedStatuses.forEach(statusInfo => {
        let [flightNumber, status] = statusInfo.split(' ');
        if (flights[flightNumber]) {
            flights[flightNumber].Status = status;
        }
    });

    // Filter and print flights based on the statusToCheck
    for (let flightNumber in flights) {
        if (flights[flightNumber].Status === statusToCheck) {
            console.log(flights[flightNumber]);
        }
    }
}

// Example usage:
flightSchedule([
    ['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'],
    ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'],
    ['Cancelled']
]);