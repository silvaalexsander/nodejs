import fs from 'fs';

const dir = './upload';

if(!fs.existsSync(dir)){
    console.log('Criando diretório...');
    fs.mkdir(dir, (err) => {
        console.log('Diretório criado com sucesso!');
    });
}else{
    console.log('Acessando o diretorio', dir);
}

let msg = 'O galão ganhão mais uma vez, ai credo!';
let file = 'galo.txt';
let path = `${dir}/${file}`;

if(!fs.existsSync(path)){
    fs.writeFile(path, msg, () => {
        console.log('Arquivo criado com sucesso!', file);
    });
}