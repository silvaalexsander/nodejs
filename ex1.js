import fs from 'fs';
//fs recurso para manipular pastas e arquivos

const dir = './upload';

if(!fs.existsSync(dir)){
    console.log('Diretório não existe, criando...');
    fs.mkdirSync(dir);
    setTimeout(
        () =>{
        console.log('--------------')
        console.log('Diretório criado com sucesso!')
    }, 1000);
}else{
    console.log('Diretório já existe');
}

let msg = 'O melhor curso de Node.js do Brasil!';
let file = 'curso.txt';
let path = `${dir}/${file}`;

if(!fs.existsSync(path)){
    fs.writeFileSync(path, msg);
    console.log('Arquivo criado com sucesso!');
}else{
    console.log('Arquivo já existe');
}