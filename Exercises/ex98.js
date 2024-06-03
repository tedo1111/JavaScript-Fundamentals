function ex98(input) {

    // Split the input string at each capital letter
    const words = input.split(/(?=[A-Z])/);

    // Join the words with a comma and space
    const result = words.join(', ');

    // Print the result
    console.log(result);
}
ex98('SplitMeIfYouCanHaHaYouCantOrYouCan');