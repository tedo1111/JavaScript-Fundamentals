function extractFile(input) {

    let splited = input.split("\\");

    let target = splited.pop();

    let lastDot = target.lastIndexOf(".");


    let name = target.slice(0, lastDot);

    let extension = target.slice(lastDot + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');