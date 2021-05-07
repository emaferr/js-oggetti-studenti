// Definisco un oggetto Studenti

var studenti = {

    nome : "Tony" ,
    cognome : "Stark" ,
    età : 54

}

// Stampo a schermno con un ciclo for in tutte le propietà di Studenti

for ( var dato in studenti) {

    console.log( dato , studenti [ dato ]);
    
}