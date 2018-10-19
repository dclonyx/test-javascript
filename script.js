// var age;
// var anneeNaissance;
// var anneeFictive;
// var ageFictif;

// age = parseInt(prompt("Quel age avez vous ?","0"));

// anneeFictive = parseInt(prompt("Quelle année choisissez vous ?","0"));

// anneeNaissance = 2018 - age;

// console.log("Vous êtes né en",anneeNaissance);

// ageFictif = anneeFictive - anneeNaissance;

// console.log("Vous avez",ageFictif,"en",anneeFictive);

// if(age<18){
//     console.log("Vous êtes mineur !!!")
// } else if(age>65){
//     console.log("Vous êtes majeur et c'est l'heure de partir en retraite !!!")
// } else {
//     console.log("Vous êtes majeur !!!")
// }



// for(var i=0;i<100;i++){
//     println(Math.random());
// }
// if(anneeNaissance<1980){
//     console.log("Vous êtes trop vieux !!!")
// } else{
//     console.log("Vous êtes encore jeune !!!")
// }



// function add() {
//     var c;
//     c="choucroute";
//     console.log(a+b);
//     console.log(c)
// };

// add()



// function add(x,y) {
//         console.log(x+y);
//     }
    
// add (5,6) // 11




// console.log(1==1); //true
// console.log(1=="1"); //true
// console.log(1==="1"); //false

// console.log(1<=2); //true
// console.log(1>=2); //false
// console.log(1<2); //true
// console.log(1!=2); //true
// console.log(1!=1); //false
// console.log(1!=="1"); //true

//et
// console.log(true $$ true); //true
// console.log(1==2 $$ 1<2); //true

// //et

// console.log(true $$ false); //false
// console.log(1==2 $$ 1>2); //false

// //ou

// console.log(true || false); //true
// console.log(1==2 || 1<2); //true

//condition

// if(condition){
//     ;
// }

// var a = 5;
// var b = 6;
// var c = 7;

// if (a==b) {
//     console.log("Les chiffres a et b sont  égaux");
// } else if (a==c) {
//     console.log("Les chiffres a et c sont  égaux");
// } else if (b==c){
//     console.log("Les chiffres b et c sont égaux");
// } else {
//     console.log("Les chiffres a, b et c sont différents");
// }

//boucles


// for (i=0; i<=5; i++){
//     console.log(i);
//     if (i==){
//         break;
//     }



// }
// var i=0;

// while (i<=5) {
//     console.log(i);
//     i++;
// }



// logiciel tire un nombre au hasard
//prompt propose un chiffre
// trop grand ou trop petit = retour a propose un chiffre
//bravo


// variables

var chiffre;
var random;
var nbMax;
var compteur = 0;
var nbCoups;

// entrer nbCoups

nbCoups = parseInt(prompt("Choissez un nombre de coups","000"));

// entrer nbMax

nbMax = parseInt(prompt("Choissez un chiffre max","000"));

// choix du chiffre random + afficahge

random = Math.floor(Math.random() * nbMax)+1;
console.log(random);

// boucle de jeu

for (i = 0; i < nbCoups; i++) {

    chiffre = parseInt(prompt("Choissez un chiffre entre 0 et votre nombre max choisis précédemment","000"));

     if (chiffre<random){
            console.log("Trop petit");
            compteur++;
    } else if (chiffre>random){
            console.log("Trop grand");
            compteur++;
        } else {
            console.log("Bravo");
            compteur++;
        }
    }

//afficahge com et nbCoups

if (chiffre == random) {

    if (compteur == 1) {
        console.log(compteur," Vous êtes le boss !!!");
    } else if (compteur<=5) {
        console.log(compteur," Vous êtes fort !!");
        } else if (compteur<=10) {
            console.log(compteur," Vous êtes pas mal !");
            } else if (compteur<=15) {
                console.log(compteur," Vous êtes bof");
            } else {
                console.log(compteur, " Trop nul, Try again !");
            }
} else {
    console.log("Perdu, nbcoups dépassé !!!")
}

       