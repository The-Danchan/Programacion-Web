var bebida = document.getElementById('respuesta');

var ok = document.getElementById('ok');
ok.addEventListener('click', mostrarRespuesta);

function mostrarRespuesta(){
    if(bebida = "Coca"){
        document.write("Usted si le sabe a lo bueno compa")
    }else{
        bebida = "Pepsi"{
            document.write("debería considerar la otra compa XD")
        }
    }
}