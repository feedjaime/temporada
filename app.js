var datos;

$.getJSON('SIB.json', function(data) {
    datos = data;
}).then(console.log('Datos cargados con éxito'));

var testo = "";
var fecha = new Date();
var mes = fecha.getMonth()+1;

function is_inside(cosa) {
    var duo = {};
    for (i in datos.fyv) {
        if (datos.fyv[i].nombre == cosa) {
            duo = {"dentro": true, "index": i};
            return duo
        };
    };
    return false;
}

function normalizar(dato){
    var devolucion = dato.toLowerCase();
    devolucion = devolucion.replace(/á/gi,"a");
    devolucion = devolucion.replace(/é/gi,"e");
    devolucion = devolucion.replace(/í/gi,"i");
    devolucion = devolucion.replace(/ó/gi,"o");
    devolucion = devolucion.replace(/ú/gi,"u");
    return devolucion;
}

function checky() {
    testo = normalizar($('#checko').val());
    var yn = is_inside(testo);
    if (yn.dentro == true) {
        if ( $.inArray(mes, datos.fyv[yn.index].b) != -1){
            $('#fon').css("background-color", "green");
        } else if ( $.inArray(mes, datos.fyv[yn.index].m) != -1) {
            $('#fon').css("background-color", "yellow");
        } else {
            $('#fon').css("background-color", "red");
        }
    } else {
        $('#fon').css("background-color", "white");
    }
}

