


// Selfwork Array 2
// Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media:  

// Esempio:
//     Input: a = [3, 5, 10, 2, 8]
//     Output: media = 5.6, valori minori = [3, 5, 2]

// Variante:
//   Stampa anche quanti sono i valori minori della media e quanti quelli maggiori.



arr = [3, 5, 10, 2, 8];

arr1 = [50, 68, 1000, 698, 114, 1, -6, 31, 15, 0.21, -65, 510];




// Soluzione con array

function elaboratore(lista_numeri) {
    
    lista_somma = lista_numeri.reduce((acc, n)=> acc + n )
        
    arr_media = lista_somma / lista_numeri.length;
        
    num_minori_media = lista_numeri.filter(  (num)=> num < arr_media   );
    
    num_maggiori_media = lista_numeri.filter(  (num)=>  num > arr_media );

    return `media = ${arr_media}\ni valori minori della media sono ${num_minori_media.length} [${num_minori_media}]\ni valori maggiori della media sono ${num_maggiori_media.length} [${num_maggiori_media}]`
    
    
}


console.log(  elaboratore(  arr )   );




// Soluzione con n numeri

function elaboratoreCifre(...lista_numeri) {
    
    lista_somma = lista_numeri.reduce((acc, n)=> acc + n )
        
    arr_media = lista_somma / lista_numeri.length;
        
    num_minori_media = lista_numeri.filter(  (num)=> num < arr_media   );
    
    num_maggiori_media = lista_numeri.filter(  (num)=>  num > arr_media );

    return `media = ${arr_media}\ni valori minori della media sono ${num_minori_media.length} [${num_minori_media}]\ni valori maggiori della media sono ${num_maggiori_media.length} [${num_maggiori_media}]`
    
    
}


console.log(  elaboratoreCifre(  1, 2, 10, 38, -9 )   );
