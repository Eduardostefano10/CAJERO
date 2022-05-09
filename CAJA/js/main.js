class Cuenta {
    constructor(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
    get Nombre() {
        return this.nombre;
    }
    set Nombre(nomb) {
        this.nombre = nomb;
    }

    get Cantidad() {
        return this.cantidad;
    }
    set Cantidad(can) {
        this.cantidad = can;
    }
}

function ingresar() {
    let password = "1234";
    var p = document.getElementById("password").value;

    if (p.length == 4) {
        document.getElementById("container").style.display = "block";
        document.getElementById("container2").style.display = "none";


    }
}




var bd = [];

function agregar() {
    bd.push(nuevo);
    console.log(bd)
}


function depositos() {
    var names = "Feliz"
    var captura_saldo = document.getElementById("dos").value;
    var nuevo = new Cuenta(names, captura_saldo);

    console.log(nuevo);
    agregar();
}

function retiros() {
    document.getElementById("container3").style.display = "flex";

    document.getElementById("container").style.display = "none";

}

function salir() {
    document.getElementById("container2").style.display = "block";
    document.getElementById("container").style.display = "none";
}

function volver() {

    document.getElementById("container").style.display = "block";
    document.getElementById("container3").style.display = "none";
    document.getElementById("container4").style.display = "none";
    document.getElementById("container5").style.display = "none";

}

function alerta_aceptar() {
    alert("ya se retiro el monto adquirido");
}

function depositos() {
    document.getElementById("container4").style.display = "flex";
    document.getElementById("container").style.display = "none";

}

function consultas() {

    document.getElementById("container5").style.display = "flex";
    document.getElementById("container").style.display = "none";


}


function alerta() {
    alert("usted a hecho una transacción de S/.100 ");
}

function alerta2() {
    alert("usted a hecho una transacción de S/.200 ");
}

function alerta3() {
    alert("usted a hecho una transacción de S/.300 ");
}

function alerta4() {
    alert("usted a hecho una transacción de S/.400 ");
}

function alerta5() {
    alert("usted a hecho una transacción de S/.500 ");
}

function alerta6() {
    alert("usted a hecho una transacción de S/.1000 ");
}