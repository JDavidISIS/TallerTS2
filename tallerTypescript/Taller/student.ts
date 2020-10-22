export class Student{

    codigo:number;
    cedula:number;
    edad:number;
    direccion:string;
    telefono:number;

    constructor(code:number, id:number, age:number, address:string, tel:number){
        this.codigo= code;
        this.cedula = id;
        this.edad = age;
        this.direccion = address;
        this.telefono = tel;
    }

}