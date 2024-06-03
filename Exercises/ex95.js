function ex95(filePath) {

    // Split the file path by backslashes to isolate the file name with extension
    const parts = filePath.split('\\');
    const fullFileName = parts.pop(); // The last part is the file name with extension

    // Find the position of the last dot in the file name
    const lastDotIndex = fullFileName.lastIndexOf('.');

    // Extract the file name and the extension
    const fileName = fullFileName.slice(0, lastDotIndex);
    const fileExtension = fullFileName.slice(lastDotIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);

}
ex95('C:\\Internal\\training-internal\\Template.pptx');