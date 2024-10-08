<p align="center">
  <img src="home-page.png" alt="POC2-Arrays">
</p>

<h1 align="center" style="font-weight: bold;">POC 2 - Métodos de arrays</h1>

Desenvolvimento de uma POC (Prova de Conceito) que demonstra o funcionamento e a finalidade dos métodos de array ```sort```, ```filter```, ```map```, ```reduce``` e ```spread``` em JavaScript.

<h2 id="tecnologias">💻 Tecnologias</h2>

[![My Skills](https://skillicons.dev/icons?i=html,css,js&theme=light)](https://skillicons.dev)

<h2 id="comecando">🚀 Começando</h2>

1. **Inspecionar elemento**: Clique com o botão direito em qualquer canto da página e selecione "Inspecionar Elemento"; <br><br> <img src="inspecionar-elemento.png" alt="Inspecionando elemento"> <br><br> 
2. **Console**: Abra o console; <br><br> <img src="console-aberto.png" alt="Abrindo o console"> <br><br>
3. **Sort**: Digite `console.log(pessoas);` para imprimir a reordenação do array; <br><br> <img src="sort.png" alt="Método Sort">
```js
const pessoas = [
  { nome: 'João', idade: 25 },
  { nome: 'Maria', idade: 30 },
  { nome: 'Ana', idade: 20 }
];

pessoas.sort((a, b) => a.idade - b.idade);
```
<br><br>
4. **Filter**: Digite `console.log(numerosPares);` para obter o resultado dos números pares; <br><br> <img src="filter.png" alt="Método Filter">
```js
const numeros02 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros02.filter(numero => numero % 2 === 0);
```
<br><br>
5. **Map**: Digite `console.log(map);` para imprimir as chaves e os valores; <br><br> <img src="map.png" alt="Método Map">
```js
const map = new Map();
map.set('x', 5);
map.set('y', 10);
```
<br><br>
6. **Reduce**: Digite `console.log(map);` para somar todos os elementos do array; <br><br> <img src="reduce.png" alt="Método Reduce">
```js
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);
```
<br><br>
7. **Spread**: Digite `console.log(map);` para imprimir uma cópia do array; <br><br> <img src="spread.png" alt="Método Spread">
```js
const frutas = ['maçã', 'banana', 'laranja'];
const frutasCopiadas = [...frutas];
```
<br><br>

<h2 id="colabs">🤝 Colaboradores</h2>

- Rafael Trindade Dal Maso
- Fernando Lacava Olival Rodrigues
- Henrique Totti Ulbricht Lapa

<h2 id="contribue">📫 Contribue</h2>

1. **Clone o projeto**: `git clone https://github.com/RafaelMaso/POC2-Arrays.git`
2. **Crie uma branch**: `git checkout -b feature/NAME`

<h3>Documentações que podem ajudar</h3>

[📝 Como criar uma solicitação de Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)

[💾 Padrão de Commit](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
