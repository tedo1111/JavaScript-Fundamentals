function phonesBook(arr) {

    let phonesBook = {};

    for (let personInfo of arr) {
        let [name, phone] = personInfo.split(" ");

        phonesBook[name] = phone;
    }

    for (const name in phonesBook) {
        console.log(`${name} -> ${phonesBook[name]}`);
    }

}

phonesBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
phonesBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
);