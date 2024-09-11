const pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Ana', idade: 20 }
  ];
  
  pessoas.sort((a, b) => a.idade - b.idade);
  console.log(pessoas);
 
  
  const map = new Map();
  map.set('x', 5);
  map.set('y', 10);
  console.log(map);
  console.log(map.get('x'));

  const numeros = [1, 2, 3, 4, 5]
  const soma = numeros.reduce((acumulador, ValorAtual) =>{
    return acumulador + ValorAtual;
  }, 0);

  console.log(soma);

  const numeros02 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros02.filter(numero => numero % 2 === 0);

console.log(numerosPares); 

const frutas = ['maçã', 'banana', 'laranja'];

const frutasCopiadas = [...frutas];

console.log(frutasCopiadas); 




