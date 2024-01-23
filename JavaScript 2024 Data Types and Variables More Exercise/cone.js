function cone(radius, height) {

    let volume = 1 / 3 * Math.PI * radius ** 2 * height;

    let s = Math.sqrt(radius * radius + height * height);
    let area = Math.PI * radius * (radius + s);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);

}
cone(3, 5);
cone(3.3, 7.8);
