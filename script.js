let ogrenciler = ["Ben" , "Jenny" , "Michael", "Chloe" , "Timmy"]
let komsular = ["Patrick", "AnnMarie" , "Alisol", "Walten" ]

ogrenciler.push("Max");

function whoIsWashing(param) {
    let arrLenght=param.length;
    const random = param[Math.floor(Math.random()*arrLenght)];
    console.log(`${random} is going to wash dishes today`);
}

whoIsWashing(ogrenciler);
whoIsWashing(komsular);


