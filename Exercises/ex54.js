function ex54(percentage) {

    let bar = '[';
    let completed = percentage / 10;

    for (let i = 0; i < 10; i++) {
        if (i < completed) {
            bar += '%';
        } else {
            bar += '.';
        }
    }
    bar += ']';

    console.log(`${percentage}% ${bar}`);

    if (percentage === 100) {
        console.log("100% Complete!");
    } else {
        console.log("Still loading...");
    }
}
ex54(30);
ex54(100);