var MiArray = function () {
    this.longitud = "Longitud: " + this.length;
    this.descripcion = "Hoy es viernes";
    this.contarElementos = function () {
        return this.length;
    }
    this.sumarElementos = function () {
        var suma = 0;
        for (var i = 0; i < this.length; i++) {
            suma += this[i];
        }
        return suma;
    }
}
MiArray.prototype = new Array();

Array.prototype.sumarElementos = function () {
    var suma = 0;
    for (var i = 0; i < this.length; i++) {
        suma += this[i];
    }
    return suma;
}

Array.prototype.contarElementos = function () {
    return this.length;
}