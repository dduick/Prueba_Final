const jugador0 = [
            {Jugador1: "gato", n1: 1, n2:666, n3: 56, n4: 365, n5: 235, n6: 124},
            {Jugador2:  "elberth", n1: 1, n2: 55, n3: 55, n4: 55, n5: 472, n6: 75},
            {Jugador3: "rodrigo",n1: 1, n2: 666, n3: 56, n4: 222, n5: 235, n6: 124},
            {Jugador4: "adrian",n1: 1, n2: 222, n3: 444, n4: 666, n5: 75235, n6: 17524},
            {Jugador5: "ramon", n1: 1, n2: 55, n3: 222, n4: 666, n5: 272435, n6: 175324},
            {Jugador6: "domingo", n1: 1, n2: 55, n3: 444, n4: 2353, n5: 666, n6: 727},
            {Jugador7: "omni-man", n1: 1, n2: 444, n3: 5672, n4: 36725, n5: 222, n6: 55},
            {Juagdor8: "saturno",n1: 222, n2: 222, n3: 222, n4: 222, n5: 222, n6: 222},
            {Jugador9: "alejandro", n1: 666, n2: 666, n3: 666, n4: 666, n5: 666, n6: 4534},
            {Jugador10:"mario", n1: 55, n2: 56, n3: 1, n4: 444, n5: 23735, n6: 157},
        ];


//numero_terna = [55,1, 222];
//numero_cuaterna = [444,1,75235,222];
//numero_quinta = [444,5672,36725,222,55];
let resultado = numero_ganador_loto = [55,56,1,444,23735,157];
const lista = document.querySelector("#Juego");

const generarTemplate = () => {
    let template = "";
    for (const ju of jugador0) {
        if (ju.Jugador10 !== resultado) {
            document.write("Felicidades ganaste el loto")
        } else {
            document.write("No acertaste nada")
        }
        template += `
        <div class='articulo'>
        <h3> Jugador:${ju.Jugador10} </h3>
        <p>numero 1: ${ju.n1}</p>
        <p>numero 2: ${ju.n2}</p>
        <p>numero 3: ${ju.n3}</p>
        <p>numero 4: ${ju.n4}</p>
        <p>numero 5: ${ju.n5}</p>
        <p>numero 6: ${ju.n6}</p>
        </div>
    `
    }
    return template;

}
lista.innerHTML=generarTemplate()


//numero_terna in jugador2 ? console.log("Si esta") : console.log("No no esta");
//numero_terna in jugador2 ? console.log("Si esta") : console.log("No no esta");
//numero_quinta in jugador9 ? console.log("Si esta") : console.log("No no esta");
//numero_terna in jugador5 ? console.log("Si esta") : console.log("No no esta");
/*
/let terminar = document.querySelector("terminar").addEventListener("click");
let ingresoDatos = documnet.querySelector("#Juego");
if (ingresoDatos === jugador11) {
}

const primer_Juego = () => {

}
 */