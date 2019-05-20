const {argv} = require('./datos');

console.log(argv);


if (argv._[0]=='listar'){

    setTimeout(function(){
        console.log('Los cursos son '+ argv);
    },2000);
    
}else{
    console.log('nos se listo los cursos');
}