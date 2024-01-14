function login(password) {

    let userNmame = password.shift();

    let pass = "";
    let counter = 0;

    for (let i = userNmame.length - 1; i >= 0; i--) {
        pass += (userNmame[i]);

    }

    let guess = password.shift();


    while (guess !== pass) {
        counter++;
        if (counter === 4) {
            console.log(`User ${userNmame} blocked!`);
            return;
        }

        console.log(`Incorrect password. Try again.`);
        guess = password.shift();


    }
    console.log(`User ${userNmame} logged in.`);

}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
// login(['momo', 'omom']);
// login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);