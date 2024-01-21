function gramophone(bandName, albumName, songName) {

    let sec = (albumName.length * bandName.length) * songName.length / 2;

    console.log(`The plate was rotated ${(Math.ceil(sec / 2.5))} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');