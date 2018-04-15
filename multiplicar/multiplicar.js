const fs = require('fs');

let listarTabla = async(base, limite) => {
    let contenido = '';
    if (!Number(base) || !Number(limite)) {
        throw new Error('Ingresar números');
    } else {
        for (let index = 1; index <= limite; index++) {
            contenido += `${base} * ${index} = ${base * index}\n`;
        }
        return contenido;
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let contenido = '';

        for (let index = 1; index <= limite; index++) {
            contenido += `${base} * ${index} = ${base * index}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, contenido, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}