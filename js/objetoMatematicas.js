//CREAMOS EL OBJETO
var Matematicas = function (num) {
    this.numero = num;
    this.doble = 0;
    //METODO PARA GENERAR EL DOBLE CON FUNCIÓN ANÓNIMA POR LO QUE ALMACENAMOS EL OBJETO THIS EN UNA VARIABLE INTERMEDIA
    var objMat = this;
    this.generarDoble = function () {
        objMat.doble = objMat.numero * 2;
        // O LO CAMBIAMOS O LO DEVOLVEMOS CON UN RETURN PERO MEJOR LO PRIMERO
    }
}