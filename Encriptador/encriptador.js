//Función encriptadora de texto

function encriptar() {
    let text1 = document.getElementById("entradaTexto").value.toLowerCase();
    let text2 = ""
    
    for (let i = 0; i < text1.length; i++){
        
        switch (text1[i]){
            case "a":
                text2 += "ai";
                break
            
            case "e":
                text2 += "enter";
                break;

            case "i":
                text2 += "imes";
                break

            case "o":
                text2 += "ober";
                break   
                
            case "u":
                text2 += "ufat";
                break
            
            default:
                text2 += text1[i];  
        }
    }
    document.getElementById("salidaTexto").value = text2;
    return
}

//Funcion desencriptar

function desencriptar() {
    let texto = document.getElementById("entradaTexto").value;
    document.getElementById("salidaTexto").value = texto;
    
    return
    
}

//Funcion reiniciar

function reiniciar() {
    document.querySelector("#entradaTexto").value = "";
    document.querySelector("#salidaTexto").value = "";
}