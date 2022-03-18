// Crear un programa que lea los alumnos y arme un listado
// const utils = require('./utils');
// const {
//     promises: { readFile, writeFile },
//   } = require('fs');
  
//   const main = () => {
//     // Leer los alumnos
//     // Crear el archivo de alumnos
//     Promise.all([
//       readFile('./alumnos/alumno1.json'),
//       readFile('./alumnos/alumno2.json'),
//       readFile('./alumnos/alumno3.json'),
//       readFile('./alumnos/alumno4.json'),
//       readFile('./alumnos/alumno5.json'),
//     ])
//       .then(([alumno1, alumno2, alumno3, alumno4, alumno5]) => {
//         let res = '\n';
//         [alumno1, alumno2, alumno3, alumno4, alumno5].forEach((file) => {
//             res = res + file.toString() + '\n';
//         })
//         // Crear el listado
//         writeFile('listado.txt', res)
//           .then((data) => {
//             console.log('File written successfully\n');
//             console.log('The written has the following contents:');
//             console.log(
//               readFile('listado.txt').then((data) => console.log(data.toString()))
//             );
//           })
//           .catch((err) => {
//             console.error(error.message);
//             process.exit(1);
//           });
//       })
//       .catch((error) => {
//         console.error(error.message);
//         process.exit(1);
//       });
//   };
  
//   main();

// Crear un programa que lea los alumnos y arme un listado
const utils = require('./utils');


const main = () => {
  // Leer los alumnos
  // Crear el archivo de alumnos
  Promise.all(utils.readFiles())
    .then(([alumno1, alumno2, alumno3, alumno4, alumno5]) => {
      let res = '\n';
      [alumno1, alumno2, alumno3, alumno4, alumno5].forEach((file) => {
        res = res + file.toString() + '\n';
      });
      // Crear el listado
      utils.writeFiles(res);
    })
    .catch((error) => {
      console.error(error.message);
      process.exit(1);
    });
};

main();