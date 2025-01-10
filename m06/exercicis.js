/*

function contador(){
    let resultat = 0
    for(i=1 ; i<=10 ; i++){
        console.log(i)
     resultat += i;
    }
    document.getElementById("resultat").textContent = resultat;
}
    */
   /*
function ex2(){
    let cont = 0;
    let N= prompt("Por favor, introduce un número:"); 
    for(i = 1; i <=N; i++){
        cont = cont + i;
    }
    console.log(cont);
}
    */
   /*
function ex3(){
    let N= prompt("Por favor, introduce un número:");
    let R= prompt("Por favor, introduce un número ,mas grande:"); 
    for(i = N; i <=R; i++){
        if(i % 2 == 0)
        console.log(i);
    }
}
    */
   /*
function ex4(){
    let fila = "";
    let N= prompt("Por favor, introduce un número:"); 
    for(i = 1; i <=N; i++){
        console.log(fila += "*")
    }
    console.log(cont);
}
    */
function ex5(){
    
    let cont= 1;
    let cont2= 6;
    let fila = "";
    for (let i = 1; i <= 6; i++) { 
        let str = ''; 
        for (let j = 1; j <= 6 - i; j++) { 
            str += ' '; 
        } 
        for (let k = 1; k <= (2 * i - 1); k++) { 
            str += '*'; 
        } 
        console.log(str); 
    }
}
        
        