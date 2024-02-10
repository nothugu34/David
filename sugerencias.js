document.getElementById("Opciones").addEventListener("change", () => {
    ocultarOpciones();
    const opcion = document.getElementById("Opciones").value;
    mostrarOpcion(opcion);
    return;
});

function mostrarOpcion(opcion){
    const num = opcion.substring(opcion.length - 1, opcion.length);
    const div = `divOpcion${num}`;
    document.getElementById(div).classList.remove("hidden");
    document.getElementById(div).classList.add("active");
    return;
}

function ocultarOpciones(){
    const select = document.getElementById("Opciones");
    const numOpciones = select.options.length;
    for(let i = 1; i <= numOpciones; i++){
        const div = `divOpcion${i}`;
        document.getElementById(div).classList.remove("active");
        document.getElementById(div).classList.add("hidden");
    }
    return;
}
/*
let blenderState = "turn-off";
let blender = document.getElementById("blender");
let blenderSound = document.getElementById("blender-sound");
let blenderButton = document.getElementById("blender-button-sound");

function turnOnBlender(){
    if(blenderState == "turn-off"){
        blenderState = "turn-on";
        hacerRuido();
        blender.classList.add("active");
    }else{
        blenderState = "turn-off";
        hacerRuido();
        blender.classList.remove("active");
    }
}

function hacerRuido(){
    if(blenderSound.paused){
        blenderButton.play();
        blenderSound.play();
    }else{
        blenderButton.play();
        blenderSound.pause();
        blenderSound.currentTime = 0;
    }
}
*/
const submit = document.getElementById("submit");
submit.addEventListener("click", edad);

const skibidi = document.getElementById("skibidi");
function skibidisound(){
    skibidi.play();
}

const img2 = document.getElementById("img2");

function edad(){
    img2.style.display = "none";
    const paragraph = document.getElementById("paragraph");
    const edad = parseInt(document.getElementById("text").value);

    if(isNaN(edad)){
        paragraph.innerHTML = "Ingrese un número, no una cadena";
        return;
    }

    if(edad < 0){
        paragraph.innerHTML = "Ingrese una edad positiva, mamagüevo";
        return;
    }

    if(edad == 14){
        paragraph.innerHTML = `¿Tienes ${edad}?<br>Activa cam 😈`
        img2.style.display = "block";
        return;
    }

    if(edad < 18){
        paragraph.innerHTML = "Eres menor de edad";
        return;
    }

    paragraph.innerHTML = "Eres mayor de edad";
    return;
}

const fireinthehole = document.getElementById("fire in the hole");
function fireintheholesound(){
    fireinthehole.play();
}