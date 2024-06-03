function ex4(groupSize, groupType, dayOfWeek) {

    let prices = {

        Friday: {
            Students: 8.45,
            Business: 10.90,
            Regular: 15
        },
        Saturday: {
            Students: 9.80,
            Business: 15.60,
            Regular: 20
        },
        Sunday: {
            Students: 10.46,
            Business: 16,
            Regular: 22.50
        }
    };

    let price = prices[dayOfWeek][groupType] * groupSize;

    if (groupType === "Students" && groupSize >= 30) {
        price *= 0.85;
    } else if (groupType === "Business" && groupSize >= 100) {
        price -= 10 * prices[dayOfWeek][groupType];
    } else if (groupType === "Regular" && groupSize >= 10 && groupSize <= 20) {
        price *= 0.95;
    }

    console.log(`Total price: ${price.toFixed(2)}`);

}
ex4(30,
    "Students",
    "Sunday"
);
ex4(40,
    "Regular",
    "Saturday"
);
