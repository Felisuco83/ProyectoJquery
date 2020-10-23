var Empleado = function (id, apellido, oficio, salario, departamento, fechaInicio) {
    this.idEmpleado = id;
    this.apellido = apellido;
    this.oficio = oficio;
    this.salario = salario;
    this.departamento = departamento;
    this.fechaInicio = fechaInicio;
    var current = this;

    this.salarioAnual = function () {
        return current.salario * 12;
    }
    this.antiguedad = function () {
        var today = new Date();
        return today.diff(current.fechaInicio, 'years');
    }
    this.salarioCobrado = function() {
        var today = new Date();
        return current.salario * today.diff(current.fechaInicio, 'months');
    }
};