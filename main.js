// Definisco un oggetto Studenti

var studenti = {

    nome : "Tony" ,
    cognome : "Stark" ,
    età : 54 + " anni"

}

// Stampo a schermno con un ciclo for in tutte le propietà di Studenti

var studenteSingolo = document.getElementById( "studente" ) ; 

for ( var dato in studenti) {

    console.log( dato , studenti [ dato ]);

    studenteSingolo.insertAdjacentHTML( 'beforeend' , `

    <li class="list-group-item d-flex w-100 justify-content-between" >

        <span class="text-uppercase text-monospace font-weight-bold" > ${ dato } </span> 
        <span class="text-monospace" > ${ studenti[ dato ] }</span>  

    </li>
    
    `)

}