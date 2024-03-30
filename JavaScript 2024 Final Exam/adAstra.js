function adAstra(input) {
    let regex = /([\|#])(?<name>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<caloris>\d+)\1/g;
    let exac;
    let totalCalories = 0;
    let productsInStore = [];

    while ((exac = regex.exec(input[0])) !== null) {
        let name = exac.groups.name;
        let date = exac.groups.date;
        let caloris = exac.groups.caloris;

        totalCalories += Number(caloris);

        let curProdDate = `Item: ${name}, Best before: ${date}, Nutrition: ${caloris}`;

        productsInStore.push(curProdDate);
    }

    let days = Math.floor(totalCalories / 2000);

    console.log(`You have food to last you for: ${days} days!`);

    for (let el of productsInStore) {
        console.log(el);
    }
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
// adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);