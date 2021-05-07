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
    
        </li>

        `)

    i++
}