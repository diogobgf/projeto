/* const carro1 = [{ codigoCarro: 1, marca: "Chevrolet", modelo: "Onix", cor: "Prata", ano: "2019", preco: 62000 }];
const carro2 = { codigoCarro: 2, marca: "Fiat", modelo: "Pulse", cor: "Branco", ano: "2021", preco: 75900 };
const carro3 = { codigoCarro: 3, marca: "Ford", modelo: "Ranger", cor: "Vermelho", ano: "2018", preco: 148000 };
const carro4 = { codigoCarro: 4, marca: "Honda", modelo: "Civic", cor: "Verde", ano: "2020", preco: 105000 };
const carro5 = { codigoCarro: 5, marca: "Renault", modelo: "kwid", cor: "Azul", ano: "2019", preco: 46000 };

const carros = [carro1, carro2, carro3, carro4, carro5];


console.log(carros[0]{0}); */

let soma = 0;
let media = 0;
let nome = 0;

let escola = [
    [5.5, 7.9, 7.1],
    [7.0, 3.5, 9.0],
    [8.6, 7.3, 8.8],
    ["Jose", "Lucia", "Pedro"]
];

for (let i = 0; i < escola.length-1; i++){
    for (let j = 0; j < escola.length-1; j++){
        //console.log(escola[i][j]);
        soma = soma + escola[i][j];
        /* for (let x = 0; x < escola.length; x++){
            nome = escola[i][x]; 
       }   */
    }
   
}
media = soma/3;
console.log("A média de ", nome, "é",  media);

