//Solicitud de calificaciones
fetch("/js/comentarios.json")
    .then(response => response.json())
    .then(data => {
        const nuevaCalificacion = data.comentarios[0].calificacion;
        const calificacion = document.getElementById("calificacion1");
        calificacion.innerText = `Calificación: ${nuevaCalificacion}`;

        const nuevaCalificacion2 = data.comentarios[1].calificacion;
        const calificacion2 = document.getElementById("calificacion2");
        calificacion2.innerText = nuevaCalificacion2;

        const nuevaCalificacion3 = data.comentarios[2].calificacion;
        const calificacion3 = document.getElementById("calificacion3");
        calificacion3.innerText = nuevaCalificacion3;

        const nuevaCalificacion4 = data.comentarios[3].calificacion;
        const calificacion4 = document.getElementById("calificacion4");
        calificacion4.innerText = nuevaCalificacion4;
    })
//Solicitud de comentarios
fetch("/js/comentarios.json")
.then(response => response.json())
.then(data => {
    const nuevoComentario = data.comentarios[0].comentario;
    const comentario = document.getElementById("comentario1");
    comentario.innerText = nuevoComentario;

    const nuevoComentario2 = data.comentarios[1].comentario;
    const comentario2 = document.getElementById("comentario2");
    comentario2.innerText = nuevoComentario2;

    const nuevoComentario3 = data.comentarios[2].comentario;
    const comentario3 = document.getElementById("comentario3");
    comentario3.innerText = nuevoComentario3;

    const nuevoComentario4 = data.comentarios[3].comentario;
    const comentario4 = document.getElementById("comentario4");
    comentario4.innerText = nuevoComentario4;
})