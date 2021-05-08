// Definisco un oggetto Studenti

var studenti = {

    nome : "Tony" ,
    cognome : "Stark" ,
    età : 54 + " anni"

}

// Stampo a schermno con un ciclo for in tutte le propietà di Studenti

var studenteSingolo = document.getElementById( "studente" ) ; 

for ( var dato in studenti) {

    studenteSingolo.insertAdjacentHTML( 'beforeend' , 
    
    `
    <li class="list-group-item d-flex w-100 justify-content-between" >

        <span class="text-uppercase text-monospace font-weight-bold" > ${ dato } </span> 
        <span class="text-monospace" > ${ studenti[ dato ] }</span>  

    </li>
    
    `)

}

// Definisco un array di oggetti (Studenti)

var classe = [ 
    
    {
        nomeStudente : "Steve" ,
        cognomeStudente : "Rogers" ,
        età : 38 + " anni"

    } ,

    {
        nomeStudente : "Bruce" ,
        cognomeStudente : "Banner" ,
        età : 41 + " anni"

    } ,

    {
        nomeStudente : "Peter" ,
        cognomeStudente : "Parker" ,
        età : 22 + " anni"

    } ,

    {
        nomeStudente : "Natasha" ,
        cognomeStudente : "Roomanoff" ,
        età : 31 + " anni"

    } 

] ;

// Ciclo e stampo nome e cognome di ogni studente

var sectionEl = document.getElementById( "studente_classe" ) ;

var i = 0;

while ( i < classe.length) {

    var studenteClasse = classe[i] ;

        sectionEl.insertAdjacentHTML( 'beforeend' , 

        `
        <li class="list-group-item d-flex w-100 justify-content-between">

            <span class="text-uppercase text-monospace font-weight-bold"> Studente </span>
            <span class="text-monospace"> ${ studenteClasse.nomeStudente } </span>
            <span class="text-monospace"> ${ studenteClasse.cognomeStudente } </span>
            <div class="btn-group dropright">
                <button type="button" class="btn btn-sm btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    visualizza
                </button>
                <div class="dropdown-menu ml-5 px-3 scheda_studente">
                    <ul class="list-group">
                        <li class="list-group">
                            <strong class="text-monospace">NOME</strong> <span class="text-monospace">${ studenteClasse.nomeStudente } </span>
                        </li>
                        <li class="list-group">
                            <strong class="text-monospace mt-2">COGNOME</strong><span class="text-monospace">${ studenteClasse.cognomeStudente } </span>
                        </li>
                        <li class="list-group">
                            <strong class="text-monospace mt-2">ETA'</strong><span class="text-monospace">${ studenteClasse.età } </span>
                        </li>
                    </ul>
                </div>
            </div>

        </li>

        `)

    i++
} ;

// console.log(classe);

// Defivisco una variabile collegata al button html

var creaStudente = document.getElementById("aggiungi_studente");

/* Assegno al click di tale button una funzione anonima che successivamente ai prompt dell'utente 
   aggiunge un nuovu studente all'array classe
*/

creaStudente.addEventListener("click" , function () {

    var nomeNuovoStudente = prompt("Inserisci il nome del nuovo studente");
    var cognomeNuovoStudente = prompt("Inserisci il cognome del nuovo studente");
    var etaNuovoStudente = prompt("Inserisci l'età del nuovo studente")


    var nuovoStudente = {

    nomeStudente :  nomeNuovoStudente,
    cognomeStudente : cognomeNuovoStudente ,
    età : etaNuovoStudente + " anni"

    }

    classe.push(nuovoStudente);

    /* Dopo aver aggiunto il nuovo oggetto (studente) all'array stampo 
        nome e cognome in seguito a quelli gia presenti
    */

        sectionEl.insertAdjacentHTML( 'beforeend' , 

        `
        <li class="list-group-item d-flex w-100 justify-content-between">

            <span class="text-uppercase text-monospace font-weight-bold"> Studente </span>
            <span class="text-monospace text-capitalize"> ${ nomeNuovoStudente } </span>
            <span class="text-monospace text-capitalize"> ${ cognomeNuovoStudente } </span>
            <div class="btn-group dropright">
                <button type="button" class="btn btn-sm btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    visualizza
                </button>
                <div class="dropdown-menu ml-5 px-3 scheda_studente">
                    <ul class="list-group">
                        <li class="list-group">
                            <strong class="text-monospace">NOME</strong> <span class="text-monospace text-capitalize">${ nomeNuovoStudente } </span>
                        </li>
                        <li class="list-group">
                            <strong class="text-monospace mt-2">COGNOME</strong><span class="text-monospace text-capitalize">${ cognomeNuovoStudente } </span>
                        </li>
                        <li class="list-group">
                            <strong class="text-monospace mt-2">ETA'</strong><span class="text-monospace">${ etaNuovoStudente + " anni" } </span>
                        </li>
                    </ul>
                </div>
            </div>
    
        </li>

        `)

}) ;









