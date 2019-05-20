let notas = [{
     nombre: 'Juan',
     matematicas: 4,
     ingles: 3,
     programacion: 2
    },
    {
     nombre: 'Maria',
     matematicas: 5,
     ingles: 1,
     programacion: 3
 }];


const opciones = {
    matematicas: {
        nombre: 'matematicas',
        id: 'm',
        duracion: '120 horas',
        valor: 500000
    },
    ingles: {
        nombre: 'ingles',
        id: 'i',
        duracion: '120 horas',
        valor: 300000
    },
    propgramacion: {
        nombre: 'propgramacion',
        id: 'p',
        duracion: '120 horas',
        valor: 400000
     }
 }


 let findcurso =  (nota_uno, nota_dos, nota_tres)=> (nota_uno + nota_dos + nota_tres)/3;


 const  argv = require('yargs')
                .command ('listar', 'Listar cursos', opciones)
                .argv

module.exports = {
    findcurso,
    argv
};
