/*
 * http: //jcatala.net/node/943
 *
 * Para que funcione:
 * -- -- -- -- -- -- -- -- --
 * < body onload = "actualizaReloj()" >
 * < div id = "Fecha_Reloj" > < /div> *
 */
/*Script del Reloj */
/*jslint browser: true*/
/*global $, jQuery, console*/

// function saludo() {
//     var time = new Date().getHours();
//     var greeting;
//     if (time < 12) {
//         greeting = "Buenos días";
//     } else if (time >= 12 && time = < 20) {
//         greeting = "Buenas tardes";
//     } else if (time > 20 || time < 7) {
//         greeting = "Buenas noches";
//     }
//     document.getElementById('horario_apertura').innerHTML = greeting;
// }


function verificarDia() {
    // FIXME Recibe dia, hora y minuto y devuelve true o false

    //'use strict';
    //debugger;

    var horario = 'js/horario.json';
    console.clear();

    $.getJSON(horario, function (json) {
        //console.debug("JSON Data: " + json.horario[0].apertura_matutina);
        console.debug('JSON Data: ' + json);
    });
    debugger;
    //console.table(json);

    console.debug('Horario: ');

    this.dia_de_la_semana = arguments[0];
    console.debug('Día de la semana: ' + this.dia_de_la_semana);

    this.numero_dia_mes = arguments[1];
    console.debug('Número del día: ' + this.numero_dia_mes);

    this.nombre_mes = arguments[2];
    console.debug('Nombre del mes: ' + this.nombre_mes);

    this.anio = arguments[3];
    console.debug('Año: ' + this.anio);

    this.hora_del_dia = arguments[4];
    console.debug('Hora: ' + this.hora_del_dia);

    this.minuto_del_dia = arguments[5];
    console.debug('Minuto: ' + this.minuto_del_dia);

    return true;
}

function actualizarReloj() {
    'use strict';
    var marcacion = new Date(),
        Hora = marcacion.getHours(),
        Minutos = marcacion.getMinutes(),
        Segundos = marcacion.getSeconds(),
        Refresco = 2 * 1000,
        Dia = [
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
        'Domingo'
      ],
        Mes = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
      ],
        Hoy = marcacion,
        diaSem = Dia[Hoy.getDay()],
        nDia = Hoy.getDate(),
        nomMes = Mes[Hoy.getMonth()],
        Anio = Hoy.getFullYear(),
        dn = 'AM',
        Fecha = diaSem + ', ' + nDia + ' de ' + nomMes + ' de ' + Anio,
        Script,
        Total,
        dLaborables = [
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes'
      ];



    //var horarioLaborablesa = verificarDia(diaSem, nDia, nomMes, Anio, Hora, Minutos);
    console.debug('¿Es horario laborable? ' + verificarDia(diaSem, nDia, nomMes, Anio, Hora, Minutos));


    if (Hora > 12) {
        dn = 'PM';
        Hora = Hora - 12;
    }
    if (Hora === 0) {
        Hora = 12;
    }
    if (Hora <= 9) {
        Hora = '0' + Hora;
    }
    if (Minutos <= 9) {
        Minutos = '0' + Minutos;
    }
    if (Segundos <= 9) {
        Segundos = '0' + Segundos;
    }

    /* En Reloj le indicamos la Hora, los Minutos y los Segundos */
    // Script = Fecha + Hora + ':' + Minutos + ':' + Segundos + ' ' + dn;
    Script = Fecha + ' ' + Hora + ':' + Minutos + ':' + Segundos + ' ' + dn;

    /* En total Finalizamos el Reloj uniendo las variables */
    Total = Script;

    /* Capturamos una celda para mostrar el Reloj */
    document.getElementById('Fecha_Reloj').innerHTML = '<p style="background-color: Yellow;">' + Total + '</p>';

    /* Horario de Apertura */
    if (dLaborables[0] === diaSem) {
        document.getElementById('horario_apertura').innerHTML = '<p>' + 'Hoy es Lunes' + '</p>';
    } else {
        document.getElementById('horario_apertura').innerHTML = '<p>Hoy no es Lunes</p>';
    }

    // document.getElementById('horario_apertura').innerHTML = '<p>' + Total + '</p>';

    /* Indicamos que nos refresque el Reloj cada 1 segundo */
    setTimeout(actualizarReloj, Refresco);
}
