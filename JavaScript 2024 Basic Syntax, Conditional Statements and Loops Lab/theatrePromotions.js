function theatrePromotions(day, age) {

    switch (day) {
        case 'Weekday':

            if (age < 0 || age > 122) {
                console.log(`Error!`);
            }
            else if (age <= 18) {
                console.log(`12$`);
            }
            else if (age > 18 && age <= 64) {
                console.log(`18$`);
            }
            else if (age > 64 && age <= 122) {
                console.log(`12$`);
            }

            break;
        case `Weekend`:

            if (age < 0 || age > 122) {
                console.log(`Error!`);
            }
            else if (age <= 18) {
                console.log(`15$`);
            }
            else if (age > 18 && age <= 64) {
                console.log(`20$`);
            }
            else if (age > 64 && age <= 122) {
                console.log(`15$`);
            }
            break

        case `Holiday`:

            if (age < 0 || age > 122) {
                console.log(`Error!`);
            }
            else if (age <= 18) {
                console.log(`5$`);
            }
            else if (age > 18 && age <= 64) {
                console.log(`12$`);
            }
            else if (age > 64 && age <= 122) {
                console.log(`10$`);
            }

            break;


        default:
            console.log(`Error!`);
            break;
    }

}
theatrePromotions('Weekday', 42);
theatrePromotions('Holiday', -12);
theatrePromotions('Holiday', 15);