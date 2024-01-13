function foreignLanguages(country) {

    if (country === `USA` || country === `England`) {
        console.log(`English`);
    }
    else if (country === `Mexico` || country === `Argentina` || country === `Spain`) {
        console.log(`Spanish`);
    }
    else {
        console.log(`unknown`);
    }

}
foreignLanguages("USA");
foreignLanguages("Germany");